import { useEffect } from 'react'

export function useStopScroll({ selector, when }) {
  const element = document.querySelector(selector)

  if (!element) {
    throw new Error(`Element not found using "${selector}" selector`)
  }

  useEffect(() => {
    if (when) {
      element.classList.add('stop-scroll')
    }

    return () => {
      element.classList.remove('stop-scroll')
    }
  }, [when])
}
