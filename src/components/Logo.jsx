import { Link } from "react-router-dom"
import logosvg from "../assets/logo.svg"

function Logo() {
  return (
    <div>
     <Link to="/"
     className=" absolute top-[1.5rem] left-[1.5rem] [text-decoration:nome] text-lg text-cyan flex items-center">
        <img src={logosvg} alt="logo"  />
        <span>Crypto-Dash</span>
     </Link>
    </div>
  )
}

export default Logo
