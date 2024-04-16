import DropDowns from './DropDowns'
import  NavSearchButtons from './NavSearchButton'
const DesktopNav = ({
  handleDropDown,
  setShowDropDown,
  navigation,
  currentElement,
  showDropDown,
}) => {

  function click(e) {
    if (e.target.tagName === 'A') e.preventDefault()
  }

  return (
    <div className="lg:w-full">
      <nav
        aria-hidden={showDropDown ? 'false' : 'true'}
        aria-haspopup="true"
        className="flex flex-col gap-6 align-items lg:ml-auto lg:flex-row justify-between"
      >
        <ul
          className="flex flex-col gap-4 lg:align-items lg:flex-row
        "
        >
          {navigation.map((list, i) => (
            <li
              key={list.id}
              onMouseEnter={() => handleDropDown(i)}
              className={`py-4 lg:hover:text-white ${list.color} lg:py-6 px-4 nav-item`}
            >
              <a
                href=""
                className={`focus:${list.color}`}
                onClick={(e) => click(e)}
              >
                {list.listItem}
              </a>
            </li>
          ))}
        </ul>
        <NavSearchButtons />
      </nav>
      <DropDowns
        currentElement={currentElement}
        showDropDown={showDropDown}
        setShowDropDown={setShowDropDown}
      />
    </div>
  )
}

export default DesktopNav
