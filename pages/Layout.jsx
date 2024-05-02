import React from 'react'

const Layout = () => {
  return (
    <>
<nav className='container flex justify-around align-middle p-5 bg-slate-300' >

     <h1 className='text-3xl'> Title</h1>   {/*   from db */}
   
    <div className="items">
        <ul className='flex justify-center align-middle gap-4 text-2xl'>
            <li>Home</li>
            <li>contact</li>
            <li>courses</li>
            <li>Register</li>
            <li>login</li>
            
        </ul>
    </div>
    
</nav>
    
    </>
  )
}

export default Layout