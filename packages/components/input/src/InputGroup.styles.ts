import { cva, VariantProps } from 'class-variance-authority'

export const inputGroupStyles = cva(['relative inline-flex w-full'], {
  variants: {
    disabled: {
      true: [
        'cursor-not-allowed',
        'relative',
        'after:absolute',
        'after:top-none',
        'after:h-full',
        'after:w-full',
        'after:border-sm after:border-outline',
        'after:rounded-lg',
      ],
      false: 'after:hidden',
    },
    readOnly: {
      true: [
        'relative',
        'after:absolute',
        'after:top-none',
        'after:h-full',
        'after:w-full',
        'after:border-sm after:border-outline',
        'after:rounded-lg',
      ],
      false: 'after:hidden',
    },
  },
})

export type InputGroupStylesProps = VariantProps<typeof inputGroupStyles>
