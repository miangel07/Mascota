import React from 'react'


const Login = () => {
  return (
    <>
      <div className='h-screen w-100 flex justify-center items-center'>
        <div className="bg-[url('../../public/bg-login.svg')] h-[785px] w-[400px] relative flex justify-center items-center ">
            <input type="text" className='absolute rounded-3xl flex w-80 bottom-44 h-10 pl-4 bg-[#cbd5e1] ' placeholder='correo Electronico' />
            <input type="text" className='absolute rounded-3xl flex w-80 bottom-28 h-10 pl-4 bg-[#cbd5e1] ' placeholder='contraseña' />
            <button className='bg-blue-800 bottom-12 absolute rounded-3xl flex w-80 h-8 text-gray-50 text-center justify-center'>ingresar</button>
        </div>

      </div>
    </>
  )
}

export default Login