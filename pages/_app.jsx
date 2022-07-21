import { useState, useEffect } from 'react'
import io from 'socket.io-client';
import '../styles/globals.scss'

export default function App({ pageProps, Component }) {
  const [socket, setSocket] = useState({
    on: (()=>{})
  })

  useEffect(async () => {
    await fetch('/api/socket')
    setSocket(io())
  }, [])

  return <Component socket={socket} {...pageProps} />
}