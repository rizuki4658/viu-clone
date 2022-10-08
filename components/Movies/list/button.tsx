import React from 'react'

const ButtonControl: React.FC<{
  show: boolean
  type: "next" | "prev"
  callback: () => void
}> = ({...props}) => {
  let buttonClass = [
    'absolute',
    'z-10',
    'top-0 bottom-0',
    'lg:w-24 w-8'
  ]
  if (props.show) {
    if (props.type === 'next') {
      buttonClass = [...buttonClass, 'lg:-right-12', '-right-6', 'carousel-next']
    } else buttonClass = [...buttonClass, 'lg:-left-12', '-left-6', 'carousel-prev']

    return (
      <button
        className={ buttonClass.join(' ') }
        onClick={props.callback}
      />
    )
  } return <></>
}

export default ButtonControl
