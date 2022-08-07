import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import ChatIcon from '@mui/icons-material/Chat';
import './Header.css';
import { IconButton } from '@mui/material';

function Header() {
  return (
    <>
      <div className="tinderHeader">
          <IconButton>
              <PersonIcon className="personIcon" fontSize='large'/>
          </IconButton>
          <h1 style = {{color: 'white'}}>Food Gallery</h1>
          <IconButton>
              <ChatIcon className="chatIcon" fontSize='large'/>
          </IconButton>
      </div>
    </>
  )
}

export default Header;