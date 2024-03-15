import { useId } from '@radix-ui/react-id'
import { useFormFieldControl } from '@spark-ui/form-field'
import { Popover } from '@spark-ui/popover'
import { useCombinedState } from '@spark-ui/use-combined-state'
import { useCombobox, useMultipleSelection } from 'downshift'
import {
  createContext,
  Dispatch,
  Fragment,
  PropsWithChildren,
  SetStateAction,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react'

import { type ComboboxItem, type DownshiftState, type ItemsMap } from './types'
import { multipleSelectionReducer } from './useCombobox/multipleSelectionReducer'
import { singleSelectionReducer } from './useCombobox/singleSelectionReducer'
import { getElementByIndex, getItemsFromChildren, hasChildComponent } from './utils'

export interface ComboboxContextState extends DownshiftState {
  itemsMap: ItemsMap
  filteredItemsMap: ItemsMap
  highlightedItem: ComboboxItem | undefined
  hasPopover: boolean
  multiple: boolean
  disabled: boolean
  readOnly: boolean
  wrap?: boolean
  state?: 'error' | 'alert' | 'success'
  lastInteractionType: 'mouse' | 'keyboard'
  setHasPopover: Dispatch<SetStateAction<boolean>>
  setLastInteractionType: (type: 'mouse' | 'keyboard') => void
  innerInputRef: React.RefObject<HTMLInputElement>
  triggerAreaRef: React.RefObject<HTMLDivElement>
}

export type ComboboxContextCommonProps = PropsWithChildren<{
  /**
   * The controlled open state of the select. Must be used in conjunction with `onOpenChange`.
   */
  open?: boolean
  /**
   * Event handler called when the open state of the select changes.
   */
  onOpenChange?: (isOpen: boolean) => void
  /**
   * The open state of the select when it is initially rendered. Use when you do not need to control its open state.
   */
  defaultOpen?: boolean
  /**
   * Use `state` prop to assign a specific state to the combobox, choosing from: `error`, `alert` and `success`. By doing so, the outline styles will be updated, and a state indicator will be displayed accordingly.
   */
  state?: 'error' | 'alert' | 'success'
  /**
   * When true, prevents the user from interacting with the combobox.
   */
  disabled?: boolean
  /**
   * Sets the combobox as interactive or not.
   */
  readOnly?: boolean
  /**
   * When true, the items will be filtered depending on the value of the input (not case-sensitive).
   */
  autoFilter?: boolean
  /**
   * By default, the combobox will clear or restore the input value to the selected item value on blur.
   */
  allowCustomValue?: boolean
  /**
   * In multiple selection, many selected items might be displayed. Be default, the combobox trigger will expand vertically to display them all.
   * If you wish to keep every item on a single line, disabled this property.
   */
  wrap?: boolean
}>

interface ComboboxPropsSingle {
  /**
   * Prop 'multiple' indicating whether multiple values are allowed.
   */
  multiple?: false
  /**
   * The value of the select when initially rendered. Use when you do not need to control the state of the select.
   */
  defaultValue?: string
  /**
   * The controlled value of the select. Should be used in conjunction with `onValueChange`.
   */
  value?: string | null
  /**
   * Event handler called when the value changes.
   */
  onValueChange?: (value: string | undefined) => void
}

interface ComboboxPropsMultiple {
  /**
   * Prop 'multiple' indicating whether multiple values are allowed.
   */
  multiple: true
  /**
   * The value of the select when initially rendered. Use when you do not need to control the state of the select.
   */
  defaultValue?: string[]
  /**
   * The controlled value of the select. Should be used in conjunction with `onValueChange`.
   */
  value?: string[]
  /**
   * Event handler called when the value changes.
   */
  onValueChange?: (value: string[]) => void
}

export type ComboboxContextProps = ComboboxContextCommonProps &
  (ComboboxPropsSingle | ComboboxPropsMultiple)

const ComboboxContext = createContext<ComboboxContextState | null>(null)

const getFilteredItemsMap = (map: ItemsMap, inputValue: string | undefined): ItemsMap => {
  if (!inputValue) return map

  return new Map(
    Array.from(map).filter(([_, { text }]) => text.toLowerCase().includes(inputValue.toLowerCase()))
  )
}

export const ComboboxProvider = ({
  children,
  state: stateProp,
  allowCustomValue = false,
  autoFilter = true,
  disabled: disabledProp = false,
  multiple = false,
  readOnly: readOnlyProp = false,
  wrap = true,
  // Value
  value: controlledValue,
  defaultValue,
  onValueChange,
  // Open
  open: controlledOpen,
  defaultOpen,
  onOpenChange,
}: ComboboxContextProps) => {
  const isMounted = useRef(false)

  // Input state
  const [inputValue, setInputValue] = useState<string | undefined>('')
  const triggerAreaRef = useRef<HTMLDivElement>(null)
  const innerInputRef = useRef<HTMLInputElement>(null)

  const [comboboxValue] = useCombinedState(controlledValue, defaultValue)

  // Items state
  const [itemsMap, setItemsMap] = useState<ItemsMap>(getItemsFromChildren(children))
  const [filteredItemsMap, setFilteredItems] = useState(
    autoFilter ? getFilteredItemsMap(itemsMap, inputValue) : itemsMap
  )

  const [selectedItem, setSelectedItem] = useState<ComboboxItem | null>(
    itemsMap.get(comboboxValue as string) || null
  )

  const [selectedItems, setSelectedItems] = useState<ComboboxItem[]>(
    comboboxValue
      ? [...itemsMap.values()].filter(item => (comboboxValue as string[]).includes(item.value))
      : []
  )

  const onInternalSelectedItemChange = (item: ComboboxItem | null) => {
    setSelectedItem(item)
    setTimeout(() => {
      onValueChange?.(item?.value as string & string[])
    }, 0)
  }

  const onInternalSelectedItemsChange = (items: ComboboxItem[]) => {
    setSelectedItems(items)
    setTimeout(() => {
      onValueChange?.(items.map(i => i.value) as string & string[])
    }, 0)
  }

  // Sync internal state with controlled value
  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true

      return
    }

    if (multiple) {
      const newSelectedItems = (comboboxValue as string[]).reduce(
        (accum: ComboboxItem[], value) => {
          const match = itemsMap.get(value)

          return match ? [...accum, match] : accum
        },
        []
      )

      setSelectedItems(comboboxValue ? newSelectedItems : [])
    } else {
      setSelectedItem(itemsMap.get(comboboxValue as string) || null)
    }
  }, [multiple ? JSON.stringify(comboboxValue) : comboboxValue])

  // Form field state
  const field = useFormFieldControl()
  const id = useId(field.id)
  const labelId = useId(field.labelId)
  const state = field.state || stateProp
  const disabled = field.disabled ?? disabledProp
  const readOnly = field.readOnly ?? readOnlyProp

  const [hasPopover, setHasPopover] = useState<boolean>(
    hasChildComponent(children, 'Combobox.Popover')
  )
  const [lastInteractionType, setLastInteractionType] = useState<'mouse' | 'keyboard'>('mouse')

  useEffect(() => {
    setFilteredItems(autoFilter ? getFilteredItemsMap(itemsMap, inputValue) : itemsMap)
  }, [inputValue, itemsMap])

  const multiselect = useMultipleSelection<ComboboxItem>({
    selectedItems,
    stateReducer: (state, { type, changes }) => {
      const types = useMultipleSelection.stateChangeTypes

      switch (type) {
        case types.SelectedItemKeyDownBackspace:
        case types.SelectedItemKeyDownDelete: {
          onInternalSelectedItemsChange(changes.selectedItems || [])

          let activeIndex

          if (type === types.SelectedItemKeyDownDelete) {
            const isLastItem = state?.activeIndex === changes.selectedItems?.length
            activeIndex = isLastItem ? -1 : state.activeIndex
          } else {
            const hasItemBefore = (changes?.activeIndex || 0) - 1 >= 0
            activeIndex = hasItemBefore ? state.activeIndex - 1 : changes?.activeIndex
          }

          return {
            ...changes,
            activeIndex,
          }
        }
        case types.SelectedItemClick:
          if (innerInputRef.current) {
            innerInputRef.current.focus()
          }

          return {
            ...changes,
            activeIndex: -1, // the focus will remain on the input
          }
        case types.FunctionRemoveSelectedItem:
          return {
            ...changes,
            activeIndex: -1, // the focus will remain on the input
          }
        case types.DropdownKeyDownNavigationPrevious:
          downshift.closeMenu()

          return changes
        default:
          return changes
      }
    },
  })

  const filteredItems = Array.from(filteredItemsMap.values())

  /**
   * - props: https://github.com/downshift-js/downshift/tree/master/src/hooks/useCombobox#basic-props
   * - state (for state reducer): https://github.com/downshift-js/downshift/tree/master/src/hooks/useCombobox#statechangetypes
   * - output: https://github.com/downshift-js/downshift/tree/master/src/hooks/useCombobox#returned-props
   */
  const downshift = useCombobox<ComboboxItem>({
    items: filteredItems,
    selectedItem,
    id,
    labelId,
    inputValue,
    ...(controlledOpen != null && { isOpen: controlledOpen }),
    onIsOpenChange: changes => {
      if (changes.isOpen != null) {
        onOpenChange?.(changes.isOpen)
      }
    },
    initialIsOpen: defaultOpen,
    ...(multiple && { selectedItem: undefined }),
    itemToString: item => {
      return (item as ComboboxItem)?.text
    },
    isItemDisabled: item => {
      const isFilteredOut =
        !!inputValue &&
        !filteredItems.some(filteredItem => {
          return item.value === filteredItem.value
        })

      return item.disabled || isFilteredOut
    },
    onInputValueChange: ({ inputValue }) => {
      setInputValue(inputValue)

      if (autoFilter) {
        const filtered = getFilteredItemsMap(itemsMap, inputValue || '')
        setFilteredItems(filtered)
      }
    },
    stateReducer: multiple
      ? multipleSelectionReducer({
          multiselect,
          selectedItems,
          allowCustomValue,
          setSelectedItems: onInternalSelectedItemsChange,
          triggerAreaRef,
        })
      : singleSelectionReducer({
          allowCustomValue,
          setSelectedItem: onInternalSelectedItemChange,
          filteredItems: [...filteredItemsMap.values()],
        }),
  })

  /**
   * Indices in a Map are set when an element is added to the Map.
   * If for some reason, in the Combobox:
   * - items order changes
   * - items are added
   * - items are removed
   *
   * The Map must be rebuilt from the new children in order to preserve logical indices.
   *
   * Downshift is heavily indices based for keyboard navigation, so it it important.
   */
  useEffect(() => {
    const newMap = getItemsFromChildren(children)

    const previousItems = [...itemsMap.values()]
    const newItems = [...newMap.values()]

    const hasItemsChanges =
      previousItems.length !== newItems.length ||
      previousItems.some((item, index) => {
        const hasUpdatedValue = item.value !== newItems[index]?.value
        const hasUpdatedText = item.text !== newItems[index]?.text

        return hasUpdatedValue || hasUpdatedText
      })

    if (hasItemsChanges) {
      setItemsMap(newMap)
    }
  }, [children])

  /**
   * Warning:
   * Downshift is expecting the items list to always be rendered, as per a11y guidelines.
   * This is why the `Popover` is always opened in this component, but visually hidden instead from Combobox.Popover.
   */
  const [WrapperComponent, wrapperProps] = hasPopover ? [Popover, { open: true }] : [Fragment, {}]

  return (
    <ComboboxContext.Provider
      value={{
        // Data
        itemsMap,
        filteredItemsMap,
        highlightedItem: getElementByIndex(filteredItemsMap, downshift.highlightedIndex),
        // State
        multiple,
        disabled,
        readOnly,
        hasPopover,
        setHasPopover,
        state,
        lastInteractionType,
        setLastInteractionType,
        wrap,
        // Refs
        innerInputRef,
        triggerAreaRef,
        // Downshift state
        ...downshift,
        ...multiselect,
        setInputValue,
        selectItem: onInternalSelectedItemChange,
        setSelectedItems: onInternalSelectedItemsChange,
      }}
    >
      <WrapperComponent {...wrapperProps}>{children}</WrapperComponent>
    </ComboboxContext.Provider>
  )
}

export const useComboboxContext = () => {
  const context = useContext(ComboboxContext)

  if (!context) {
    throw Error('useComboboxContext must be used within a Combobox provider')
  }

  return context
}
