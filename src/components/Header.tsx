import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText,
} from 'reactstrap';

interface argsInter {
    color: string;
    expand: string;
}

function Header(args: argsInter) {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            {/* reactstrap에 포함되어있는 bootstrap의 navbar로 args에서 가져온 요소를 보낸다*/}
            <Navbar {...args}>
                <NavbarBrand href='/'>나만의 게시판</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className='me-auto' navbar>
                        <NavItem>
                            <NavLink href='/'>Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href='/board'>Board</NavLink>
                        </NavItem>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                Options
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>Option 1</DropdownItem>
                                <DropdownItem>Option 2</DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>Reset</DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                    <NavbarText>Simple Project01</NavbarText>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default Header;
