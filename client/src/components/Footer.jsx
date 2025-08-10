import { Footer, FooterCopyright, FooterDivider, FooterIcon, FooterLink, FooterLinkGroup, FooterTitle } from 'flowbite-react'
import React from 'react'
import { Link } from 'react-router-dom'
import { BsFacebook,BsInstagram,BsTwitter,BsGithub,BsDribbble } from 'react-icons/bs'

export default function FooterComp(){
  return (
    <Footer container className='border border-t-8 border-teal-500'>
        <div className='w-full max-w-7xl mx-auto'>
            <div className='grid w-full justify-between sm:flex md:grid-cols-1'>
                <div className='mt-5'>
                    <Link to="/" className='self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white'>
                        <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>DevSphere</span>
                        Blog 
                    </Link>
                </div>
                <div className='grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6'>
                    <div>
                        <FooterTitle title='About' />
                        <FooterLinkGroup col>
                            <FooterLink
                                href='https://github.com/tejashcodes24'
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                Projects
                            </FooterLink>

                            <FooterLink
                                href='/about'
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                DevSphere Blog  
                            </FooterLink>
                        </FooterLinkGroup>
                    </div>
                    
                    <div>
                        <FooterTitle title='Follow us' />
                        <FooterLinkGroup col>
                            <FooterLink
                                href='https://github.com/tejashcodes24'
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                Github 
                            </FooterLink>

                            <FooterLink
                                href='#'
                            >
                                Discord 
                            </FooterLink>
                        </FooterLinkGroup>
                    </div>

                    <div>
                        <FooterTitle title='Legal' />
                        <FooterLinkGroup col>
                            <FooterLink
                                href='/privacy&policy'
                                
                            >
                                Privacy Policy
                            </FooterLink>

                            <FooterLink
                                href='/terms&condition'
                            >
                                Terms &amp; Conditions
                            </FooterLink>
                        </FooterLinkGroup>
                    </div>
                </div>                        
            </div>
            <FooterDivider />
            <div className='w-full sm:flex sm:items-center sm:justify-between'>
                <FooterCopyright href='#' by='DevSphere Blog' year={new Date().getFullYear()}/>
                <div className='flex gap-6 sm:mt-0 mt-4 sm:justify-center'>
                    <FooterIcon href='#' icon={BsFacebook}/>
                    <FooterIcon href='#' icon={BsInstagram}/>
                    <FooterIcon href='https://x.com/Tejash_aim' icon={BsTwitter}/>
                    <FooterIcon href='https://github.com/tejashcodes24' icon={BsGithub}/>
                    <FooterIcon href='#' icon={BsDribbble}/>
                </div>
            </div>
        </div>
    </Footer>
  )
}


