import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const HousingType = React.forwardRef(
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
          '<path fill-rule="evenodd" clip-rule="evenodd" d="M12.8664 5.19995C13.0547 5.19995 13.2113 5.33136 13.2438 5.50464L13.25 5.57142V8.20479H16.8987L16.8994 7.04206C16.8994 6.86119 17.032 6.71077 17.207 6.67957L17.2744 6.67364H18.7672C18.9512 6.67364 19.1044 6.80396 19.1361 6.97583L19.1422 7.04206L19.142 8.20479L19.625 8.20525C19.8091 8.20525 19.9622 8.33557 19.994 8.50744L20 8.57367V18.0947C20 18.2756 19.8673 18.426 19.6924 18.4572L19.625 18.4631H16.328L16.3287 18.8433C16.3287 18.9965 16.2354 19.1271 16.1044 19.1776L16.0461 19.1942L15.9842 19.2H11.1956C11.0054 19.2 10.8511 19.0403 10.8511 18.8433L10.8507 18.4631H5.38364C5.1953 18.4631 5.03866 18.3317 5.00618 18.1584L5 18.0916V5.57142C5 5.38906 5.13571 5.23739 5.31468 5.20594L5.38364 5.19995H12.8664ZM13.581 12.6761L10.7306 15.3766H11.1956C11.3648 15.3766 11.5054 15.5028 11.5346 15.6692L11.5401 15.7333V18.4866H15.6397V15.7333C15.6397 15.5582 15.7616 15.4126 15.9223 15.3824L15.9842 15.3766H16.3156L13.581 12.6761ZM5.75 5.93679V17.7263H10.8507L10.8511 16.0899H9.8452C9.55183 16.0899 9.40149 15.7415 9.57125 15.5164L9.6126 15.4702L12.494 12.7393L12.5 12.5684V5.94228L5.75 5.93679ZM18.392 7.40974H17.6487L17.6494 8.57367C17.6494 8.75453 17.5167 8.85297 17.3418 8.88416H13.25V12.0224L13.3539 11.9251C13.4708 11.8143 13.6429 11.8021 13.7719 11.8875L13.8243 11.9301L17.414 15.4752C17.6389 15.6974 17.487 16.0899 17.1762 16.0899H16.3287L16.328 17.7263L19.25 17.7255V8.88416H18.7672C18.5831 8.88416 18.4299 8.81176 18.3982 8.63989L18.3922 8.57367L18.392 7.40974ZM17.375 9.621C17.5821 9.621 17.75 9.78595 17.75 9.98942C17.75 10.1703 17.6173 10.3207 17.4424 10.3519L17.375 10.3578H15.125C14.9179 10.3578 14.75 10.1929 14.75 9.98942C14.75 9.80856 14.8827 9.65813 15.0576 9.62694L15.125 9.621H17.375ZM8.375 8.88416C8.58211 8.88416 8.75 9.04911 8.75 9.25258C8.75 9.43345 8.61734 9.58387 8.44241 9.61507L8.375 9.621H6.875C6.66789 9.621 6.5 9.45606 6.5 9.25258C6.5 9.07172 6.63266 8.92129 6.80759 8.8901L6.875 8.88416H8.375ZM11.375 8.88416C11.5821 8.88416 11.75 9.04911 11.75 9.25258C11.75 9.43345 11.6173 9.58387 11.4424 9.61507L11.375 9.621H9.875C9.66789 9.621 9.5 9.45606 9.5 9.25258C9.5 9.07172 9.63266 8.92129 9.80759 8.8901L9.875 8.88416H11.375ZM8.375 7.41048C8.58211 7.41048 8.75 7.57543 8.75 7.7789C8.75 7.95976 8.61734 8.11019 8.44241 8.14138L8.375 8.14732H6.875C6.66789 8.14732 6.5 7.98237 6.5 7.7789C6.5 7.59803 6.63266 7.44761 6.80759 7.41641L6.875 7.41048H8.375ZM11.375 7.41048C11.5821 7.41048 11.75 7.57543 11.75 7.7789C11.75 7.95976 11.6173 8.11019 11.4424 8.14138L11.375 8.14732H9.875C9.66789 8.14732 9.5 7.98237 9.5 7.7789C9.5 7.59803 9.63266 7.44761 9.80759 7.41641L9.875 7.41048H11.375Z"/>',
      }}
    />
  )
)

HousingType.displayName = 'HousingType'

export const tags = ['HousingType', '']
