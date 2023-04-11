import React, { useState, useEffect } from "react";
import './Sidebar.css'
import { Avatar, IconButton } from '@mui/material'
import { useStateValue } from '../ContextApi/StateProvider'
import {Chat, DonutLarge, MoreVert,Room,SearchOutlined } from '@mui/icons-material'
import SidebarChat from '../SidebarChat/SidebarChat'
import Pusher from "pusher-js";
// import { useStateValue } from "../ContextApi/StateProvider";
import axios from "axios";


const Sidebar = () => {
  const [rooms, setRooms] = useState([]);
  const [{ user }] = useStateValue();


    useEffect(() => {
      axios.get('https://whatsapp-db.onrender.com/all/rooms').then((response) => {
        setRooms(response.data);
      });
    }, []);
  
    
    useEffect(() => {
      const pusher = new Pusher("84127ae384cf63a3b2c5", {
        cluster: "ap2",
      });
  
      const channel = pusher.subscribe("room");
      channel.bind("inserted", function (room) {
        // alert(JSON.stringify(newMessage));
        setRooms((prevRooms) => [...prevRooms, room]);
      });
  
      return () => {
        channel.unbind_all();
        channel.unsubscribe();
      };
    }, []);
   

  return (
    <div  className='sidebar'>
      <div className="sidebar__header">
        <Avatar src={user.photoURL}/>
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
        <SidebarChat addNewChat />
        {rooms.map((room) => (
          <SidebarChat key={room._id} id={room._id} name={room.name} />
        ))}
      </div>
    </div>
  )
}

export default Sidebar;
