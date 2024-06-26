import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "../../App.css";

const Navbar = () => {
    const loc = useLocation();
    const [navShadow, setNavShadow] = useState("");
    const [colorDark, setColorDark] = useState("");
    const [actNavDefault, setActNavDefault] = useState("active");

    // shadow nav
    useEffect(() => {
        const handleScroll = () => {
            if (
                window.pageYOffset >=
                (document.getElementById("home")?.offsetHeight || 0) -
                    (document.getElementById("nav")?.offsetHeight || 0)
            ) {
                setNavShadow("nav-shadow");
                setColorDark("nav-color-dark");
                setActNavDefault("active-lg");
            } else {
                setNavShadow("");
                setColorDark("");
                setActNavDefault("active");
            }
        };

        window.addEventListener("scroll", handleScroll);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // const isLog = localStorage.getItem("hasLogin")
    //const user = localStorage.getItem("username")

    /* const logout = () => {
    localStorage.removeItem('hasLogin');
    localStorage.removeItem('username');
    localStorage.removeItem('email');
    localStorage.removeItem('password');
  location.reload();
    }*/

    return (
        <>
            {/* =============== Header & Navbar ================ */}
            <header className="px-5">
                <nav
                    className={`navbar navbar-expand-lg bg-light ${navShadow}`}
                >
                    <div
                        className="w-100 position-fixed d-flex justify-content-center"
                        style={{ top: "10px" }}
                        onClick={() => (window.location.href = "/")}
                    >
                        {" "}
                        <img
                            src="/logonav.png"
                            alt="logo"
                            style={{ width: "40px" }}
                            className=""
                        />
                    </div>
                    <div className="container-fluid">
                        <div
                            className={`navbar-brand ${colorDark}`}
                            style={{ zIndex: "9999" }}
                            onClick={() =>
                                (window.location.href =
                                    "https://github.com/zeru-program")
                            }
                        >
                            {" "}
                            <i
                                style={{ width: "40px" }}
                                className="bi bi-github"
                            />
                        </div>
                        <button
                            className="navbar-toggler nav-tog"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarNav"
                            aria-controls="navbarNav"
                            style={{
                                background: "red !important",
                                zIndex: "9999"
                            }}
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <i
                                className={`icon-nav-tg bi bi-list ${colorDark}`}
                            ></i>
                        </button>
                        <div
                            className="collapse navbar-collapse"
                            id="navbarNav"
                        >
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a
                                        className={`nav-link ${
                                            loc.pathname === "/"
                                                ? `${actNavDefault}`
                                                : ""
                                        }`}
                                        aria-current="page"
                                        href="/"
                                    >
                                        Home
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className={`nav-link ${
                                            loc.pathname === "/portofolio"
                                                ? `${actNavDefault}`
                                                : ""
                                        }`}
                                        href="/portofolio"
                                    >
                                        Portofolio
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className={`nav-link ${
                                            loc.pathname === "/source-code"
                                                ? `${actNavDefault}`
                                                : ""
                                        }`}
                                        href="/source-code"
                                    >
                                        Source code
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className={`nav-link ${
                                            loc.pathname === "/contact"
                                                ? `${actNavDefault}`
                                                : ""
                                        }`}
                                        href="/contact"
                                    >
                                        Contact
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
};

export default Navbar;
