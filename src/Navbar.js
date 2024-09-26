import React, { useState } from 'react'
import { BsCart2 } from 'react-icons/bs';
import { HiOutlineBars3 } from 'react-icons/hi2';
// import Logo from "./Assets/pic.jpeg";
import {
  Box,
  Drawer,
  List,
  ListItem ,
  ListItemButton,
  ListItemIcon,
  ListItemText,
}from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import  CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";

const Navbar = () => {
     const [openMenu,setOpenMenu] = useState(false)
     const menuOptions = [
      
        {
            text:"Home",
            icon:<HomeIcon />,
        },
        {
            text:"About",
            icon:<InfoIcon />,
        },
        {
            text:"Testimonials",
            icon:<CommentRoundedIcon />,
        },

        {
            text:"Contact",
            icon:<PhoneRoundedIcon/>,
        },
        {
            text:"Cart",
            icon:<ShoppingCartRoundedIcon/>,
        },
     ];
     return <nav>
        <div>
         {/* { <img src ={ Logo } alt="" />  } */}
         <h1 className="font">TRENDYJackets</h1>

        </div>
     <div className='navbar-links-container'>
       < a href ="/">Home</a>
       < a href ="#about">About</a>
       < a href ="#testimonial">Testimonials</a>
       < a href ="#contact">Contact</a>
       < a href =""><BsCart2 className="navbar-cart-icon" /></a>
       <button className="primary-button">Bookings Now </button>

     </div>
     <div>
        <div className="navbar-menu-container">
            <HiOutlineBars3 onClick={()=> setOpenMenu(true)} />
        </div>
        <Drawer open = {openMenu} onClose={()=> setOpenMenu(false)}
        anchor="right">
            <Box 
            xs= {{ width :250 }}
            role="presentation"
            onClick ={() => setOpenMenu(false)}
            onKeyDown ={() => setOpenMenu(false)}
            >

            <List>
                {menuOptions.map((item) =>(
                    <ListItem key ={item.text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon> {item.icon}</ListItemIcon>
                            <ListItemText primary={item.text} />
                        </ListItemButton>
                    </ListItem>



                ))}
            </List>
            </Box>
            </Drawer>

     </div>
     </nav>
     }
    
export default Navbar;
