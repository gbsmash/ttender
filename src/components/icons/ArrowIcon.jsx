import React from "react"

const ArrowIcon = ({className, fill}) => {
  return (
    <svg
      className={className}
      width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg" >
        <path d="M0 1.41L4.94467 6L0 10.59L1.52227 12L8 6L1.52227 0L0 1.41Z" fill={fill}/>
    </svg>
  )
}

export default ArrowIcon;