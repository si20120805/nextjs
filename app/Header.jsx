import Link from 'next/link'
import React from 'react'
import { LButton } from '../components/Client'

const Header = () => {
  return (
   <div  >
    <h3 >Todo</h3>
    <article >
        <Link href={'/'}>Home</Link>
        <Link href={'/about'}>about</Link>
        {/* <Link href={'/login'}>Login</Link> */}
        {/* //Here we have passed the Login button through Lbutton Components */}
        <LButton/>
    </article>
   </div>
  )
}

export default Header