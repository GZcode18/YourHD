'use client'
import { Col, Row } from "reactstrap";
import Header from "../layouts/header/Header";
import Image from "next/image";

export default function PenyakitJantungs() {
    return (
        <>
            <Header />
            <div className="w-100 bg-white px-5 pb-5 d-flex flex-column justify-content-between" style={{ minHeight: '100vh', maxHeight: '100%', paddingTop: '10vh' }}>
                <div className="d-flex align-items-center gap-3">
                    <svg width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.0312 25.7812H46.4062C46.8621 25.7812 47.2993 25.9623 47.6216 26.2847C47.9439 26.607 48.125 27.0442 48.125 27.5C48.125 27.9558 47.9439 28.393 47.6216 28.7153C47.2993 29.0377 46.8621 29.2188 46.4062 29.2188H12.0312C11.5754 29.2188 11.1382 29.0377 10.8159 28.7153C10.4936 28.393 10.3125 27.9558 10.3125 27.5C10.3125 27.0442 10.4936 26.607 10.8159 26.2847C11.1382 25.9623 11.5754 25.7812 12.0312 25.7812Z" fill="#A6011C" />
                        <path d="M12.743 27.5L26.9983 41.7518C27.321 42.0746 27.5023 42.5123 27.5023 42.9687C27.5023 43.4251 27.321 43.8629 26.9983 44.1856C26.6755 44.5083 26.2378 44.6896 25.7814 44.6896C25.325 44.6896 24.8873 44.5083 24.5645 44.1856L9.09577 28.7168C8.93571 28.5572 8.80872 28.3675 8.72207 28.1587C8.63542 27.9499 8.59082 27.726 8.59082 27.5C8.59082 27.2739 8.63542 27.05 8.72207 26.8412C8.80872 26.6324 8.93571 26.4428 9.09577 26.2831L24.5645 10.8143C24.8873 10.4916 25.325 10.3103 25.7814 10.3103C26.2378 10.3103 26.6755 10.4916 26.9983 10.8143C27.321 11.1371 27.5023 11.5748 27.5023 12.0312C27.5023 12.4876 27.321 12.9254 26.9983 13.2481L12.743 27.5Z" fill="#A6011C" />
                    </svg>
                    <h1 className="fw-bolder m-0">Jantung Koroner</h1>
                </div>
                <Row>
                    <Col lg='8' md='12' sm='12' xs='12'>
                        {/* <Image src={} /> */}
                    </Col>
                    <Col lg='4' md='12' sm='12' xs='12'>
                        <span>
                            <h5>Penyebab</h5>
                            <p className='lh-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                        </span>
                        <div className="my-4">
                            <h5>Solusi</h5>
                            <p className='lh-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                        </div>
                        <span>
                            <h5>Penanganan</h5>
                            <p className='lh-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                        </span>
                    </Col>
                </Row>
                <p className='lh-lg'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
        </>
    )
}