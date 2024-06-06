import { useParams } from "react-router-dom"
import { useEffect, useState} from "react"
let urlDb = 'https://zerupgmm-default-rtdb.firebaseio.com/';

const HeaderNavbar = () => {
    
     const [navLinks, setNavLinks] = useState('')
     const [imgNav, setImgNav] = useState('/menu.png')
     const [navShadow, setNavShadow] = useState("")
    var valueBar: boolean = false

    // clicked hamburger
    function changeImgNav() {
    if (valueBar) {
        setImgNav("/menu.png")
        setNavLinks("");
    } else {
         setImgNav("/cross.png")
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
    
    const isLog = localStorage.getItem("hasLogin")
    const user = localStorage.getItem("username")

    
    const logout = () => {
    localStorage.removeItem('hasLogin');
    localStorage.removeItem('username');
    localStorage.removeItem('email');
    localStorage.removeItem('password');
  location.reload();
    }
    
    return (
        <>
        {/* =============== Header & Navbar ================ */}
<header>
  <nav>
    <div className={`con-nav ${navShadow}`}>
      <label className="logo-nav"><a className="text-decoration-none" href="/"><img src="/favicon.png" alt='logo' style={{width:"40px"}} /></a></label>
      <img className="bar-nav" onClick={changeImgNav} src={imgNav} alt="nav menu" />
    </div>
    <div className={`nav-links ${navLinks}`}>
      <a id="toHome" className="link-item" href="/">Home</a>
      <a id="toAbout" href="/#about" className="link-item">About us</a>
      <a id="toSkils" href="/#skils" className="link-item">Skils</a>
      <a id="toPortofolio" href="/#portofolio" className="link-item">Portofolio n Project</a>
      <a id="toContact" href="/#contact" className="link-item">Contact</a>
     {!isLog && (
      <>
        <a id="sign-in-btn" onClick={() => window.location.href = '/sign-in'} className="link-item p-2 btn btn-outline-primary">Sign-in</a>
        <a id="sign-up-btn" onClick={() => window.location.href = '/sign-up'} className="link-item p-2 btn btn-bg-primary btn-outline-primary text-light">Sign-up</a>
      </>
    )}
    {isLog && (
    <>
      <a id="textUserNav" style={{marginLeft :"10px"}} className="d-flex p-2">Hello  {user}!</a>
      <a id="logout" className="d-flex link-item p-2 btn-outline-danger" style={{marginLeft :"10px"}} onClick={logout} >Log-out</a>
      </>
      )}
    </div>
  </nav>
</header>
        </>
    )
}

const Footer = () => {
    return (
        <>
        {/* footer start */}
<footer className="">
  <div className="container-footer">
    <label className="logo-footer">Zerr.</label>
    <div className="isi-f">
      <label className="title-footer">Information web zeru</label>
      <p className="sub-footer">Created by zeru</p>
      <p className="sub-footer">programming language Javascript + Typescript</p>
      <p className="sub-footer">framework use, bootstrap, React js + typescript</p>
      <p className="sub-footer">library database from firebase </p>
      <p className="sub-footer">library css ANIMATE.CSS,TRANSITION.CSS</p>
      <p className="sub-footer">hosting firebase and github</p>
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
      <label className="title-footer">Activity</label>
    {/*  <p className="sub-footer">study in smpn school</p>*/}
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
  <label className="copyright mt-3">Copyright ©2024 all rights reserved. by zeru, version web app 3.0.0</label>
</footer>
{/* footer end */}
        </>
   )
}

const SourceCodeDesc = () => {
  let { id } = useParams();
  const [result, setResult] = useState<any | null>(null);

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
    return <div>Data not found</div>;
  }
    
    
    const handleDownload = (url: string) => {
        const replaceU = url.replace("/", "")
      const anchor = document.createElement('a');
      anchor.href = url;
      anchor.download = "Sc-" + replaceU;
    
      document.body.appendChild(anchor);
      anchor.click();
      document.body.removeChild(anchor);
    };
  
  return (
      <>
    <HeaderNavbar/>
    <img src="/bgcode1.jpg" style={{width:"100%"}}/>
    <div className="my-3 con-desc-sc px-3 container" style={{wordBreak:"break-word"}}>
      <h1 className="fw-bold">{result.title}</h1>
       <p>{result.description}</p>  
        <div className="w-100 d-flex justify-content-center">
         <button className="border-0 p-2 rounded-1 shadow-lg px-3 btn-download" onClick={() => handleDownload(`${result.url}`)}>
         Download
         <i className="bi bi-arrow-down fw-bold mx-1"></i>
         </button>
        </div> 
        <p className="text-center mt-3 mb-5" style={{fontSize:"12px",color:"gray"}}>
           untuk mendownload source code silakan klik tombol download. File bisa berupa file zip, txt, pdf dan lainnya (kecuali apk).
        </p>
    </div>
   <Footer />
     </>
  );
};


export default SourceCodeDesc