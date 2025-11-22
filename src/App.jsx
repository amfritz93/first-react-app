import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="text-center">
        <div className="flex justify-center gap-8 mb-8">
          <a href="https://vite.dev" target="_blank" className="hover:opacity-80 transition">
            <img src={viteLogo} className="w-24 h-24" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank" className="hover:opacity-80 transition">
            <img src={reactLogo} className="w-24 h-24" alt="React logo" />
          </a>
        </div>
        <h1 className="text-5xl font-bold text-gray-800 mb-8">Vite + React + Tailwind</h1>
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <div className="text-4xl font-bold text-gray-800 mb-6">Count: {count}</div>
          <div className="flex gap-4 justify-center">
            <button
              onClick={() => setCount((count) => count + 1)}
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded transition"
            >
              Add
            </button>
            <button
              onClick={() => setCount((count) => count - 1)}
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-6 rounded transition"
            >
              Subtract
            </button>
            <button
              onClick={() => setCount(0)}
              className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-6 rounded transition"
            >
              Reset
            </button>
          </div>
          <p className="mt-6 text-gray-600">
            Edit <code className="bg-gray-200 px-2 py-1 rounded">src/App.jsx</code> and save to test HMR
          </p>
        </div>
        <p className="mt-8 text-gray-500">
          Click on the Vite and React logos to learn more
        </p>
      </div>
    </div>
  )
}

export default App
