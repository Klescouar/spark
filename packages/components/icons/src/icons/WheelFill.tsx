import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const WheelFill = React.forwardRef(
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
          '<path d="M20.8406 14.3849L19.9374 13.2924V11.3597L20.8406 10.2672C21.087 9.93111 21.2512 9.51094 21.3333 9.09077C21.3333 8.6706 21.2512 8.1664 21.087 7.83026L20.5122 6.82186C20.2658 6.48573 20.0195 6.14959 19.6089 5.98152C19.1984 5.81346 18.7878 5.72942 18.3772 5.81346L16.9813 6.06556L15.339 5.14119L14.8463 3.79665C14.6821 3.37648 14.4357 3.04035 14.0252 2.78825C13.5325 2.28405 13.1219 2.20001 12.7113 2.20001H11.5617C11.1512 2.20001 10.7406 2.36808 10.33 2.62018C10.0016 2.87228 9.6731 3.20842 9.50887 3.62858L9.01619 4.88909L7.3739 5.81346L5.97796 5.64539C5.56738 5.56136 5.15681 5.64539 4.74624 5.81346C4.33567 5.98152 4.00721 6.31766 3.84298 6.65379L3.26818 7.74623C3.10396 8.08237 2.93973 8.58657 3.02184 9.00674C3.02184 9.4269 3.18607 9.84707 3.51453 10.1832L4.41778 11.2756V13.2084L3.51453 14.3009C3.26818 14.637 3.10396 15.0572 3.02184 15.4773C3.02184 15.8975 3.10396 16.4017 3.26818 16.7378L3.84298 17.7462C4.08933 18.0824 4.33567 18.4185 4.74624 18.5866C5.15681 18.7546 5.56738 18.8387 5.97796 18.7546L7.3739 18.5025L9.01619 19.4269L9.50887 20.7714C9.6731 21.1916 9.91944 21.5277 10.33 21.7798C10.6585 22.0319 11.069 22.2 11.5617 22.2H12.7113C13.1219 22.2 13.5325 22.0319 13.943 21.7798C14.2715 21.5277 14.6 21.1916 14.7642 20.7714L15.2569 19.4269L16.8992 18.5025L18.2951 18.7546C18.7057 18.8387 19.1162 18.7546 19.5268 18.5866C19.9374 18.4185 20.1837 18.0824 20.4301 17.7462L21.0049 16.7378C21.2512 16.3177 21.3333 15.8975 21.3333 15.4773C21.2512 15.1412 21.087 14.721 20.8406 14.3849ZM14.1894 12.7042C14.1073 13.1244 13.943 13.4605 13.6146 13.7967C13.2861 14.1328 12.9577 14.3009 12.5471 14.3849C12.1365 14.4689 11.726 14.3849 11.3154 14.3009C10.9048 14.1328 10.5764 13.8807 10.4121 13.5445C10.1658 13.1244 10.0837 12.7042 10.0837 12.284C10.0837 11.6958 10.33 11.1916 10.6585 10.7714C11.069 10.3513 11.5617 10.1832 12.1365 10.1832C12.5471 10.1832 12.9577 10.2672 13.2861 10.5193C13.6146 10.7714 13.8609 11.1076 14.0252 11.4437C14.1894 11.8639 14.2715 12.284 14.1894 12.7042Z"/>',
      }}
    />
  )
)

WheelFill.displayName = 'WheelFill'

export const tags = ['WheelFill', '']
