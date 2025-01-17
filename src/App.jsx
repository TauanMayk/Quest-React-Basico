import './App.css'
import Paragrafo from './components/paragrafo-colorido/paragrafo.jsx'
import Button from './components/button/button.jsx'

function App() {
  return (
    <>
      <Paragrafo color="red" title="PARAGRAFO VERMELHO"></Paragrafo>

      <Button label="Baixar CV" title="Clique aqui">Clique aqui</Button>
    </>
  )
}

export default App
