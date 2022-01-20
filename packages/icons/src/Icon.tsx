import React, { FunctionComponent, SVGAttributes } from 'react'

const defaultProps = {
  fill: '',
  size: '',
  viewBox: '0 0 24 24',
}

export const Icon = (
  Component: FunctionComponent<SVGAttributes<SVGElement>>
) => ({ children, ...props }: SVGAttributes<SVGElement>) => {
  const { fill, className, size, ...selfProps } = {
    ...defaultProps,
    ...props,
  }
  const selfSize = !size
    ? {}
    : {
      width: size,
      height: size,
    }

  return (
    <svg
      {...selfSize}
      xmlns="http://www.w3.org/2000/svg"
      {...selfProps}
    >
      <Component />
      {children}
    </svg>
  )
}

export default Icon
