import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const Cave2 = React.forwardRef(
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
          '<path fill-rule="evenodd" clip-rule="evenodd" d="M17.6873 16.063V16.072V19.4417H13.5695V18.6182C13.5695 18.409 13.4002 18.2395 13.1913 18.2395H11.7118V17.416C11.7118 17.206 11.5425 17.0372 11.3343 17.0372H9.85483V16.2138C9.85483 16.0045 9.68553 15.8343 9.47654 15.8343H7.99784V15.397H17.6873V16.063ZM6.3124 16.072V16.063V15.397H7.24126V16.2138C7.24126 16.423 7.41056 16.5925 7.61955 16.5925H9.09825V17.416C9.09825 17.6252 9.26754 17.7955 9.47654 17.7955H10.9552V18.6182C10.9552 18.8282 11.1245 18.997 11.3343 18.997H12.813V19.4417H6.3124V16.072ZM10.9964 14.6403H12.9695V10.0931H10.9964V14.6403ZM6.3124 8.94784L12.0167 6.00488L17.6873 8.92984V14.6403H13.7261V9.71358C13.7261 9.50434 13.5568 9.33409 13.3478 9.33409H10.6181C10.4091 9.33409 10.2399 9.50434 10.2399 9.71358V14.6403H6.3124V8.94784ZM18.6221 14.6403H18.4438V9.32059L18.4483 9.32284C18.5038 9.35209 18.5629 9.36484 18.6214 9.36484C18.7585 9.36484 18.891 9.29059 18.9577 9.16009C19.0536 8.97334 18.9809 8.74459 18.7952 8.64935L12.1905 5.24214C12.0819 5.18589 11.9523 5.18589 11.8436 5.24214L5.23821 8.64935C5.05244 8.74459 4.97977 8.97334 5.07566 9.16009C5.1663 9.33634 5.37604 9.40609 5.55582 9.33109V14.6403H5.37829C5.16929 14.6403 5 14.809 5 15.0183C5 15.2283 5.16929 15.397 5.37829 15.397H5.55582V16.063V16.072V19.8212C5.55582 20.0305 5.72512 20.2 5.93486 20.2H18.0656C18.2745 20.2 18.4438 20.0305 18.4438 19.8212V16.072V16.063V15.397H18.6221C18.8311 15.397 18.9997 15.2283 18.9997 15.0183C18.9997 14.809 18.8311 14.6403 18.6221 14.6403Z"/>',
      }}
    />
  )
)

Cave2.displayName = 'Cave2'

export const tags = ['cave2', 'criteria', 'location']
