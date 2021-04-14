import React, { useContext, useEffect } from 'react';
import { SocketContext } from '../context/SocketContext';



export const BandChart = () => {
    
  const { socket } = useContext( SocketContext );

  return (
    <>
    <h1>Hello</h1>
    </>
  )
}
