import React, { useState, useEffect } from 'react'
import Navbar from "./Navbar"
import Footer from "./Footer"
import '../../App.css'
import '../../Responsive.css'

interface BtnBackToTopProps {
  handleScrollUp: () => void;
}

interface HomepageProps {
  logoTr: string;
  titleTr: string;
  subTr: string;
  btnTalkTr: string;
  btnCvTr: string;
  conImgTalkTr: string;
  logoTrClass: string;
  titleTrClass: string;
  subTrClass: string;
  btnTalkTrClass: string;
  btnCvTrClass: string;
  conImgTalkTrClass: string;
}

interface AboutUsProps {
  aboutTitleTr: string;
  aboutTitleTrClass: string;
  aboutSubtitleTrClass: string;
}

interface ContentHomeProps {
  logoTr: string;
  titleTr: string;
  subTr: string;
  btnTalkTr: string;
  btnCvTr: string;
  conImgTalkTr: string;
  logoTrClass: string;
  titleTrClass: string;
  subTrClass: string;
  btnTalkTrClass: string;
  btnCvTrClass: string;
  conImgTalkTrClass: string;
  aboutTitleTr: string;
  aboutTitleTrClass: string;
  aboutSubtitleTrClass: string;
}

const BtnBackToTop: React.FC<BtnBackToTopProps> = ({ handleScrollUp }) => {
    const [btnBtt, setBtnBtt] = useState('')
    
// back to top btn
document.addEventListener('scroll', () => {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
     setBtnBtt('show');
  } else {
      setBtnBtt('');
  }
})
const handleBtt = (e: React.MouseEvent<HTMLButtonElement>): void => {
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



const Homepage: React.FC<HomepageProps> = ({
  logoTr,
  titleTr,
  subTr,
  btnTalkTr,
  btnCvTr,
  conImgTalkTr,
  logoTrClass,
  titleTrClass,
  subTrClass,
  btnTalkTrClass,
  btnCvTrClass,
  conImgTalkTrClass
}) => {
    const handleCv = () => {
        
  const anchor = document.createElement('a');
  anchor.href = "JUSTINE_CV_2024_BOGOR_INDONESIA.pdf";
  anchor.download = "JUSTINE_CV_2024_BOGOR_INDONESIA.pdf";

  document.body.appendChild(anchor);
  anchor.click();
  document.body.removeChild(anchor);
    }
    
    return (
        <>
  {/* home page start */}
  <div className="container-page" id="home">
  <div id="bg-patern-home" />
  <div className="fill-home">
    <div className="animateWipe" transition-style="out:circle:top-right" />
    <img src="welcome.svg" className={`${logoTrClass} logo-home-isi`} style={{ animation: `${logoTr}` }} alt="logo" />
    <label className={`${titleTrClass} title`} style={{ animation: `${titleTr}` }} id="homeTitle">Welcome !</label>
    <label className={`${subTrClass} sub-title`} id="homeSubtitle" style={{ animation: `${subTr}` }}>
      <span className="hi-title">Hi I'm Justine</span> !<br />
      <p className="px-3 m-0">Web developer || Front-end engineer || Designer</p>
      <p className="px-3">Created with react + typescript</p>
    </label>
    <div className="d-flex flex-wrap">
      <button className={`${btnTalkTrClass} btn-talk`} style={{ animation: `${btnTalkTr}` }} onClick={() => window.location.href="/#contact"}>Let's Talk</button>
      <button className={`${btnCvTrClass} btn-cv`} style={{ paddingInline: "8px !important", animation: `${btnCvTr}` }} onClick={handleCv}>Download CV</button>
    </div>
    <div className={`${conImgTalkTrClass} con-img-tal`} style={{ animation: `${conImgTalkTr}`, display: "flex" }}>
     <div className="img-talk-con">
     <i onClick={() => window.location.href = 'https://api.whatsapp.com/send?phone=6287774487198'} className="img-talk-social bi bi-whatsapp"></i>
     </div>
     <div className="img-talk-con">
    <i onClick={() => window.location.href = 'https://www.instagram.com/zerr.ace/'} className="img-talk-social bi bi-instagram"></i>
     </div>
     <div className="img-talk-con">
    <i onClick={() => window.location.href = 'mailto:zeruprogram@gmail.com?subject=HiZeru!'} className="img-talk-social bi bi-envelope"></i>
     </div>
    </div>
  </div>
  <svg className="waves-home" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
    <path fill="#ffffff" fillOpacity={1} d="M0,160L48,170.7C96,181,192,203,288,213.3C384,224,480,224,576,213.3C672,203,768,181,864,176C960,171,1056,181,1152,181.3C1248,181,1344,171,1392,165.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" />
  </svg>
</div>
  {/* home page end */}
        </>
    )
}

const AboutUs: React.FC<AboutUsProps> = ({ aboutTitleTr, aboutTitleTrClass, aboutSubtitleTrClass }) => {
    return (
        <>
  {/* about page start */}
  <div className="container-page" id="about">
    <label className={`title ${aboutTitleTrClass}`} id="aboutTitle" style={{animation:`${aboutTitleTr}`}} >About zeru</label>
    <p className={`sub-title px-3 ${aboutSubtitleTrClass}`} id="aboutSubtitle" style={{paddingInline :"15px !important"}}>
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
  <div className="container-page" style={{paddingInline :"10px !important"}} id="skils">
    <label className="title" id="skilTitle">What are my skills?</label>
    <label className="sub-title">my skills that I currently have</label>
    {/* box */}
    <div className="con-box-skil">
      <div className="box">
        <img src="html.png" className="img-skil" alt="" />
        <p className="desk-skil">
          Saya sudah mahir dalam menuliskan code HTML5 maupun HTML semantic baik itu pembuatan navbar, form, tabel, dan lainnya. Hampir seluruh projek saya dibuat dengan HTML.
        </p>
      </div>
      <div className="box">
        <img src="css.png" className="img-skil" alt="" />
        <p className="desk-skil">
          Saya mahir dalam mendesign website yang responsive dan tentu saja modern. Dengan mempunyai pengalaman dan skill memakai framework css seperti bootstrap, dan tallwind, serta mampu mengkomunikasikan library untuk memperindah web saya.
        </p>
      </div>
      <div className="box">
        <img src="js.png" className="img-skil" alt="" />
        <p className="desk-skil">
          Saya memiliki keterampilan dalam mendesign logika dan implementasi system untuk website saya. Dan juga memiliki ide kreatif dalam menyelesaikan debugging, mahir juga dalam menguasai framework javascript berupa jquery, react. Serta mengkomunikasikan library js untuk web saya. 
        </p>
      </div>
      <div className="box">
        <img src="gnu-bash.png" className="img-skil" alt="" />
        <p className="desk-skil">
          Saya memiliki keterampilan yang cukup baik dalam mendesain dan membuat aplikasi sederhana dalam script "sh", dengan menjalankannya di termux.
        </p>
      </div>
      <div className="box">
        <img src="php.png" className="img-skil" alt="" />
        <p className="desk-skil">
          Selain memiliki keahlian html js saya juga memiliki kemampuan dalam bahasa PHP web server, baik mengintegrasikan database mysql, maupun mendesign halaman dan logika secara awam. Serta memiliki pengetahuan dan pengalaman dalam framework Laravel dan Codeingiter.
        </p>
      </div>
      <div className="box">
        <img src="git.png" className="img-skil" alt="" />
        <p className="desk-skil">
          Saya memiliki keterampilan dalam menyelesaikan dan menjalankan program git ini baik di termux (android) maupun windows. Dengan mengintegrasikan dari github dan gitlab itu cukup memudahkan pengembangan web saya. Dengan code git yang saya tahu, seperti push, clone, commit, branch, merge dan lainnya.
        </p>
      </div>
      <div className="box">
        <img src="db.png" className="img-skil" alt="" />
        <p className="desk-skil">
          Mahir dalam menyusun atau pun mendesign struktur database yang ada, dengan memahami berbagai jenis database. Berpengalaman memakai databae berupa sql contohnya mysql/mariadb, dan non sql contohnya spreadsheets berbentuk API, Firebase, Json.
        </p>
      </div>
      <div className="box">
        <img src="api.png" className="img-skil" alt="" />
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
    <label className="title-servis w-100" onClick={() => window.location.href='https://wa.me/6287774487198'}>
      Take our Service in here!
      <label style={{fontWeight :"300 !important"}}>(click it)</label></label>
  </div>
  {/* servis page end */}
        </>
     )
}

var urlDb: string = 'https://zerupgmm-default-rtdb.firebaseio.com/';

const Portofolio = () => {

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
      <div className="container-page" id="portofolio">
        <div
          id="carouselExampleInterval"
          className="carousel slide carousel-fade bg-at-fix w-100 fix-padding-i"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner" id="portofolio-body-por">
          { imgPorto.map((porto, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 0 ? 'active' : ''}`}
              data-bs-interval="5000"
            >
              <div
                style={{ backgroundImage: `url('${porto.url}')` }}
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
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next btn-portofolio"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="next"
          >
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
      <h3 className="fw-bold bg-warning p-1" style={{fontFamily:"'Poppins', Sans-Serif"}}>Fake Project</h3>
      <div className="d-flex py-5 gap-3 overflow-x-auto" style={{width:"90%",marginTop:"-20px"}} id="fake-p-body">
        {myProject.filter(proj => proj.display === "fake").map((proj, index) => (
          <div className="btn-project" key={index}>
            <p className="m-0 fw-bold">{proj.title}</p>
            <p className="m-0" style={{fontSize:".7em"}}>{proj.tech}</p>
            <p className="m-0" style={{fontSize:".7em"}}>{proj.description}.</p>
            <button className="py-2" style={{background:"transparent",color:"white",border:"1.5px solid white",width:"90px",fontSize:".8em",height:"auto"}} onClick={() => window.open(`${proj.url}`)}>Live web <i className="bi bi-arrow-right" /></button>
            <p className="mt-2 mb-0" style={{fontSize:".7em"}}>Created by zeru in {proj.date}.</p>
          </div>
        ))}
      </div>
      <h3 className="fw-bold bg-info p-1" style={{fontFamily:"'Poppins', Sans-Serif"}}>Real Project</h3>
      <div className="d-flex py-5 gap-3 overflow-x-auto" style={{width:"90%",marginTop:"-20px"}} id="real-p-body">
          {myProject.filter(proj => proj.display === "real").map((proj, index) => (
          <div className="btn-project" key={index}>
            <p className="m-0 fw-bold">{proj.title}</p>
            <p className="m-0" style={{fontSize:".7em"}}>{proj.tech}</p>
            <p className="m-0" style={{fontSize:".7em"}}>{proj.description}.</p>
            <button className="py-2" style={{background:"transparent",color:"white",border:"1.5px solid white",width:"90px",fontSize:".8em",height:"auto"}} onClick={() => window.open(`${proj.url}`)}>Live web <i className="bi bi-arrow-right" /></button>
            <p className="mt-2 mb-0" style={{fontSize:".7em"}}>Created by zeru in {proj.date}.</p>
          </div>
        ))}
      </div>
    </div>
  </div>
  {/* projek  page end */}
        </>
    )
}

const SourceCode = () => {
    
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
      <h1 className="text-center m-0 fw-bold">Our source code.</h1>
      <p className="text-center m-0" style={{color:"gray"}}>want to try my creativity?</p>
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

const ContactUs = () => {
    
    const [iptNama, setIptNama] = useState('')
    const [iptEmail, setIptEmail] = useState('')
    const [iptSubjek, setIptSubjek] = useState('')
    const [iptKonten, setIptKonten] = useState('')
    
    const handleSubmitFeedback = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        var result = {
            userInput: iptNama,
            userEmail: iptEmail,
            userSubjek: iptSubjek,
            feedback: iptKonten,
            created_at: new Date()
        }
        fetch(urlDb + 'feedback.json', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(result)
        })
        .then(res => {
            if (res.ok) {
                alert('successfuly send a feedback!, thank you for you feedback!')
                location.reload()
            } else {
                alert('ups, something wrong in here...')
            }
        })
        .catch(e => alert(e))
    }
    
    const handleIptNama = (e: React.ChangeEvent<HTMLInputElement>) => {
         setIptNama(e.target.value)
    }
    const handleIptEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIptEmail(e.target.value)
    }
    const handleIptSubjek = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIptSubjek(e.target.value)
    }
    const handleIptKonten = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setIptKonten(e.target.value)
    }
    
    return (
        <>
  {/* contact us  page start */}
  <div className="container-page" id="contact">
    <div className="contact-information">
      <label className="title tContact">Follow us</label>
      <br />
      <div className="isi-info-contact">
        <div className="c1-contact" style={{paddingLeft:"5px"}}>
          <i className="img-contact bi bi-github" />
          <label><a href="https://github.com/zeru-program/" className="href-contact">@zeru-program</a></label>
        </div>
        <div className="c1-contact">
          <img src="whatsapp.png" className="img-contact" alt="" />
          <label><a href="https://wa.me/6289526333265" className="href-contact">+6289526333265</a></label>
        </div>
        <div className="c1-contact">
          <img src="instagram.png" className="img-contact" alt="" />
          <label><a href="https://www.instagram.com/zerr.ace?r" className="href-contact">@zerr.ace</a></label>
        </div>
        <div className="c1-contact">
          <img src="gmail.png" className="img-contact" alt='' />
          <label><a href="mailto:zeruprogram@gmail.com?subject=HireYou" className="href-contact">zeruprogram@gmail.com</a></label>
        </div>
        <div className="c1-contact">
          <img src="location.png" className="img-contact" alt="" />
          <label><a href="https://maps.app.goo.gl/DFANiWSdinNK3yhB7" className="href-contact address">   Cipaku, bogor selatan Jawa barat, Indonesia.</a></label>
        </div>
      </div>
    </div>
    <div className="contact-form" id="talkHref">
      <label className="title tContact">Contact us</label>
      <form onSubmit={handleSubmitFeedback} className="form">
        <div className="con-input pt-3 mt-4">
          <label className="name-input">Nama lengkap</label>
          <input type="text" name="nama" className="input-form" id="nama" onInput={handleIptNama} placeholder="type in here.." required />
        </div>
        <div className="con-input">
          <label className="name-input">Email</label>
          <input type="email" name="email" className="input-form" id="email" onInput={handleIptEmail} placeholder="type in here.." required />
        </div>
        <div className="con-input">
          <label className="name-input">Subjek</label>
          <input type="text" name="judul" className="input-form" id="subjek" onInput={handleIptSubjek} placeholder="type in here.." required />
        </div>
        <div className="con-input">
          <label className="name-input">Isi subjek</label>
          <textarea name="isi_subjek" className="input-form textarea-form" id="isiSubjek" onInput={handleIptKonten} placeholder="type in here.." required rows={8} cols={40} defaultValue={""} />
        </div>
        <button className="submit-form" type="submit">Kirim</button>
      </form>
    </div>
  </div>
  {/* contact us  page end */}
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


const ContentHome: React.FC<ContentHomeProps> = ({
  logoTr,
  titleTr,
  subTr,
  btnTalkTr,
  btnCvTr,
  conImgTalkTr,
  logoTrClass,
  titleTrClass,
  subTrClass,
  btnTalkTrClass,
  btnCvTrClass,
  conImgTalkTrClass,
  aboutTitleTr,
  aboutTitleTrClass,
  aboutSubtitleTrClass,
}) => {
    return (
        <>
        {/* ============= main content start ============== */}
     <main>
      <Homepage logoTr={logoTr} titleTr={titleTr} subTr={subTr} btnTalkTr={btnTalkTr} btnCvTr={btnCvTr} conImgTalkTr={conImgTalkTr} logoTrClass={logoTrClass} titleTrClass={titleTrClass} subTrClass={subTrClass} btnTalkTrClass={btnTalkTrClass} btnCvTrClass={btnCvTrClass} conImgTalkTrClass={conImgTalkTrClass} />
      <AboutUs aboutTitleTr={aboutTitleTr} aboutTitleTrClass={aboutTitleTrClass} aboutSubtitleTrClass={aboutSubtitleTrClass} />
      <Skils/>
      <Service />
      <Portofolio />
      <Project />
      <SourceCode />
      <ContactUs />
 {/* <ins className="adsbygoogle" style={{"display":"inline-block","width":"360px","height":"800px"}} data-ad-client="ca-pub-2052442865900021" data-ad-slot={3410580948} /> */}
     </main>
        </>
    )
}


const Home = () => {
  // animation
  const [logoTr, setLogoTr] = useState("");
  const [titleTr, setTitleTr] = useState("");
  const [subTr, setSubTr] = useState("");
  const [btnTalkTr, setBtnTalkTr] = useState("");
  const [btnCvTr, setBtnCvTr] = useState("");
  const [conImgTalkTr, setConImgTalkTr] = useState("");
  const [aboutTitleTr, setAboutTitleTr] = useState('')
  //class 
  const [logoTrClass, setLogoTrClass] = useState("");
  const [titleTrClass, setTitleTrClass] = useState("");
  const [subTrClass, setSubTrClass] = useState("");
  const [btnTalkTrClass, setBtnTalkTrClass] = useState("");
  const [btnCvTrClass, setBtnCvTrClass] = useState("");
  const [conImgTalkTrClass, setConImgTalkTrClass] = useState("");
  const [aboutTitleTrClass, setAboutTitleTrClass] = useState("translateAbout")
  const [aboutSubtitleTrClass, setAboutSubtitleTrClass] = useState("translateAbout")
    
  let isLogoTranslated: boolean = false;
  var lastScrollTop: number = 0;
    // init awalan animasi
    useEffect(() => {
    setLogoTr("trasl 1.5s ease")
    setTitleTr("traslRight 1s ease")
    setSubTr('traslRight 2s ease')
    setBtnTalkTr('traslRight 2.5s ease')
    setBtnCvTr("traslRight 3s ease")
    setConImgTalkTr("traslRight 3.5s ease")
    }, [])
    
    
window.addEventListener("scroll", function () {
    var currentScrollTop = window.scrollY || window.pageYOffset;

    if (currentScrollTop > lastScrollTop) {
        handleScrollDown(currentScrollTop);
    }
    if (currentScrollTop < lastScrollTop) {
        handleScrollUp();
    }

    lastScrollTop = currentScrollTop;
});

    
    
function handleScrollUp() {
    if (isLogoTranslated) {
        // class
          setLogoTrClass("");
          setTitleTrClass("");
          setSubTrClass("");
          setBtnTalkTrClass("");
          setBtnCvTrClass("");
          setConImgTalkTrClass(""); 
        //animation
    setLogoTr("trasl 1.5s ease")
    setTitleTr("traslRight 1s ease")
    setSubTr('traslRight 2s ease')
    setBtnTalkTr('traslRight 2.5s ease')
    setBtnCvTr("traslRight 3s ease")
    setConImgTalkTr("traslRight 3.5s ease")
    isLogoTranslated = false;
    }
   //     alert('dd')
}

function handleScrollDown(currentScrollTop: number) {
    // Only trigger when currentScrollTop is greater than 40% of the viewport height
    if (currentScrollTop > window.innerHeight * 0.4) {
        if (!isLogoTranslated) {
            //animation
            setLogoTr("traslOut 1.5s ease")
            setTitleTr("traslRightOut 1s ease")
            setSubTr('traslRightOut 2s ease')
            setBtnTalkTr('traslRightOut 2.5s ease')
            setBtnCvTr("traslRightOut 3s ease")
            setConImgTalkTr("traslRightOut 3.5s ease")
            //class
            setLogoTrClass("translated");
            setTitleTrClass("translatedRight");
            setSubTrClass("translatedRight");
            setBtnTalkTrClass("translatedRight");
            setBtnCvTrClass("translatedRight");
            setConImgTalkTrClass("translatedRight");
            isLogoTranslated = true;
        }
    }
    const aboutElement = document.getElementById('about');

if (aboutElement && typeof aboutElement.offsetTop === 'number') {
  if (currentScrollTop > (aboutElement.offsetTop - window.innerHeight * 0.3)) {
        setTimeout(function () {
            setAboutTitleTr('fadeInDown 1s ease')
            setAboutTitleTrClass('')
        }, 500);
        setTimeout(function () {
            setAboutSubtitleTrClass('')
        }, 1000);
    }
   }
}

  return (
      <>
      <BtnBackToTop handleScrollUp={handleScrollUp} />
      <Navbar />
      <ContentHome  logoTr={logoTr} titleTr={titleTr} subTr={subTr} btnTalkTr={btnTalkTr} btnCvTr={btnCvTr} conImgTalkTr={conImgTalkTr} logoTrClass={logoTrClass} titleTrClass={titleTrClass} subTrClass={subTrClass} btnTalkTrClass={btnTalkTrClass} btnCvTrClass={btnCvTrClass} conImgTalkTrClass={conImgTalkTrClass} aboutTitleTr={aboutTitleTr} aboutTitleTrClass={aboutTitleTrClass} aboutSubtitleTrClass={aboutSubtitleTrClass} />
      <Footer />
      <Modals />
      </>
    )
}

export default Home;