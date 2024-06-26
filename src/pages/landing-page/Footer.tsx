const Footer = () => {
    
    
    let currentYear = new Date().getFullYear();
    return (
        <>
            {/* footer start */}
            <footer className="">
                <div className="container-footer">
                    <label className="logo-footer">Zerr.</label>
                    <div className="isi-f">
                        <label className="title-footer">
                            Information web zeru
                        </label>
                        <p className="sub-footer">Created by zeru</p>
                        <p className="sub-footer">
                            programming language Javascript + Typescript
                        </p>
                        <p className="sub-footer">
                            framework use, bootstrap, React js + typescript
                        </p>
                        <p className="sub-footer">
                            library database from firebase
                        </p>
                        <p className="sub-footer">
                            library css ANIMATE.CSS,TRANSITION.CSS
                        </p>
                        <p className="sub-footer">
                            hosting firebase and github
                        </p>
                        <p className="sub-footer">created in 17 febuary 2024</p>
                    </div>
                    <div className="isi-f">
                        <label className="title-footer">Services</label>
                        <p className="sub-footer">web developer</p>
                        <p className="sub-footer">web design / UI-UX</p>
                        <p className="sub-footer">front-end web engineer</p>
                        <p className="sub-footer">back-end web engineer</p>
                        <p className="sub-footer">designer</p>
                        <p className="sub-footer">cinematography</p>
                    </div>
                    <div className="isi-f">
                        <label className="title-footer">Download zeru apps</label>
                        {/*
            <p className="sub-footer">study in smpn school</p>
            */}
                      <a className="btn-download-app" href="https://sfile.mobi/58UK5oThvGe">
                        <i className="bi bi-android2" /> Download
                    </a>
                    </div>
                    <div className="isi-f pb-3">
                        <label className="title-footer">
                            Social media zeru
                        </label>
                        <p className="sub-footer">
                            <a href="https://github.com/zeru-program/">
                                Github
                            </a>
                        </p>
                        <p className="sub-footer">
                            <a href="https://wa.me/6289526333265">WhatsApp</a>
                        </p>
                        <p className="sub-footer">
                            <a href="https://www.instagram.com/zerr.ace?r">
                                Instagram
                            </a>
                        </p>
                        <p className="sub-footer">
                            <a href="mailto:zeruprogram@gmail.com?subject=HireYou">
                                Email
                            </a>
                        </p>
                    </div>
                </div>
                <label className="copyright mt-5">
                    Copyright ©{currentYear} zeru program, all rights reserved.
                    version web app 3.0.5
                </label>
            </footer>
            {/* footer end */}
        </>
    );
};

export default Footer;
