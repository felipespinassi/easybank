import styled from 'styled-components';
import { css } from 'styled-components';
export const Container = styled.section`

    

    position: absolute;
    width: 80%;
    height: 60%;
    top: 100px;
    bottom: 0;
    right: 0;
    left: 0;
    margin: 0 auto;
    z-index: 5;
    max-width: 700px;
    display:flex;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    border-radius: 20px;
    
    opacity: 0%;
    
    pointer-events: none;
    transition: .5s;
    transform: translateY(50px);

    svg{
        position: absolute;
        top: 1rem;
        right: 1rem;
        transform: rotate(45deg);
        transition: .7s;
    }

    nav{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 1.5rem;
        transform: scale(0.7);
        transition: .7s;
    }
    a{
      font-size:1.4rem ;
      text-decoration: none;
      color: #000;
    }

    ${({isVisible})=> isVisible && css`
        opacity: 100%;
        pointer-events: visible;
        transform: translateY(0px);
        

        >svg{
            transform: rotate(0deg);
            
        }

        >nav{
            transform: scale(1);
        }
    `}

    @media only screen and (min-width: 1000px){
        display: none;
        
    }
`;
