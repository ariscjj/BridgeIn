import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import ProfileService from '../../services/profile.service';


import { auth } from '../../firebase/firebase';

import Button from '../common/Button';
import Alert from '../common/Alert';
import Spinner from '../common/Spinner';

export default function ProfilePage(user) {
  const navigate = useNavigate();
  const [profile, setProfile] = useState(null);
  // const [name, setName] = useState(""); 
  // const [surname, setSurname] = useState("");
  // const [country, setCountry] = useState("");
  const [saving, setSaving] = useState(false);
  const[fetching, setFetching] = useState(false);

  const [error, setError] = useState('');

  useEffect((async) => {
    ProfileService.fetchProfile(); 
  }, []);

  async function fetchProfile(){
    setFetching(true);
    try{
      const profile = await ProfileService.fetchProfile();
      setProfile(profile); 
      await ProfileService.fetchProfile();
    } catch(err){
      setError(err.message);
    }
    setFetching(false);
  }

  async function onFormSubmit(e) {
    e.preventDefault();

    setLoading(true);
    try {
      // form input validation
      
      if(!name || !surname || !country) {
        setError('Please populate all fields'); 
        setLoading(false); 
        return; // early exit 
      }
      profile.name = name; 
      profile.surname = surname; 
      profile.country = country; 

      const userCred = await signInWithEmailAndPassword(
        auth,
        email,
        password,
      );

      console.log(userCred);
      navigate('/');
    } catch (err) {
      setError(err.message)
      // alert(err.message);
    }
    setLoading(false);
  }

  return (
    <div className='container my-4'>
      {
        fetching ? 
          <div className='text-center'>

          </div>



      <div className='card card-body'>

        <h1>User Profile</h1>

        <p>Save your user profile, enter your details to update your profile </p>

        <form onSubmit={onFormSubmit}>

          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              value={profile.name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              className="form-control" />
          </div>
          <div className="mb-3">
            <label className="form-label">Surname</label>
            <input
              value={profile.surname}
              onChange={(e) => setSurname(e.target.value)}
              type="text"
              className="form-control" />
          </div>

          <div className="mb-3">
            <label className="form-label">Country</label>
            <input
              value={profile.country}
              onChange={(e) => setCountry(e.target.value)}
              type="text"
              className="form-control" />
          </div>

          <div className='d-flex justify-content-end mt-4'>
            <Button type='submit' className='px-5' loading={loading}>
              Save Profile
            </Button>
          </div>
        </form>

        <Alert
          className="mt-4"
          show={error}
          onHide={() => setError('')}
        >
          {error}
        </Alert>
      </div>

    </div>
  )
}

