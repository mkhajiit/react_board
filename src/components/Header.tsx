import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
    //reactstrap나 일부 라이브러리는 자체적으로 라우팅 기능을 가지지 않고, 간단한 HTML 속성만을 사용하여 페이지 간 이동을 수행합니다.
    //이 경우에는 해당 라이브러리의 컴포넌트에서 react-router-dom의 라우팅과 관련된 속성을 직접 지원하지 않을 수 있습니다. 때문에 router에서 basename이 안먹혔고 이렇게 선언해서 해결했다
    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            {/* reactstrap에 포함되어있는 bootstrap의 navbar로 args에서 가져온 요소를 보낸다*/}
            <Navbar {...args}>
                <NavbarBrand tag={Link} to={''}>
                    나만의 게시판
                </NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className='me-auto' navbar>
                        <NavItem>
                            <Link to={''} className='nav-link'>
                                Home
                            </Link>
                        </NavItem>
                        <NavItem>
                            <Link to={'/board'} className='nav-link'>
                                Board
                            </Link>
                        </NavItem>
                        <NavItem>
                            <Link to={'/test'} className='nav-link'>
                                DynamicList
                            </Link>
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
