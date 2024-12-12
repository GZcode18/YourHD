'use client'

// Data penyakit
const namaPenyakit = [
    { kode: "P01", nama: 'Jantung Koroner' },
    { kode: "P02", nama: 'Aritma' },
    { kode: "P03", nama: 'Gagal Jantung' },
    { kode: "P04", nama: 'Stroke' },
    { kode: "P05", nama: 'Jantung Hipertensi' },
];

// Data gejala
const dGePe = [
    { kode: "G001", nama: 'Sakit kepala' },
    { kode: "G002", nama: 'Mudah lelah' },
    { kode: "G003", nama: 'Sesak napas' },
    { kode: "G004", nama: 'Nyeri pada bagian dada' },
    { kode: "G005", nama: 'Keringat dingin' },
    { kode: "G006", nama: 'Mual dan muntah' },
    { kode: "G007", nama: 'Mudah cemas' },
    { kode: "G008", nama: 'Nyeri bagian punggung' },
    { kode: "G009", nama: 'Nyeri ulu hati' },
    { kode: "G010", nama: 'Jantung berdetak cepat' },
];

// Aturan penyakit untuk gejala tertentu
const gejalaPenyakitMapping = {
    G001: ["P01", "P03", "P04"],
    G002: ["P02", "P03"],
    G003: ["P04", "P05"],
};

// Fungsi untuk memilih penyakit secara acak (minimal 2 kode penyakit)
function getRandomDiseases() {
    const shuffled = namaPenyakit.map(p => p.kode).sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 2 + Math.floor(Math.random() * (namaPenyakit.length - 2)));
}

// Tambahkan penyakit untuk gejala G004 - G010
for (let i = 3; i < dGePe.length; i++) {
    gejalaPenyakitMapping[dGePe[i].kode] = getRandomDiseases();
}

// Fungsi untuk menghitung nilai N, m, x, nc, P(vj), dan probabilitas gejala
function calculateProbabilities(responses) {
    const result = [];
    namaPenyakit.forEach((penyakit) => {
        let N = 1; // Diasumsikan jumlah dataset (atau bisa diubah sesuai data sebenarnya)
        let m = dGePe.length; // Jumlah gejala total
        let x = namaPenyakit.length; // Total penyakit yang tersedia
        const ncValues = {}; // Menyimpan nilai nc untuk setiap gejala
        const probabilities = {}; // Menyimpan probabilitas untuk setiap gejala
        const probabilitas = {};

        // Periksa setiap gejala dalam responses
        for (const [kodeGejala, intensitas] of Object.entries(responses)) {
            if (intensitas !== "Tidak Pernah") {
                ncValues[kodeGejala] = gejalaPenyakitMapping[kodeGejala]?.includes(penyakit.kode) ? 1 : 0;
            } else {
                ncValues[kodeGejala] = 0;
            }
        }

        // Hitung probabilitas P(vj)
        const P_vj = N / x;

        // Hitung probabilitas untuk setiap gejala
        for (const [kodeGejala, nc] of Object.entries(ncValues)) {
            probabilities[kodeGejala] = ((nc + m * P_vj) / (N + m)).toFixed(3);
        }

        // Hitung frekuensi nilai probabilitas
        const frequency = {};
        for (const prob of Object.values(probabilities)) {
            frequency[prob] = (frequency[prob] || 0) + 1;
        }

        // Hitung probabilitas total dengan aturan akar pangkat
        let totalProbability = 1;
        for (const [value, count] of Object.entries(frequency)) {
            totalProbability *= Math.pow(parseFloat(value), count);
        }

        // Kalikan dengan P(vj)
        totalProbability = P_vj * totalProbability;

        // Format probabilitas ke dalam eksponensial
        const formattedProbability = totalProbability.toExponential(5);

        result.push({
            penyakit: penyakit.nama,
            N,
            m,
            x,
            ncValues,
            P_vj: P_vj.toFixed(3),
            probabilities,
            probabilitas: formattedProbability, 
        });
    });
    return result;
}

// Render tabel dan form kuesioner
function renderTable() {
    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget); // Use currentTarget instead of target
        const responses = {};
        formData.forEach((value, key) => {
            responses[key.split('-')[1]] = value; // Extract kode gejala and intensitas
        });

        const probabilities = calculateProbabilities(responses);
        console.log(probabilities);
        alert(JSON.stringify(probabilities, null, 2));
    };


    return (
        <div className="">
            <section style={{ height: '25%' }} className="text-center p-5 text-white">
                <h1>Tabel Data Penyakit</h1>
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

            {/* <section style={{ height: '25%' }} className="text-center p-5 text-black">
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
            </section> */}

            <section className="text-center p-5 text-black">
                <h1>Form Kuesioner Gejala</h1>
                <form onSubmit={handleSubmit}>
                    {dGePe.map((gejala, index) => (
                        <div key={index} className="mb-4">
                            <label className="form-label"><strong>{gejala.nama}</strong></label>
                            <div>
                                {[
                                    "Tidak Pernah",
                                    "Jarang",
                                    "Cukup Sering",
                                    "Sering",
                                    "Sangat Sering",
                                ].map((intensitas, idx) => (
                                    <div key={idx} className="form-check form-check-inline">
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            name={`gejala-${gejala.kode}`}
                                            id={`gejala-${gejala.kode}-${idx}`}
                                            value={intensitas}
                                        />
                                        <label className="form-check-label" htmlFor={`gejala-${gejala.kode}-${idx}`}>
                                            {intensitas}
                                        </label>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </section>
        </div>
    );
}

export default renderTable;
