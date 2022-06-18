import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';

import { auth } from '../../firebase/firebase';

import Button from '../common/Button';

export default function RegisterPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  async function onFormSubmit(e) {
    e.preventDefault();

    setLoading(true);
    try {
      const userCred = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );

      console.log(userCred);
      navigate('/');
    } catch (err) {
      alert(err.message);
    }
    setLoading(false);
  }

  return (
    <div className='container my-4'>

      <div className='card card-body'>

        <h1>Register</h1>

        <p>Please enter your email and password to register</p>

        <form onSubmit={onFormSubmit}>

          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              className="form-control" />
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              className="form-control" />
          </div>

          <div className='d-flex justify-content-end mt-4'>
            <Button type='submit' className='px-5' loading={loading}>
              Register
            </Button>
          </div>
        </form>
      </div>

    </div>
  )
}

