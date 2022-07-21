import Head from 'next/head'
import { useEffect, useState } from 'react'

export default function App({socket}) {
  const [socketConnected, setSocketConnected] = useState(false)

  useEffect(async () => {
    socket.on('connect', () => {
      setSocketConnected(true)
    })
  }, [socket]);

  return (
    <>
      <Head>
        <title>Template</title>
        <link rel="icon" href="/logo.png" type="image/png" />
      </Head>
      <textarea name="" id="" onChange={(e) => {
        socket.emit("number ", e.target.value)
      }} cols="30" rows="10"></textarea>
    </>
  )
}