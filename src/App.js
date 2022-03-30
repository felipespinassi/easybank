import './App.css';
import Cabecalho from './components/cabecalho/cabecalho';
import Container from '../src/components/container/container'
import Main from './components/main/main'
import Articles from './components/articles/articles'
import { Footer } from './components/footer/Footer';
import { useState } from 'react';
import { MenuMobile } from './components/menumobile/MenuMobile';



function App() {

  const [menuIsVisible, setMenuIsVisible] = useState(false);
  
  return (
    <div >
      <MenuMobile 
        menuIsVisible={menuIsVisible}
        setMenuIsVisible={setMenuIsVisible}
      />
      <Cabecalho setMenuIsVisible={setMenuIsVisible}></Cabecalho>
      <Container></Container>
      <Main></Main>
      <Articles></Articles>
      <Footer/>
    </div>
  );
}

export default App;
