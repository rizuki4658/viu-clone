import React, { useState, useRef } from 'react'
import { CSSTransition  } from 'react-transition-group'
import { Humberg, Close } from '../../Icons'
import Items from './Items'

const Icon: React.FC<{ opened?: boolean }> = ({...props}) => {
  if (props.opened) return (
    <div className="text-3xl absolute top-0 left-0">
      <Close />
    </div>
  )

  return <Humberg />
}

const MenuSlider: React.FC<{ open: boolean, onClose?: any }> = ({...props}) => {  
  const handleClose = (e: any) => {
    props.onClose()
  }
  const nodeMenuSlider = useRef(null)

  return (
    <CSSTransition
      in={props.open}
      timeout={300}
      nodeRef={nodeMenuSlider}
      classNames="fade"
      unmountOnExit
      appear
      onEnter={() => {}}
      onExit={() => {}}>
      <div className="">
        <div
          ref={nodeMenuSlider}
          className="bg-black bg-opacity-90 fixed top-0 left-0 right-0 bottom-0"
          onClick={handleClose} />
        <Items open={props.open} />
      </div>
    </CSSTransition>
  )
}

const Slider: React.FC<{}> = () => {
  const [sliderState, setSliderState] = useState({
    opened: false
  })

  const handleOpenSlide = () => {
    if (!sliderState.opened) return setSliderState(() => ({ opened: true }))
    
    setSliderState(() => ({ opened: false }))
  }

  return (
    <div className="flex items-center">
      <button
        className="relative w-7 h-7"
        onClick={handleOpenSlide}>
        <Icon opened={sliderState.opened} />
      </button>
      <MenuSlider
        open={sliderState.opened}
        onClose={handleOpenSlide}
      />
    </div>
  )
}

export default Slider