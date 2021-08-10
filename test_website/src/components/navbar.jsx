import React from 'react'
import { useState } from 'react'
import '../App.scss'
import { Link } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'

function DropdownMenu(props) {

  return (
    <CSSTransition in={props.state === true} unmountOnExit timeout={500} classNames='DDTransition'>
      <div id='DropdownMenu' >
        {props.items}
        {props.children}
      </div>
    </CSSTransition>
  )

  
}


function NavItem(props) {
  const [open, setState] = useState(false);
  if (props.children === undefined)
    return (
      <Link exact='true' to={props.to} id='NavItem' >
        {(props.icon !== undefined) ? <img src={props.icon} alt='' /> : <></>}
        {(props.label !== undefined) ? <p>{props.label}</p> : <></>}
      </Link>
    )

  else {
    return (
      <div id='NavItem' onClick={() => setState(!open)} style={{ cursor: 'pointer' }}>
        {(props.icon !== undefined) ? <img src={props.icon} alt='' /> : <></>}
        {(props.label !== undefined) ? <p>{props.label}</p> : <></>}
        <DropdownMenu items={props.children} state={open} />
      </div>
    )
  }
}

class Navbar extends React.Component {
  constructor() {
    super()
    this.state = {}
  }
  render() {
    return (
      <div id='navbar-top'>
        <div id='logo'>some logo</div>

        <NavItem label='banana' to='/banana' />
        <NavItem icon='https://image.flaticon.com/icons/png/512/4245/4245351.png' to='/about_page' />
        <NavItem label='home' to='/' />
        <NavItem label='Projects' >

          <NavItem label='1D Automata' to='/1d-automata' />
          <NavItem label='project 2' to='/project-2' />
          <NavItem label='project 3' to='/project-3' />

        </NavItem>
      </div>
    )
  }
}

export default Navbar