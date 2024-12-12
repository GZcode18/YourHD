'use client'


import Link from "next/link";
import bgLogin from "/public/images/background/bgLogin.png";
import Image from "next/image";
import { useState } from 'react';
import LogoWhite from "/public/images/logos/logo.png";
// import { signInWithEmailAndPassword } from 'firebase/auth';
import { Button, Form, FormGroup, Input, Label, Spinner, Row, Col } from "reactstrap"; // Import Spinner for loading
// import { db, auth } from '../../../../public/firebaseConfig';
// import logo from "../../../../public/images/logos/logo.png";
// import { useRouter } from 'next/navigation';
// import { collection, query, where, getDocs } from 'firebase/firestore'; // Import Firestore query functions

export default function LoginReg({ from }) {
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    // const [error, setError] = useState('');
    // const [loading, setLoading] = useState(false); // State for loading
    // const router = useRouter();

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     setLoading(true);  // Start loading when the submit button is pressed
    //     try {
    //         const userCredential = await signInWithEmailAndPassword(auth, email, password);
    //         const user = userCredential.user;
    //         console.log('User logged in:', user);

    //         // Query Firestore to find the user with the matching idUser
    //         const q = query(collection(db, "dataPsikolog"), where("idUser", "==", user.uid));
    //         const querySnapshot = await getDocs(q);

    //         if (!querySnapshot.empty) {
    //             querySnapshot.forEach((doc) => {
    //                 const userData = doc.data();
    //                 const userStatus = userData.status; // Fetch 'status' field from the document

    //                 router.push('/psikolog');

    //                 // Redirect based on status
    //                 // if (userStatus === '') {
    //                 //     router.push('/rektor');
    //                 // } else if (userStatus === 'Dekan') {
    //                 //     router.push('/dekan');
    //                 // } else if (userStatus === 'Dosen') {
    //                 //     router.push('/dosen');
    //                 // } else if (userStatus === 'Admin') {
    //                 //     router.push('/admin');
    //                 // } else {
    //                 //     setError('Invalid user status.');
    //                 // }
    //             });
    //         } else {
    //             console.log("No user document found for uid:", user.uid);
    //             setError('User data not found. Please check Firestore.');
    //         }
    //     } catch (err) {
    //         setError('Login failed. Please check your email and password.');
    //         console.error('Login error:', err);
    //     } finally {
    //         setLoading(false); // Stop loading after the process is complete
    //     }
    // };

    return (
        <>
            <div className="login">
                <Row className="h-100">
                    <Col lg='7' md='8' sm='12' xs='12' className="h-100 d-flex justify-content-center align-items-center" style={{ backgroundColor: '#F6E6E8' }}>
                        <Image src={bgLogin} width={'100%'} height={'100%'} alt="bglogin" />
                    </Col>
                    <Col lg='5' md='4' sm='12' xs='12' className='position-relative'>
                        <div className='position-absolute top-0' style={{ right: '5%' }}>
                            <Image src={LogoWhite} alt="profile" className="rounded-circle" width={120} height={120} />
                        </div>
                        <div className="h-100 d-flex flex-column justify-content-center align-items-start gap-5 pe-5 w-75 mx-auto">
                            <section>
                            {from === "registrasi" ? (
                                <h1 className="text-primer text-center fw-bold">REGISTRASI</h1>
                            ) : (

                                <h1 className="text-primer text-center fw-bold">MASUK</h1>
                            )}
                            </section>
                            {/* {loading ? (
                            <div className='position-absolute w-100 bg-white' style={{ left: 0, top: 0, height: '100vh', zIndex: '999' }}>
                                <div className="d-flex justify-content-center w-100 h-100 align-items-center">
                                    <Spinner style={{ width: '3rem', height: '3rem' }} />
                                </div>
                            </div>
                        ) : ( */}
                            {from === "registrasi" ? (
                                <>
                                    <Form className="pt-3 w-100" >
                                        <section className="mb-4">
                                            <FormGroup>
                                                <Label>Nama Lengkap</Label>
                                                <Input className="mb-4" type="text" />
                                            </FormGroup>
                                            <FormGroup>
                                                <Label>Email</Label>
                                                <Input className="mb-4" type="email" />
                                            </FormGroup>
                                            <FormGroup>
                                                <Label>Password</Label>
                                                <Input type="password"
                                                />
                                            </FormGroup>
                                            <span className="d-flex justify-content-start">
                                                <Link href="#">Lupa Sandi</Link>
                                            </span>
                                            {/* {error && <p className="text-danger">{error}</p>} */}
                                        </section>
                                        <section className="text-center w-100">
                                            <Button className="btn-primer1 w-50 py-2 mb-1" type="submit">REGISTRASI</Button>
                                            <p>Sudah punya akun? <Link href="/login">Masuk</Link> </p>
                                        </section>
                                    </Form>
                                </>
                            ) : (
                                <>
                                    <Form className="pt-3 w-100" >
                                        <section className="mb-4">
                                            <FormGroup>
                                                <Label>Email</Label>
                                                <Input className="mb-4" type="email" />
                                            </FormGroup>
                                            <FormGroup>
                                                <Label>Password</Label>
                                                <Input type="password"
                                                />
                                            </FormGroup>
                                            <span className="d-flex justify-content-start">
                                                <Link href="#">Lupa Sandi</Link>
                                            </span>
                                            {/* {error && <p className="text-danger">{error}</p>} */}
                                        </section>
                                        <section className="text-center w-100">
                                            <Button className="btn-primer1 w-50 py-2 mb-1" type="submit">MASUK</Button>
                                            <p>Belum punya akun? <Link href="/registrasi">Daftar</Link> </p>
                                        </section>
                                    </Form>
                                </>
                            )}
                            {/* )} */}
                        </div>
                    </Col>
                </Row>
            </div>
        </>
    )
}