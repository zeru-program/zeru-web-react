import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import Swal from 'sweetalert2';
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../../App.css";
import "../../Responsive.css";
var urlDb: string = "https://zerupgmm-default-rtdb.firebaseio.com/";

const Header: React.FC = () => {
    return (
        <Helmet>
            <title>Zeru programmer - Contact</title>
            <meta name="title" content="Zeru programmer web original" />
            <meta
                name="description"
                content="Follow us | in github, email, instagram, youtube. Contact us | via form"
            />
            <meta
                name="keywords"
                content="Zeru pgm, zerupgmm, zeru programmer, zeru web contact, zeru contact, hubungi zeru, bagaimana menghubungi zeru web"
            />
        </Helmet>
     )
}

const Content = () => {
    const [iptNama, setIptNama] = useState("");
    const [iptEmail, setIptEmail] = useState("");
    const [iptSubjek, setIptSubjek] = useState("");
    const [iptKonten, setIptKonten] = useState("");

    const handleSubmitFeedback = () => {
        var result = {
            userInput: iptNama,
            userEmail: iptEmail,
            userSubjek: iptSubjek,
            feedback: iptKonten,
            created_at: new Date()
        };
        fetch(urlDb + "feedback.json", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(result)
        })
            .then(res => {
                if (res.ok) {
                    Swal.fire({
                        title: "Success!",
                        text: "Sukses mengirim feedback, terima kasih !",
                        icon: "success"
                    }).then((result: any) => {
                        if (result.isConfirmed) {
                            location.reload();
                        }
                    });
                } else {
                    Swal.fire({
                        title: "Ups.. something wrong",
                        text: "Error 505 server error",
                        icon: "error"
                    });
                }
            })
            .catch(e => alert(e));
    };

    const handleIptNama = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIptNama(e.target.value);
    };
    const handleIptEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIptEmail(e.target.value);
    };
    const handleIptSubjek = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIptSubjek(e.target.value);
    };
    const handleIptKonten = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setIptKonten(e.target.value);
    };

    return (
        <>
            {/* contact us  page start */}
            <div className="container-page" id="contact">
                <div className="contact-information">
                    <label className="title tContact">Follow us</label>
                    <br />
                    <div className="isi-info-contact">
                        <div className="c1-contact">
                            <i className="img-contact bi bi-github" />
                            <label>
                                <a
                                    href="https://github.com/zeru-program/"
                                    className="href-contact"
                                >
                                    @zeru-program
                                </a>
                            </label>
                        </div>
                        <div className="c1-contact">
                            <i className="img-contact bi bi-whatsapp" />
                            <label>
                                <a
                                    href="https://wa.me/6289526333265"
                                    className="href-contact"
                                >
                                    +6289526333265
                                </a>
                            </label>
                        </div>
                        <div className="c1-contact">
                            <i className="img-contact bi bi-instagram" />
                            <label>
                                <a
                                    href="https://www.instagram.com/zerr.ace?r"
                                    className="href-contact"
                                >
                                    @zerr.ace
                                </a>
                            </label>
                        </div>
                        <div className="c1-contact">
                            <i className="img-contact bi bi-envelope" />
                            <label>
                                <a
                                    href="mailto:zeruprogram@gmail.com?subject=HireYou"
                                    className="href-contact"
                                >
                                    zeruprogram@gmail.com
                                </a>
                            </label>
                        </div>
                        <div className="c1-contact">
                            <i className="img-contact bi bi-geo-alt-fill" />
                            <label>
                                <a href="#" className="href-contact address">
                                    {" "}
                                    Jawa barat, Indonesia.
                                </a>
                            </label>
                        </div>
                    </div>
                </div>
                <div className="contact-form" id="talkHref">
                    <label className="title tContact">Contact us</label>
                    <form className="form">
                        <div className="con-input pt-3 mt-4">
                            <label className="name-input">Nama lengkap</label>
                            <input
                                type="text"
                                name="nama"
                                className="input-form"
                                id="nama"
                                onInput={handleIptNama}
                                placeholder="type in here.."
                                required
                            />
                        </div>
                        <div className="con-input">
                            <label className="name-input">Email</label>
                            <input
                                type="email"
                                name="email"
                                className="input-form"
                                id="email"
                                onInput={handleIptEmail}
                                placeholder="type in here.."
                                required
                            />
                        </div>
                        <div className="con-input">
                            <label className="name-input">Subjek</label>
                            <input
                                type="text"
                                name="judul"
                                className="input-form"
                                id="subjek"
                                onInput={handleIptSubjek}
                                placeholder="type in here.."
                                required
                            />
                        </div>
                        <div className="con-input">
                            <label className="name-input">Isi subjek</label>
                            <textarea
                                name="isi_subjek"
                                className="input-form textarea-form"
                                id="isiSubjek"
                                onInput={handleIptKonten}
                                placeholder="type in here.."
                                required
                                rows={8}
                                cols={40}
                                defaultValue={""}
                            />
                        </div>
                        <button
                            className="submit-form"
                            type="button"
                            onClick={() => handleSubmitFeedback()}
                        >
                            Kirim
                        </button>
                    </form>
                </div>
            </div>
            {/* contact us  page end */}
        </>
    );
};

const Contact = () => {
    return (
        <>
            <Header />
            <Navbar />
            <Content />
            <Footer />
        </>
    );
};

export default Contact;
