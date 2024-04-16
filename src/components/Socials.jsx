import {X, Facebook, LinkedIn, Instagram, YouTube} from '@mui/icons-material'

const Socials = () => {
  const style = {
    color: '#fff',
    borderRadius: '50px',
    border: '2px solid #fff',
    padding: '6px',
    fontSize: '40px',
    marginRight: '.6rem',
  }
  return (
    <div className="socials lg:flex">
      <a href="#">
        <X sx={style} />
      </a>
      <a href="#">
        <Facebook sx={style} />
      </a>
      <a href="#">
        <LinkedIn sx={style} />
      </a>
      <a href="#">
        <Instagram sx={style} />
      </a>
      <a href="#">
        <YouTube sx={style} />
      </a>
    </div>
  )
}

export default Socials
