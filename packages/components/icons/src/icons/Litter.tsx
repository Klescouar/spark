import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const Litter = React.forwardRef(
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
          '<path fill-rule="evenodd" clip-rule="evenodd" d="M15.562 7.57845L15.5599 7.64514L15.406 9.11238L16.4794 10.4696C16.8535 10.3109 17.2608 10.2238 17.6869 10.2238C18.2358 10.2238 18.7536 10.3684 19.2094 10.6244L20.3687 9.29651L20.4151 9.25111C20.6401 9.06451 20.9738 9.22664 20.9973 9.53403L20.9975 9.60204L20.8076 12.6049C20.9312 12.9796 20.999 13.3831 21 13.8036L21 13.813L20.9993 13.8221L20.9964 13.982C20.915 15.8859 19.4644 17.4023 17.6869 17.4023C16.858 17.4023 16.1002 17.0726 15.5192 16.5276C15.6803 16.325 15.8253 16.1077 15.953 15.8778L15.9603 15.8855C16.4173 16.3325 17.0227 16.6047 17.6869 16.6047C18.9848 16.6047 20.0586 15.5652 20.2375 14.2127L19.1731 14.2119C18.9713 14.2119 18.8077 14.0333 18.8077 13.813C18.8077 13.6173 18.9369 13.4544 19.1074 13.4207L19.1731 13.4142L20.2375 13.4134C20.0586 12.0609 18.9848 11.0214 17.6869 11.0214C17.1421 11.0214 16.6368 11.2045 16.2206 11.517L16.2135 11.5019L16.2103 11.5076L15.2956 10.1605L15.2207 10.881C15.6414 11.6157 15.8846 12.484 15.8846 13.4142H16.9808C17.1826 13.4142 17.3462 13.5928 17.3462 13.813C17.3462 14.0088 17.2169 14.1717 17.0464 14.2054L16.9808 14.2119L15.8248 14.2122C15.4762 16.4752 13.6726 18.2 11.5 18.2C9.32762 18.2 7.52424 16.4756 7.1761 14.2125L6.01922 14.2119L5.95354 14.2054C5.78309 14.1717 5.65384 14.0088 5.65384 13.813C5.65384 13.5928 5.81743 13.4142 6.01922 13.4142H7.11538C7.11538 12.4571 7.37281 11.5656 7.81622 10.8177L7.74166 10.1047L6.78974 11.5076L6.78653 11.5019L6.77935 11.517C6.36315 11.2045 5.85787 11.0214 5.31312 11.0214C4.0152 11.0214 2.9414 12.0609 2.76244 13.4134L3.82691 13.4142L3.89259 13.4207C4.06304 13.4544 4.1923 13.6173 4.1923 13.813C4.1923 14.0333 4.02871 14.2119 3.82691 14.2119L2.76244 14.2127C2.9414 15.5652 4.0152 16.6047 5.31312 16.6047C5.97727 16.6047 6.58273 16.3325 7.03965 15.8855L7.04701 15.8778C7.17467 16.1077 7.31965 16.325 7.48076 16.5276C6.89975 17.0726 6.14198 17.4023 5.31312 17.4023C3.53561 17.4023 2.08503 15.8859 2.00359 13.982L2.00072 13.8221L2 13.8036C2.001 13.3831 2.06875 12.9796 2.19236 12.6049L2.00251 9.60204L2.00265 9.53403C2.0262 9.22664 2.3599 9.06451 2.58492 9.25111L2.63132 9.29651L3.79055 10.6244C4.24643 10.3684 4.76418 10.2238 5.31312 10.2238C5.73922 10.2238 6.14653 10.3109 6.5206 10.4696L7.63204 9.06366L7.48313 7.64514C7.44968 7.32642 7.75261 7.1068 8.00293 7.23916L8.05562 7.273L10.1395 8.86337C10.5678 8.71093 11.0251 8.62852 11.5 8.62852C11.9859 8.62852 12.4534 8.7148 12.8902 8.87408L14.9874 7.273L15.0401 7.23916C15.2725 7.11626 15.5503 7.29684 15.562 7.57845ZM11.5 9.42614C10.3026 9.42614 9.23965 10.0548 8.57325 11.0263L8.57454 11.0359L8.56624 11.0366C8.15154 11.6452 7.89205 12.3872 7.85168 13.193L7.84615 13.4142H10.4038C10.6056 13.4142 10.7692 13.5928 10.7692 13.813C10.7692 14.0088 10.64 14.1717 10.4695 14.2054L10.4038 14.2119L7.91929 14.2121C7.97126 14.4915 8.04999 14.7602 8.15242 15.0151L8.21153 15.0095H9.67307C9.87487 15.0095 10.0385 15.188 10.0385 15.4083C10.0385 15.6041 9.9092 15.7669 9.73875 15.8007L9.67307 15.8071L8.57704 15.8077C9.24368 16.776 10.3048 17.4023 11.5 17.4023C12.6952 17.4023 13.7563 16.776 14.4229 15.8077L13.3269 15.8071C13.1251 15.8071 12.9615 15.6285 12.9615 15.4083C12.9615 15.2125 13.0908 15.0497 13.2612 15.0159L13.3269 15.0095H14.7885L14.8476 15.0151C14.95 14.7602 15.0287 14.4915 15.0807 14.2121L12.5961 14.2119C12.3944 14.2119 12.2308 14.0333 12.2308 13.813C12.2308 13.6173 12.36 13.4544 12.5305 13.4207L12.5961 13.4142H15.1538C15.1538 11.2117 13.518 9.42614 11.5 9.42614ZM2.73076 10.5049L2.73081 11.5641C2.86718 11.3806 3.01988 11.2119 3.18652 11.0606L2.73076 10.5049ZM20.2692 10.5049L19.8135 11.0606C19.9801 11.2119 20.1328 11.3806 20.2692 11.5641L20.2692 10.5049ZM14.7423 8.43311L13.6681 9.25357C14.0008 9.46057 14.3063 9.71375 14.5772 10.0051L14.7423 8.43311ZM8.30068 8.43311L8.46151 9.96397C8.72918 9.68308 9.02945 9.43895 9.35552 9.239L8.30068 8.43311Z"/>',
      }}
    />
  )
)

Litter.displayName = 'Litter'

export const tags = ['Litter', '']
