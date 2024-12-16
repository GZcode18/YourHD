'use client'
import React, { useState } from "react";
import { Button, Col, Container, Row } from "reactstrap";
import Image from "next/image";
import LogoWhite from "/public/images/logos/logo.png";
import Link from "next/link";
import HeaderAdmin from "../layouts/header/HeaderAdmin";

// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import { useEffect } from "react"

const FullLayout = ({ children }) => {
  const [open, setOpen] = React.useState(false);
  const showMobilemenu = () => {
    setOpen(!open);
  };

  // useEffect(() => {
  //   AOS.init({
  //     duration: 800,
  //     once: false,
  //   })
  // }, [])

  let select;
  const [activeButton, setActiveButton] = useState("dashboard");

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
    select = buttonName;
  };

  return (
    <main>
      <div className="pageWrapper d-md-block d-lg-flex">
        <div className="contentArea">

          {/********Middle Content**********/}
          <Container className="p-0 m-0 wrapper" fluid style={{ width: '100%' }}>
            <div className="w-100 p-0 m-0" style={{ backgroundColor: '#F4F6F7' }}>
              <Row className="m-0 p-0">
                <Col lg='3' md='12' sm='12' xs='12' className="position-relative p-0 m-0" style={{ height: '100vh' }}>
                  <div className="sidebar bg-white h-100 d-flex flex-column p-3 gap-1 pt-2">
                    <Image src={LogoWhite} width={'100%'} height={80} alt="logo" className="mb-5" />
                    <Link href="/admin" >
                      <Button className={activeButton === "dashboard" ? "active" : ""}
                        onClick={() => handleButtonClick("dashboard")}>
                        <svg width="25" height="25" viewBox="0 0 25 25" fill="#a6011c" xmlns="http://www.w3.org/2000/svg">
                          <path d="M22.2656 6.25C21.9476 6.25008 21.6345 6.32781 21.3533 6.47643C21.0722 6.62505 20.8316 6.84007 20.6524 7.1028C20.4733 7.36554 20.361 7.66804 20.3253 7.98404C20.2897 8.30003 20.3317 8.61996 20.4478 8.91602L16.3379 13.0259C15.8797 12.8455 15.3703 12.8455 14.9121 13.0259L11.9741 10.0879C12.0905 9.79176 12.1327 9.4717 12.0971 9.15553C12.0616 8.83936 11.9494 8.53666 11.7702 8.27376C11.591 8.01085 11.3503 7.7957 11.069 7.64701C10.7878 7.49832 10.4744 7.42059 10.1562 7.42059C9.83809 7.42059 9.52475 7.49832 9.24347 7.64701C8.96219 7.7957 8.7215 8.01085 8.54232 8.27376C8.36313 8.53666 8.25089 8.83936 8.21535 9.15553C8.17981 9.4717 8.22204 9.79176 8.33838 10.0879L3.44726 14.979C3.02955 14.8151 2.56816 14.8001 2.14066 14.9364C1.71316 15.0727 1.34564 15.3521 1.09988 15.7275C0.854128 16.1029 0.74513 16.5515 0.791216 16.9978C0.837303 17.4442 1.03566 17.861 1.35294 18.1783C1.67023 18.4956 2.08708 18.6939 2.53341 18.74C2.97974 18.7861 3.42832 18.6771 3.80374 18.4314C4.17916 18.1856 4.45851 17.8181 4.59483 17.3906C4.73114 16.9631 4.7161 16.5017 4.55224 16.084L9.44336 11.1929C9.90151 11.3732 10.411 11.3732 10.8691 11.1929L13.8071 14.1309C13.6908 14.427 13.6486 14.7471 13.6841 15.0632C13.7196 15.3794 13.8319 15.6821 14.0111 15.945C14.1902 16.2079 14.4309 16.4231 14.7122 16.5717C14.9935 16.7204 15.3068 16.7982 15.625 16.7982C15.9432 16.7982 16.2565 16.7204 16.5378 16.5717C16.8191 16.4231 17.0598 16.2079 17.2389 15.945C17.4181 15.6821 17.5304 15.3794 17.5659 15.0632C17.6014 14.7471 17.5592 14.427 17.4429 14.1309L21.5527 10.021C21.8202 10.1261 22.1075 10.1708 22.3942 10.1521C22.681 10.1334 22.96 10.0516 23.2115 9.91263C23.463 9.77366 23.6808 9.58091 23.8492 9.34813C24.0177 9.11535 24.1327 8.84827 24.186 8.56593C24.2394 8.28359 24.2298 7.99296 24.158 7.71475C24.0861 7.43654 23.9538 7.1776 23.7704 6.95642C23.587 6.73523 23.357 6.55724 23.0969 6.43513C22.8368 6.31303 22.553 6.24981 22.2656 6.25Z" fill="currenColor" />
                        </svg>
                        Dashboard Analythicts</Button>
                    </Link>
                    <hr />
                    <Link href="/admin/data-user">
                      <Button className={activeButton === "dataUser" ? "active" : ""}
                        onClick={() => handleButtonClick("dataUser")}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#a6011c" className="bi bi-people-fill" viewBox="0 0 16 16">
                          <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" />
                        </svg>
                        Data User</Button>
                    </Link>
                    <hr />
                    <Link href="/admin/data-penyakit">
                      <Button className={activeButton === "dataPsikiater" ? "active" : ""}
                        onClick={() => handleButtonClick("dataPsikiater")}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#a6011c" className="bi bi-file-earmark-medical-fill" viewBox="0 0 16 16">
                          <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0M9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1m-3 2v.634l.549-.317a.5.5 0 1 1 .5.866L7 7l.549.317a.5.5 0 1 1-.5.866L6.5 7.866V8.5a.5.5 0 0 1-1 0v-.634l-.549.317a.5.5 0 1 1-.5-.866L5 7l-.549-.317a.5.5 0 0 1 .5-.866l.549.317V5.5a.5.5 0 1 1 1 0m-2 4.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1m0 2h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1" />
                        </svg>
                        Data Penyakit</Button>
                    </Link>
                    <Link href="/admin/data-gejala">
                      <Button className={activeButton === "layanan" ? "active" : ""}
                        onClick={() => handleButtonClick("layanan")}>
                        <svg width="25" height="25" viewBox="0 0 25 25" fill="#a6011c" xmlns="http://www.w3.org/2000/svg">
                          <path d="M17.1875 4.6875H21.0938V22.6562H3.90625V4.6875H7.8125V6.25H17.1875V4.6875ZM7.03125 12.5H17.9688V10.9375H7.03125V12.5ZM7.03125 18.75H17.9688V17.1875H7.03125V18.75ZM9.375 4.6875V2.34375H15.625V4.6875H9.375Z" fill="currentColor" />
                        </svg>
                        Data Gejala</Button>
                    </Link>
                    {/* <Link href="/admin/solusi" >
                      <Button className={activeButton === "orders" ? "active" : ""}
                        onClick={() => handleButtonClick("orders")}>
                        <svg width="25" height="25" viewBox="0 0 25 25" fill="#a6011c" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" clipRule="evenodd" d="M7.97812 1.8625C8.05122 1.76903 8.14465 1.69343 8.25131 1.64145C8.35798 1.58947 8.47509 1.56247 8.59375 1.5625H16.4062C16.5249 1.56253 16.642 1.5896 16.7487 1.64164C16.8553 1.69369 16.9487 1.76935 17.0218 1.86287C17.0948 1.9564 17.1456 2.06534 17.1702 2.18142C17.1949 2.2975 17.1928 2.41767 17.1641 2.53281L17.0156 3.125H19.5312C19.7385 3.125 19.9372 3.20731 20.0837 3.35382C20.2302 3.50034 20.3125 3.69905 20.3125 3.90625V22.6562C20.3125 22.8635 20.2302 23.0622 20.0837 23.2087C19.9372 23.3552 19.7385 23.4375 19.5312 23.4375H5.46875C5.26155 23.4375 5.06284 23.3552 4.91632 23.2087C4.76981 23.0622 4.6875 22.8635 4.6875 22.6562V3.90625C4.6875 3.69905 4.76981 3.50034 4.91632 3.35382C5.06284 3.20731 5.26155 3.125 5.46875 3.125H7.98438L7.83594 2.53281C7.80693 2.41774 7.80451 2.29757 7.82888 2.18142C7.85325 2.06528 7.90531 1.95621 7.97812 1.8625ZM15.4062 3.125H9.59375L9.98438 4.6875H15.0156L15.4062 3.125ZM17.1875 18.75H7.8125V17.1875H17.1875V18.75ZM9.375 15.625L11.7188 14.8438L16.4062 10.1562L14.8438 8.59375L10.1562 13.2812L9.375 15.625Z" fill="currentColor" />
                        </svg>
                        Solusi Penyakit</Button>
                    </Link> */}
                    <Link href="/admin/bobot-intensitas" >
                      <Button className={activeButton === "orders" ? "active" : ""}
                        onClick={() => handleButtonClick("orders")}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#a6011c" className="bi bi-percent" viewBox="0 0 16 16">
                          <path d="M13.442 2.558a.625.625 0 0 1 0 .884l-10 10a.625.625 0 1 1-.884-.884l10-10a.625.625 0 0 1 .884 0M4.5 6a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m0 1a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5m7 6a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m0 1a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" />
                        </svg>
                        Bobot Intensitas</Button>
                    </Link>
                  </div>
                </Col>
                <Col lg='9' md='12' sm='12' xs='12' className="p-0 m-0">
                  <div className="main-content-wrapper">
                    <HeaderAdmin showMobmenu={() => showMobilemenu()} />
                    {children}
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
      </div>
    </main>
  );
};

export default FullLayout;