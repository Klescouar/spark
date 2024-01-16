/* eslint-disable max-lines */
import { Button } from '@spark-ui/button'
import { FormField } from '@spark-ui/form-field'
import { BookmarkFill } from '@spark-ui/icons/dist/icons/BookmarkFill'
import { Tag } from '@spark-ui/tag'
import { VisuallyHidden } from '@spark-ui/visually-hidden'
import { Meta, StoryFn } from '@storybook/react'
import React, { ComponentProps, useState } from 'react'

import { Dropdown } from '.'

const meta: Meta<typeof Dropdown> = {
  title: 'Experimental/Dropdown',
  component: Dropdown,
}

export default meta

export const Default: StoryFn = _args => {
  return (
    <div className="pb-[300px]">
      <Dropdown>
        <Dropdown.Trigger aria-label="Book">
          <Dropdown.LeadingIcon>
            <BookmarkFill />
          </Dropdown.LeadingIcon>
          <Dropdown.Value placeholder="Pick a book" />
        </Dropdown.Trigger>

        <Dropdown.Popover>
          <Dropdown.Items>
            <Dropdown.Item value="book-1">To Kill a Mockingbird</Dropdown.Item>
            <Dropdown.Item value="book-2">War and Peace</Dropdown.Item>
            <Dropdown.Item value="book-3">The Idiot</Dropdown.Item>
            <Dropdown.Item value="book-4">A Picture of Dorian Gray</Dropdown.Item>
            <Dropdown.Item value="book-5">1984</Dropdown.Item>
            <Dropdown.Item value="book-6">Pride and Prejudice</Dropdown.Item>
          </Dropdown.Items>
        </Dropdown.Popover>
      </Dropdown>
    </div>
  )
}

export const Controlled: StoryFn = () => {
  const [value, setValue] = useState('book-1')

  return (
    <div className="pb-[300px]">
      <Dropdown value={value} onValueChange={setValue}>
        <Dropdown.Trigger aria-label="Book">
          <Dropdown.Value placeholder="Pick a book" />
        </Dropdown.Trigger>

        <Dropdown.Popover>
          <Dropdown.Items>
            <Dropdown.Item value="book-1">To Kill a Mockingbird</Dropdown.Item>
            <Dropdown.Item value="book-2">War and Peace</Dropdown.Item>
            <Dropdown.Item value="book-3">The Idiot</Dropdown.Item>
            <Dropdown.Item value="book-4">A Picture of Dorian Gray</Dropdown.Item>
            <Dropdown.Item value="book-5">1984</Dropdown.Item>
            <Dropdown.Item value="book-6">Pride and Prejudice</Dropdown.Item>
          </Dropdown.Items>
        </Dropdown.Popover>
      </Dropdown>
    </div>
  )
}

export const ControlledOpenState: StoryFn = () => {
  const [open, setOpen] = useState(true)

  return (
    <div className="flex flex-col gap-lg">
      <div className="flex gap-md">
        <Button design="outlined" intent="success" disabled={open} onClick={() => setOpen(true)}>
          Open
        </Button>
        <Button design="outlined" intent="danger" disabled={!open} onClick={() => setOpen(false)}>
          Close
        </Button>
      </div>

      <div className="pb-[300px]">
        <Dropdown open={open} onOpenChange={setOpen}>
          <Dropdown.Trigger aria-label="Book">
            <Dropdown.Value placeholder="Pick a book" />
          </Dropdown.Trigger>

          <Dropdown.Popover>
            <Dropdown.Items>
              <Dropdown.Item value="book-1">To Kill a Mockingbird</Dropdown.Item>
              <Dropdown.Item value="book-2">War and Peace</Dropdown.Item>
              <Dropdown.Item value="book-3">The Idiot</Dropdown.Item>
              <Dropdown.Item value="book-4">A Picture of Dorian Gray</Dropdown.Item>
              <Dropdown.Item value="book-5">1984</Dropdown.Item>
              <Dropdown.Item value="book-6">Pride and Prejudice</Dropdown.Item>
            </Dropdown.Items>
          </Dropdown.Popover>
        </Dropdown>
      </div>
    </div>
  )
}

export const CustomItem: StoryFn = _args => {
  return (
    <div className="pb-[300px]">
      <Dropdown>
        <Dropdown.Trigger aria-label="Book">
          <Dropdown.Value placeholder="Pick a book" />
        </Dropdown.Trigger>

        <Dropdown.Popover>
          <Dropdown.Items>
            <Dropdown.Item value="book-1" className="flex items-center gap-md">
              <Dropdown.ItemText>To Kill a Mockingbird</Dropdown.ItemText>
              <Tag>New</Tag>
            </Dropdown.Item>
            <Dropdown.Item value="book-2" className="flex items-center gap-md">
              <Dropdown.ItemText>War and Peace</Dropdown.ItemText>
              <Tag>New</Tag>
            </Dropdown.Item>
            <Dropdown.Item value="book-3" className="flex items-center gap-md">
              <Dropdown.ItemText>The Idiot</Dropdown.ItemText>
              <Tag>New</Tag>
            </Dropdown.Item>
            <Dropdown.Item value="book-4" className="flex items-center gap-md">
              <Dropdown.ItemText>A Picture of Dorian Gray</Dropdown.ItemText>
              <Tag>New</Tag>
            </Dropdown.Item>
            <Dropdown.Item value="book-5" className="flex items-center gap-md">
              <Dropdown.ItemText>1984</Dropdown.ItemText>
              <Tag>New</Tag>
            </Dropdown.Item>
            <Dropdown.Item value="book-6" className="flex items-center gap-md">
              <Dropdown.ItemText>Pride and Prejudice</Dropdown.ItemText>
              <Tag>New</Tag>
            </Dropdown.Item>
          </Dropdown.Items>
        </Dropdown.Popover>
      </Dropdown>
    </div>
  )
}

export const Disabled: StoryFn = _args => {
  return (
    <div className="pb-[300px]">
      <Dropdown disabled>
        <Dropdown.Trigger aria-label="Book">
          <Dropdown.Value placeholder="Pick a book" />
        </Dropdown.Trigger>

        <Dropdown.Popover>
          <Dropdown.Items>
            <Dropdown.Item value="book-1">To Kill a Mockingbird</Dropdown.Item>
            <Dropdown.Item value="book-2">War and Peace</Dropdown.Item>
            <Dropdown.Item value="book-3">The Idiot</Dropdown.Item>
            <Dropdown.Item value="book-4">A Picture of Dorian Gray</Dropdown.Item>
            <Dropdown.Item value="book-5">1984</Dropdown.Item>
            <Dropdown.Item value="book-6">Pride and Prejudice</Dropdown.Item>
          </Dropdown.Items>
        </Dropdown.Popover>
      </Dropdown>
    </div>
  )
}

export const ReadOnly: StoryFn = _args => {
  return (
    <div className="pb-[300px]">
      <Dropdown readOnly>
        <Dropdown.Trigger aria-label="Book">
          <Dropdown.Value placeholder="Pick a book" />
        </Dropdown.Trigger>

        <Dropdown.Popover>
          <Dropdown.Items>
            <Dropdown.Item value="book-1">To Kill a Mockingbird</Dropdown.Item>
            <Dropdown.Item value="book-2">War and Peace</Dropdown.Item>
            <Dropdown.Item value="book-3">The Idiot</Dropdown.Item>
            <Dropdown.Item value="book-4">A Picture of Dorian Gray</Dropdown.Item>
            <Dropdown.Item value="book-5">1984</Dropdown.Item>
            <Dropdown.Item value="book-6">Pride and Prejudice</Dropdown.Item>
          </Dropdown.Items>
        </Dropdown.Popover>
      </Dropdown>
    </div>
  )
}

export const DisabledItem: StoryFn = _args => {
  return (
    <div className="pb-[300px]">
      <Dropdown>
        <Dropdown.Trigger aria-label="Book">
          <Dropdown.Value placeholder="Pick a book" />
        </Dropdown.Trigger>

        <Dropdown.Popover>
          <Dropdown.Items>
            <Dropdown.Item value="book-1">To Kill a Mockingbird</Dropdown.Item>
            <Dropdown.Item value="book-2">War and Peace</Dropdown.Item>
            <Dropdown.Item value="book-3" disabled>
              The Idiot
            </Dropdown.Item>
            <Dropdown.Item value="book-4">A Picture of Dorian Gray</Dropdown.Item>
            <Dropdown.Item value="book-5">1984</Dropdown.Item>
            <Dropdown.Item value="book-6">Pride and Prejudice</Dropdown.Item>
          </Dropdown.Items>
        </Dropdown.Popover>
      </Dropdown>
    </div>
  )
}

export const Grouped: StoryFn = _args => {
  return (
    <div className="pb-[300px]">
      <Dropdown>
        <Dropdown.Trigger aria-label="Book">
          <Dropdown.Value placeholder="Pick a book" />
        </Dropdown.Trigger>
        <Dropdown.Popover>
          <Dropdown.Items>
            <Dropdown.Group>
              <Dropdown.Label>Best-sellers</Dropdown.Label>
              <Dropdown.Item value="book-1">To Kill a Mockingbird</Dropdown.Item>
              <Dropdown.Item value="book-2">War and Peace</Dropdown.Item>
              <Dropdown.Item value="book-3">The Idiot</Dropdown.Item>
            </Dropdown.Group>

            <Dropdown.Divider />

            <Dropdown.Group>
              <Dropdown.Label>Novelties</Dropdown.Label>
              <Dropdown.Item value="book-4">A Picture of Dorian Gray</Dropdown.Item>
              <Dropdown.Item value="book-5">1984</Dropdown.Item>
              <Dropdown.Item value="book-6">Pride and Prejudice</Dropdown.Item>
            </Dropdown.Group>
          </Dropdown.Items>
        </Dropdown.Popover>
      </Dropdown>
    </div>
  )
}

export const LeadingIcon: StoryFn = _args => {
  return (
    <div className="pb-[300px]">
      <Dropdown>
        <Dropdown.Trigger aria-label="Book">
          <Dropdown.LeadingIcon>
            <BookmarkFill />
          </Dropdown.LeadingIcon>
          <Dropdown.Value placeholder="Pick a book" />
        </Dropdown.Trigger>

        <Dropdown.Popover>
          <Dropdown.Items>
            <Dropdown.Item value="book-1">To Kill a Mockingbird</Dropdown.Item>
            <Dropdown.Item value="book-2">War and Peace</Dropdown.Item>
            <Dropdown.Item value="book-3">The Idiot</Dropdown.Item>
            <Dropdown.Item value="book-4">A Picture of Dorian Gray</Dropdown.Item>
            <Dropdown.Item value="book-5">1984</Dropdown.Item>
            <Dropdown.Item value="book-6">Pride and Prejudice</Dropdown.Item>
          </Dropdown.Items>
        </Dropdown.Popover>
      </Dropdown>
    </div>
  )
}

export const ItemIndicator: StoryFn = _args => {
  return (
    <div className="pb-[300px]">
      <Dropdown multiple defaultValue={['book-1', 'book-2']}>
        <Dropdown.Trigger aria-label="Book">
          <Dropdown.Value placeholder="Pick a book" />
        </Dropdown.Trigger>

        <Dropdown.Popover>
          <Dropdown.Items>
            <Dropdown.Item value="book-1" className="flex items-center gap-md">
              <Dropdown.ItemIndicator />
              <Dropdown.ItemText>To Kill a Mockingbird</Dropdown.ItemText>
            </Dropdown.Item>
            <Dropdown.Item value="book-2" className="flex items-center gap-md">
              <Dropdown.ItemIndicator />
              <Dropdown.ItemText>War and Peace</Dropdown.ItemText>
            </Dropdown.Item>
            <Dropdown.Item value="book-3" className="flex items-center gap-md">
              <Dropdown.ItemIndicator />
              <Dropdown.ItemText>The Idiot</Dropdown.ItemText>
            </Dropdown.Item>
            <Dropdown.Item value="book-4" className="flex items-center gap-md">
              <Dropdown.ItemIndicator />
              <Dropdown.ItemText>A Picture of Dorian Gray</Dropdown.ItemText>
            </Dropdown.Item>
            <Dropdown.Item value="book-5" className="flex items-center gap-md">
              <Dropdown.ItemIndicator />
              <Dropdown.ItemText>1984</Dropdown.ItemText>
            </Dropdown.Item>
            <Dropdown.Item value="book-6" className="flex items-center gap-md">
              <Dropdown.ItemIndicator />
              <Dropdown.ItemText>Pride and Prejudice</Dropdown.ItemText>
            </Dropdown.Item>
          </Dropdown.Items>
        </Dropdown.Popover>
      </Dropdown>
    </div>
  )
}

export const Statuses: StoryFn = () => {
  type Status = ComponentProps<typeof Dropdown>['state']

  const statuses: Status[] = ['error', 'alert', 'success']

  return (
    <div className="flex flex-col gap-lg pb-[300px]">
      {statuses.map(status => {
        return (
          <Dropdown state={status}>
            <Dropdown.Trigger aria-label="Book">
              <Dropdown.Value placeholder="Pick a book" />
            </Dropdown.Trigger>

            <Dropdown.Popover>
              <Dropdown.Items>
                <Dropdown.Item value="book-1">To Kill a Mockingbird</Dropdown.Item>
                <Dropdown.Item value="book-2">War and Peace</Dropdown.Item>
                <Dropdown.Item value="book-3">The Idiot</Dropdown.Item>
                <Dropdown.Item value="book-4">A Picture of Dorian Gray</Dropdown.Item>
                <Dropdown.Item value="book-5">1984</Dropdown.Item>
                <Dropdown.Item value="book-6">Pride and Prejudice</Dropdown.Item>
              </Dropdown.Items>
            </Dropdown.Popover>
          </Dropdown>
        )
      })}
    </div>
  )
}

export const MultipleSelection: StoryFn = _args => {
  return (
    <div className="pb-[300px]">
      <Dropdown multiple defaultValue={['book-1', 'book-2']}>
        <Dropdown.Trigger aria-label="Book">
          <Dropdown.Value placeholder="Pick a book" />
        </Dropdown.Trigger>

        <Dropdown.Popover>
          <Dropdown.Items>
            <Dropdown.Item value="book-1">To Kill a Mockingbird</Dropdown.Item>
            <Dropdown.Item value="book-2">War and Peace</Dropdown.Item>
            <Dropdown.Item value="book-3">The Idiot</Dropdown.Item>
            <Dropdown.Item value="book-4">A Picture of Dorian Gray</Dropdown.Item>
            <Dropdown.Item value="book-5">1984</Dropdown.Item>
            <Dropdown.Item value="book-6">Pride and Prejudice</Dropdown.Item>
          </Dropdown.Items>
        </Dropdown.Popover>
      </Dropdown>
    </div>
  )
}

export const MultipleSelectionControlled: StoryFn = () => {
  const [values, setValues] = useState(['book-1', 'book-2'])

  return (
    <div className="pb-[300px]">
      <Dropdown multiple value={values} onValueChange={setValues}>
        <Dropdown.Trigger aria-label="Book">
          <Dropdown.Value placeholder="Pick a book" />
        </Dropdown.Trigger>

        <Dropdown.Popover>
          <Dropdown.Items>
            <Dropdown.Item value="book-1">To Kill a Mockingbird</Dropdown.Item>
            <Dropdown.Item value="book-2">War and Peace</Dropdown.Item>
            <Dropdown.Item value="book-3">The Idiot</Dropdown.Item>
            <Dropdown.Item value="book-4">A Picture of Dorian Gray</Dropdown.Item>
            <Dropdown.Item value="book-5">1984</Dropdown.Item>
            <Dropdown.Item value="book-6">Pride and Prejudice</Dropdown.Item>
          </Dropdown.Items>
        </Dropdown.Popover>
      </Dropdown>
    </div>
  )
}

export const FormFieldLabel: StoryFn = _args => {
  return (
    <div className="pb-[300px]">
      <FormField>
        <FormField.Label>Book</FormField.Label>
        <Dropdown>
          <Dropdown.Trigger>
            <Dropdown.Value placeholder="Pick a book" />
          </Dropdown.Trigger>
          <Dropdown.Popover>
            <Dropdown.Items>
              <Dropdown.Item value="book-1">To Kill a Mockingbird</Dropdown.Item>
              <Dropdown.Item value="book-2">War and Peace</Dropdown.Item>
              <Dropdown.Item value="book-3">The Idiot</Dropdown.Item>
              <Dropdown.Item value="book-4">A Picture of Dorian Gray</Dropdown.Item>
              <Dropdown.Item value="book-5">1984</Dropdown.Item>
              <Dropdown.Item value="book-6">Pride and Prejudice</Dropdown.Item>
            </Dropdown.Items>
          </Dropdown.Popover>
        </Dropdown>
      </FormField>
    </div>
  )
}

export const FormFieldHiddenLabel: StoryFn = _args => {
  return (
    <div className="pb-[300px]">
      <FormField>
        <FormField.Label>
          <VisuallyHidden>Book</VisuallyHidden>
        </FormField.Label>
        <Dropdown>
          <Dropdown.Trigger>
            <Dropdown.Value placeholder="Pick a book" />
          </Dropdown.Trigger>
          <Dropdown.Popover>
            <Dropdown.Items>
              <Dropdown.Item value="book-1">To Kill a Mockingbird</Dropdown.Item>
              <Dropdown.Item value="book-2">War and Peace</Dropdown.Item>
              <Dropdown.Item value="book-3">The Idiot</Dropdown.Item>
              <Dropdown.Item value="book-4">A Picture of Dorian Gray</Dropdown.Item>
              <Dropdown.Item value="book-5">1984</Dropdown.Item>
              <Dropdown.Item value="book-6">Pride and Prejudice</Dropdown.Item>
            </Dropdown.Items>
          </Dropdown.Popover>
        </Dropdown>
      </FormField>
    </div>
  )
}

export const FormFieldReadOnly: StoryFn = _args => {
  return (
    <div className="pb-[300px]">
      <FormField readOnly>
        <FormField.Label>Book</FormField.Label>
        <Dropdown>
          <Dropdown.Trigger aria-label="Book">
            <Dropdown.Value placeholder="Pick a book" />
          </Dropdown.Trigger>

          <Dropdown.Popover>
            <Dropdown.Items>
              <Dropdown.Item value="book-1">To Kill a Mockingbird</Dropdown.Item>
              <Dropdown.Item value="book-2">War and Peace</Dropdown.Item>
              <Dropdown.Item value="book-3">The Idiot</Dropdown.Item>
              <Dropdown.Item value="book-4">A Picture of Dorian Gray</Dropdown.Item>
              <Dropdown.Item value="book-5">1984</Dropdown.Item>
              <Dropdown.Item value="book-6">Pride and Prejudice</Dropdown.Item>
            </Dropdown.Items>
          </Dropdown.Popover>
        </Dropdown>
      </FormField>
    </div>
  )
}

export const FormFieldDisabled: StoryFn = _args => {
  return (
    <div className="pb-[300px]">
      <FormField disabled>
        <FormField.Label>Book</FormField.Label>
        <Dropdown>
          <Dropdown.Trigger>
            <Dropdown.Value placeholder="Pick a book" />
          </Dropdown.Trigger>
          <Dropdown.Popover>
            <Dropdown.Items>
              <Dropdown.Item value="book-1">To Kill a Mockingbird</Dropdown.Item>
              <Dropdown.Item value="book-2">War and Peace</Dropdown.Item>
              <Dropdown.Item value="book-3">The Idiot</Dropdown.Item>
              <Dropdown.Item value="book-4">A Picture of Dorian Gray</Dropdown.Item>
              <Dropdown.Item value="book-5">1984</Dropdown.Item>
              <Dropdown.Item value="book-6">Pride and Prejudice</Dropdown.Item>
            </Dropdown.Items>
          </Dropdown.Popover>
        </Dropdown>
      </FormField>
    </div>
  )
}

export const FormFieldRequired: StoryFn = _args => {
  return (
    <div className="pb-[300px]">
      <FormField isRequired>
        <FormField.Label>Book</FormField.Label>
        <Dropdown>
          <Dropdown.Trigger>
            <Dropdown.Value placeholder="Pick a book" />
          </Dropdown.Trigger>
          <Dropdown.Popover>
            <Dropdown.Items>
              <Dropdown.Item value="book-1">To Kill a Mockingbird</Dropdown.Item>
              <Dropdown.Item value="book-2">War and Peace</Dropdown.Item>
              <Dropdown.Item value="book-3">The Idiot</Dropdown.Item>
              <Dropdown.Item value="book-4">A Picture of Dorian Gray</Dropdown.Item>
              <Dropdown.Item value="book-5">1984</Dropdown.Item>
              <Dropdown.Item value="book-6">Pride and Prejudice</Dropdown.Item>
            </Dropdown.Items>
          </Dropdown.Popover>
        </Dropdown>
      </FormField>
    </div>
  )
}

export const FormFieldValidation: StoryFn = () => {
  const [state, setState] = useState<undefined | 'success' | 'alert' | 'error'>('error')

  return (
    <div className="pb-[300px]">
      <FormField state={state}>
        <FormField.Label>Statuses</FormField.Label>
        <Dropdown
          onValueChange={value => {
            setState(value === 'default' ? undefined : (value as 'success' | 'alert' | 'error'))
          }}
        >
          <Dropdown.Trigger>
            <Dropdown.Value placeholder="Pick a state" />
          </Dropdown.Trigger>
          <Dropdown.Popover>
            <Dropdown.Items>
              <Dropdown.Item value="default">default</Dropdown.Item>
              <Dropdown.Item value="success">success</Dropdown.Item>
              <Dropdown.Item value="alert">alert</Dropdown.Item>
              <Dropdown.Item value="error">error</Dropdown.Item>
            </Dropdown.Items>
          </Dropdown.Popover>
        </Dropdown>
        <FormField.HelperMessage>
          An effective title significantly increases your chances of making a sale
        </FormField.HelperMessage>
        <FormField.SuccessMessage>Well done!</FormField.SuccessMessage>
        <FormField.AlertMessage>Take care of this field</FormField.AlertMessage>
        <FormField.ErrorMessage>The field is invalid</FormField.ErrorMessage>
      </FormField>
    </div>
  )
}

const val = [
  { value: '1', label: '1' },
  { value: '2', label: '2' },
  { value: '3', label: '3' },
  { value: '4', label: '4' },
  { value: '5', label: '5' },
  { value: '6', label: '6' },
  { value: '7', label: '7' },
  { value: '8', label: '8' },
  { value: '9', label: '9' },
  { value: '10', label: '10' },
  { value: '11', label: '11' },
  { value: '12', label: '12' },
  { value: '13', label: '13' },
  { value: '14', label: '14' },
  { value: '15', label: '15' },
]

const initialValue = ['1']

export const Test: StoryFn = () => {
  const [value, setValue] = useState(initialValue)

  return (
    <div className="p-xl">
      <Dropdown multiple value={value} onValueChange={setValue}>
        <Dropdown.Trigger>
          <Dropdown.Value placeholder="hey" />
        </Dropdown.Trigger>
        <Dropdown.Popover>
          <Dropdown.Items>
            {val.map(({ value, label }) => (
              <Dropdown.Item key={value} value={value}>
                {label}
              </Dropdown.Item>
            ))}
          </Dropdown.Items>
        </Dropdown.Popover>
      </Dropdown>
    </div>
  )
}
