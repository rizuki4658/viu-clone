import React from 'react'

const ButtonControl: React.FC<{
  show: boolean
  type: "next" | "prev"
  callback: () => void
}> = ({...props}) => {
  let buttonClass = [
    'absolute z-10',
    'top-0 bottom-0',
    'md:w-8 w-4'
  ]
  if (props.show) {
    if (props.type === 'next') {
      buttonClass = [...buttonClass, 'md:-right-4', '-right-2', 'carousel-next']
    } else buttonClass = [...buttonClass, 'md:-left-4', '-left-2', 'carousel-prev']

    return (
      <button
        className={ buttonClass.join(' ') }
        onClick={props.callback}
      />
    )
  } return <></>
}

export default ButtonControl
