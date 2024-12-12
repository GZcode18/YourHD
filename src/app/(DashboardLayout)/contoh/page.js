'use cient'

import Image from "next/image"
import Link from "next/link";
import { Button, Col, Row } from "reactstrap"

export default function HelpCentre() {

    const namaPenyakit = [
        {
            kode: "P01",
            nama: 'Jantung Koroner'
        },
        {
            kode: "P02",
            nama: 'Aritma'
        },
        {
            kode: "P03",
            nama: 'Gagal Jantung'
        },
        {
            kode: "P04",
            nama: 'Stroke'
        },
        {
            kode: "P05",
            nama: 'Jantung Hipertensi'
        },
    ];

    const dGePe = [
        {
            kode: "G001",
            nama: 'Sakit kepala'
        },
        {
            kode: "G002",
            nama: 'mudah lelah'
        },
        {
            kode: "G003",
            nama: 'sesak napas'
        },
        {
            kode: "G004",
            nama: 'nyeri pada bagian dada'
        },
        {
            kode: "G005",
            nama: 'keringat dingin'
        },
        {
            kode: "G006",
            nama: 'Mual dan muntah'
        },
        {
            kode: "G007",
            nama: 'mudah cemas'
        },
        {
            kode: "G008",
            nama: 'nyeri bagian punggung'
        },
        {
            kode: "G009",
            nama: 'nyeri ulu hati'
        },
        {
            kode: "G010",
            nama: 'jantung berdetak cepat'
        },
    ];

    const gejalaPenyakitMapping = {
        G001: ["P01", "P03", "P04"],
        G002: ["P02", "P03"],
        G003: ["P04", "P05"],
    };

    function getRandomDiseases() {
        const shuffled = namaPenyakit.map(p => p.kode).sort(() => 0.5 - Math.random());
        return shuffled.slice(0, 2 + Math.floor(Math.random() * (namaPenyakit.length - 2)));
    }

    // Tambahkan penyakit untuk gejala G004 - G010
    for (let i = 3; i < dGePe.length; i++) {
        gejalaPenyakitMapping[dGePe[i].kode] = getRandomDiseases();
    }

    // Fungsi untuk menghitung probabilitas Naive Bayes
    function hitungProbabilitasNaiveBayes(gejala, dataPenyakit) {
        const hasil = dataPenyakit.map((penyakit) => {
            // Hitung probabilitas untuk setiap penyakit
            const probabilitasGejala = gejala.reduce((probabilitas, gejala, index) => {
                return probabilitas * penyakit.probGejala[index];
            }, 1);

            const probabilitasTotal = penyakit.probAwal * probabilitasGejala;
            return {
                penyakit: penyakit.nama,
                probabilitas: probabilitasTotal,
            };
        });

        // Cari penyakit dengan probabilitas tertinggi
        const penyakitTerbaik = hasil.reduce((a, b) => (a.probabilitas > b.probabilitas ? a : b));

        return { hasil, penyakitTerbaik };
    }

    // Data penyakit dan probabilitas masing-masing gejala
    const dataPenyakit = [
        {
            nama: "Stroke",
            probAwal: 0.143,
            probGejala: [0.139942, 0.139942, 0.139942, 0.139942],
        },
        {
            nama: "Jantung Koroner",
            probAwal: 0.143,
            probGejala: [0.16035, 0.139942, 0.139942, 0.139942],
        },
        {
            nama: "Jantung Hipertensi",
            probAwal: 0.143,
            probGejala: [0.16035, 0.16035, 0.139942, 0.139942],
        },
        {
            nama: "Pembuluh Darah Perifer",
            probAwal: 0.143,
            probGejala: [0.16035, 0.139942, 0.16035, 0.16035],
        },
    ];

    // Contoh gejala yang dipilih user (1 = gejala hadir, 0 = gejala tidak hadir)
    const gejalaDipilih = [1, 1, 1, 1];

    // Hitung probabilitas Naive Bayes
    const { hasil, penyakitTerbaik } = hitungProbabilitasNaiveBayes(gejalaDipilih, dataPenyakit);

    // Tampilkan hasil
    console.log("Hasil Probabilitas:", hasil);
    console.log("Penyakit dengan probabilitas tertinggi:", penyakitTerbaik);

    return (
        <>
            <div className="">
                <section style={{ height: '25%' }} className="text-center p-5 text-white">
                    <h1 className="text-black">Tabel Data Penyakit</h1>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">No</th>
                                <th scope="col">Kode Penyakit</th>
                                <th scope="col">Jenis Penyakit</th>
                            </tr>
                        </thead>
                        <tbody>
                            {namaPenyakit.map((tdata, index) => (
                                <tr key={index}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{tdata.kode}</td>
                                    <td>{tdata.nama}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </section>

                <section style={{ height: '25%' }} className="text-center p-5 text-white">
                    <h1 className="text-black">Data Gejala dan Penyakit</h1>
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th scope="col" rowSpan={2}>Kode Gejala</th>
                                <th scope="col" rowSpan={2}>Gejala</th>
                                <th scope="col" colSpan={5}>Penyakit</th>
                            </tr>
                            <tr>
                                <td>P01</td>
                                <td>P02</td>
                                <td>P03</td>
                                <td>P04</td>
                                <td>P05</td>
                            </tr>
                        </thead>
                        <tbody>
                            {dGePe.map((tdata, index) => {
                                const diseases = gejalaPenyakitMapping[tdata.kode] || [];
                                return (
                                    <tr key={index}>
                                        <th scope="row">{tdata.kode}</th>
                                        <td className="text-start">{tdata.nama}</td>
                                        {namaPenyakit.map(p => (
                                            <td key={p.kode}>{diseases.includes(p.kode) ? '✔' : ''}</td>
                                        ))}
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </section>

                <div className="w-100 text-center">
                <Link href="/diagnosis">
                    <button className="m-auto fs-1 bg-primary">Mulai diagnosis</button>
                </Link>
                </div>
            </div>
        </>
    )
}