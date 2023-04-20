import React, { useState, useEffect } from "react";
import { Text, View } from "react-native";
import Login from "./Login";
import { io } from "socket.io-client";

export default function MainScreen() {
  const [backendSignalReceived, setBackendSignalReceived] = useState(false);
  const socket = io("http://27.0.173.191:3001");
  useEffect(() => {
    // Call your backend API here to check for the signal
    // When the signal is received, update the state variable
    // setBackendSignalReceived(false);

    socket.on("data", (data) => {
      const tokenValidado = data.body;
      console.log(tokenValidado);

      if (tokenValidado) {
        setBackendSignalReceived(true);
        const timer = setTimeout(() => {
          window.location.reload();
        }, 180000);
        return () => clearTimeout(timer);
      }
    });
  }, []);

  // Render a message depending on whether the signal has been received or not
  if (backendSignalReceived) {
    return <Login />;
  } else {
    return (
      <View>
        <Text>Waiting for validation from backend...</Text>
      </View>
    );
  }
}
