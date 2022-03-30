import { Container } from "./styles";
import {IoClose} from 'react-icons/io5';


export function MenuMobile({menuIsVisible, setMenuIsVisible}){
    return(
        <Container isVisible={menuIsVisible}>
            <IoClose size={45} onClick={() =>setMenuIsVisible(false)} />
            <nav>
              <a href="#"  className>Home</a>
              <a href="#" className>Contact</a>
              <a href="#" className>About</a>
              <a href="#" className>Blog</a>
              <a href="#" className>Carrers</a>
          </nav>
        </Container>

    )
}