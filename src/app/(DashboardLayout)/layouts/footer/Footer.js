import Image from "next/image";
import { Col, Row } from "reactstrap";
import LogoWhite from "/public/images/logos/logo.png";

export default function Footer() {
    return (
        <>
            <div className="footer p-4" id="footer">
                <Row className="align-items-center h-100">
                    <Col lg='6' md='6' sm='6' xs='6'>
                        <div className="bg-white w-fit rounded-3 h-100">
                            <Image
                                src={LogoWhite}
                                alt="profile"
                                className="rounded-circle"
                                width={'100%'}
                                height={150}
                            />
                        </div>
                    </Col>
                    <Col lg='6' md='6' sm='6' xs='6'>
                        <h4>Kontak Kami</h4>
                        <p>Email : contoh@gmail.com</p>
                        <p>Phone : +62899091800</p>
                        <p>Address : Jl. Example No.</p>
                    </Col>
                </Row>
                <div>
                    2024 © BipoCare | Created by GZcode
                </div>
            </div>
        </>
    )
}