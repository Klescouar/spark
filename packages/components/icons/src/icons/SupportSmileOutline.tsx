import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const SupportSmileOutline = React.forwardRef(
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
          '<path fill-rule="evenodd" clip-rule="evenodd" d="M10.2735 5.10946C10.817 4.89519 11.3976 4.79028 11.9818 4.80076C11.9937 4.80097 12.0057 4.80097 12.0176 4.80076C12.6018 4.79028 13.1823 4.89519 13.7259 5.10946C14.2695 5.32372 14.7654 5.64315 15.1854 6.04942C15.6053 6.4557 15.9409 6.94084 16.173 7.47705C16.4042 8.01107 16.5281 8.58529 16.5379 9.16707V11.3999L16.5378 11.416V14.1592C16.5376 14.1678 16.5375 14.1764 16.5375 14.1851V17.3003C16.5375 17.7695 16.3511 18.2194 16.0193 18.5512C15.8701 18.7005 15.6969 18.8203 15.5089 18.9069C15.3758 18.6242 15.194 18.3637 14.9688 18.1385C14.4567 17.6264 13.7622 17.3387 13.038 17.3387H10.9611C10.2369 17.3387 9.54235 17.6264 9.03025 18.1385C8.51815 18.6506 8.23045 19.3451 8.23045 20.0694C8.23045 20.7936 8.51815 21.4881 9.03025 22.0003C9.54235 22.5124 10.2369 22.8 10.9611 22.8H13.038C13.7622 22.8 14.4567 22.5124 14.9688 22.0003C15.2612 21.7079 15.4804 21.356 15.6147 20.9731C16.298 20.8156 16.9297 20.4692 17.4335 19.9654C18.1404 19.2586 18.5375 18.2999 18.5375 17.3003V17.2619H19.6146C20.247 17.2619 20.8535 17.0107 21.3007 16.5635C21.7479 16.1163 21.9991 15.5098 21.9991 14.8773V12.1083C21.9991 11.4758 21.7479 10.8693 21.3007 10.4221C20.8535 9.97494 20.247 9.72371 19.6146 9.72371H18.5379V9.15911L18.5377 9.144C18.5249 8.29669 18.3451 7.46024 18.0084 6.68256C17.6718 5.90488 17.185 5.20127 16.576 4.61205C15.967 4.02282 15.2477 3.55955 14.4593 3.24879C13.6765 2.94023 12.8409 2.78805 11.9997 2.80079C11.1585 2.78805 10.3228 2.94023 9.54002 3.24879C8.75165 3.55955 8.03235 4.02282 7.42333 4.61205C6.8143 5.20127 6.32753 5.90488 5.99091 6.68256C5.65428 7.46024 5.47441 8.29669 5.46161 9.144L5.4615 9.15911V9.72366H4.38454C3.75212 9.72366 3.1456 9.97489 2.69842 10.4221C2.25123 10.8693 2 11.4758 2 12.1082V14.8773C2 15.5097 2.25123 16.1162 2.69842 16.5634C3.1456 17.0106 3.75212 17.2618 4.38454 17.2618H5.76909C6.2179 17.2618 6.64834 17.0835 6.9657 16.7662C7.28307 16.4488 7.46136 16.0184 7.46136 15.5696V12.8172L7.46149 12.8005V9.16704C7.47122 8.58528 7.59518 8.01106 7.82633 7.47705C8.05844 6.94084 8.39406 6.4557 8.81399 6.04942C9.23391 5.64315 9.72987 5.32372 10.2735 5.10946ZM13.5546 19.5527C13.6881 19.6862 13.7646 19.8659 13.7685 20.0542L13.7684 20.0694L13.7685 20.0845C13.7646 20.2728 13.6881 20.4526 13.5546 20.586C13.4176 20.7231 13.2317 20.8001 13.038 20.8001H10.9611C10.7673 20.8001 10.5815 20.7231 10.4445 20.586C10.3074 20.449 10.2304 20.2632 10.2304 20.0694C10.2304 19.8756 10.3074 19.6897 10.4445 19.5527C10.5815 19.4157 10.7673 19.3387 10.9611 19.3387H13.038C13.2317 19.3387 13.4176 19.4157 13.5546 19.5527ZM18.5378 15.2619V12.8129L18.5379 12.8005V11.7237H19.6146C19.7166 11.7237 19.8144 11.7642 19.8865 11.8363C19.9586 11.9085 19.9991 12.0063 19.9991 12.1083V14.8773C19.9991 14.9793 19.9586 15.0771 19.8865 15.1493C19.8144 15.2214 19.7166 15.2619 19.6146 15.2619H18.5378ZM4.11263 11.8363C4.18474 11.7642 4.28256 11.7237 4.38454 11.7237H5.46136V15.2618H4.38454C4.28256 15.2618 4.18474 15.2213 4.11263 15.1492C4.04051 15.0771 4 14.9793 4 14.8773V12.1082C4 12.0062 4.04051 11.9084 4.11263 11.8363Z"/><path d="M10.6678 13.298C10.5484 12.8501 10.0886 12.5838 9.64068 12.7032C9.1928 12.8226 8.92653 13.2825 9.04593 13.7304C9.41032 15.0972 10.7843 15.7838 11.9538 15.8477C13.1757 15.9146 14.6105 15.3209 14.9629 13.6916C15.0609 13.2386 14.7731 12.7919 14.32 12.6939C13.867 12.5959 13.4203 12.8837 13.3223 13.3368C13.2583 13.6326 13.1057 13.8466 12.8917 13.9842C12.6756 14.1233 12.3872 14.1904 12.0455 14.1717C11.3128 14.1316 10.78 13.7188 10.6678 13.298Z"/>',
      }}
    />
  )
)

SupportSmileOutline.displayName = 'SupportSmileOutline'

export const tags = ['SupportSmileOutline', '']
