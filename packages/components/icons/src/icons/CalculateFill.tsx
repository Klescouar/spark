import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const CalculateFill = React.forwardRef(
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
          '<path d="M17.9058 2.20001H6.17026C5.04494 2.20001 4 3.11668 4 4.36668V20.0333C4 21.2833 5.04494 22.2 6.17026 22.2H17.8254C18.9507 22.2 19.9956 21.2833 19.9956 20.0333V4.36668C20.076 3.11668 19.0311 2.20001 17.9058 2.20001ZM15.9766 16.7833C15.2532 16.7833 14.6102 16.2 14.6102 15.3667C14.6102 14.5333 15.2532 14.0333 15.9766 14.0333C16.7001 14.0333 17.3431 14.6167 17.3431 15.3667C17.3431 16.2 16.7001 16.7833 15.9766 16.7833ZM17.3431 18.7833C17.3431 19.6167 16.7001 20.1167 15.9766 20.1167C15.2532 20.1167 14.6102 19.5333 14.6102 18.7833C14.6102 17.95 15.2532 17.3667 15.9766 17.3667C16.7001 17.3667 17.3431 17.95 17.3431 18.7833ZM15.9766 13.3667C15.2532 13.3667 14.6102 12.7833 14.6102 12.0333C14.6102 11.2 15.2532 10.6167 15.9766 10.6167C16.7001 10.6167 17.3431 11.2 17.3431 12.0333C17.3431 12.8667 16.7001 13.3667 15.9766 13.3667ZM16.9412 9.61668H7.13482C6.73292 9.61668 6.4114 9.28335 6.4114 8.86668V5.53335C6.4114 5.03335 6.73292 4.70001 7.13482 4.70001H16.8608C17.2627 4.70001 17.5842 5.03335 17.5842 5.45001V8.78335C17.6646 9.28335 17.3431 9.61668 16.9412 9.61668ZM11.9576 16.7833C11.2342 16.7833 10.5912 16.2 10.5912 15.3667C10.5912 14.5333 11.2342 14.0333 11.9576 14.0333C12.6811 14.0333 13.3241 14.6167 13.3241 15.3667C13.3241 16.2 12.6007 16.7833 11.9576 16.7833ZM13.3241 18.7833C13.3241 19.6167 12.6811 20.1167 11.9576 20.1167C11.2342 20.1167 10.5912 19.5333 10.5912 18.7833C10.5912 17.95 11.2342 17.3667 11.9576 17.3667C12.6007 17.3667 13.3241 17.95 13.3241 18.7833ZM11.9576 13.3667C11.2342 13.3667 10.5912 12.7833 10.5912 12.0333C10.5912 11.2 11.2342 10.6167 11.9576 10.6167C12.6811 10.6167 13.3241 11.2 13.3241 12.0333C13.3241 12.8667 12.6007 13.3667 11.9576 13.3667ZM7.85825 16.7833C7.13482 16.7833 6.49178 16.2 6.49178 15.3667C6.49178 14.5333 7.13482 14.0333 7.85825 14.0333C8.58167 14.0333 9.22471 14.6167 9.22471 15.3667C9.22471 16.2 8.58167 16.7833 7.85825 16.7833ZM9.22471 18.7833C9.22471 19.6167 8.58167 20.1167 7.85825 20.1167C7.13482 20.1167 6.49178 19.5333 6.49178 18.7833C6.49178 17.95 7.13482 17.3667 7.85825 17.3667C8.58167 17.3667 9.22471 17.95 9.22471 18.7833ZM7.85825 13.3667C7.13482 13.3667 6.49178 12.7833 6.49178 12.0333C6.49178 11.2 7.13482 10.6167 7.85825 10.6167C8.58167 10.6167 9.22471 11.2 9.22471 12.0333C9.22471 12.8667 8.58167 13.3667 7.85825 13.3667Z"/>',
      }}
    />
  )
)

CalculateFill.displayName = 'CalculateFill'

export const tags = ['CalculateFill', '']
