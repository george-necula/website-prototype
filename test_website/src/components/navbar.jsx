import React from 'react'
import {useState} from 'react'
import '../App.scss'
import { Link } from 'react-router-dom'

function DropdownMenu(props){
  
  return(
    <div id='DropdownMenu'>
      {props.children}
    </div>
  )
}


function NavItem(props){
  const [open, setState] = useState(false);
    if(props.children === undefined)
      return (
          <Link exact to={props.to} id='NavItem' >
            {(props.icon !== undefined) ? <img src={props.icon} alt=''/> : <></>}
            {(props.label !== undefined) ? <p>{props.label}</p> : <></>}
          </Link>
      )

    else{
      return (
        <Link exact to={props.to} id='NavItem' onClick={() => setState(!open)}>
          {(props.icon !== undefined) ? <img src={props.icon} alt=''/> : <></>}
          {(props.label !== undefined) ? <p>{props.label}</p> : <></>}
          {open && props.children}
        </Link>
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
        <NavItem icon='https://image.flaticon.com/icons/png/512/4245/4245351.png' to='/about_page'/>
        <NavItem label='home' to='/' />
        <NavItem label='dropdown test'>
          
          <DropdownMenu>
            <NavItem label='test 1' to=''/>
            <NavItem label='test 2' to=''/>

            <NavItem label='test inner'>
              <DropdownMenu>
                <NavItem label='test 1' to=''/>
                <NavItem label='test 2' to=''/>
                <NavItem label='test 3' to=''/>
              </DropdownMenu>
            </NavItem>
            
            <NavItem label='test 3' to='/something'/>
          </DropdownMenu>
        </NavItem>
      </div>
    )
  }
}

export default Navbar