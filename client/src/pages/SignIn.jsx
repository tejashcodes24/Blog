import {  Alert, Button, Label, Spinner, TextInput } from 'flowbite-react'
import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'
import { signInStart, signInSuccess, signInFailure } from '../redux/user/userSlice'
import OAuth from '../components/OAuth'

const SignIn = () => {

  const [formdata, setFormdata] = useState({});
  const {loading,error:errorMessage} = useSelector(state => state.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormdata({...formdata,[e.target.id] : e.target.value.trim()});
  }
  //console.log(formdata);

  const handleSubmit = async(e) => {
      e.preventDefault();
      if( !formdata.email || !formdata.password){
        return dispatch(signInFailure('Please fill all the fields'));
      }
      try {
        dispatch(signInStart());
        const res = await fetch('/api/auth/signin', {
          method : 'POST',
          headers : {'Content-Type': 'application/json'},
          body : JSON.stringify(formdata),
        });
        const data = await res.json();
        if(data.success === false){
          dispatch(signInFailure(data.message));
        }
        
        if(res.ok){
          dispatch(signInSuccess(data));
          navigate('/');
        }
      }
      catch(error){
        dispatch(signInFailure(error.message));
      }
  }
  return (
    <div className='min-h-screen mt-20'>
      <div className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5'>
        {/*left */}
        <div className='flex-1'>

          <Link to="/" className= 'font-bold dark:text-white text-4xl'>
            <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>Sahands</span>
            Blog 
          </Link>
          <p className='text-sm mt-5'>
            This is a demo project. You can signin with your email and password or with Google.
          </p>
        </div>
        {/*right */}
        <div className='flex-1'>
          <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
            <div>
              <Label value='Your email' />
              <TextInput type='email' placeholder='name@company.com' id='email' onChange = {handleChange}/>
            </div>
            <div>
              <Label value='Your password' />
              <TextInput type='password' placeholder='**************' id='password' onChange = {handleChange}/>
            </div>

            <Button type='submit' className='bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:bg-gradient-to-l focus:ring-purple-200 dark:focus:ring-purple-800' disabled={loading}>
              {
                loading ? (
                  <>
                    <Spinner size='sm' />
                    <span className='pl-3'>Loading...</span>
                  </>
                ) : 'Sign In'
              }
            </Button>
            <OAuth />
          </form>
          <div className='flex gap-2 text-sm mt-5'>
            <span>Don't have an account?</span>
            <Link to='/sign-up' className='text-blue-500'>
              Sign In
            </Link>
          </div>
          {
            errorMessage && (
              <Alert className='mt-5' color='failure'>
                {errorMessage}
              </Alert>
            )
          }
        </div>
      </div>  
    </div>
  )
}

export default SignIn;
