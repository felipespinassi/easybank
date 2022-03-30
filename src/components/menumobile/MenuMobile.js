import { Container } from "./styles";
import {IoClose} from 'react-icons/io5';
import { useState } from "react";

export function MenuMobile({menuIsVisible, setMenuIsVisible}){
    return(
        <Container isVisible={menuIsVisible}>
            <IoClose size={45} onClick={() =>setMenuIsVisible(false)} />
            <nav>
              <a className>Home</a>
              <a className>Contact</a>
              <a className>About</a>
              <a className>Blog</a>
              <a className>Carrers</a>
          </nav>
        </Container>

    )
}