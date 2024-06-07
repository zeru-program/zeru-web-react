import { useParams } from "react-router-dom"
import { useEffect, useState} from "react"
let urlDb = 'https://zerupgmm-default-rtdb.firebaseio.com/';
import Navbar from "../landing-page/Navbar"
import Footer from "../landing-page/Footer"


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
    <Navbar/>
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