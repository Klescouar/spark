import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const CountryOutline = React.forwardRef(
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
          '<path d="M21.3886 16.1573C21.2366 15.9326 21.0085 15.7828 20.7043 15.7079C20.6283 15.633 20.6283 15.4831 20.5523 15.3333L20.7043 15.1835C21.0085 14.7341 21.0085 14.2097 20.7043 13.8352C20.7804 13.5356 20.7804 13.236 20.6283 12.9363L20.1721 12.0375C20.0961 11.9625 20.02 11.8127 19.944 11.7378C20.4762 11.7378 20.9324 11.3633 21.0845 10.839L21.3126 10.015C21.3886 9.79026 21.3886 9.64045 21.3126 9.41573C21.1605 8.96629 21.5407 8.29214 21.7688 7.9176C21.9969 7.61798 22.073 7.16854 21.9209 6.79401C21.7688 6.41948 21.4647 6.11985 21.0845 6.04494L19.7159 5.74532L18.1192 5.14607L16.8266 4.09738C16.5225 3.79775 16.0663 3.72285 15.6101 3.87266C15.458 3.94757 15.1539 3.57303 15.0778 3.42322C15.0018 3.34831 14.9258 3.1985 14.8497 3.1236L13.9373 2.29963C13.6332 2 13.101 1.92509 12.6447 2.07491L11.3522 2.59925C10.8199 2.82397 10.5158 3.34831 10.5918 3.87266C10.6679 4.47191 10.2117 4.69663 9.90753 4.77154C9.60339 4.84644 9.29926 4.99625 9.14719 5.22097C9.07115 4.92135 8.69098 4.69663 8.31081 4.62172L7.09427 4.54682C6.7141 4.54682 6.33393 4.69663 6.0298 4.99625C5.8017 5.37079 5.72566 5.82023 5.95376 6.19476V6.26966C5.8017 6.19476 5.64963 6.19476 5.49756 6.19476C5.34549 6.19476 5.19342 6.19476 2.91241 6.7191C2.38017 6.86891 2 7.31835 2 7.8427V8.74157C2 9.0412 2.07603 9.26592 2.2281 9.49064L2.60827 10.015C2.76034 10.2397 2.98844 10.3895 3.29258 10.4644L4.66119 10.764L5.34549 11.4382L5.42153 11.8876C5.49756 12.1124 5.57359 12.3371 5.72566 12.4869L6.56203 13.3109C6.7141 16.2322 5.64963 17.8052 5.64963 17.8052C5.26946 18.3296 5.34549 19.0037 5.87773 19.4532L7.24634 20.5768C7.39841 20.7266 7.55048 20.8015 7.77858 20.8015L9.60339 21.176C9.90753 21.2509 10.1356 21.176 10.3637 21.1011L12.2646 21.9251C12.4166 22 12.5687 22 12.7208 22C12.7968 22 12.8728 22 12.9489 22L14.0894 21.7753C14.3935 21.7004 14.6977 21.5506 14.8497 21.2509C15.0018 20.9513 15.0778 20.6517 15.0018 20.2772C14.9258 20.1273 14.9258 19.9775 15.0018 19.9026C15.0778 19.8277 15.2299 19.6779 15.382 19.603L17.4349 20.3521C17.739 20.427 17.9671 20.427 18.2713 20.3521L19.7159 19.8277C19.868 19.7528 20.02 19.6779 20.0961 19.603L21.4647 18.3296C21.9209 17.9551 21.9969 17.2809 21.6168 16.7566L21.3886 16.1573ZM19.5638 9.71536L19.4878 9.94008H19.4118C19.1076 9.94008 18.7275 10.0899 18.5754 10.3895L17.739 11.9625C17.587 12.2622 17.587 12.6367 17.8151 12.9363C18.0432 13.236 18.3473 13.3109 18.7275 13.3109L18.8035 13.3858C18.5754 13.7603 18.5754 14.2097 18.8795 14.5094L18.9556 14.5843V14.6592C18.8035 14.809 18.8035 15.0337 18.8035 15.2584C18.8795 16.3071 19.3357 17.1311 19.944 17.4307L19.1076 18.1798L18.0432 18.5543L15.9142 17.7303C15.7621 17.6554 15.534 17.6554 15.3059 17.7303C14.9258 17.8052 14.0894 18.1798 13.6332 18.9288C13.4811 19.1536 13.3291 19.603 13.3291 20.0524L12.9489 20.1273L10.8199 19.2285C10.6679 19.1536 10.5918 19.1536 10.4398 19.1536C10.2877 19.1536 10.1356 19.2285 9.98356 19.3034L9.83149 19.3783L8.38685 19.0786L7.55048 18.4045C8.00668 17.5805 8.76702 15.7079 8.46288 12.8614C8.46288 12.6367 8.38685 12.4869 8.23478 12.3371L7.32237 11.4382L7.24634 10.9139C7.24634 10.6891 7.09427 10.5393 6.9422 10.3895L5.8017 9.41573C5.72566 9.34082 5.57359 9.26592 5.42153 9.19101L3.97688 8.74157L3.82481 8.59176V8.36704C4.73722 8.14232 5.19342 8.06742 5.34549 7.99251C5.42153 8.06742 5.57359 8.14232 5.8017 8.36704C5.95376 8.51685 6.18186 8.59176 6.40997 8.59176H7.32237C7.55048 8.59176 7.85461 8.51685 8.00668 8.29214C8.15875 8.21723 8.31081 7.9176 8.23478 7.69288L8.15875 7.01873C8.23478 7.09363 8.31081 7.16854 8.46288 7.24345C9.37529 7.54307 10.1356 7.46816 10.5918 6.94382C10.7439 6.79401 10.8199 6.64419 10.8199 6.41948C11.7323 6.11985 12.4927 5.29588 12.5687 4.17228L13.101 3.94757L13.5572 4.47191C14.0894 5.29588 14.9258 5.89513 15.9142 5.74532L17.0547 6.6442C17.1307 6.7191 17.2068 6.79401 17.2828 6.79401L19.1837 7.46816H19.2597L19.868 7.61798C19.6399 8.21723 19.4118 8.96629 19.5638 9.71536Z"/>',
      }}
    />
  )
)

CountryOutline.displayName = 'CountryOutline'

export const tags = ['CountryOutline', '']
