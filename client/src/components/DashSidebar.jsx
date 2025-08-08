import React, { useEffect, useState } from 'react'
import { Sidebar, SidebarItem, SidebarItemGroup, SidebarItems } from 'flowbite-react';
import { HiUser, HiArrowSmRight, HiDocumentText, HiOutlineUserGroup, HiAnnotation } from 'react-icons/hi';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { signoutSuccess } from '../redux/user/userSlice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';


const DashSidebar = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const {currentUser} = useSelector(state => state.user);
  const navigate = useNavigate();
  const [tab,setTab] = useState('')
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search)
    const tabFromUrl = urlParams.get('tab')
    if(tabFromUrl){
      setTab(tabFromUrl)
    }    
  },[location.search])

  const handleSignout = async () => {
      try {
        const res = await fetch('/api/user/signout',{
          method: 'POST',
        });
        const data = await res.json();
        if(!res.ok){
  
        }
        else{
          dispatch(signoutSuccess());
          navigate('/sign-in');
        }
      }
      catch(error){
  
      }
    }
  return (
    <Sidebar className='w-full md:w-56'>
      <SidebarItems>
        <SidebarItemGroup className='flex flex-col gap-1'>
          <SidebarItem
            as={Link}
            to='/dashboard?tab=profile'
            active={tab === 'profile'}
            icon={HiUser}
            label={currentUser.isAdmin ? 'Admin' : 'User'}
            labelColor='dark'
          >
            Profile
          </SidebarItem>
          {currentUser.isAdmin && (
            <SidebarItem
            as={Link}
            to='/dashboard?tab=posts'
            active={tab === 'posts'}
            icon={HiDocumentText}
          >
            Posts 
          </SidebarItem>
          )}
          {currentUser.isAdmin && (
            <>
              <SidebarItem
              as={Link}
              to='/dashboard?tab=users'
              active={tab === 'users'}
              icon={HiOutlineUserGroup}
            >
              Users
            </SidebarItem>
            <SidebarItem
              as={Link}
              to='/dashboard?tab=comments'
              active={tab === 'comments'}
              icon={HiAnnotation}
            >
              Comments 
            </SidebarItem>
          </>
          )}
          <SidebarItem active icon={HiArrowSmRight} className='cursor-pointer' onClick={handleSignout}>
            Sign Out 
          </SidebarItem>
        </SidebarItemGroup>
      </SidebarItems>
    </Sidebar>
  )
}

export default DashSidebar
