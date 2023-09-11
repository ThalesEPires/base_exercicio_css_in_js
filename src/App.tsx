import Header from './components/Cabecalho'
import Hero from './components/Hero'
import ListaVagas from './containers/ListaVagas'

import './styles'

function App() {
  return (
    <>
      <Header />
      <Hero />
      <div>
        <ListaVagas />
      </div>
    </>
  )
}

export default App
