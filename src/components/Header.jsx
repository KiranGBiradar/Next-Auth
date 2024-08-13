

import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    
        <header className='bg-gradient-to-r from-blue-300 to bg-red-200 shadow-lg' >
           
        <div className="max-w-6xl mx-auto flex justify-between items-center p-2" > 

{/* logo  */}
            <Link href='/' className='text-2xl font-extrabold group cursor-pointer'>
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to bg-blue-500
             drop drop-shadow-md group-hover:from-blue-400 group-hover:to-blue-700'>Shree </span>
            
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-red-300 to bg-red-500
             drop drop-shadow-md group-hover:from-yellow-400 group-hover:to-yellow-600'>Text</span>
                
            
            
            
            
            
            </Link>



            <nav>
                <ul className='flex gap-4'>
                    
                    <Link href='/'>Home</Link>
                    <Link href='/'>About</Link>
                    <Link href='/'>Sign in</Link>
                </ul>

            </nav>

            

        </div>

        </header>
        



  )
}

export default Header