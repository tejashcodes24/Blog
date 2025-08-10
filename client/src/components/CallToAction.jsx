import { Button } from 'flowbite-react'
import React from 'react'

const CallToAction = () => {
  return (
    <div className='flex border border-teal-500 p-3 justify-center items-center rounded-tl-3xl rounded-br-3xl flex-col sm:flex-row text-center'>
      <div className='flex-1 justify-center flex flex-col'>
        <h2 className='text-2xl font-semibold'>
          Ready to explore and share your ideas?
        </h2>
        <p className='text-gray-500 my-2'>
          This blog is more than just a place to post articles — it’s a platform for 
          creativity, collaboration, and learning. Here, you can share your thoughts, 
          showcase your projects, and engage with readers from all walks of life.  
          Whether you’re documenting your coding journey, writing tutorials, or 
          expressing your opinions on tech trends, this is your space to be heard.  
          Every post contributes to a growing community of learners, innovators, and 
          problem solvers who inspire each other to grow and create.
        </p>
        <a
          href='/'
          rel='noopener noreferrer'
        >
          <Button
            className='rounded-tl-xl mt-10 rounded-bl-none rounded-br-xl w-full
                bg-gradient-to-r from-teal-500 to-green-500 text-white hover:bg-gradient-to-l focus:ring-teal-200 dark:focus:ring-teal-800'
          >
            Visit the Blog
          </Button>
        </a>
      </div>
      <div className='flex-1 p-7'>
        <img 
          src='https://img.freepik.com/free-vector/blogging-concept-illustration_114360-1038.jpg'
          alt='Blog illustration'
          className='rounded-lg shadow-lg'
        />
      </div>
    </div>
  )
}

export default CallToAction
