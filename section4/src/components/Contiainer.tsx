import React, { ComponentPropsWithoutRef, ElementType,ReactNode } from 'react'

type ContiainerProps<T extends ElementType>={
    as?: T ,
    children?: ReactNode
} & ComponentPropsWithoutRef<T>;

  function Contiainer   <C extends ElementType>({as,children,...props}: ContiainerProps<C>) {
  const Component = as || 'div';
    return (
    <Component {...props} > {children}</Component>
  )
}

export  default Contiainer;
