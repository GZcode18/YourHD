'use client'

import { Button, Card, FormGroup, Input, Label } from "reactstrap"
import Link from "next/link"
import DataAllPenyakit from "../../components/dashboard/DataAllPenyakit"
import { useState } from "react"

export default function DataPenyakit() {
    const [add, setAdd] = useState(false);

    const handleAdd = () => {
        setAdd(!add);
    }
    return (
        <>
            <div className="admin w-100 h-100 px-4">
                <div className="">
                    <section className="my-4 text-center">
                        <h2 className="mb-0 text-second fw-bolder">Data Penyakit</h2>
                        <p className="text-grey">Menampilkan seluruh data jenis penyakit</p>
                    </section>

                    <section>
                        <Card className="p-3 rounded-3 mb-3">
                            <div className="d-flex justify-content-between">
                                <span className="d-flex w-25">
                                    <Input type="select" className="border-2 border rounded-3 me-2" >
                                        <option>Category</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Input>
                                    <Input type="select" className="border-2 border rounded-3" >
                                        <option>Aktif</option>
                                        <option>Nonaktif</option>
                                    </Input>
                                </span>
                                <span className="d-flex gap-3">
                                    <Button className="btn-tertiary fw-semibold">
                                        Export
                                    </Button>
                                    <Button className="btn-tertiary fw-semibold d-flex align-items-center gap-2" onClick={handleAdd}>
                                        <i className="bi bi-plus-circle"></i>
                                        Jenis Penyakit
                                    </Button>
                                </span>
                            </div>
                            <hr />
                            <div>
                                <DataAllPenyakit />
                            </div>
                        </Card>
                    </section>
                </div>
            </div>

            {add && (
                <div className="w-100 position-fixed d-flex justify-content-center align-items-center bg-primer-trp" style={{ height: '100vh', top: 0, left: '0', zIndex: '999' }}>
                    <Card className="w-30 h-fit p-3 py-4 rounded-3">
                        <span>
                            <h4 className="text-primer fw-bolder text-center mb-4">Tambah Data Penyakit</h4>
                            <FormGroup>
                                <Label for="kode">Kode penyakit</Label>
                                <Input
                                    id="kode"
                                    name="kode"
                                    type="text"
                                // value={formData.kode}
                                // onChange={handleChange}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="Nama">Nama penyakit</Label>
                                <Input
                                    id="nama"
                                    name="nama"
                                    type="text"
                                    // value={formData.nama}
                                    // onChange={handleChange}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="solusi">Solusi penyakit</Label>
                                <Input
                                    id="solusi"
                                    name="solusi"
                                    type="textarea"
                                    // value={formData.solusi}
                                    // onChange={handleChange}
                                />
                            </FormGroup>
                            <div className="text-center mt-4 gap-3 d-flex justify-content-center">
                                <Button className="px-4 btn-primer2" onClick={handleAdd}>BATAL</Button>
                                <Button className="px-4 btn-primer1">SIMPAN</Button>
                            </div>
                        </span>
                    </Card>
                </div>
            )}
        </>
    )
}