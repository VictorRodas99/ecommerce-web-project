import { lazy } from 'react'
import MobileMenu from '@components/MobileMenu'
import { useMobileMenu } from '@hooks/useMobileMenu'

const TopicsMobile = lazy(() =>
  import('@components/categories/mobile/TopicsMobile')
)
const CategoryProductsMobile = lazy(() =>
  import('@components/categories/mobile/CategoryProductsMobile')
)

export const mobileSections = {
  categories: 'categories',
  mainSections: 'mainSections'
}

function Section({ currentSection }) {
  const { wasClicked } = currentSection

  return (
    <>
      {(wasClicked[mobileSections.categories] && <CategoryProductsMobile />) ||
        (wasClicked[mobileSections.mainSections] && <TopicsMobile />)}
    </>
  )
}

export default function MobileComponents() {
  const { section, setSection } = useMobileMenu()

  const sectionsRender = ({ topic }) => {
    const validTopics = Object.values(mobileSections)

    const isValidTopic = Boolean(
      validTopics.find((validTopic) => topic === validTopic)
    )

    if (!isValidTopic) {
      throw new Error(`expected "${topic}" to be part of "${validTopics}"`)
    }

    const restOfTopics = validTopics.filter(
      (validTopic) => validTopic !== topic
    )

    const otherSectionStates = restOfTopics.reduce((obj, key) => {
      obj[key] = false
      return obj
    }, {})

    setSection((previous) => ({
      wasClicked: {
        [mobileSections[topic]]: !previous.wasClicked[topic],
        ...otherSectionStates
      }
    }))
  }

  return (
    <>
      <Section currentSection={section} />
      <MobileMenu sectionController={sectionsRender} />
    </>
  )
}
