import React from 'react'
import CallToAction from '../components/CallToAction';

const Project = () => {
  return (
    <div className='min-h-screen max-w-4xl mx-auto flex justify-center gap-8 items-center flex-col p-6'>
      <h1 className='text-4xl font-bold text-center'>Explore Our Projects</h1>
      <p className='text-lg text-gray-600 text-center max-w-3xl'>
        This blog platform is a full-stack MERN application built to share ideas, 
        articles, and projects with a clean and interactive user experience.  
        From writing posts to engaging with readers, it’s designed to be fast, 
        responsive, and easy to manage. Whether you’re here to read, write, or 
        explore, this project demonstrates how modern web technologies work 
        together to deliver a complete, real-world application.
      </p>
      <div className='w-full flex flex-col gap-6'>
        <section className='bg-gray-100 p-6 rounded-lg shadow-md'>
          <h2 className='text-2xl font-semibold dark:text-gray-900'>
            Why this Blog was Built ?
          </h2>
          <p className='text-gray-700 mt-2'>
            As a final-year Computer Science student, I wanted to build something 
            practical that could be showcased as part of my portfolio. This blog 
            is more than just a project — it’s a demonstration of my ability to 
            develop, deploy, and maintain a real-world web application.  
            It incorporates authentication, post management, and responsive design, 
            proving that I can work across both front-end and back-end development.
          </p>
        </section>
        <section className='bg-gray-100 p-6 rounded-lg shadow-md'>
          <h2 className='text-2xl font-semibold dark:text-gray-900'>
            Features & What You’ll See
          </h2>
          <ul className='list-disc list-inside text-gray-700 mt-2'>
            <li>User authentication and secure login system</li>
            <li>Create, edit, and delete blog posts</li>
            <li>Responsive design for mobile, tablet, and desktop</li>
            <li>Search and filter posts easily</li>
            <li>Dark/light mode toggle for a personalized experience</li>
            <li>Fast and dynamic interface powered by React</li>
            <li>RESTful API built with Node.js & Express</li>
            <li>MongoDB database for storing users, posts and comments</li>
          </ul>
        </section>
      </div>
      <CallToAction />
    </div>
  )
}

export default Project
