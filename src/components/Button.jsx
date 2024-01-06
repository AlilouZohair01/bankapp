import React from 'react'

const Button = ({styles}) => {
  return (
      <button className={`py-4 px-6 bg-blue-gradient w-[162px] h-[51px]  rounded-[10px] font-poppins font-medium text-[15px] text-primary outline-none ${styles}`}>Get Started</button>
    )
}

export default Button