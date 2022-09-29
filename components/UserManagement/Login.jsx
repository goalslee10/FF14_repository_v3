import React, { useState } from 'react'
import Modal from 'react-modal';
const Login = () => {
  const [isOpen, setIsOpen] = useState(false);
  const ModalOnOff = () => {
    setIsOpen(!isOpen)
  }
  return (
  <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
      <button onClick={ModalOnOff} // true
        className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
        로그인
      </button>
    <div>
      <Modal
        style={{
                overlay: {
                position: 'fixed',
                backgroundColor: 'rgba(0, 0, 0, 0.25)'
              },
        content: {
                top: '40px',
                left: '40px',
                right: '40px',
                bottom: '40px',
                border: '10px solid #ccc',
                background: '#fff',
                overflow: 'auto',
                WebkitOverflowScrolling: 'touch',
                borderRadius: '4px',
                outline: 'none',
                padding: '20px',
                width: '30%',
                height: '50%',
                top: '26%',
                left: '35%',
                }
              }}
        isOpen={isOpen} //true
        onRequestClose={ModalOnOff} // false
        contentLabel="LogIn"
      >
        <div className='text-right'>
          <button onClick={ModalOnOff}>X</button>
        </div>
        <div className='text-center'>
          <h2>LOG-IN</h2>
          <input className='w-72 p-3 m-3 rounded-2xl'type='text' placeholder='ID'></input><br></br>
          <input className='w-72 p-3 m-3 rounded-2xl' type='password' placeholder='Password'></input><br></br>
          <button type='submit' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-5'>로그인</button>
          <button type='submit' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-5'>회원가입</button>
        </div>
      </Modal>
    </div>
  </div>
  )
}
export default Login