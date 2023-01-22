import React from 'react'
import { Outlet } from 'react-router-dom'
import { Carousel } from './Carousel'
import { Navegacion } from './Navegacion'

export const Principal = () => {
  return (
    <>
        <Navegacion />
        <Outlet />
    </>
  )
}
