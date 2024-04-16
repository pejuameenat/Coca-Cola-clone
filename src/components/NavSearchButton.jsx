import search from '../assets/loupe.png'
import img2 from '../assets/globe.png'
import access from '../assets/accessibility.jpg'
 function NavSearchButtons() {
  return (
    <div className=" px-4 lg:w-32 flex gap-5 align-items">
      <button type="button" aria-label="search" className="nav-Button">
        <img src={search} className="dropImages" alt="search" />
      </button>
      <button type="button" aria-label="browse" className="nav-Button">
        <img src={img2} className="dropImages" alt="browse" />
      </button>
      <button type="button" aria-label="accessibility" className="nav-Button">
        <img src={access} className="dropImages" alt="accessibility" />
      </button>
    </div>
  )
}
  
export default NavSearchButtons