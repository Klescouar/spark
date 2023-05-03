import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const Wc = React.forwardRef(
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
          '<path fill-rule="evenodd" clip-rule="evenodd" d="M15.6117 11.5975C15.5914 11.839 15.3995 12.0212 15.1648 12.0212H14.9366C15.0783 11.5787 15.1539 11.1062 15.1539 10.6187C15.1539 8.3477 13.5142 6.50045 11.4989 6.50045C9.48421 6.50045 7.84458 8.3477 7.84458 10.6187C7.84458 11.1062 7.92016 11.5787 8.06189 12.0212H7.83295C7.59893 12.0212 7.40633 11.839 7.3838 11.575L6.72823 6.9917C6.70643 6.72095 6.79219 6.4607 6.97025 6.26045C7.14904 6.0602 7.39252 5.94995 7.65634 5.94995H15.3421C15.6059 5.94995 15.8494 6.0602 16.0275 6.26045C16.2063 6.4607 16.292 6.72095 16.2724 6.96845L15.6117 11.5975ZM9.64265 13.207C8.96528 12.5635 8.57137 11.632 8.57137 10.6187C8.57137 8.7617 9.88467 7.25045 11.4989 7.25045C13.1131 7.25045 14.4271 8.7617 14.4271 10.6187C14.4271 11.632 14.0324 12.5635 13.3558 13.207H9.64265ZM15.071 14.2322C15.071 14.3582 14.9874 14.4602 14.8748 14.4925C14.8515 14.488 14.829 14.4782 14.8043 14.4782H8.19344C8.16873 14.4782 8.14692 14.488 8.12366 14.4925C8.01101 14.4602 7.92671 14.3582 7.92671 14.2322C7.92671 14.0807 8.04663 13.957 8.19344 13.957H14.8043C14.9518 13.957 15.071 14.0807 15.071 14.2322ZM12.6058 17.6672C12.4822 17.7182 12.3964 17.8352 12.3812 17.9725C12.3666 18.109 12.4248 18.2425 12.5345 18.3212C12.8892 18.5785 13.1167 18.9707 13.193 19.45H9.80472C9.88176 18.9707 10.1092 18.5785 10.4639 18.3212C10.5729 18.2425 10.6318 18.109 10.6165 17.9725C10.602 17.8352 10.5155 17.7182 10.3927 17.6672C9.40063 17.2502 8.72254 16.33 8.58445 15.2575H14.414C14.2759 16.33 13.5978 17.2502 12.6058 17.6672ZM16.5631 5.7527C16.2491 5.40095 15.8051 5.19995 15.3421 5.19995H7.65634C7.19338 5.19995 6.74858 5.40095 6.43534 5.7527C6.1221 6.1052 5.96511 6.57995 6.00654 7.0787L6.66282 11.662C6.71443 12.2942 7.21809 12.7712 7.83295 12.7712H8.38458C8.46598 12.922 8.55465 13.0682 8.65422 13.207H8.19344C7.64617 13.207 7.19992 13.6667 7.19992 14.2322C7.19992 14.6732 7.47246 15.0467 7.85185 15.1907C7.95578 16.408 8.61061 17.488 9.62084 18.1067C9.24873 18.556 9.04886 19.1485 9.04886 19.825C9.04886 20.032 9.21166 20.2 9.41226 20.2H13.5855C13.7868 20.2 13.9489 20.032 13.9489 19.825C13.9489 19.1485 13.749 18.556 13.3776 18.1067C14.3871 17.488 15.0419 16.408 15.1466 15.1907C15.5253 15.0467 15.7978 14.6732 15.7978 14.2322C15.7978 13.6667 15.3523 13.207 14.8043 13.207H14.3435C14.4438 13.0682 14.5317 12.922 14.6139 12.7712H15.1648C15.7796 12.7712 16.2833 12.2942 16.3334 11.6845L16.9941 7.0547C17.0333 6.57995 16.8756 6.1052 16.5631 5.7527Z"/>',
      }}
    />
  )
)

Wc.displayName = 'Wc'

export const tags = ['wc', 'criteria', 'location']
