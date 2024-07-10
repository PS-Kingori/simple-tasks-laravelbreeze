import React from 'react';
import { Link, Head } from '@inertiajs/react';



import Gif from '../assets/hero.gif'

export default function About({ auth, laravelVersion, phpVersion }) {
    return (
        <>
            <Head title="About" />
            <div className="navbar bg-base-100  ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h7" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li><a>Homepage</a></li>
        <li><a>Portfolio</a></li>
        <li><a>About</a></li>
      </ul>
    </div>
  </div>
  <div className="navbar-center">
  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAyElEQVRIS+1V3QnCMBD+rgs4gjqE9tVBIuhkCu0gvqpLpBs4gSeGXBqCqUdpESHfW8n1vh+SO8LMoJn7/5CA72aHJ51AWA26ZFhUfKRNe/lUl42Ir8aCaKmKkGGpbtaDBKJYCvm2Z1VzD9o2TqwTVuEgjoIDURwKxxK8/4sc9QS+4SQEQOhTCALSaOW7RFQi0kNxi8wDoMUkL5m5o7p1U7i/pm484ywHo2dRbtilYO9IFVKkOEV+H3hHX3cCcxePZzXBVPj/pf8CGq3QGeB1glEAAAAASUVORK5CYII="/>
  <a className="px-2 font-bold" href="/">Simple Tasks</a>
  </div>
  <div className="navbar-end">

  <Link href="/login" className=" btn-primary btn-outline btn rounded-md py-2 px-10 mx-8 ">
    Login
</Link>
  </div>
</div>

<div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex flex-col lg:flex-row-reverse justify-between items-center px-4 py-6">
  <div>
      <img src={Gif} alt="Hero GIF" className="max-w-md md:max-w-lg lg:max-w-xl" />
    </div>
    <div>
      <h1 className="text-5xl font-bold">Your task tracking made simple</h1>
      <p className="py-6">
       A simple task tracking tool that's free, fun and personalized for you.
      </p>
      <Link href="/register" className="btn-primary btn rounded-md mr-4">
    Get Started
</Link>


    </div>
    
  </div>
</div>


        </>
    );
}
