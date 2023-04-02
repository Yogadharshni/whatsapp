import React from 'react'
import './Sidebar.css'
import { Avatar, IconButton } from '@mui/material'
import { useStateValue } from '../ContextApi/StateProvider'
import {Chat, DonutLarge, MoreVert,SearchOutlined } from '@mui/icons-material'
import SidebarChat from '../SidebarChat/SidebarChat'
// import { useStateValue } from '../ContextApi/StateProvider' 

const Sidebar = () => {
    const [{ user }] = useStateValue();
  return (
    <div  className='sidebar'>
      <div className="sidebar__header">
        <Avatar src='user.photoURL'/>
        <div className="sidebar__headerRight">
            <IconButton>
                <DonutLarge/>
            </IconButton>
            <IconButton>
                <Chat/>
            </IconButton>
            <IconButton>
                <MoreVert/>
            </IconButton>
        </div>
      </div>
      <div className="sidebar__search">
        <div className="sidebar__searchContainer">
          <SearchOutlined />
          <input type="text" placeholder="Search or start new chat" />
        </div>
      </div>
      <div className="sidebar__chats">
        <SidebarChat addNewChat/>
        <SidebarChat/>
        <SidebarChat/>
        <SidebarChat/>
        <SidebarChat/>
        {/* <SidebarChat addNewChat />
        {rooms.map((room) => (
          <SidebarChat key={room._id} id={room._id} name={room.name} />
        ))} */}
      </div>
    </div>
  )
}

export default Sidebar
