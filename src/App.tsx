import { useState } from 'react'
import { HelloWord } from './components/ui/HelloWord';
import { TodoMemForm } from './components/forms/TodoMemForm';
import { ColorForm, EmpleadoList, PeliculaForm, PersonaForm, VeterinariaForm } from './components';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>header</header>
      <main>        
        <h2>Punto 1</h2>
        <HelloWord/>
        <hr />        
        <h2>Punto 2 y 3</h2>
        <HelloWord persona='My Friend'/>
        <hr />
        <h2>Punto 4 y 5</h2>
        <TodoMemForm/>
        <hr />
        <h2>Punto 6</h2>
        <ColorForm/>
        <hr />
        <h2>Punto 7 - comentado</h2>
        <div style={{backgroundColor:'#e5e5e5', color:'#666666', padding:'2em 0 2em 0', marginBottom:'2em'}}>
          {/* <EmpleadoList/> */}
        </div>
        <hr />
        <h2>Punto 8</h2>
        <PersonaForm/>
        <hr />
        <h2>Punto 9</h2>
        <div style={{padding:'1em 0 1em 0', backgroundColor:'whitesmoke', color:'black'}}>
          <VeterinariaForm/>
        </div>
        <hr />
        <h2>Punto 10</h2>
        <div style={{padding:'1em 0 1em 0', backgroundColor:'whitesmoke', color:'black'}}>
          <PeliculaForm/>
        </div>
        <hr />
        
      </main>
      <footer>footer</footer>
    </>
  )
}

export default App
