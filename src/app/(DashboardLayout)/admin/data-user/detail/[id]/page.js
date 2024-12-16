'use client'

import { Card, Col, Row } from "reactstrap"
import user1 from "/public/images/users/user1.jpg";
import Image from "next/image";

export default function DetailUser() {
    return (
        <>
            <div className="admin w-100 px-4">
                <Card className="my-4 p-3 rounded-3 m-0">
                    <h2 className="mb-0 text-second fw-bolder">Data Diagnosis User</h2>
                    <p className="text-grey">Menampilkan seluruh data psikolog yang terdaftar</p>
                </Card>
                <div className="pb-4" style={{ height: '70vh' }}>
                    <Row className="h-100">
                        <Col lg='4' md='12' sm='12' xs='12'>
                            <Card className="p-3 py-5 h-100 justify-content-start align-items-center">
                                <Image src={user1} width={280} height={300} alt="user1" />
                                <h3 className="text-primer fw-bolder my-4">Ester Howard</h3>
                                <div className="bg-primer text-white w-100 p-2 rounded-3 d-flex flex-column my-auto gap-2">
                                    <div className="w-100 d-flex">
                                        <span className="w-50">
                                            <p>Email</p>
                                        </span>
                                        <span className="w-50">
                                            <p>:tim.jennings@example.com</p>
                                        </span>
                                    </div>
                                    <div className="w-100 d-flex">
                                        <span className="w-50">
                                            <p>Jenis Kelmain</p>
                                        </span>
                                        <span className="w-50">
                                            <p>: Laki-laki</p>
                                        </span>
                                    </div>
                                    <div className="w-100 d-flex">
                                        <span className="w-50">
                                            <p>Umur</p>
                                        </span>
                                        <span className="w-50">
                                            <p>: 34 tahun</p>
                                        </span>
                                    </div>
                                </div>
                            </Card>
                        </Col>
                        <Col lg='8' md='12' sm='12' xs='12'>
                            <Card className="p-3 h-100">
                                <div className="h-50">
                                    <h4 className="text-tertiary fw-bolder">Hasil Diagnossa</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut </p>
                                </div>
                                <div>
                                    <h4 className="text-tertiary fw-bolder">Penanganan Diagnossa</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut</p>
                                </div>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </div>
        </>
    )

}