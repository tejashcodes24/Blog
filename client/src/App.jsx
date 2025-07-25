import React from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Dashboard from './pages/Dashboard'
import Project from './pages/Project'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Header from './components/Header'
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Footer from './components/Footer'
import PrivateRoute from './components/PrivateRoute'
import OnlyAdminPrivateRoute from './components/OnlyAdminPrivateRoute'
import CreatePost from './pages/CreatePost'
const App = () => {
  return (
    <BrowserRouter>
    <Header/>    
      <Routes>
        <Route path='/' element= {<Home />}/>
        <Route path='/about' element = {<About />} />
        <Route path = '/sign-in' element = {<SignIn />} />
        <Route path = '/sign-up' element = {<SignUp />} />
        <Route element={<PrivateRoute />}>
          <Route path='/dashboard' element = {<Dashboard />} />
        </Route>
        <Route element={<OnlyAdminPrivateRoute />}>
          <Route path='/create-post' element = {<CreatePost />} />
        </Route>        
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
