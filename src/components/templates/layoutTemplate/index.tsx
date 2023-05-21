import React from 'react'
import Menu from '../../Molecules/menu'
import { Menu_enum } from '../../../enuns/menu_enum'

type LayoutProps = {
  menuItemSelected: Menu_enum
  children: JSX.Element
}

const LayoutTemplate = ({ children, menuItemSelected }: LayoutProps) => {
  return (
    <div>
      <Menu menuItemSelected={menuItemSelected} />
      {children}
    </div>
  )
}

export default LayoutTemplate
