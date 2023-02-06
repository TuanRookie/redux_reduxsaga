import React, { useState } from "react";
import { MDBContainer, MDBNavbar, MDBNavbarBrand, MDBNavbarToggler, MDBIcon, MDBNavbarNav, MDBNavbarLink, MDBNavbarItem, MDBCollapse } from "mdb-react-ui-kit";
import { NavLink } from "react-router-dom";

const NavBar = () => {
    const [showBasic, setShowBasic] = useState(false);

    return (
        <>
            <MDBNavbar expand="lg" light bgColor="primary">
                <MDBContainer fluid>
                    <MDBNavbarBrand className="text-white">
                        <span style={{ marginRight: "10px" }}>
                            <MDBIcon fas icon="book-open" />
                        </span>
                        Contact
                    </MDBNavbarBrand>
                    <MDBNavbarToggler
                        aria-controls='navbar'
                        aria-expanded='false'
                        aria-label='Toggle navigation'
                        className="text-while"
                        onClick={() => setShowBasic(!showBasic)}
                    >
                        <MDBIcon fas icon="bars" />
                    </MDBNavbarToggler>
                    <MDBCollapse navbar show={showBasic}>
                        <MDBNavbarNav className="mr-auto mb-2 mb-lg-0">
                            <MDBNavbarItem>
                                <MDBNavbarLink className="nav-link">
                                    <NavLink className="text-white" to="/">
                                        Home
                                    </NavLink>
                                </MDBNavbarLink>
                            </MDBNavbarItem>

                            <MDBNavbarItem>
                                <MDBNavbarLink className="nav-link">
                                    <NavLink className="text-white" to="/addUser">
                                        Add User
                                    </NavLink>
                                </MDBNavbarLink>
                            </MDBNavbarItem>

                            <MDBNavbarItem>
                                <MDBNavbarLink className="nav-link">
                                    <NavLink className="text-white" to="/about">
                                        About
                                    </NavLink>
                                </MDBNavbarLink>
                            </MDBNavbarItem>

                        </MDBNavbarNav>
                    </MDBCollapse>
                </MDBContainer>
            </MDBNavbar>
        </>
    )
}
export default NavBar;