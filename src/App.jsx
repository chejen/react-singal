import { Outlet, Link } from 'react-router-dom';
import { price, subtotal } from './states/price';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div className="card">
        <p>Price: {price}</p>
        <p>Subtotal: {subtotal}</p>
      </div>
      <Link to={`albums/01`}>(Album) Sing When You're Winning</Link>
      {' | '}
      <Link to={`albums/02`}>(Album) Poems，Prayers and Promises</Link>
      {' | '}
      <Link to={`books/Java`}>(Book) Java</Link>
      {' | '}
      <Link to={`books/C++`}>(Book) C++</Link>
      <p><Outlet /></p>
    </>
  )
}

export default App
