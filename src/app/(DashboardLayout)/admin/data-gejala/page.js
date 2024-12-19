'use client'

import { Button, Card, Col, Form, FormGroup, Input, Label, Row } from "reactstrap"
import Link from "next/link"
import DataAllPenyakit from "../../components/dashboard/DataAllPenyakit"
import { useEffect, useState } from "react"
import DataAllGejala from "../../components/dashboard/DataAllGejala"
import { db } from "../../../../../public/firebaseConfig"
import { doc, getDocs, addDoc, addDocs, getDoc, collection, updateDoc, deleteDoc, serverTimestamp, query, orderBy } from "firebase/firestore";
import { useRouter, useSearchParams } from "next/navigation"

export default function DataGejala() {
    const [add, setAdd] = useState(false);
    const [dataPenyakit, setDataPenyakit] = useState([]);
    const [dataGejala, setDataGejala] = useState([]);
    const searchParams = useSearchParams(); // Pindahkan ke dalam komponen
    const id = searchParams.get("id");
    const router = useRouter();


    const [formData, setFormData] = useState({
        // idPsikolog: currentUser?.uid || "", // Gunakan nilai default jika currentUser null
        kodeGejala: "",
        namaGejala: "",
        penyakitTerkait: [],
        bobotPakar: "",
        createdAt: serverTimestamp(),
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    useEffect(() => {
        if (id) {
            const fetchData = async () => {
                try {
                    const docRef = doc(db, "dataGejala", id);
                    const docSnap = await getDoc(docRef);

                    if (docSnap.exists()) {
                        setAdd(true);
                        setFormData({ ...docSnap.data() }); // Hanya atur formData
                    } else {
                        console.error("Data tidak ditemukan.");
                    }
                } catch (error) {
                    console.error("Gagal memuat data:", error);
                }
            };
            fetchData();
        }
    }, [id]);

    const handleCheckboxChange = (kodePenyakit) => {
        setFormData((prev) => {
            const penyakitTerkait = [...prev.penyakitTerkait];
            if (penyakitTerkait.includes(kodePenyakit)) {
                // Jika kodePenyakit sudah ada, hapus dari array
                return {
                    ...prev,
                    penyakitTerkait: penyakitTerkait.filter((item) => item !== kodePenyakit),
                };
            } else {
                // Jika kodePenyakit belum ada, tambahkan ke array
                return {
                    ...prev,
                    penyakitTerkait: [...penyakitTerkait, kodePenyakit],
                };
            }
        });
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (id) {
                const docRef = doc(db, "dataGejala", id);
                await updateDoc(docRef, formData);
                alert("Data berhasil diperbarui.");
                router.push("/admin/data-gejala");
            } else {
                const docRef = await addDoc(collection(db, "dataGejala"), {
                    ...formData,
                    createdAt: serverTimestamp(),
                });
                alert(`Data berhasil disimpan dengan ID dokumen: ${docRef.id}`);
                location.reload();
            }
            // Tutup modal
            setAdd(false);
        } catch (error) {
            console.error("Gagal menyimpan data:", error);
            alert("Gagal menyimpan data.");
        }
    };

    const handleAdd = () => {
        // Reset form dan buka modal untuk data baru
        setFormData({
            kodeGejala: "",
            namaGejala: "",
            penyakitTerkait: [],
            bobotPakar: "",
        });
        setAdd(!add);
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Query untuk mengurutkan data berdasarkan `kodePenyakit`
                const q = query(collection(db, "dataGejala"), orderBy("kodeGejala", "asc"));
                const querySnapshot = await getDocs(q);

                const data = querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));

                setDataGejala(data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Query untuk mengurutkan data berdasarkan `kodePenyakit`
                const q = query(collection(db, "dataPenyakit"), orderBy("kodePenyakit", "asc"));
                const querySnapshot = await getDocs(q);

                const data = querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));

                setDataPenyakit(data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <div className="admin w-100 h-100 px-4">
                <div className="">
                    <section className="my-4 text-center">
                        <h2 className="mb-0 text-second fw-bolder">Data Gejala</h2>
                        <p className="text-grey">Menampilkan seluruh data gejala dan bobot dari pakar</p>
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
                                <DataAllGejala dataGejala={dataGejala} dataPenyakit={dataPenyakit} />
                            </div>
                        </Card>
                    </section>
                </div>
            </div>

            {add && (
                <div className="w-100 position-fixed d-flex justify-content-center align-items-center bg-primer-trp" style={{ height: '100vh', top: 0, left: '0', zIndex: '999' }}>
                    <Card className="w-30 h-fit p-3 py-4 rounded-3">
                        <Form onSubmit={handleSubmit}>
                            <span>
                                <h4 className="text-primer fw-bolder text-center mb-4">Tambah Data Gejala</h4>
                                <FormGroup>
                                    <Label for="kodeGejala">Kode Gejala</Label>
                                    <Input
                                        id="kodeGejala"
                                        name="kodeGejala"
                                        type="text"
                                        value={formData.kodeGejala}
                                        onChange={handleChange}
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="NamaGejala">Nama Gejala</Label>
                                    <Input
                                        id="namaGejala"
                                        name="namaGejala"
                                        type="text"
                                        value={formData.namaGejala}
                                        onChange={handleChange}
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="bobotPakar">Bobot Pakat</Label>
                                    <Input
                                        id="bobotPakar"
                                        name="bobotPakar"
                                        type="text"
                                        value={formData.bobotPakar}
                                        onChange={handleChange}
                                    />
                                </FormGroup>
                                <Label for="penyakitTerkait">Terdapat Pada Penyakit :</Label>
                                <Row>
                                    {dataPenyakit.map((tdata, index) => (
                                        <Col lg='6' md='6' sm='12' xs='12' key={index} className="mb-2">
                                            <FormGroup check>
                                                <Input
                                                    type="checkbox"
                                                    checked={formData.penyakitTerkait.includes(tdata.kodePenyakit)}
                                                    onChange={() => handleCheckboxChange(tdata.kodePenyakit)}
                                                />
                                                {tdata.jenisPenyakit}
                                            </FormGroup>
                                        </Col>
                                    ))}
                                </Row>
                                <div className="text-center mt-5 gap-3 d-flex justify-content-center">
                                    <Button className="px-4 btn-primer2" onClick={handleAdd}>BATAL</Button>
                                    <Button className="px-4 btn-primer1">SIMPAN</Button>
                                </div>
                            </span>
                        </Form>
                    </Card>
                </div>
            )}
        </>
    )
}