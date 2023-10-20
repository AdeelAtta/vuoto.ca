import LoginForm from "@/elements/loginForm";
import { URL } from "@/utils/constants";
import React, { useState, useEffect } from "react";
import toast, { Toaster } from 'react-hot-toast';
import BlogForm from '@/elements/BlogForm'
import Sidebar from "@/components/admin/Sidebar";
import Blogs from "@/components/admin/blogs";
import Subscribers from "@/components/admin/subscribers";
import Messages from '@/components/admin/messages';
import Preloader from "@/components/common/preLoader";


function Administration() {


  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [page, setPage] = useState('Dashboard');

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Simulate loading
    setLoading(true)
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);



  const handleLogin = async (e) => {
    e.preventDefault();
    const { email, password } = loginData;

    try {
      const res = await fetch(`${URL}api/auth/login`, {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (res.ok) {
        const resData = await res.json();
        if (resData.token) {
          // Store the token and timestamp in localStorage
          const expirationTime = new Date().getTime() + 2 * 60 * 60 * 1000; // 2 hours
          localStorage.setItem('authToken', resData.token);
          localStorage.setItem('authTokenExpiration', expirationTime);
          setIsLoggedIn(true);
          toast.success('Login Successfully!');
        }
      } else {
        toast.error('Login Failed!');
      }
    } catch (error) {
      console.error('Error during login:', error);
      toast.error('Login Failed!');
    }
  };

  // Function to handle logout
  const handleLogout = () => {
    // Clear the authentication token and expiration timestamp from localStorage
    localStorage.removeItem('authToken');
    localStorage.removeItem('authTokenExpiration');
    setIsLoggedIn(false);

    
  };


  // Check if the user is still logged in on initial load
  useEffect(() => {
    const authToken = localStorage.getItem('authToken');
    const authTokenExpiration = localStorage.getItem('authTokenExpiration');

    if (authToken && authTokenExpiration) {
      const currentTime = new Date().getTime();
      if (currentTime < authTokenExpiration) {
        setIsLoggedIn(true);
      } else {
        // Token has expired, so log the user out
        handleLogout();
      }
    }
  });


  const renderPage = () => {
    switch (page) {
      case 'Blogs':
        return <Blogs />;
      case 'Subscribers':
        return <Subscribers />;
      case 'Messages':
        return <Messages />;
      case 'Dashboard':
        return (
              <div className='stack center mt_50'>
                <h1 className='mb_16 padding_8'>Add New Blog</h1>
                <BlogForm />
              </div>
          );

    }
  }



  return (
      <>
      {loading && <Preloader />}
      { isLoggedIn ? (
      
      <section className='shelf left'>
        <Sidebar logout={() => handleLogout()} setPage={setPage} page={page} />
        <main className={`admin expand_70 m_0 padding_50 `}>
       {renderPage()}
        </main>
      </section>
    )
      : (
        <LoginForm setLoginData={setLoginData} loginData={loginData} handleForm={handleLogin} />
      )}
      </>
    
  )
}

export default Administration
