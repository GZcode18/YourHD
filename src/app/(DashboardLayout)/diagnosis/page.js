'use client'

import { Button, FormGroup, Input, Label } from "reactstrap"
import Header from "../layouts/header/Header"

const gejala = [
    "Sakit kepala",
    "Mudah lelah",
    "Sesak napas",
    "Nyeri pada bagian dada (angina)",
    "Keringat dingin",
    "Mual dan muntah",
    "Mudah cemas",
    "Nyeri pada bagian punggung",
    "Nyeri pada bagian ulu hati",
    "Jantung berdetak cepat",
]

export default function Diagnosis() {
    return (
        <>
            <Header />
            <div className="w-100 bg-white px-5 pb-5" style={{ minHeight: '100vh', maxHeight: '100%', paddingTop: '10vh' }}>
                <section className="text-center mb-5">
                    <h1 className="text-second fw-bolder">Gejala Penyakit</h1>
                    <p>Silakan tandai gejala yang anda rasakan</p>
                </section>


                <section className="border border-1 rounded-4 py-5 pe-5">
                    {gejala.map((tdata, index) => (
                        <div className="d-flex justify-content-between align-items-center w-100 px-5 mb-3" key={index}>
                            <div className="d-flex gap-5">
                                <div>
                                    <p>G00{index + 1}</p>
                                </div>
                                <div>
                                    <b>{tdata}</b>
                                </div>
                            </div>
                            <div>
                                <FormGroup check>
                                    <Input type="checkbox" style={{width: '30px', height: '30px'}} />
                                </FormGroup>
                            </div>
                        </div>
                    ))}
                </section>

                <section className="w-100 text-center mt-5">
                    <Button className="btn-primer1 px-4 py-2">Diagnosis</Button>
                </section>
            </div>
        </>
    )
}