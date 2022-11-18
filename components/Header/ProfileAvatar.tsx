import React from 'react'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search'
import PersonIcon from '@mui/icons-material/Person'
import ListIcon from '@mui/icons-material/List'

function ProfileAvatar() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div className="flex gap-4">
      <ListIcon />
      <SearchIcon />
      <button onClick={handleClick}>
        {/* <img
          src="https://res.cloudinary.com/drij60fru/image/upload/v1665355945/nflx-avatar_thvptr.png"
          alt="profile-avatar"
          className="w-10 cursor-pointer rounded-sm"
        /> */}
        <PersonIcon />
      </button>
      <Menu
        id="sm-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        className=""
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Home</MenuItem>
        <MenuItem onClick={handleClose}>Account</MenuItem>
        <MenuItem onClick={handleClose}>Log Out</MenuItem>
      </Menu>
    </div>
  )
}

export default ProfileAvatar
