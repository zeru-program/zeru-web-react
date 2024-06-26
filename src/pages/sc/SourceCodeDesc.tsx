import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ReactHtmlParser from "react-html-parser";
import HeaderScDesc from "./HeaderScDesc";
import Navbar from "../landing-page/Navbar";
import Footer from "../landing-page/Footer";
let urlDb = "https://zerupgmm-default-rtdb.firebaseio.com/";

const SourceCodeDesc = () => {
    let { id } = useParams();
    const [result, setResult] = useState<any | null>(null);
    const [btnCopy, setBtnCopy] = useState(
        'Share<i className="mx-2 bi bi-box-arrow-up-right"></i>'
    );

    useEffect(() => {
        if (id) {
            const decodedId = decodeURIComponent(id);

            (async () => {
                fetch(urlDb + "sourceCode.json")
                    .then(res => res.json())
                    .then(data => {
                        for (let key in data) {
                            const val = data[key];
                            if (val.title === decodedId) {
                                setResult(val);
                                return;
                            }
                        }
                        setResult(null); // not found
                    });
            })();
        } else {
            // handle the case where id is undefined
        }
    }, [id]);

    if (!result) {
        return null; // or some fallback UI
    }

    const handleDownload = (url: string) => {
        const replaceU = url.replace("/", "");
        const anchor = document.createElement("a");
        anchor.href = url;
        anchor.download = "Sc-" + replaceU;

        document.body.appendChild(anchor);
        anchor.click();
        document.body.removeChild(anchor);
    };

    const handleCopy = () => {
        const currentUrl = window.location.href;
        navigator.clipboard.writeText(currentUrl);
        setBtnCopy("Copied !");
        setTimeout(() => {
            setBtnCopy(
                'Share<i className="mx-2 bi bi-box-arrow-up-right"></i>'
            );
        }, 1500);
    };

    return (
        <>
            <HeaderScDesc />
            <Navbar />
            <img
                src={result.banner ? result.banner : "/bgcode.jpg"}
                style={{ width: "100%" }}
            />
            <div
                className="my-3 con-desc-sc px-3 container"
                style={{ wordBreak: "break-word" }}
            >
                <h1 className="fw-bold">{result.title}</h1>
                <p>{result.description}</p>
                <p className="mt-3 mb-0">Media social zeru 🔥</p>
                <div className="d-flex align-items-center">
                    <p className="m-0">
                        <i className="bi bi-youtube mr-2"></i>{" "}
                        <a
                            className="text-dark"
                            style={{ textDecoration: "none" }}
                            href="https://www.youtube.com/@zerudev"
                        >
                            @zerudev
                        </a>
                    </p>
                </div>
                <div className="d-flex align-items-center">
                    <p className="m-0">
                        <i className="bi bi-instagram mr-2"></i>{" "}
                        <a
                            className="text-dark"
                            style={{ textDecoration: "none" }}
                            href="https://www.instagram.com/zerr.ace/"
                        >
                            @zerr.ace
                        </a>
                    </p>
                </div>
                <div className="d-flex align-items-center">
                    <p className="m-0">
                        <i className="bi bi-whatsapp mr-2"></i>{" "}
                        <a
                            className="text-dark"
                            style={{ textDecoration: "none" }}
                            href="https://api.whatsapp.com/send?phone=6287774487198"
                        >
                            +6287774487198
                        </a>
                    </p>
                </div>
                <button className="btn my-3 btn-primary" onClick={handleCopy}>
                    {ReactHtmlParser(btnCopy)}
                </button>
                <div className="w-100 mt-3 d-flex justify-content-center">
                    <button
                        className="border-0 p-2 rounded-1 shadow-lg px-3 btn-download"
                        onClick={() => handleDownload(`${result.url}`)}
                    >
                        Download
                        <i className="bi bi-download fw-bold mx-2"></i>
                    </button>
                </div>
                <p
                    className="text-center mt-3 mb-5"
                    style={{ fontSize: "12px", color: "gray" }}
                >
                    untuk mendownload source code silakan klik tombol download.
                    File bisa berupa file zip, txt, pdf dan lainnya (kecuali
                    apk).
                </p>
            </div>
            <Footer />
        </>
    );
};

export default SourceCodeDesc;
