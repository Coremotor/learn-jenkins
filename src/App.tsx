import './App.css'

function App() {
  return (
    <div>
      {import.meta.env.MODE}
      {import.meta.env.VITE_SOME_KEY}
    </div>
  )
}

export default App
