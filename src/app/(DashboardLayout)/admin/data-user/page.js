'use client'

import { Button, Card, FormGroup, Input, Label } from "reactstrap"
import Link from "next/link"
import DataAllPenyakit from "../../components/dashboard/DataAllPenyakit"
import { useState } from "react"
import DataAllUser from "../../components/dashboard/DataAllUser"

export default function DataUser() {
    const [add, setAdd] = useState(false);

    const handleAdd = () => {
        setAdd(!add);
    }
    return (
        <>
            <div className="admin w-100 h-100 px-4">
                <div className="">
                    <section className="my-4 text-center">
                        <h2 className="mb-0 text-second fw-bolder">Data Diagnosis Pengguna</h2>
                        <p className="text-grey">Menampilkan data diagnosis seluruh pengguna</p>
                    </section>

                    <section>
                        <Card className="p-3 rounded-3 mb-3">
                            <div>
                                <DataAllUser />
                            </div>
                        </Card>
                    </section>
                </div>
            </div>
        </>
    )
}