import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const FlagFill = React.forwardRef(
  (
    { title, fill = 'currentColor', stroke = 'none', ...props }: IconProps,
    ref: Ref<SVGSVGElement>
  ) => (
    <svg
      ref={ref}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
      dangerouslySetInnerHTML={{
        __html:
          (title === undefined ? '' : `<title>${title}</title>`) +
          '<path fill-rule="evenodd" clip-rule="evenodd" d="M15.3796 7.83333L18.9283 3.60833C19.1699 3.31667 19.2282 2.90833 19.0699 2.56667C18.9116 2.21667 18.5784 2 18.2035 2H5.95799C5.42485 2 5 2.43333 5 2.975V21.025C5 21.5667 5.42485 22 5.95799 22C6.49113 22 6.91597 21.5667 6.91597 21.025V13.6667H18.2119C18.5867 13.6667 18.9283 13.4417 19.0782 13.1C19.2365 12.75 19.1782 12.35 18.9366 12.0583L15.3879 7.83333H15.3796Z"/>',
      }}
    />
  )
)

FlagFill.displayName = 'FlagFill'

export const tags = ['FlagFill', '']
