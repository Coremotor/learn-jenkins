import {useEffect, useState} from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [user, setUser] = useState<{firstName: string, lastName: string} | null>(null)
  useEffect(() => {
    axios('https://for-test-apps.ru:1234/api/user')
      .then((data: any) => {
        setUser(data.data);
      });
    }, [])
  return (
    <div>
      <div>Test !!!</div>
      <div>MODE: {import.meta.env.MODE}</div>
      <div>VITE_SOME_KEY: {import.meta.env.VITE_SOME_KEY}</div>
      <div>VITE_TOKEN: {import.meta.env.VITE_TOKEN}</div>
      <div>CUSTOM_SOME_KEY: {import.meta.env.CUSTOM_SOME_KEY}</div>
      <div>user</div>
      <div>FirstName: {user?.firstName}</div>
      <div>LastName: {user?.lastName}</div>
    </div>
  )
}

export default App
