import { useState, useEffect } from 'react'
import { randomNumber } from '@utils/tools'

export function useChangingColor() {
  const [color, setColor] = useState({
    red: 0,
    green: 0,
    blue: 0
  })

  const changeColor = () => {
    const newColor = {
      red: randomNumber(),
      green: randomNumber(),
      blue: randomNumber()
    }

    setColor(newColor)
  }

  useEffect(() => {
    window.addEventListener('pointermove', changeColor)

    return () => {
      window.removeEventListener('pointermove', changeColor)
    }
  }, [])

  return { color, changeColor }
}
