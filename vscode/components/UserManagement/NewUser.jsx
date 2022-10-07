import { Formik, validateYupSchema, yupToFormErrors } from 'formik';
import React, { useState } from 'react'
import Modal from 'react-modal';
import Input from '../Commons/Input';



const NewUser = () => {
  const [isOpen, setIsOpen] = useState(false);

  const ModalOnOff = () => {
    setIsOpen(!isOpen)
  }
  return (
    <div >
      <button onClick={ModalOnOff} // true
        className=" text-white  font-GmarketSansMedium ">
        회원가입
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
              background: '#1C2833 ',
              overflow: 'auto',
              WebkitOverflowScrolling: 'touch',
              borderRadius: '4px',
              outline: 'none',
              padding: '20px',
              width: '30%',
              height: '90%',
              top: '5%',
              left: '35%',
            }
          }}
          isOpen={isOpen} //true
          onRequestClose={ModalOnOff} // false
          contentLabel="Signup"
        >
          <div className='text-right text-white'>
            <button onClick={ModalOnOff}>X</button>
          </div>
          <div>
            <img
              className="h-8 w-auto sm:h-10"
              src="./images/logo_gub.png"
              alt="로고"
            />
          </div>
          <div className='text-silver font-semibold text-3xl text-shadow-neonblue '>
            <h2>Sign-Up</h2>
          </div>
          <Formik
            initialValues={{
              id: '',
              password: '',
              nickname: '',
              email: ''
            }}
            validate={values => {
              const errors = {};
              if (!values.id) {
                errors.id = 'ID 입력해용~~'
              }else if(!(values.id.length > 5 && values.id.length < 15)){
                errors.id = 'ID는 6글자 이상 15글자 이하로 부탁드립니다.'
              }
              if (!values.password){ 
                errors.password = 'password 입력해줘잉~'
              }
              if (!values.nickname) {
                errors.nickname = 'nickname 입력 부탁해용~~'
              } else if(!(values.nickname.length >= 2 && values.nickname.length <= 10)){
                errors.nickname = '닉네임은 2글자 이상 10글자 이하로 부탁드립니다.'
              }
              if (!values.email) {
                errors.email = 'email 좀 써줭~~';
              } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = '유효하지 않은 이메일입니다.';
              }
              return errors;
            }}
            onSubmit={(values) => {

              const { id, password, nickname, email } = values

              const submitValue = {
                id,
                password,
                nickname,
                email
              };

              console.log(submitValue);
              const options = {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(submitValue),
              };

              fetch('http://localhost:8090/ffusers', options)
                .then(response => response.json())
                .then(data => console.log(data))
                .catch(error => console.error('실패', error));
              
              alert(JSON.stringify(`${nickname}님 환영합니다~`))
              setIsOpen(!isOpen)
            }

            }>

            {
              ({ values, errors, touched, handleSubmit, handleChange, handleBlur }) => (
                <div className='mt-5 md:col-span-2 md:mt-0'>
                  <form onSubmit={handleSubmit}>
                    <div className='grid grid-cols-1 gap-y-2 text-silver'>
                      <Input type='text' id='user-id' name='id'
                        htmlFor='user-id' labelText='ID' placeholder='ID를 입력하세요'
                        autoComplete='off'
                        validationMessage={errors.id && touched.id && errors.id}

                        value={values.id}
                        onChange={handleChange}
                        onBlur={handleBlur}

                        divClassName='col-span-6 sm:col-span-3'
                        labelClassName='text-left block p-2 font-medium'
                        inputClassName='bg-darkgray rounded-xl focus:ring focus:border-blue-500 p-1 m-1 w-full border-4 border-deepdarkblue'

                      />
                      <Input type='password' id='user-password' name='password'
                        htmlFor='user-password' labelText='Password' placeholder='Password를 입력하세요'
                        autoComplete='off'
                        validationMessage={errors.password && touched.password && errors.password}

                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}

                        divClassName='col-span-6 sm:col-span-3'
                        labelClassName='text-left block p-2 font-medium'
                        inputClassName='bg-darkgray rounded-xl focus:ring focus:border-blue-500 p-1 m-1 w-full border-4 border-deepdarkblue'

                      />
                      <Input type='text' id='user-nickname' name='nickname'
                        htmlFor='user-nickname' labelText='Nickname' placeholder='Nickname을 입력하세요'
                        autoComplete='off'
                        validationMessage={errors.nickname && touched.nickname && errors.nickname}

                        value={values.nickname}
                        onChange={handleChange}
                        onBlur={handleBlur}

                        divClassName='col-span-6 sm:col-span-3'
                        labelClassName='text-left block p-2 font-medium'
                        inputClassName='bg-darkgray rounded-xl focus:ring focus:border-blue-500 p-1 m-1 w-full border-4 border-deepdarkblue'

                      />
                      <Input type='text' id='user-email' name='email'
                        htmlFor='user-email' labelText='Email' placeholder='Email을 입력하세요'
                        autoComplete='off'
                        validationMessage={errors.email && touched.email && errors.email}

                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}

                        divClassName='col-span-6 sm:col-span-3'
                        labelClassName='text-left block p-2 font-medium'
                        inputClassName='bg-darkgray rounded-xl focus:ring focus:border-blue-500 p-1 m-1 w-full border-4 border-deepdarkblue'

                      />
                      <div className='bg-gray-50 px-1 py-1 sm:px-4'>
                        <button type='submit' className=' mt-5 inline-flex justify-center rounded-md border border-transparent bg-deepdarkblue py-2 px-4 text-sm font-medium text-silver shadow-sm hover:bg-tahiti focus:outline-none focus:ring-2 focus:ring-midnight focus:ring-offset-2 font-GmarketSansMedium '>회원가입</button>
                      </div>
                    </div>
                  </form>
                </div>
              )
            }
          </Formik>
        </Modal>

      </div>
    </div>

  )
}

export default NewUser