import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const IdeaOutline = React.forwardRef(
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
          '<path d="M10.325 21.9998C9.91667 21.9998 9.53333 21.8397 9.24167 21.5533C8.95 21.2668 8.78333 20.8793 8.76667 20.4665V18.5372C8.04167 18.0739 7.425 17.4589 6.95833 16.726C6.375 15.8161 6.04167 14.763 5.99167 13.6847C5.94167 12.6063 6.18333 11.528 6.68333 10.5676C7.18333 9.60717 7.93333 8.80683 8.84167 8.23396C9.75833 7.66109 10.8 7.34938 11.875 7.33253C12.95 7.31568 14.0083 7.57684 14.9417 8.10759C15.875 8.63834 16.6583 9.4134 17.2 10.3485C17.7417 11.2837 18.025 12.3536 18.0167 13.4319C18 14.5608 17.6833 15.656 17.1 16.5996C16.625 17.3662 15.9917 18.0065 15.2417 18.4951V20.4412C15.2333 20.8793 15.0667 21.2668 14.775 21.5533C14.4833 21.8397 14.0917 21.9998 13.6833 21.9998H10.325ZM10.7667 19.9779H13.2333V17.9054C13.2333 17.5179 13.45 17.1725 13.7917 17.004C14.45 16.667 15.0083 16.1615 15.4 15.5297C15.7917 14.8978 16.0083 14.1733 16.0167 13.4235C16.0167 12.699 15.8333 11.9913 15.4667 11.3679C15.1083 10.7445 14.5833 10.2222 13.9583 9.86833C13.3333 9.5145 12.6083 9.34601 11.9083 9.35443C11.1917 9.37128 10.4917 9.5819 9.88333 9.961C9.275 10.3401 8.775 10.8793 8.44167 11.5196C8.10833 12.1598 7.95 12.8759 7.98333 13.6004C8.01667 14.3249 8.24167 15.0242 8.63333 15.6308C9.025 16.2373 9.56667 16.726 10.2083 17.0461C10.55 17.2146 10.7667 17.5684 10.7667 17.9475V19.9779ZM21 10.5844H18.85C18.3 10.5844 17.85 10.1295 17.85 9.57347C17.85 9.01745 18.3 8.56252 18.85 8.56252H21C21.55 8.56252 22 9.01745 22 9.57347C22 10.1295 21.55 10.5844 21 10.5844ZM5.15 10.5844H3C2.45 10.5844 2 10.1295 2 9.57347C2 9.01745 2.45 8.56252 3 8.56252H5.15C5.7 8.56252 6.15 9.01745 6.15 9.57347C6.15 10.1295 5.7 10.5844 5.15 10.5844ZM7.78333 7.64424C7.525 7.64424 7.26667 7.54314 7.075 7.34095L5.55833 5.79083C5.16667 5.39487 5.175 4.7546 5.55833 4.35864C5.95 3.96269 6.58333 3.97111 6.975 4.35864L8.49167 5.90877C8.88333 6.30473 8.875 6.945 8.49167 7.34095C8.3 7.53472 8.04167 7.63581 7.79167 7.63581L7.78333 7.64424ZM16.2083 7.64424C15.95 7.64424 15.7 7.54314 15.5083 7.34938C15.1167 6.95342 15.1167 6.31315 15.5083 5.91719L17.025 4.36707C17.4167 3.97111 18.05 3.97111 18.4417 4.36707C18.8333 4.76302 18.8333 5.40329 18.4417 5.79925L16.925 7.34938C16.7333 7.55157 16.475 7.65266 16.2167 7.65266L16.2083 7.64424ZM11.9917 6.19521C11.4417 6.19521 10.9917 5.74028 10.9917 5.18425V3.01071C10.9917 2.45468 11.4417 1.99976 11.9917 1.99976C12.5417 1.99976 12.9917 2.45468 12.9917 3.01071V5.18425C12.9917 5.74028 12.5417 6.19521 11.9917 6.19521Z"/>',
      }}
    />
  )
)

IdeaOutline.displayName = 'IdeaOutline'

export const tags = ['idea-outline', 'security']
