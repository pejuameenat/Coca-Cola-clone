import { useState } from 'react'
import Nav from './Nav'
import Slider from './Slider'
import Goals from './Goals'
import Jobs from './Jobs'
import Cards from './Cards'
import Carousel from './Carousel'
import Footer from './Footer'
import { slides, featured, navLists } from '../data'
function App() {
  const [slider, setSlider] = useState(slides)
  const [feature, setFeature] = useState(featured)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [currentElement, setCurrentElement] = useState(0)
  const [showDropDown, setShowDropDown] = useState(false)
   const [navigation, setNavigation] = useState(navLists)

  function handleControlsClick(id) {
    setCurrentIndex(id)
  }

  function handleDropDown(i) {
    if (i === navigation.length - 1) return null
    setCurrentElement(i)
    setShowDropDown(true)
  }

  function handleMobileDropDown(i) {
    setCurrentElement(i)
    setShowDropDown(prev=> !prev)
  }

  return (
    <>
      <Nav
        handleDropDown={handleDropDown}
        setShowDropDown={setShowDropDown}
        showDropDown={showDropDown}
        currentElement={currentElement}
        handleMobileDropDown={handleMobileDropDown}
        navigation={navigation}
      />
      <Slider
        slider={slider}
        handleControlsClick={handleControlsClick}
        currentIndex={currentIndex}
      />
      <Goals />
      <Carousel featured={feature} />
      <Jobs />
      <Cards />
      <Footer />
    </>
  )
}

export default App
