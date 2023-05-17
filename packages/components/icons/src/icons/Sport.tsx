import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const Sport = React.forwardRef(
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
          '<mask id="mask0_1508_5015" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="5" y="5" width="14" height="15"><path d="M5 5.19995H19V19.2H5V5.19995Z"/></mask><g mask="url(#mask0_1508_5015)"><path fill-rule="evenodd" clip-rule="evenodd" d="M18.2294 10.0179L17.7949 10.4622L15.43 8.20109L13.5499 6.40284L13.965 5.97781C14.0367 5.90487 14.1319 5.86376 14.2345 5.86243C14.3257 5.86243 14.4336 5.89824 14.5074 5.96919L15.7713 7.17797C15.772 7.17797 15.772 7.17797 15.772 7.17797L16.9367 8.29193C16.9367 8.29193 16.9367 8.29193 16.9373 8.29193L18.2207 9.51994C18.2891 9.58559 18.328 9.67311 18.3294 9.76727C18.3307 9.86143 18.2958 9.95028 18.2294 10.0179ZM17.6595 11.8666L17.286 12.2485L15.1068 10.1645C15.1068 10.1645 15.1068 10.1638 15.1062 10.1638L14.5242 9.60681L11.7617 6.96579L12.1137 6.60574C12.2022 6.51556 12.3202 6.46517 12.4476 6.46251C12.569 6.45787 12.6943 6.5076 12.7855 6.59446L12.8419 6.64817C12.8419 6.64884 12.8425 6.64884 12.8425 6.64884L14.8601 8.57838L17.6488 11.2453C17.7339 11.3268 17.7822 11.4362 17.7842 11.5536C17.7862 11.671 17.742 11.7823 17.6595 11.8666ZM10.2718 14.6309L9.93048 14.304L9.58919 13.9778L13.7162 9.75732L14.0575 10.0836L14.3988 10.4098L10.2718 14.6309ZM11.8528 17.8044C11.7704 17.8886 11.6597 17.9357 11.5411 17.9377C11.4251 17.9357 11.3104 17.8959 11.2252 17.8143L6.36201 13.1642C6.27082 13.0767 6.21919 12.96 6.21648 12.834C6.21517 12.7087 6.2621 12.5893 6.35061 12.4998L6.70263 12.1397L8.8818 14.2238L9.46447 14.7808L12.2263 17.4224L11.8528 17.8044ZM10.0036 18.4297C9.93786 18.4973 9.84868 18.5351 9.75414 18.5371C9.65758 18.543 9.5684 18.5033 9.50001 18.4376L8.21665 17.2103C8.21598 17.2103 8.21598 17.2096 8.21598 17.2096L7.62391 16.6433L5.78738 14.8869C5.71362 14.8166 5.67205 14.7218 5.67 14.6203C5.6687 14.5189 5.70692 14.4234 5.77799 14.3504L6.19304 13.9254L9.54762 17.132L10.4387 17.9847L10.0036 18.4297ZM6.80455 18.1764L6.12196 17.5232L6.826 16.8031L7.16461 17.1261L7.50926 17.4556L6.80455 18.1764ZM17.1834 6.21187L17.866 6.86434L17.162 7.5851L16.4794 6.93197L17.1834 6.21187ZM18.9998 9.756C18.9952 9.4848 18.8845 9.23217 18.6874 9.04319L17.6434 8.04527L18.5808 7.08713C18.7095 6.95518 18.7062 6.74565 18.5734 6.61834L17.4087 5.50437C17.345 5.44337 17.2585 5.41221 17.17 5.41154C17.0808 5.41287 16.9964 5.44934 16.9347 5.51233L15.9973 6.47113L14.9741 5.49244C14.5557 5.0926 13.8865 5.10454 13.4829 5.51697L13.045 5.96587C12.8613 5.85845 12.6514 5.80276 12.4362 5.79944C12.1304 5.80474 11.8448 5.92741 11.6316 6.1449L11.0469 6.74299C10.9181 6.87494 10.9222 7.08448 11.0549 7.21179L13.2341 9.29649L9.10709 13.5169L6.92792 11.4322C6.86355 11.3712 6.77437 11.3348 6.68922 11.3394C6.60004 11.3407 6.51556 11.3772 6.45387 11.4402L5.86851 12.0383C5.65596 12.2558 5.5413 12.5422 5.54666 12.8453C5.55002 13.0608 5.6164 13.2656 5.73307 13.442L5.29589 13.8889C5.1001 14.0892 4.99483 14.3531 5.0002 14.6316C5.00422 14.9094 5.11888 15.17 5.32137 15.3636L6.3439 16.3423L5.4072 17.3004C5.27846 17.4324 5.28181 17.6426 5.41524 17.7692L6.57925 18.8832C6.64228 18.9429 6.7261 18.9767 6.81259 18.9767H6.81796C6.90714 18.9747 6.99162 18.9389 7.05398 18.8752L7.99069 17.9171L9.034 18.9144C9.22711 19.0987 9.4799 19.2001 9.74743 19.2001H9.76486C10.0398 19.1955 10.2952 19.0854 10.4863 18.8898L10.9369 18.429C11.1146 18.5411 11.3191 18.6007 11.5337 18.6007H11.5525C11.8502 18.5961 12.1278 18.4767 12.3349 18.2652L12.9411 17.6446C13.0698 17.5133 13.0665 17.3031 12.9337 17.1758L10.7539 15.0917L14.8809 10.8713L17.0607 12.9553C17.1258 13.0177 17.2096 13.0488 17.2934 13.0488C17.3812 13.0488 17.4691 13.015 17.5348 12.9474L18.1416 12.3274C18.3481 12.1159 18.4594 11.8367 18.4547 11.5423C18.4514 11.3242 18.383 11.1166 18.2603 10.9402L18.7115 10.4787C18.902 10.2838 19.0045 10.0272 18.9998 9.756Z"/></g>',
      }}
    />
  )
)

Sport.displayName = 'Sport'

export const tags = ['Sport', '']
