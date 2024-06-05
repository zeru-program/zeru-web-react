import { useState } from "react"
import '../../App.css'


var urlDb: string = 'https://zerupgmm-default-rtdb.firebaseio.com/';

const FormLogin = () => {
    
    const [iptUsn, setIptUsn] = useState("")
    const [iptPass, setIptPass] = useState("")
    const [iptEml, setIptEml] = useState("")
    const [displayModals, setDisplayModals] = useState("")
    const [modePass, setModePass] = useState('password')
    const [srcVisibility, setSrcVisibility] = useState('/voff.png')
    
    const handleFormSignUp = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault()
        
        var result = {
            username: iptUsn,
            email: iptEml,
            password: iptPass,
            created_at: new Date(),
            updated_at: new Date()
        }
        
        if (iptUsn === 'admin') {
           alert('username sudah digunakan, gunakan yang lain.')
           return
        }
        
        fetch(urlDb + 'account.json', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(result)
        })
        .then(res => {
            if (res.ok) {
                window.location.href = "/sign-in?create_account=true"
            }
        })
        
    }
    
    const handleIptUsn = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setIptUsn(e.target.value);
  };

  const handleIptPass = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setIptPass(e.target.value);
  };

  const handleIptEml = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setIptEml(e.target.value);
  };
    
    var modeP = true
    
    const switchModePass = () => {
        if (modeP) {
            setModePass('text')
            setSrcVisibility("/von.png")
        } else {
            setModePass('password')
            setSrcVisibility("/voff.png")
        }
        modeP = !modeP
    }
    
    return (
        <> 
    <form id="signin-form" onSubmit={handleFormSignUp}>
          <label className="input-label m-0">Username</label>
          <input type="text" className="inputOption" placeholder="type in here.." id="username" name="username-email" onInput={handleIptUsn} required />
          <label className="input-label m-0">Email</label>
          <input type="email" className="inputOption" placeholder="type in here.." id="username" name="username-email" onInput={handleIptEml} required />
          <label className="input-label" htmlFor="password">Password</label>
          <div className="con-hidden-pw">
            <input type={modePass} className="inputOption" placeholder="type in here.." id="password" name="password" onInput={handleIptPass} required />
            <img src={srcVisibility} className="vis-pass" alt="show" onClick={() => switchModePass()} />
            <div className="con-accept">
            <input type="checkbox" name="agreeCookies" id="agreeCookies" required />
<label htmlFor="agreeCookies" className="mx-2">I agree to the cookies</label>
            </div>
          </div>
          <br />
          <br />
          <br />
          <button type="submit" className="btn-login w-100">Sign-up </button>
        </form>
  <div className={`cek-wrong ${displayModals}`}>
    <div className="wrong-popup text-dark">
      <label>Incorrect <br />username, email or password!</label>
      <button className="close-popup" onClick={() => setDisplayModals('d-none')}>OK</button>
    </div>
  </div>
  </>
    )
}

const FooterForget = () => {
    return (
      <div className="con-footer">
        <label className="footer-title">Already have a acount?
          <a href="/sign-in/">Sign in</a></label>
      </div>
     )
}

const SignUp = () => {
    
    const isLog = localStorage.getItem('hasLogin')
    if (isLog) {
        window.location.href = "/"
        return
    }
    
    return (
      <>
 <div className="d-flex justify-content-center align-items-center w-100 vh-100">
  <div className="container-sign"  style={{height: "500px !important"}}>
    <div className="con-all">
      <label className="header-title">Sign-up</label>
      <div className="con-input">
        <FormLogin />
      </div>
      <br />
      <br />
      <FooterForget />
    </div>
  </div>
</div>
      </>
    )
}

export default SignUp