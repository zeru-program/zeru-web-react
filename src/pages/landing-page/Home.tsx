import { useState, useEffect } from 'react'
import '../../App.css'
import '../../Responsive.css'


var urlDb: string = 'https://zerupgmm-default-rtdb.firebaseio.com/';


const BtnBackToTop = ({handleScrollUp}) => {
    const [btnBtt, setBtnBtt] = useState('')
    
// back to top btn
document.addEventListener('scroll', (e) => {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
     setBtnBtt('show');
  } else {
      setBtnBtt('');
  }
})

var handleBtt = (e) => {
  e.preventDefault();
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0;
  handleScrollUp();
}
    
    
    return (
        <>
        {/* =============== button back to top ================ */}
<button onClick={handleBtt} style={{display:"flex", justifyContent: "center", alignItems:"center"}} id="button-to-top" className={btnBtt}><i className="bi bi-arrow-up" /></button>
        </>
    )
}


const HeaderNavbar = () => {
    
     const [navLinks, setNavLinks] = useState('')
     const [imgNav, setImgNav] = useState('menu.png')
     const [navShadow, setNavShadow] = useState("")
    var valueBar: boolean = false

    // clicked hamburger
    function changeImgNav() {
    if (valueBar) {
        setImgNav("menu.png")
        setNavLinks("");
    } else {
         setImgNav("cross.png")
         setNavLinks("act-link");
    }
    valueBar = !valueBar;
}

// shadow nav
useEffect(() => {
  const handleScroll = () => {
    if (window.pageYOffset >= (document.getElementById('home')?.offsetHeight || 0) - (document.getElementById('nav')?.offsetHeight || 0)) {
      setNavShadow('nav-shadow');
    } else {
      setNavShadow('');
    }
  };

  window.addEventListener('scroll', handleScroll);

  // Clean up the event listener when the component unmounts
  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, []);


    return (
        <>
        {/* =============== Header & Navbar ================ */}
<header>
  <nav>
    <div className={`con-nav ${navShadow}`}>
      <label className="logo-nav"><a className="text-decoration-none" href="/">Zerr.</a></label>
      <img className="bar-nav" onClick={changeImgNav} src={imgNav} alt="nav menu" />
    </div>
    <div className={`nav-links ${navLinks}`}>
      <a id="toHome" className="link-item" href="/">Home</a>
      <a id="toAbout" href="/#about" className="link-item">About us</a>
      <a id="toSkils" href="/#skils" className="link-item">Skils</a>
      <a id="toPortofolio" href="/#portofolio" className="link-item">Portofolio n Project</a>
      <a id="toContact" href="/#contact" className="link-item">Contact</a>
      <a id="sign-in-btn" onclick="window.location.href = '/auth/sign-in/'" className="link-item p-2 btn btn-outline-primary">Sign-in</a>
      <a id="sign-up-btn" onclick="window.location.href = '/auth/sign-up/'" className="link-item p-2 btn btn-bg-primary btn-outline-primary text-light">Sign-up</a>
      <a id="textUserNav" style={{"margin-left":"10px"}} className="d-none p-2">Hello !</a>
      <a id="logout" className="d-none link-item p-2 btn-outline-danger" style={{"margin-left":"10px"}} onclick="logoutUser()">Log-out</a>
    </div>
  </nav>
</header>
        </>
    )
}


const Homepage = ({logoTr, titleTr, subTr, btnTalkTr,  btnCvTr, conImgTalkTr}) => {
    return (
        <>
  {/* home page start */}
  <div className="container-page" id="home">
    <div id="bg-patern-home" />
    <div className="fill-home">
      <div className="animateWipe" transition-style="out:circle:top-right" />
      <img src="welcome.svg" className="logo-home-isi {logoTr}" alt="logo" />
      <label className="title {titleTr}" id="homeTitle">Welcome !</label>
      <label className="sub-title" id="homeSubtitle">
        <font className="hi-title">Hi I'm Justine</font> !<br />
        <p className="px-3 m-0 {}">Web developer || Front-end engineer || Designer</p>
        <p className="px-3">Created with react + typescript</p>
      </label>
      <div className="d-flex flex-wrap">
        <button className="btn-talk" onclick="talk()">Let's Talk</button>
        <button className="btn-cv" style={{"padding-inline":"8px !important"}} onclick="downloadCv()">Download CV</button>
      </div>
      <div className="con-img-talk">
        <img src="whatsapp.png" onclick="window.location.href = 'https://example.com'" className="img-talk-social" alt />
        <img src="instagram.png" className="img-talk-social" alt />
        <img src="gmail.png" className="img-talk-social" alt />
      </div>
    </div>
    <svg className="waves-home" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffffff" fillOpacity={1} d="M0,160L48,170.7C96,181,192,203,288,213.3C384,224,480,224,576,213.3C672,203,768,181,864,176C960,171,1056,181,1152,181.3C1248,181,1344,171,1392,165.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" /></svg>
  </div>
  {/* home page end */}
        </>
    )
}

const AboutUs = () => {
    return (
        <>
  {/* about page start */}
  <div className="container-page" id="about">
    <label className="title translateAbout" id="aboutTitle">About zeru</label>
    <p className="sub-title px-3 translateAbout" id="aboutSubtitle" style={{"padding-inline":"15px !important"}}>
      I am Justine, the student who created this Zeru website.
      This website was created or worked on in January 2024 and
      released in February 2024. With my sufficient skills, I
      created parallax effects on my website. Also prioritize the
      existing user interface and user experience. I am adequate
      in the field of front-end web developer. By moving towards
      the field of full-stack developer, I am now studying backend
      web development. Now I will be 15 years old in 2024 and
      studying at SMPN 10 BOGOR, WEST JAVA. Apart from creating
      websites, I also have creative skills in making films,
      existing photos and designs, as well as video editing.
      Thinking creatively and with high integrity is the my
      vision.
    </p>
  </div>
  {/* about page end */}
        </>
    )
}

const Skils = () => {
   return (
       <>
  {/* skils page start */}
  <div className="container-page" style={{"padding-inline":"10px !important"}} id="skils">
    <label className="title" id="skilTitle">What are my skills?</label>
    <label className="sub-title">my skills that I currently have</label>
    {/* box */}
    <div className="con-box-skil">
      <div className="box">
        <img src="html.png" className="img-skil" alt />
        <p className="desk-skil">
          Saya sudah mahir dalam menuliskan code HTML5 maupun HTML semantic baik itu pembuatan navbar, form, tabel, dan lainnya. Hampir seluruh projek saya dibuat dengan HTML.
        </p>
      </div>
      <div className="box">
        <img src="css.png" className="img-skil" alt />
        <p className="desk-skil">
          Saya mahir dalam mendesign website yang responsive dan tentu saja modern. Dengan mempunyai pengalaman dan skill memakai framework css seperti bootstrap, dan tallwind, serta mampu mengkomunikasikan library untuk memperindah web saya.
        </p>
      </div>
      <div className="box">
        <img src="js.png" className="img-skil" alt />
        <p className="desk-skil">
          Saya memiliki keterampilan dalam mendesign logika dan implementasi system untuk website saya. Dan juga memiliki ide kreatif dalam menyelesaikan debugging, mahir juga dalam menguasai framework javascript berupa jquery, react. Serta mengkomunikasikan library js untuk web saya. 
        </p>
      </div>
      <div className="box">
        <img src="gnu-bash.png" className="img-skil" alt />
        <p className="desk-skil">
          Saya memiliki keterampilan yang cukup baik dalam mendesain dan membuat aplikasi sederhana dalam script "sh", dengan menjalankannya di termux.
        </p>
      </div>
      <div className="box">
        <img src="php.png" className="img-skil" alt />
        <p className="desk-skil">
          Selain memiliki keahlian html js saya juga memiliki kemampuan dalam bahasa PHP web server, baik mengintegrasikan database mysql, maupun mendesign halaman dan logika secara awam. Serta memiliki pengetahuan dan pengalaman dalam framework Laravel dan Codeingiter.
        </p>
      </div>
      <div className="box">
        <img src="git.png" className="img-skil" alt />
        <p className="desk-skil">
          Saya memiliki keterampilan dalam menyelesaikan dan menjalankan program git ini baik di termux (android) maupun windows. Dengan mengintegrasikan dari github dan gitlab itu cukup memudahkan pengembangan web saya. Dengan code git yang saya tahu, seperti push, clone, commit, branch, merge dan lainnya.
        </p>
      </div>
      <div className="box">
        <img src="db.png" className="img-skil" alt />
        <p className="desk-skil">
          Mahir dalam menyusun atau pun mendesign struktur database yang ada, dengan memahami berbagai jenis database. Berpengalaman memakai databae berupa sql contohnya mysql/mariadb, dan non sql contohnya spreadsheets berbentuk API, Firebase, Json.
        </p>
      </div>
      <div className="box">
        <img src="api.png" className="img-skil" alt />
        <p className="desk-skil">
          Memiliki pengetahuan berkomunikasi dalam integrisasi API untuk menghubungkan ke website saya.
        </p>
      </div>
    </div>
  </div>
  {/* skils page end */}
       </>
   )
}

const Service = () => {
    return (
        <>
  {/* servis page start */}
  <div className="container-page" id="servis">
    <label className="title-servis w-100" onclick="window.location.href='https://wa.me/6287774487198'">
      Take our Service in here!
      <label style={{"font-weight":"300 !important"}}>(click it)</label></label>
  </div>
  {/* servis page end */}
        </>
     )
}

const Portofolio = () => {
    return (
        <>
  {/* Portofolio carosuel start */}
  <div className="container-page" id="portofolio">
    <div id="carouselExampleInterval" className="carousel slide carousel-fade bg-at-fix w-100 fix-padding-i" data-bs-ride="carousel">
      <div className="carousel-inner" id="portofolio-body-por">
        {/*   <div class="carousel-item active" data-bs-interval="5000">
          <div style="background-image: url('por1.jpg');" class="d-block img-porto w-100" alt=""></div>
        </div>
        <div class="carousel-item" data-bs-interval="5000">
          <div style="background-image: url('por2.jpg');" class="d-block img-porto w-100" alt="..."></div>
        </div>
        <div class="carousel-item" data-bs-interval="5000">
          <div style="background-image: url('por3.jpg');" class="d-block img-porto w-100" alt="..."></div>
        </div>
        */}
      </div>
      <button className="carousel-control-prev btn-portofolio" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next btn-portofolio" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  </div>
  {/* Portofolio carosuel end */}
        </>
    )
}

const Project = () => {
    return (
        <>
  {/* projek  page start */}
  <div className="pt-5" id="projek">
    <label className="title-project-v1">Zeru Project</label>
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
      <h3 className="fw-bold bg-warning p-1" style={{"font-family":"'Poppins', Sans-Serif"}}>Fake Project</h3>
      <div className="d-flex py-5 gap-3 overflow-x-auto" style={{"width":"90%","margin-top":"-20px"}} id="fake-p-body">
      </div>
      <h3 className="fw-bold bg-info p-1" style={{"font-family":"'Poppins', Sans-Serif"}}>Real Project</h3>
      <div className="d-flex py-5 gap-3 overflow-x-auto" style={{"width":"90%","margin-top":"-20px"}} id="real-p-body">
      </div>
    </div>
  </div>
  {/* projek  page end */}
        </>
    )
}

const ContactUs = () => {
    return (
        <>
  {/* contact us  page start */}
  <div className="container-page" id="contact">
    <div className="contact-information">
      <label className="title tContact">Follow us</label>
      <br />
      <div className="isi-info-contact">
        <div className="c1-contact" style={{"padding-left":"5px"}}>
          <i className="img-talk-social bi bi-linkedin" alt />
          <label><a href="https://linked.com/Justine/" className="href-contact">@Justine</a></label>
        </div>
        <div className="c1-contact" style={{"padding-left":"5px"}}>
          <i className="img-talk-social bi bi-github" alt />
          <label><a href="https://github.com/zeru-program/" className="href-contact">@zeru-program</a></label>
        </div>
        <div className="c1-contact">
          <img src="whatsapp.png" className="img-talk-social" alt />
          <label><a href="https://wa.me/6289526333265" className="href-contact">+6289526333265</a></label>
        </div>
        <div className="c1-contact">
          <img src="instagram.png" className="img-talk-social" alt />
          <label><a href="https://www.instagram.com/zerr.ace?r" className="href-contact">@zerr.ace</a></label>
        </div>
        <div className="c1-contact">
          <img src="gmail.png" className="img-talk-social" alt />
          <label><a href="mailto:zeruprogram@gmail.com?subject=HireYou" className="href-contact">zeruprogram@gmail.com</a></label>
        </div>
        <div className="c1-contact">
          <img src="location.png" className="img-talk-social" alt />
          <label><a href="https://maps.app.goo.gl/DFANiWSdinNK3yhB7" className="href-contact address">   Cipaku, bogor selatan Jawa barat, Indonesia.</a></label>
        </div>
      </div>
    </div>
    <div className="contact-form" id="talkHref">
      <label className="title tContact">Contact us</label>
      <form action="https://sheetdb.io/api/v1/5evyv444o1ogn" method="POST" className="form">
        <div className="con-input">
          <label className="name-input">Nama lengkap</label>
          <input type="text" name="nama" className="input-form" id="nama" oninput="cekDisabledBtn()" placeholder="type in here.." required />
        </div>
        <div className="con-input">
          <label className="name-input">Email</label>
          <input type="email" name="email" className="input-form" id="email" oninput="cekDisabledBtn()" placeholder="type in here.." required />
        </div>
        <div className="con-input">
          <label className="name-input">Subjek</label>
          <input type="text" name="judul" className="input-form" id="subjek" oninput="cekDisabledBtn()" placeholder="type in here.." required />
        </div>
        <div className="con-input">
          <label className="name-input">Isi subjek</label>
          <textarea name="isi_subjek" className="input-form textarea-form" id="isiSubjek" oninput="cekDisabledBtn()" placeholder="type in here.." required rows={8} cols={40} defaultValue={""} />
        </div>
        <button className="submit-form" type="button" onclick="submitForm()" disabled>Kirim</button>
      </form>
    </div>
  </div>
  {/* contact us  page end */}
        </>
   )
}

const Footer = () => {
    return (
        <>
        {/* footer start */}
<footer className>
  <div className="container-footer">
    <label className="logo-footer">Zerr.</label>
    <div className="isi-f">
      <label className="title-footer">Information web zeru</label>
      <p className="sub-footer">Created by zeru</p>
      <p className="sub-footer">programming language HTML5,CSS,JS</p>
      <p className="sub-footer">framework use, bootstrap, jquery</p>
      <p className="sub-footer">library database from firebase </p>
      <p className="sub-footer">library css ANIMATE.CSS,TRANSITION.CSS</p>
      <p className="sub-footer">hosting netlify and github</p>
      <p className="sub-footer">created in 17 febuary 2024</p>
    </div>
    <div className="isi-f">
      <label className="title-footer">Services</label>
      <p className="sub-footer">web developer</p>
      <p className="sub-footer">web design / UI-UX</p>
      <p className="sub-footer">front-end engineer</p>
      <p className="sub-footer">back-end junior / database engineering</p>
      <p className="sub-footer">designer</p>
      <p className="sub-footer">cinematography</p>
    </div>
    <div className="isi-f">
      <label className="title-footer">Activity</label>
      <p className="sub-footer">study in smpn school</p>
      <p className="sub-footer">study programing otodidak</p>
      <p className="sub-footer">freelance (friend's project)</p>
      <p className="sub-footer">church service</p>
      <p className="sub-footer">photography</p>
    </div>
    <div className="isi-f">
      <label className="title-footer">Social media zeru</label>
      <p className="sub-footer"><a href="https://github.com/zeru-program/">Github</a></p>
      <p className="sub-footer"><a href="https://wa.me/6289526333265">WhatsApp</a></p>
      <p className="sub-footer"><a href="https://www.instagram.com/zerr.ace?r">Instagram</a></p>
      <p className="sub-footer"><a href="mailto:zeruprogram@gmail.com?subject=HireYou">Email</a></p>
    </div>
  </div>
  <label className="copyright">copyright ©2024 all rights reserved. by zeru, version web app 2.8.1. new updated in 16 May 2024</label>
</footer>
{/* footer end */}
        </>
   )
}

const Modals = () => {
    return (
        <>
        {/* pop up modals sucsess form */}
<div className="con-popup-succes">
  <div className="isi-popup-succ">
    <p className="succes-title">Successful sending!</p>
  </div>
</div>
{/* pop up modals sucsess form */}
        </>
    )
}

const ContentHome = () => {
    return (
        <>
        {/* ============= main content start ============== */}
     <main>
      <Homepage />
      <AboutUs />
      <Skils />
      <Service />
      <Portofolio />
      <Project />
      <ContactUs />
 {/* <ins className="adsbygoogle" style={{"display":"inline-block","width":"360px","height":"800px"}} data-ad-client="ca-pub-2052442865900021" data-ad-slot={3410580948} /> */}
     </main>
        </>
    )
}


const Home = () => {
    
  const [logoTr, setLogoTr] = useState("");
  const [titleTr, setTitleTr] = useState("");
  const [subTr, setSubTr] = useState("");
  const [btnTalkTr, setBtnTalkTr] = useState("");
  const [btnCvTr, setBtnCvTr] = useState("");
  const [conImgTalkTr, setConImgTalkTr] = useState("");

function handleScrollUp() {
    /*if (isLogoTranslated) {
        logo.style.animation = "trasl 1.5s ease";
        title.style.animation = "traslRight 1s ease";
        subtitle.style.animation = "traslRight 2s ease";
        btnTalk.style.animation = "traslRight 2.5s ease";
        btnCv.style.animation = "traslRight 3s ease";
        conImgTalk.style.animation = "traslRight 3.5s ease";


        logo.classList.remove("translated");
        title.classList.remove("translatedRight");
        subtitle.classList.remove("translatedRight");
        btnTalk.classList.remove("translatedRight");
        btnCv.classList.remove("translatedRight");
        conImgTalk.classList.remove("translatedRight");
        isLogoTranslated = false;
    }*/

    setLogoTr("trasl 1.5s ease")
    setTitleTr("traslRight 1s ease")
    setSubTr('traslRight 2s ease')
    setBtnTalkTr('traslRight 2.5s ease')
    setBtnCvTr("traslRight 3s ease")
    setConImgTalkTr("traslRight 3.5s ease")
   //     alert('dd')
}
    
  return (
      <>
      <BtnBackToTop handleScrollUp={handleScrollUp} logoTr={logoTr} titleTr={titleTr} subTr={subTr} btnTalkTr={btnTalkTr} btnCvTr={btnCvTr} conImgTalkTr={conImgTalkTr} />
      <HeaderNavbar />
      <ContentHome />
      <Footer />
      <Modals />
      </>
    )
}

export default Home;