import React, { useState } from 'react'
import { Humberg, Close } from '../../Icons'



const Icon: React.FC<{ opened?: boolean }> = ({...props}) => {
  if (props.opened) return (
    <div className="text-3xl absolute top-0 left-0">
      <Close />
    </div>
  )

  return <Humberg />
}


const Slider: React.FC<{}> = () => {
  const [
    sliderState,
    setSliderState] = useState(
    {
      opened: false
    }
  )

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
    </div>
  )
}

export default Slider