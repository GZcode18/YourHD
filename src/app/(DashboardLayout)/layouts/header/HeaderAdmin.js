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
  Input,
} from "reactstrap";
import Image from "next/image";
import LogoWhite from "/public/images/logos/logo.png";
// import user1 from "public/images/users/user1.jpg";

const HeaderAdmin = ({ showMobmenu }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [dropdownOpen, setDropdownOpen] = React.useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);
  const Handletoggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="px-3 w-100 pt-3">
      <Navbar color="" dark expand="md" className="navbaradmin">
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
          <Nav className="me-auto w-25 d-flex align-items-center" navbar>
            <svg width="24" height="24" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.25 13.125L8.3125 9.1875C8 9.4375 7.64063 9.63542 7.23438 9.78125C6.82813 9.92708 6.39583 10 5.9375 10C4.80208 10 3.84125 9.60667 3.055 8.82C2.26875 8.03333 1.87542 7.0725 1.875 5.9375C1.87458 4.8025 2.26792 3.84167 3.055 3.055C3.84208 2.26833 4.80292 1.875 5.9375 1.875C7.07208 1.875 8.03313 2.26833 8.82063 3.055C9.60813 3.84167 10.0013 4.8025 10 5.9375C10 6.39583 9.92708 6.82812 9.78125 7.23438C9.63542 7.64062 9.4375 8 9.1875 8.3125L13.125 12.25L12.25 13.125ZM5.9375 8.75C6.71875 8.75 7.38292 8.47667 7.93 7.93C8.47708 7.38333 8.75042 6.71917 8.75 5.9375C8.74958 5.15583 8.47625 4.49188 7.93 3.94563C7.38375 3.39938 6.71958 3.12583 5.9375 3.125C5.15542 3.12417 4.49146 3.39771 3.94563 3.94563C3.39979 4.49354 3.12625 5.1575 3.125 5.9375C3.12375 6.7175 3.39729 7.38167 3.94563 7.93C4.49396 8.47833 5.15792 8.75167 5.9375 8.75Z" fill="#04567E" />
            </svg>
            <Input type="text" placeholder="Search" className="rounded-3 border-0 ps-1" />
          </Nav>
          <Link href="#" className="me-3">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C10.1435 2 8.363 2.7375 7.05024 4.05025C5.73749 5.36301 4.99999 7.14348 4.99999 9V12.528C5.00014 12.6831 4.96419 12.8362 4.89499 12.975L3.17799 16.408C3.09412 16.5757 3.05451 16.7621 3.06294 16.9494C3.07137 17.1368 3.12754 17.3188 3.22614 17.4783C3.32473 17.6379 3.46246 17.7695 3.62626 17.8608C3.79005 17.9521 3.97447 18 4.16199 18H19.838C20.0255 18 20.2099 17.9521 20.3737 17.8608C20.5375 17.7695 20.6753 17.6379 20.7738 17.4783C20.8724 17.3188 20.9286 17.1368 20.937 16.9494C20.9455 16.7621 20.9059 16.5757 20.822 16.408L19.106 12.975C19.0365 12.8362 19.0002 12.6832 19 12.528V9C19 7.14348 18.2625 5.36301 16.9497 4.05025C15.637 2.7375 13.8565 2 12 2ZM12 21C11.3793 21.0003 10.7739 20.8081 10.267 20.4499C9.76016 20.0917 9.37688 19.5852 9.16999 19H14.83C14.6231 19.5852 14.2398 20.0917 13.733 20.4499C13.2261 20.8081 12.6206 21.0003 12 21Z" fill="#04567E" />
            </svg>
          </Link>
          <Link href="/admin/profile" style={{ zIndex: '2' }}>
            <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.5 11.25C15.9853 11.25 18 9.23528 18 6.75C18 4.26472 15.9853 2.25 13.5 2.25C11.0147 2.25 9 4.26472 9 6.75C9 9.23528 11.0147 11.25 13.5 11.25Z" fill="#04567E" />
              <path d="M22.5 19.6875C22.5 22.4831 22.5 24.75 13.5 24.75C4.5 24.75 4.5 22.4831 4.5 19.6875C4.5 16.8919 8.52975 14.625 13.5 14.625C18.4703 14.625 22.5 16.8919 22.5 19.6875Z" fill="#04567E" />
            </svg>
          </Link>
        </Collapse>
      </Navbar >
    </div>
  );
};

export default HeaderAdmin;
