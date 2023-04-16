import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

const Chats = () => {
  const [chats, setChats] = useState([]);

  const URL = "http://localhost:7000";
  const fetchChats = async () => {
    try {
      const { data } = await axios.get(`${URL}/api/chats`);
      setChats(data);
      return data;
    } catch (error) {
      console.log("Error while calling fetchChatsapi", error.message);
    }
  };
  useEffect(() => {
    fetchChats();
  }, []);

  return (
    <div>
      {chats.map((d) => (
        <div key={d._id}>{d.chatName}</div>
      ))}
    </div>
  );
};

export default Chats;
