import React, { useState } from 'react'
import Modal from 'react-modal';

const Login = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [id, setId] = useState('');
  const [auth, setAuth] = useState('authAtom');
  const [password, setPassword] = useState('');
 
  const ModalOnOff = () => {
    setIsOpen(!isOpen)
  }
  const idInputHandler = (event) => setId(event.target.value);
  const passwordInputHandler = (event) => setPassword(event.target.value);

  const loginButtonHandler = (event) => {
    event.preventDefault();
    console.log(id, password);

    const formValue = { id, password };

    const options = {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(formValue),
    };

    fetch('http://localhost:8090/ffusers/auth', options)
    .then(response => response.json())
    .then(user => setAuth({token: user.token, user: user.id}))
    .catch(error => console.error(error))

    setIsOpen(!isOpen)

  };
  
  return <>
  <div className=" justify-end md:flex md:flex-1 ">
      <button onClick={ModalOnOff}
        className="  text-white font-GmarketSansMedium ">
        로그인
      </button>
    <div>
      <Modal
        ariaHideApp={false}
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
                border: '3px solid #4D5656',
                background: '#1C2833',
                overflow: 'auto',
                WebkitOverflowScrolling: 'touch',
                borderRadius: '4px',
                outline: 'none',
                padding: '20px',
                width: '30%',
                height: '60%',
                top: '10%',
                left: '35%',
                }
              }}
        isOpen={isOpen}
        onRequestClose={ModalOnOff}
        contentLabel="LogIn"
      >
        <div className='text-right text-silver'>
          <button onClick={ModalOnOff}>X</button>
        </div>
        <div>
            <img
              className="h-8 w-auto ml-2 -mt-4 mb-6 sm:h-10"
              src="./images/logo_gub.png"
              alt="로고"
            />
          </div>
        <div className='text-center'>
          <div className='text-silver mb-4 font-semibold text-3xl text-shadow-neonpurple '>
            <h2>LOGIN</h2>
          </div>
          
          <input id='user-id' type='text' onChange={idInputHandler} className='w-72 p-3 m-3 rounded-2xl bg-darkgray border-4 border-deepdarkblue text-silver' placeholder='ID'></input><br></br>
          <input id='password' type='password' onChange={passwordInputHandler} className='w-72 p-3 m-3 rounded-2xl bg-darkgray border-4 border-deepdarkblue text-silver' placeholder='Password'></input><br></br>
          
          <button type='submit' onClick={loginButtonHandler} className='bg-violet hover:bg-purple-700 text-white font-bold py-2 px-4 rounded m-5 font-GmarketSansMedium '>로그인</button>
          <button type='submit' className='bg-deepdarkblue hover:bg-purple-700 text-white font-bold py-2 px-4 rounded m-5 font-GmarketSansMedium '>회원가입</button>
        </div>
      </Modal>
    </div>
  </div>
  </>
}
export default Login