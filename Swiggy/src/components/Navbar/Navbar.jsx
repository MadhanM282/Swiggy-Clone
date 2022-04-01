import Box from '@mui/material/Box';

import * as React from 'react';
import { Link } from "react-router-dom"

import { AiOutlineSearch } from 'react-icons/ai';
import { IoIosHelpBuoy } from 'react-icons/io';
import { MdLocalOffer } from 'react-icons/md';
import { FaRegUser } from "react-icons/fa";
import { BsFillCartPlusFill } from "react-icons/bs";


export const Navbar = () => {
  return (

    <div>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          p: 1,
          m: 1,
          width: "100%",
          margin: "auto",
          bgcolor: 'background.paper',
          justifyContent: "space-around",
          alignItems: "center",
          borderRadius: 1,
        }}
      >
        <img src="https://seeklogo.com/images/S/swiggy-logo-8EF8260FA4-seeklogo.com.png" height="50px" />
        <select style={{ width: "50%", height: "50px" }}>
          <option>Select your Location</option>
          <option value="">Indore</option>
          <option value="">Pune</option>
          <option value="">Hyderabad</option>
          <option value="">Delhi</option>
          <option value="">Banglore</option>
        </select>


        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            p: 1,
            m: 1,
            width: "400px",
            justifyContent: "space-around",
            bgcolor: 'background.paper',
            borderRadius: 1,
          }}
        >
          <Link to={"/search"} style={{ textDecoration: "none", color: "black", display: "flex" }}><AiOutlineSearch style={{ marginTop: "20px" }} /><p>Search</p></Link>
          <p><IoIosHelpBuoy />Help</p>
          <p><MdLocalOffer />Offers</p>
          <Link to={"/login"} style={{ textDecoration: "none", color: "black" }}><p><FaRegUser />Sign In</p></Link>
          <p><BsFillCartPlusFill />Cart</p>
        </Box>



      </Box>


    </div>
  )
}