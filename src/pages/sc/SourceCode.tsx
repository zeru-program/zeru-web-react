import { useState, useEffect } from "react"
let urlDb = 'https://zerupgmm-default-rtdb.firebaseio.com/';
import HeaderSc from "./HeaderSc"
import Navbar from "../landing-page/Navbar"
import Footer from "../landing-page/Footer"

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

const SourceCode = () => {
    return (
        <>
     <HeaderSc/>
     <Navbar/>
     <Content/>
     <Footer/>
     </>
    )
}

export default SourceCode