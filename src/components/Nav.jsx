import { useEffect, useState } from 'react'
import img1 from '../assets/the-coca-cola-company-logo-0.svg'
import menu from '../assets/menu.png'
import MobileNav from './MobileNav'
import DesktopNav from './DesktopNav'
import { navLists } from '../data'

const Nav = ({
  handleDropDown,
  setShowDropDown,
  showDropDown,
  currentElement,
  handleMobileDropDown,
}) => {
  const [navigation, setNavigation] = useState(navLists)
  const [isOpen, setIsOpen] = useState(false)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  const isNavOpen = () => {
    setWindowWidth(window.innerWidth)
    if (windowWidth < 992) {
      setIsOpen((prevOpen) => !prevOpen)
    }else{
      setIsOpen(false)
    }
  }
  useEffect(()=>{
     window.addEventListener('resize', isNavOpen)
     return ()=> window.removeEventListener('resize', isNavOpen)
  }, [windowWidth])

  return (
    <div className="sticky top-0 z-20 px-6 pt-3 bg-white flex flex-col gap-6 items-center border-b border-black lg:flex-row lg:py-0">
      <div className="relative w-full flex justify-between lg:w-1/5 div">
        <img src={img1} className="w-2/5 lg:w-full" alt="coca cola logo" />
        <button
          type="button"
          aria-haspopup="true"
          onClick={isNavOpen}
          className="w-10 h-8 px-2 border  focus:outline-offset-2 focus:outline-2 focus:outline-slate-900 lg:hidden"
        >
          <img src={menu} className=" w-8 h-6 lg:hidden" alt="menu bar" />
        </button>
      </div>
      {/* nav */}
      {windowWidth < 992 ? (
        <MobileNav
          isOpen={isOpen}
          navigation={navigation}
          setShowDropDown={setShowDropDown}
          showDropDown={showDropDown}
          currentElement={currentElement}
          handleMobileDropDown={handleMobileDropDown}
        />
      ) : (
        <DesktopNav
          navigation={navigation}
          handleDropDown={handleDropDown}
          setShowDropDown={setShowDropDown}
          showDropDown={showDropDown}
          currentElement={currentElement}
        />
      )}
    </div>
  )
}

export default Nav
