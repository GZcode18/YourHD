'use client'
import Link from "next/link";
import { Button, Card, CardTitle, Col, FormGroup, Input, Label, Row } from "reactstrap";
import Image from "next/image";
import firstbg from "/public/images/background/firstbg.png";
import Header from "./layouts/header/Header";
import secondbg from "/public/images/background/kesehatanJ.png";
import gambarAbout from "/public/images/background/gambarAbout.png";
import bulatGiant from "/public/images/bg/bulatGiant.png";
import Footer from "./layouts/footer/Footer";


export default function Home() {
  // const user = 'https://img.freepik.com/free-photo/user-profile-icon-front-side-with-white-background_187299-40010.jpg?t=st=1732796247~exp=1732799847~hmac=9bc95175bedc22fa0537719744cbf14a0d5b008212c4b50135e64c94fe1756fa&w=1380';
  return (
    <>
      <Header status={"BeforeAuth"} />
      <div className="homeUser w-100 bg-white">

        <section className="first w-100">
          <Row className="h-100">
            <Col lg='6' sm='12' className="d-flex h-100 justify-content-center align-items-center">
              <Image className="fisrtImg" src={firstbg} width={'100%'} height={'100%'} alt="secondbg" />
            </Col>
            <Col lg='6' sm='12' className="d-flex h-100 justify-content-center flex-column gap-5">
              <section className="mb-5 z-3">
                <h1>Kenali Gejala, Lindungi Jantung Anda</h1>
                <b>Dengan teknologi terkini, kami membantu Anda memahami kesehatan jantung dengan lebih mudah</b>
              </section>
              <section>
                <Link href="/diagnosis">
                  <Button className="btn-primer1">Diagnosis Sekarang</Button>
                </Link>
                <Button className="btn-primer2">Pelajari Lebih Lanjut</Button>
              </section>
            </Col>
          </Row>
          <Image className="bula" src={bulatGiant} width={'100%'} height={'100%'} alt="elips" />
        </section>

        <section className="second bg-primer-light px-5" id="tentangBipoCare">
          <h1 className="text-center text-second fw-bold">Kesehatan Jantung</h1>
          <div className="d-flex flex-column justify-content-between h-100 py-5">
            <section className="w-50">
              <p><span className="fw-bold text-primer">BipoCare</span> adalah platform web inovatif yang dirancang untuk memberikan akses mudah kepada layanan konsultasi dengan psikiater profesional, khusus untuk membantu individu yang menghadapi tantangan gangguan bipolar. Dengan fitur-fitur yang intuitif dan ramah pengguna, BipoCare berkomitmen untuk menjadi pendamping terbaik Anda dalam menjaga kesehatan mental.</p>
            </section>
            <section className="w-50">
              <h4 className="text-tertiary fw-bold">Kesehatan jantung ditentukan oleh berbagai faktor, seperti:</h4>
              <ul>
                <li>Konsultasi Online Langsung</li>
                <li>Jadwal Fleksibel</li>
                <li>Riwayat dan Catatan Medis</li>
                <li>Panduan dan Edukasi Bipolar</li>
                <li>Privasi Terjamin</li>
              </ul>
            </section>
            <section className="">
              <h4 className="text-tertiary fw-bold">Kesehatan jantung ditentukan oleh berbagai faktor, seperti:</h4>
              <p>Kami memahami bahwa setiap perjalanan kesehatan mental itu unik. Dengan tim ahli yang berdedikasi dan teknologi modern, BipoCare hadir untuk memberikan solusi yang personal dan efektif, sehingga Anda dapat merasa didukung setiap langkahnya.</p>
            </section>
            <Image className="secondimg" src={secondbg} width={'100%'} height={'100%'} alt="secondbg" />
          </div>
        </section>

        <section className="third h-100 mt-4" id="layanan">
          <h1 className="text-center text-second fw-bolder mb-5">Penyakit Jantung</h1>
          <div className="p-4 px-2 pt-5 d-flex w-100" style={{ overflowX: 'auto' }}>
            <div className="p-4 px-1 d-flex justify-content-between">
              {[0, 1, 2, 3, 4].map((tdata, index) => (
                <div className="card rounded-3" key={index}>
                  <img src="https://unair.ac.id/wp-content/uploads/2020/03/3pilihanpengobatanuntukatasipenyakitjantungkoronerhalodoc.jpg" className="card-img-top rounded-top-3" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title text-center fw-semibold my-3 text-primer">Jantung Koroner</h5>
                    <p className="card-text text-black my-2 text-justify">Jantung koroner merujuk pada kondisi medis
                      yang terjadi ketika pembuluh darah koroner,
                      yaitu pembuluh darah yang bertugas menyuplai
                      darah kaya oksigen dan nutrisi ke otot jantung,
                      mengalami penyempitan atau penyumbatan.
                    </p>
                    <div className="w-100 text-center mt-5">
                    <Link href="/penyakit-jantung">
                      <Button className="btn-second1 px-4">Informasi Lengkap </Button>
                    </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-tertiary px-5 text-white pb-5" style={{ paddingTop: '35vh', marginTop: '-30vh' }}>
            <hr />
            <h2 className="fw-bolder mb-5 text-center">Cek Solusi Yuk!</h2>
            <div>
              <div>
                <h5>Jenis Penyakit</h5>
                <FormGroup>
                  <Input type="select" name="agama">
                    <option>--Pilih Penyakit Jantung--</option>
                    <option value="Jantung Koroner">Jantung Koroner</option>
                    <option value="Protestastan">Protestastan</option>
                    <option value="Katolik">Katolik</option>
                    <option value="Hindu">Hindu</option>
                    <option value="Buddha">Buddha</option>
                  </Input>
                </FormGroup>
              </div>
              <div>
                <h5>Solusi</h5>
                <div className="bg-white p-3 rounded-2">
                  <p className="text-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
              </div>
            </div>
            <hr />
          </div>
        </section>

        <section className="second bg-primer-light position-relative px-5" id="#tentangBipoCare">
          {/* <Image className="bulat" src={bulat1} width={'100%'} height={'100%'} alt="elips" /> */}
          <h1 className="text-center text-second fw-bold">Tentang YourHD</h1>
          <div className="d-flex flex-column justify-content-between h-100 py-5">
            <section className="w-50 align-self-end">
              <p><span className="fw-bold text-primer">YourHD</span> dirancang untuk membantu Anda dalam memahami kondisi kesehatan jantung dengan mudah, cepat, dan akurat. Dengan teknologi canggih dan pendekatan berbasis data, kami menyediakan alat diagnosis online untuk berbagai jenis penyakit jantung.</p>
            </section>
            <section className="w-50 align-self-end">
              <h4 className="text-tertiary fw-bold">Layanan Kami</h4>
              <ul>
                <li>Alat Diagnosis Online: Menjawab pertanyaan dan mendapatkan analisis berbasis probabilitas tentang kondisi kesehatan jantung Anda.</li>
                <li>Informasi Kesehatan Jantung: Artikel terpercaya dan informatif tentang pencegahan, gejala, dan pengobatan penyakit jantung.</li>
                <li>Konsultasi Ahli: Hubungkan diri Anda dengan tenaga medis profesional untuk mendapatkan panduan lebih lanjut.</li>
              </ul>
            </section>
            <section className="pe-5">
              <h4 className="text-tertiary fw-bold">Fitur Kami</h4>
              <ul>
                <li>Akurat dan Cepat: Alat diagnosis kami menggunakan teknologi terkini untuk memberikan hasil yang relevan dan andal.</li>
                <li>Aksesibilitas 24/7: Layanan kami dapat diakses kapan saja dan di mana saja.</li>
                <li>Privasi Terjamin: Data Anda akan kami jaga dengan aman sesuai standar privasi tertinggi.</li>
              </ul>
            </section>
            <Image className="bipolarimg" src={gambarAbout} width={'100%'} height={'100%'} alt="secondbg" />
          </div>
          {/* <Image className="bulat" src={bulat2} width={'100%'} height={'100%'} alt="elips" style={{ right: '0', left: '97%', top: '70%' }} /> */}
        </section>
        <Footer />
      </div>
    </>
  );
}
