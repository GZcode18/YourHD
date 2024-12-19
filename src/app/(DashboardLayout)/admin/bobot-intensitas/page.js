'use client'

import { Button, Card, Form, FormGroup, Input, Label } from "reactstrap"
import Link from "next/link"
import DataAllPenyakit from "../../components/dashboard/DataAllPenyakit"
import { useEffect, useState } from "react"
import BobotAllIntensitas from "../../components/dashboard/BobotAllIntensitas"
import { db, storage, auth } from "../../../../../public/firebaseConfig"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { doc, getDocs, addDoc, addDocs, getDoc, collection, updateDoc, deleteDoc, serverTimestamp, query, orderBy } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { useRouter, useSearchParams } from "next/navigation";

export default function BobotIntnesitas() {
    const [add, setAdd] = useState(false);
    const [dataIntensitas, setDataIntensitas] = useState([]);
    const searchParams = useSearchParams(); // Pindahkan ke dalam komponen
    const id = searchParams.get("id");
    const router = useRouter();


    const [formData, setFormData] = useState({
        // idPsikolog: currentUser?.uid || "", // Gunakan nilai default jika currentUser null
        namaIntensitas: "",
        bobotIntensitas: "",
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
                    const docRef = doc(db, "dataIntensitas", id);
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (id) {
                // Perbarui data jika id ada
                const docRef = doc(db, "dataIntensitas", id);
                await updateDoc(docRef, formData);
                alert("Data berhasil diperbarui.");
                router.push("/admin/bobot-intensitas");
            } else {
                // Tambahkan data baru jika id tidak ada
                const docRef = await addDoc(collection(db, "dataIntensitas"), {
                    ...formData,
                    createdAt: serverTimestamp(),
                });
                alert(`Data berhasil disimpan dengan ID dokumen: ${docRef.id}`);
                location.reload();
            }
            // Perbarui state tanpa reload
            const updatedData = await getDocs(collection(db, "dataIntensitas"));
            const data = updatedData.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            setDataIntensitas(data);

            // Reset form setelah simpan
            setFormData({
                namaIntensitas: "",
                bobotIntensitas: "",
            });

            // Tutup modal
            setAdd(false);
            location.reload();
        } catch (error) {
            console.error("Gagal menyimpan data:", error);
            alert("Gagal menyimpan data.");
        }
    };

    const handleAdd = () => {
        // Reset form dan buka modal untuk data baru
        setFormData({
            namaIntensitas: "",
            bobotIntensitas: "",
        });
        setAdd(!add);
    };


    useEffect(() => {
        const fetchData = async () => {
            try {
                // Query untuk mengurutkan data berdasarkan `kodePenyakit`
                const q = query(collection(db, "dataIntensitas"));
                const querySnapshot = await getDocs(q);

                const data = querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));

                setDataIntensitas(data);
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
                        <h2 className="mb-0 text-second fw-bolder">Bobot Intensitas</h2>
                        <p className="text-grey">Menampilkan seluruh data intensitas dan bobotnya</p>
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
                                        Data Intensitas
                                    </Button>
                                </span>
                            </div>
                            <hr />
                            <div>
                                <BobotAllIntensitas dataIntensitas={dataIntensitas} />
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
                                <h4 className="text-primer fw-bolder text-center mb-4">Tambah Data Intensitas</h4>
                                <FormGroup>
                                    <Label for="namaIntensitas">Nama Intensitas</Label>
                                    <Input
                                        id="namaIntensitas"
                                        name="namaIntensitas"
                                        type="text"
                                    value={formData.namaIntensitas}
                                    onChange={handleChange}
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="bobotIntensitas">Bobot Intensitas</Label>
                                    <Input
                                        id="bobotIntensitas"
                                        name="bobotIntensitas"
                                        type="number"
                                    value={formData.bobotIntensitas}
                                    onChange={handleChange}
                                    />
                                </FormGroup>
                                <div className="text-center mt-4 gap-3 d-flex justify-content-center">
                                    <Button className="px-4 btn-primer2" onClick={handleAdd}>BATAL</Button>
                                    <Button className="px-4 btn-primer1" type="submit">SIMPAN</Button>
                                </div>
                            </span>
                        </Form>
                    </Card>
                </div>
            )}
        </>
    )
}