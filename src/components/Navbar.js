const React = require('react');
const {Navbar, NavItem, Nav, NavDropdown, MenuItem} = require('react-bootstrap');

const navbarInstance = <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#">React_Redux_留言板</a>
      </Navbar.Brand>
    </Navbar.Header>
    <Nav>
      <NavItem eventKey={1} href="#">列表</NavItem>
      <NavItem eventKey={2} href="#">论坛</NavItem>
      <NavDropdown eventKey={3} title="我的" id="basic-nav-dropdown">
        <MenuItem eventKey={3.1}>个人中心</MenuItem>
        <MenuItem eventKey={3.2}>我的留言</MenuItem>
        <MenuItem eventKey={3.3}>我的文章</MenuItem>
        <MenuItem divider />
        <MenuItem eventKey={3.4}>退出登录</MenuItem>
      </NavDropdown>
    </Nav>
  </Navbar>

module.exports = navbarInstance;
