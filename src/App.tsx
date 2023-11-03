import './App.css'

function App() {
  return (
    <div>
      <div>Test !!!</div>
      <div>MODE: {import.meta.env.MODE}</div>
      <div>VITE_SOME_KEY: {import.meta.env.VITE_SOME_KEY}</div>
      <div>VITE_TOKEN: {import.meta.env.VITE_TOKEN}</div>
      <div>CUSTOM_SOME_KEY: {import.meta.env.CUSTOM_SOME_KEY}</div>
    </div>
  )
}

export default App
