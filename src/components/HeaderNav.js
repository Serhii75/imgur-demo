import React from 'react'
import { Navbar } from 'react-bootstrap'
import SectionLink from '../containers/SectionLink'

const HeaderNav = () => (
  <Navbar inverse collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="/">Imgur Demo Client</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <ul className="nav navbar-nav navbar-right">
        <li><SectionLink section="hot">Hot</SectionLink></li>
        <li><SectionLink section="top">Top</SectionLink></li>
        <li><SectionLink section="user">User</SectionLink></li>
      </ul>
    </Navbar.Collapse>
  </Navbar>
)

export default HeaderNav
