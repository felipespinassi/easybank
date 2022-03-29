import './App.css';
import Cabecalho from './components/cabecalho/cabecalho';
import Container from '../src/components/container/container'
import Main from './components/main/main'
import Articles from './components/articles/articles'
import { Footer } from './components/footer/Footer';


function App() {
  return (
    <div >
       <Cabecalho></Cabecalho>
       <Container></Container>
       <Main></Main>
       <Articles></Articles>
       <Footer/>
    </div>
  );
}

export default App;
