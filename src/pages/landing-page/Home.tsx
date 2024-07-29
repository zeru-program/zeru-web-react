import React, { useEffect, useState } from "react"
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from "./Header";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../../App.css";
import "../../Responsive.css";
const db = "https://zerupgmm-default-rtdb.firebaseio.com/"

const HeroSection = () => (
  <section style={{ width: '100%', height: 'auto' }} className="justify-content-center align-items-center px-3 gap-5 py-5 section-hero-home" id="home">
    <img src="/herobanner.png" className="rounded-5" style={{ width: '200px' }} alt="" data-aos="fadeInTop" />
    <div className="div-text-hero-home" data-aos="fadeIn">
      <p className="m-0">#letsdoit.</p>
      <h2 className="m-0 text-anton">I'M <span className="m-0" style={{ color: '#8B76F7' }}>JUSTINE</span></h2>
      <h2 className="m-0 text-uppercase text-anton">Fullstack web developer</h2>
      <p className="m-0 text-secondary">I am a fullstack web developer. I am currently studying Machine Learning. I built this website with the React js framework.</p>
      <div className="d-flex gap-3" style={{ fontSize: '1.8em' }}>
        <a href="https://github.com/zeru-program" className="bi bi-github" style={{ color: 'gray' }}></a>
        <a href="https://www.instagram.com/zerr.ace" className="bi bi-instagram" style={{ color: 'gray' }}></a>
        <a href="mailto:zeruprogram@gmail.com?subject=feedback" className="bi bi-envelope" style={{ color: 'gray' }}></a>
      </div>
    </div>
  </section>
);

const AboutSection = () => (
  <section className="m-0 text-center py-4 mt-3 px-5" id="about">
    <h2 className="m-0 text-uppercase text-anton" style={{ color: '#8B76F7' }} data-aos="fadeInLeft">- About me -</h2>
    <p className="m-0 text-secondary" data-aos="fadeIn">I am Justine, the student who created this Zeru website. This website was created or worked on in January 2024 and released in February 2024. I am adequate in the field of front-end web developer and back-end web developer too. Apart from creating websites, I also have creative skills in making films, existing photos and designs, as well as video editing. Thinking creatively and with high integrity is the my vision.</p>
    <div className="d-flex gap-2 mt-2 justify-content-center">
      <img style={{ width: '30px', filter: 'grayscale(100%)', opacity: '.5' }} src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1024px-Unofficial_JavaScript_logo_2.svg.png?20141107110902" alt="" />
      <img style={{ width: '40px', filter: 'grayscale(100%)', opacity: '.5' }} src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/1422px-PHP-logo.svg.png?20180502235434" alt="" />
      <img style={{ width: '30px', filter: 'grayscale(100%)', opacity: '.5' }} src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/230px-Python-logo-notext.svg.png?20220821155029" alt="" />
      <img style={{ width: '30px', objekFit: 'contain', filter: 'grayscale(100%)', opacity: '.5' }} src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1024px-React-icon.svg.png" alt="" />
      <img style={{ width: '30px', objekFit: 'contain', filter: 'grayscale(100%)', opacity: '.5' }} src="https://laravel.com/img/logomark.min.svg" alt="" />
      <img style={{ width: '40px', height: '30px', objekFit: 'contain', filter: 'grayscale(100%)', opacity: '.5' }} src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1024px-Bootstrap_logo.svg.png" alt="" />
      <img style={{ width: '30px', height: '30px', objekFit: 'contain', filter: 'grayscale(100%)', opacity: '.5' }} src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1024px-Vue.js_Logo_2.svg.png?20170919082558" alt="" />
      <img style={{ width: '60px', height: '30px', objekFit: 'contain', filter: 'grayscale(100%)', opacity: '.5' }} src="https://www.vectorlogo.zone/logos/mysql/mysql-ar21.svg" alt="" />
    </div>
  </section>
);

const SpecializingSection = () => (
  <section className="m-0 text-center mt-5 px-5 py-4">
    <h2 className="m-0 text-uppercase text-anton" style={{ color: '#8B76F7' }} data-aos="fadeIn">- Spealizing in -</h2>
    <div className="m-0 justify-content-center mt-2 d-flex w-100 animate-spealizing gap-4" style={{ flexDirection: 'row' }} data-aos="fadeIn">
      <div className="btn d-flex justify-content-center align-items-center flex-column" style={{ width: '250px', height: '250px', minWidth: '250px', background: 'rgb(175,160,248,.15)' }}>
        <h2 className="text-anton" style={{ color: '#8B76F7', margin: 0 }}>Web developer</h2>
        <p className="m-0 text-light">Providing a variety of website creation services, from low level to high level at affordable prices.</p>
      </div>
      <div className="btn d-flex justify-content-center align-items-center flex-column" style={{ width: '250px', height: '250px', minWidth: '250px', background: 'rgb(175,160,248,.15)' }}>
        <h2 className="text-anton" style={{ color: '#8B76F7', margin: 0 }}>Design grafis</h2>
        <p className="m-0 text-light">Providing various design services, starting from product design, logos and websites. At affordable prices.</p>
      </div>
      <div className="btn d-flex justify-content-center align-items-center flex-column" style={{ width: '250px', height: '250px', minWidth: '250px', background: 'rgb(175,160,248,.15)' }}>
        <h2 className="text-anton" style={{ color: '#8B76F7', margin: 0 }}>ML/Ai Engineer</h2>
        <p className="m-0 text-light">Currently I am still exploring this service, I plan to open an AI creation service as well as applications to help my daily life</p>
      </div>
    </div>
  </section>
);

const PortfolioSection = () => {
   const [projects, setProjects] = useState([]);
   useEffect(() => {
       fetch(db + "project.json")
       .then(res => res.json())
       .then(data => {
         setProjects(Object.values(data));
       })
   }, [])
   return (
  <section className="m-0 text-center mt-5 px-2 py-4" id="portofolio">
    <h2 className="m-0 text-uppercase text-anton" style={{ color: '#8B76F7' }} data-aos="fadeIn">- Portofolio & project -</h2>
    <div className="d-flex mt-2 media-sertifikat overflow-x-scroll gap-3" data-aos="fadeIn">
      <img src="https://api2.sololearn.com/v2/certificates/CC-TUHMCP8F/image/png" alt="" />
      <img src="https://api2.sololearn.com/v2/certificates/CC-3FQXEJ3W/image/png" alt="" />
      <img src="https://api2.sololearn.com/v2/certificates/CC-GBOMQTWI/image/png" alt="" />
    </div>
    <div className="d-flex mt-4 justify-content-center flex-wrap gap-3">
      {
        Array.isArray(projects) && projects.map(project => (
          <div className="box-project overflow-hidden" key={project.title} onClick={() => window.open(project.url)} data-aos="fadeIn">
            <img src={project.image} style={{ height: '250px' }} alt={project.title} className="w-100" />
            <h4 className="mx-2 m-0 text-anton mt-2">{project.title}</h4>
            <p className="mx-2">{project.tech}</p>
          </div>
        ))
      }

    </div>
  </section>
)
};

const ContactSection = () => {
    const [dataForms, setDataForms] = useState({
        name: '',
        email: '',
        message: ''
    })
    const handleChange = (e) => {
    const { name, value } = e.target;
    setDataForms((prevDataForms) => ({
      ...prevDataForms,
      [name]: value
    }));
  };
    const handleSubmit = (e) => {
        e.preventDefault()
        const forms = {
            name: dataForms.name,
            email: dataForms.email,
            message: dataForms.message
        }
        fetch(db + 'feedback.json', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(forms)
        })
        .then(res => {
            if (res.ok) {
                location.reload();
            }
        })
    }
    return (
  <section className="m-0 mt-5 px-5 py-4" id="contact" data-aos="fadeIn">
    <h2 className="m-0 text-uppercase text-anton text-center" style={{ color: '#8B76F7' }}>- Contact me -</h2>
    <form className="mb-2 justify-content-center w-100" onSubmit={handleSubmit}>
      <div className="form-group mb-2">
        <label className="text-anton">Name</label>
        <input type="text" className="form-control" placeholder="Enter your name" name="name" onChange={handleChange} />
      </div>
      <div className="form-group mb-2">
        <label className="text-anton">Email</label>
        <input type="email" className="form-control" placeholder="Enter your email" name="email" onChange={handleChange} />
      </div>
      <div className="form-group mb-2">
        <label className="text-anton">Message</label>
        <input type="text" className="form-control" placeholder="Enter your message" name="message" onChange={handleChange} />
      </div>
      <button type="submit" className="btn mt-2 text-light" style={{ background: '#8B76F7' }} >Submit</button>
    </form>
    <p className="m-0 text-center"><i className="bi bi-instagram"></i> @zerr.ace</p>
    <p className="m-0 text-center"><i className="bi bi-whatsapp"></i> +6287774487198</p>
    <p className="m-0 text-center"><i className="bi bi-envelope"></i> zeruprogram@gmail.com</p>
  </section>
 )
};

const Home = () => {
    useEffect(() => {
     AOS.init({
          duration: 2000,
          once: false,
        })
  }, [])
  return (
  <>
  <Navbar/>
  <main className="pt-3 text-light w-100 overflow-x-hidden">
    <HeroSection />
    <AboutSection />
    <SpecializingSection />
    <PortfolioSection />
    <ContactSection />
    <Footer />
  </main>
  </>
  )
};

export default Home;
