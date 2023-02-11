import { useState } from 'react'
import reactLogo from './assets/react.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className='flex gap-5'>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="h-24 w-24 animate-bounce" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="h-24 w-24 animate-bounce" alt="React logo" />
        </a>
      </div>
      <h1 className='font-semibold text-lg'>Vite + React</h1>
      <div className="p-3 text-center">
        <button onClick={() => setCount((count) => count + 1)} className='p-2 font-bold my-1 rounded-md bg-slate-400 text-slate-800 outline-none'>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.js</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
