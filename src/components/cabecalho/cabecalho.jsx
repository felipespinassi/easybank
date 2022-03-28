import Logo from "../../images/logo.svg"
import './cabecalho.css'
import Button from "../button/button"


function Cabecalho(){
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
          <Button/>
      </div>
    )
}
export default Cabecalho