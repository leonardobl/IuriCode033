import React from 'react'
import LayoutTemplate from '../layoutTemplate'
import { Menu_enum } from '../../../enuns/menu_enum'

const HomeTemplate = () => {
  return (
    <LayoutTemplate menuItemSelected={Menu_enum.INICIO}>
      <h1>Home</h1>
    </LayoutTemplate>
  )
}

export default HomeTemplate
