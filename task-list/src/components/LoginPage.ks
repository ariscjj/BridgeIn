import React, { useState }  from 'react'; 
import { useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword } from 'firebase/auth'; 
import { auth } from '../../firebase/firebase'; 

export default function LoginPage() { 
  const navigate = useNavigate(); 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function onFormSubmit(e) {
    e.preventDefault();

    try {

    const userCred = await signInWithEmailAndPassword(
      auth,
      email,
      password
    ); 
      console.log(userCred); 
    } catch (err) {
      alert(err.message);
    }
  }


  return (
    <div className="container my-4">
      <div className="card card-body">
        <h1>Login</h1>
        <p>Please enter your email and password to login</p>
        <form>
          <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">Email address</label>
            <input value={email} type="email" class="form-control" onChange={(e) => setEmail(e.target.value)>
        </div>
          <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label" onChange={(e) => setEmail(e.target.value)>Password</label>
          <input type="password" class="form-control" />
        </div>
          <div type='email' className='d-flex justify-content-end mt-4'>
          <button type='submit' className='btn btn-primary px-5'>
            Login</button>
          </div>

          </form>

      </div>


    </div>



  ); 



}
