import React from "react";
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { FaUser } from "react-icons/fa";
import { logoutUserAction } from "../../features/users/userAction";
import { useDispatch } from "react-redux";

export const Header = () => {
  const dispatch = useDispatch();
  const logout = () => {
    dispatch(logoutUserAction());
  };

  return (
    <Navbar expand="lg" className="theme-default">
      <Container>
        <Navbar.Brand href="/admin/dashboard">ADMIN-CMS</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavDropdown title={<FaUser />} id="basic-nav-dropdown">
              <NavDropdown.Item href="/admin/profile">Profile</NavDropdown.Item>
              <NavDropdown.Item href="/admin/change-password">Change Password</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#" onClick={logout}>
                Logout
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
