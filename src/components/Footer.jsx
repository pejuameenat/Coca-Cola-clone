import FooterCard from './FooterCard'
import img from '../assets/the-coca-cola-company-logo-white.svg'
import { footerList } from '../data'
import Socials from './Socials'
const Footer = () => {
  return (
    <footer className="bg-gray-950 p-9">
      <div className="text-white border-b flex flex-col items-center justify-between gap-8 py-8 lg:flex-row">
        <img src={img} className="w-3/6 lg:w-3/12" alt="coca cola logo" />
        <button
          type="button"
          className="w-full rounded-3xl h-10 border-2 border-solid border-white duration-300 ease-in hover:bg-neutral-400 lg:w-3/12 lg:text-sm"
        >
          United States | English
        </button>
      </div>
      <div className="desktop border-b flex flex-col flex-wrap lg:flex-row justify-between items-center">
        <article className="  w-full grid grid-cols-2 py-8 lg:w-1/2 lg:grid-cols-3">
          {footerList.map((footer) => (
            <FooterCard key={footer.id} {...footer} />
          ))}
        </article>
        <Socials />
      </div>
      <div className="mobileSocials py-5">
        <Socials />
        <p className="text-white lg:text-right py-4">
          © 2024 The Coca-Cola Company. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
