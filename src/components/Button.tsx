import React from 'react'

interface ButtonProps {
    onClick: () => void;
    children: React.ReactNode;
}

const Button = ({onClick,children}:ButtonProps) => {
  return (
    <div onClick={onClick}>
      {children}
    </div>
  )
}

export default Button
