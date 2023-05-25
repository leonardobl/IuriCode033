import React from 'react'
import LayoutTemplate from '../layoutTemplate'
import { Menu_enum } from '../../../enuns/menu_enum'

const NewsTemplate = () => {
  return (
    <LayoutTemplate menuItemSelected={Menu_enum.NOTICIAS}>
      <h1>News</h1>
    </LayoutTemplate>
  )
}

export default NewsTemplate
