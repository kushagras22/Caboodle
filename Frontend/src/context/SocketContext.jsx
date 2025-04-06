import { createContext, useEffect } from "react";
import { io } from "socket.io-client";

// Create the SocketContext
export const SocketContext = createContext();

const socket = io(`${import.meta.env.VITE_BASE_URL}`);

const SocketProvider = ({ children }) => {


  useEffect(() => {
    // Log upon connection.
    socket.on("connect", () => {
      console.log("Socket connected with id:", socket.id);
    });

    // Log upon disconnection.
    socket.on("disconnect", (reason) => {
      console.log("Socket disconnected:", reason);
    });

  }, []);



  return (
    <SocketContext.Provider value={{ socket }}>
      {children}
    </SocketContext.Provider>
  );
};

export default SocketProvider; 