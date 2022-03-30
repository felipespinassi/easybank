import Logo from "../../images/logo.svg"
import './cabecalho.css'
import Button from "../button/button"
import {AiOutlineMenu} from 'react-icons/ai'




function Cabecalho({setMenuIsVisible}){
    return(
      <div className="header">
          
          <img src={Logo} alt="logo" />
          <ul className="lista-cabecalho">
              <li className="lista">Home</li>
              <li className="lista">Contact</li>
              <li className="lista">About</li>
              <li className="lista">Blog</li>
              <li className="lista">Carrers</li>
          </ul>
          <Button></Button>
          <button type="button" className="button-mobile" onClick={() => setMenuIsVisible(true)} >
              <AiOutlineMenu className="img-button-mobile" />
              </button>
         
      </div>
    )
}
export default Cabecalho