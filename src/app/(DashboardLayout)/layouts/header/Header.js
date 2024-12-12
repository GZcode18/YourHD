import React from "react";
import Link from "next/link";
import {
  Navbar,
  Collapse,
  Nav,
  NavItem,
  NavbarBrand,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Dropdown,
  Button,
} from "reactstrap";
import Image from "next/image";
import LogoWhite from "/public/images/logos/logo.png";
// import user1 from "public/images/users/user1.jpg";

const Header = ({ showMobmenu, status }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [dropdownOpen, setDropdownOpen] = React.useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);
  const Handletoggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Navbar color="" dark expand="md" className='position-fixed'>
      <div className="d-flex align-items-center">
        <NavbarBrand href="/" className="d-lg-none">
          <Image src={LogoWhite} alt="logo" width={50} height={50} />
        </NavbarBrand>
        <Button color="primary" className="d-lg-none" onClick={showMobmenu}>
          <i className="bi bi-list"></i>
        </Button>
      </div>
      <div className="hstack gap-2">
        <Button
          color="primary"
          size="sm"
          className="d-sm-block d-md-none"
          onClick={Handletoggle}
        >
          {isOpen ? (
            <i className="bi bi-x"></i>
          ) : (
            <i className="bi bi-three-dots-vertical"></i>
          )}
        </Button>
      </div>
      <Collapse navbar isOpen={isOpen}>
        <Nav className="me-auto" navbar>
          <Image
            src={LogoWhite}
            alt="profile"
            className="rounded-circle"
            width={'100%'}
            height={60}
          />
          <div className="d-flex position-absolute w-100 justify-content-center gap-3 align-items-center m-auto h-100 top-0">
              <>
                <NavItem>
                  <Link href="/" className="nav-link">
                    Home
                  </Link>
                </NavItem>
                <NavItem>
                  <Link href="#kesehatanJantung" className="nav-link">
                    Kesehatan Jantung
                  </Link>
                </NavItem>
                <NavItem>
                  <Link href="#penyakitJantung" className="nav-link">
                    Penyakit Jantung
                  </Link>
                </NavItem>
                <NavItem>
                  <Link href="#tentang" className="nav-link">
                    Tentang YourHD
                  </Link>
                </NavItem>
              </>

            {/* <UncontrolledDropdown inNavbar nav>
              <DropdownToggle caret nav>
                DD Menu
              </DropdownToggle>
              <DropdownMenu end>
                <DropdownItem>Option 1</DropdownItem>
                <DropdownItem>Option 2</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Reset</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown> */}
          </div>
        </Nav>
        {status === "BeforeAuth" ? (
          <Link href="/login" style={{ zIndex: '2' }}>
            <Button className="bg-primer">Login</Button>
          </Link>
        ) : (
          <Dropdown isOpen={dropdownOpen} toggle={toggle}>
            <DropdownToggle className='bg-transparent'>
              <svg width="40" height="40" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 20C28.4183 20 32 16.4183 32 12C32 7.58172 28.4183 4 24 4C19.5817 4 16 7.58172 16 12C16 16.4183 19.5817 20 24 20Z" fill="#04567E" />
                <path d="M40 35C40 39.97 40 44 24 44C8 44 8 39.97 8 35C8 30.03 15.164 26 24 26C32.836 26 40 30.03 40 35Z" fill="#04567E" />
              </svg>
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem header>Info</DropdownItem>
              <Link href="/user/my-profile">
                <DropdownItem>My Account</DropdownItem>
              </Link>
              <Link href="/user/my-profile/edit-profile">
                <DropdownItem>Edit Profile</DropdownItem>
              </Link>
              <DropdownItem divider />
              <DropdownItem>Logout</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        )}
      </Collapse>
    </Navbar >
  );
};

export default Header;
