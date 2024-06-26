import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../../App.css";
import "../../Responsive.css";
var urlDb: string = "https://zerupgmm-default-rtdb.firebaseio.com/";

const Header: React.FC = () => {
    return (
        <Helmet>
            <title>Zeru programmer - Portofolio</title>
            <meta name="title" content="Zeru programmer web original" />
            <meta
                name="description"
                content="My portfolio contains projects that I have worked on, by practicing skills."
            />
            <meta
                name="keywords"
                content="zeru-program, zerupgm, zpgm, zerupgmm, zeru website, zeru portofolio, portofolio zeru"
            />
        </Helmet>
     )
}

const PortofolioContent = () => {
    const [imgPorto, setImgPorto] = useState<{ url: string }[]>([]);

    /*
            <div
              key={key}
              className={`carousel-item ${index === 0? 'active' : ''}`}
              data-bs-interval="5000"
            >
              <div
                style={{ backgroundImage: `url('${val.url}')` }}
                className="d-block img-porto w-100"
                alt="..."
              />
            </div> */

    useEffect(() => {
        fetch(urlDb + "portofolio.json")
            .then(res => res.json())
            .then(data => {
                const portoArray: { url: string }[] = [];
                for (let key in data) {
                    portoArray.push(data[key]);
                }
                setImgPorto(portoArray);
            })
            .catch(e => console.error(e));
    }, []);

    return (
        <>
            {/* Portofolio carosuel start */}
            <div
                className="container-page"
                style={{ animation: "fadeIn 1s ease" }}
                id="portofolio"
            >
                <div
                    id="carouselExampleInterval"
                    className="carousel slide carousel-fade bg-at-fix w-100 fix-padding-i"
                    data-bs-ride="carousel"
                >
                    <div className="carousel-inner" id="portofolio-body-por">
                        {imgPorto.map((porto, index) => (
                            <div
                                key={index}
                                className={`carousel-item ${
                                    index === 0 ? "active" : ""
                                }`}
                                data-bs-interval="5000"
                            >
                                <div
                                    style={{
                                        backgroundImage: `url('${porto.url}')`
                                    }}
                                    className="d-block img-porto w-100"
                                />
                            </div>
                        ))}
                    </div>
                    <button
                        className="carousel-control-prev btn-portofolio"
                        type="button"
                        data-bs-target="#carouselExampleInterval"
                        data-bs-slide="prev"
                    >
                        <span
                            className="carousel-control-prev-icon"
                            aria-hidden="true"
                        />
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                        className="carousel-control-next btn-portofolio"
                        type="button"
                        data-bs-target="#carouselExampleInterval"
                        data-bs-slide="next"
                    >
                        <span
                            className="carousel-control-next-icon"
                            aria-hidden="true"
                        />
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            {/* Portofolio carosuel end */}
        </>
    );
};

const Project = () => {
    interface Project {
        display: string;
        title: string;
        tech: string;
        date: string;
        description: string;
        url: string;
    }

    // Assuming myProject is of type Project[]
    const [myProject, setMyProject] = useState<Project[]>([]);

    useEffect(() => {
        fetch(urlDb + "project.json")
            .then(res => res.json())
            .then(data => {
                const projekArray = [];
                for (let key in data) {
                    projekArray.push(data[key]);
                }
                setMyProject(projekArray);
            })
            .catch(e => console.error(e));
    }, []);

    return (
        <>
            {/* projek  page start */}
            <div
                className="pt-5"
                style={{ animation: "fadeIn 1s ease" }}
                id="projek"
            >
                <label
                    className="title-project-v1"
                    style={{ animation: "fadeInDown 1s ease" }}
                >
                    Zeru Project
                </label>
                <div className="container-project-isi">
                    {/*   <div class="all-project">
          <label class="title-project">Fake Project</label>
         <label class="link-project"> - <a href="https://videografi-zerux.netlify.app/">Videografi learning</a></label>
        <label class="link-project"> - <a href="https://easyworshipmobile-zpgm.netlify.app/">Easyworship mobile</a></label>
        <label class="link-project"> - <a href="https://todoslar.000webhostapp.com/">To-do List - Laravel (CRUD)</a></label>
        <label class="link-project"> - <a href="https://qrgeneratorzp.netlify.app">QR Generator - React js</a></label>
        <label class="link-project"> - <a href="https://michstore.netlify.app">Michstore e-commerce (updt)</a></label>
        <label class="link-project"> - <a href="https://chatzer-lite.web.app">Chatzer lite - chatting web realtime</a></label>
        </div> */}
                    <h3
                        className="fw-bold bg-warning p-1"
                        style={{ fontFamily: "'Poppins', Sans-Serif" }}
                    >
                        Fake Project
                    </h3>
                    <div
                        className="d-flex py-5 gap-3 overflow-x-auto"
                        style={{ width: "90%", marginTop: "-20px" }}
                        id="fake-p-body"
                    >
                        {myProject
                            .filter(proj => proj.display === "fake")
                            .map((proj, index) => (
                                <div className="btn-project" key={index}>
                                    <p className="m-0 fw-bold">{proj.title}</p>
                                    <p
                                        className="m-0"
                                        style={{ fontSize: ".7em" }}
                                    >
                                        {proj.tech}
                                    </p>
                                    <p
                                        className="m-0"
                                        style={{ fontSize: ".7em" }}
                                    >
                                        {proj.description}.
                                    </p>
                                    <button
                                        className="py-2"
                                        style={{
                                            background: "transparent",
                                            color: "white",
                                            border: "1.5px solid white",
                                            width: "90px",
                                            fontSize: ".8em",
                                            height: "auto"
                                        }}
                                        onClick={() =>
                                            window.open(`${proj.url}`)
                                        }
                                    >
                                        Live web{" "}
                                        <i className="bi bi-arrow-right" />
                                    </button>
                                    <p
                                        className="mt-2 mb-0"
                                        style={{ fontSize: ".7em" }}
                                    >
                                        Created by zeru in {proj.date}.
                                    </p>
                                </div>
                            ))}
                    </div>
                    <h3
                        className="fw-bold bg-info p-1"
                        style={{ fontFamily: "'Poppins', Sans-Serif" }}
                    >
                        Real Project
                    </h3>
                    <div
                        className="d-flex py-5 gap-3 overflow-x-auto"
                        style={{ width: "90%", marginTop: "-20px" }}
                        id="real-p-body"
                    >
                        {myProject
                            .filter(proj => proj.display === "real")
                            .map((proj, index) => (
                                <div className="btn-project" key={index}>
                                    <p className="m-0 fw-bold">{proj.title}</p>
                                    <p
                                        className="m-0"
                                        style={{ fontSize: ".7em" }}
                                    >
                                        {proj.tech}
                                    </p>
                                    <p
                                        className="m-0"
                                        style={{ fontSize: ".7em" }}
                                    >
                                        {proj.description}.
                                    </p>
                                    <button
                                        className="py-2"
                                        style={{
                                            background: "transparent",
                                            color: "white",
                                            border: "1.5px solid white",
                                            width: "90px",
                                            fontSize: ".8em",
                                            height: "auto"
                                        }}
                                        onClick={() =>
                                            window.open(`${proj.url}`)
                                        }
                                    >
                                        Live web{" "}
                                        <i className="bi bi-arrow-right" />
                                    </button>
                                    <p
                                        className="mt-2 mb-0"
                                        style={{ fontSize: ".7em" }}
                                    >
                                        Created by zeru in {proj.date}.
                                    </p>
                                </div>
                            ))}
                    </div>
                </div>
            </div>
            {/* projek  page end */}
        </>
    );
};

const Portofolio = () => {
    return (
        <>
            <Header />
            <Navbar />
            <PortofolioContent />
            <Project />
            <Footer />
        </>
    );
};

export default Portofolio;
