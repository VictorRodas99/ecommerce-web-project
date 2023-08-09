import { useParams } from 'react-router-dom'
import { useState, useEffect, lazy } from 'react'

const NotFound = lazy(() => import('@components/NotFound'))

/**
 * Checks if the provided param matches any of the valid params
 * Renders ```<NotFound />``` component if given param in route is not valid
 * @param {{ paramKey: string, validParams: string[] }} props
 */
export default function DynamicRouteManager({
  children,
  paramKey,
  validParams
}) {
  const currentParam = useParams()[paramKey]
  const [isValidRoute, setIsValidRoute] = useState(false)

  useEffect(() => {
    const isCorrect = validParams.find((param) => param === currentParam)
    setIsValidRoute(isCorrect)
  }, [])

  return <>{isValidRoute ? children : <NotFound />}</>
}
