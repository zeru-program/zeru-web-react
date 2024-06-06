import { useState, useEffect } from "react"
let urlDb = 'https://zerupgmm-default-rtdb.firebaseio.com/';

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

const Content = () => {
    
    const [result, setResult] = useState<any[]>([]);
    
    useEffect(() => {
          (async () => {
            // ...
            fetch(urlDb + 'sourceCode.json')
            .then(res => res.json())
            .then(data => {
              var array: any[] = [];
              for (let key in data) {
                array.push(data[key])
              }
              setResult(array)
            })
          })();
     }, [])
    
    const handleClickBox = (id: any) => {
        var idR = encodeURIComponent(id)
        window.location.href = "/source-code/" + idR
    }
    
    return (
     <>
     <main className="py-5 mt-5">
      <h1 className="text-center fw-bold">Our source code.</h1>
      <div className="mt-3 gap-4 justify-content-center d-flex flex-wrap container">
      
      {  result.map((data, index) => ( 
        <div key={index} className="d-flex overflow-hidden flex-column align-items-center rounded-3 rounded" style={{width:"350px",height:"300px", borderRadius:"5px",boxShadow:"0 0 10px rgba(0,0,0,.3)",wordBreak: "break-word"}} onClick={() => handleClickBox(`${data.title}`)}>
          <img src="/bgcode.jpg" alt="source code default image" style={{width:"100%"}} />
          <div className="container mt-2">
           <p className="fw-bold m-0">{data.title}</p>
           <p className="" style={{fontSize:"14px"}}>
             {data.description.length > 100? 
          `${data.description.substring(0, 100)}...` : 
          data.description}
           </p>
          </div>
        </div>
      ))}
        
      </div>
     </main>
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


const SourceCode = () => {
    return (
        <>
     <HeaderNavbar/>
     <Content/>
     <Footer/>
     </>
    )
}

export default SourceCode