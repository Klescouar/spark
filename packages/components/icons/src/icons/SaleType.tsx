import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const SaleType = React.forwardRef(
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
          '<path fill-rule="evenodd" clip-rule="evenodd" d="M12.3159 4.27565C12.4456 4.17432 12.6277 4.17476 12.7569 4.27672L19.8634 9.88458C20.1293 10.0944 19.981 10.5221 19.6422 10.5221L18.2366 10.5221L18.237 18.8428C18.237 19.0181 18.1107 19.164 17.9441 19.1942L17.8799 19.2H7.85758C7.66035 19.2 7.50047 19.0401 7.50047 18.8428V10.5221L5.35781 10.5221C5.0394 10.5221 4.88955 10.1446 5.0926 9.92514L5.13797 9.88351L12.3159 4.27565ZM12.5343 5.01067L6.39414 9.80781L7.85758 9.80781C8.03289 9.80781 8.1787 9.93415 8.20893 10.1008L8.21469 10.165V18.4857H17.5224L17.5228 10.165C17.5228 9.98963 17.6491 9.84381 17.8157 9.81357L17.8799 9.80781L18.6137 9.80781L12.5343 5.01067ZM12.5368 14.325C12.8474 14.325 13.0992 14.5768 13.0992 14.8875C13.0992 15.1981 12.8474 15.45 12.5368 15.45C12.2296 15.4416 11.9826 15.1946 11.9743 14.8875C11.9743 14.5768 12.2261 14.325 12.5368 14.325ZM13.852 9.90892C14.21 10.2274 14.3991 10.6681 14.3714 11.1197C14.3977 11.6988 14.1076 12.2531 13.594 12.6049C13.2453 12.8186 13.0159 13.1564 12.9644 13.5324C12.9601 13.7684 12.7456 13.9577 12.4824 13.9577C12.3553 13.9577 12.2335 13.912 12.1443 13.8307C12.0551 13.7494 12.0061 13.6394 12.0082 13.5254C12.013 12.9893 12.3016 12.4872 12.7856 12.1726C13.1676 11.9414 13.3952 11.554 13.3919 11.1406C13.4304 10.9076 13.3538 10.6712 13.182 10.493C13.0103 10.3148 12.7605 10.2127 12.4979 10.2132C12.0641 10.2107 11.6793 10.4625 11.5495 10.8338C11.488 11.019 11.2986 11.1464 11.0831 11.1476C10.8345 11.144 10.6327 10.9661 10.6244 10.7431C10.6271 10.6738 10.6429 10.6055 10.6711 10.5409C10.9591 9.86596 11.6927 9.42916 12.4979 9.45312C13.0012 9.42454 13.494 9.59043 13.852 9.90892Z"/>',
      }}
    />
  )
)

SaleType.displayName = 'SaleType'

export const tags = ['SaleType', '']
