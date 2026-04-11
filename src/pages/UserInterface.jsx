import React from 'react'
import NavBar from '../components/NavBar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'

const UserInterface = ({openMenu,setOpenMenu}) => {
  return (
    <>
    <NavBar openMenu={openMenu} setOpenMenu={setOpenMenu}></NavBar>
    <Outlet></Outlet>
    <Footer ></Footer>
    </>
  )
}

export default UserInterface