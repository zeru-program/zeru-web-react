import React, { useState, useEffect } from 'react';
let urlDb = 'https://zerupgmm-default-rtdb.firebaseio.com/';


interface Project {
  id: number | string;
  title: string;
  description: string;
  tech: string;
  display: string;
  url: string;
  date: string;
}

interface Porto {
    id: number | string;
    title: string;
    url: string;
}



const Navbar = () => {
 // log out
function logoutUser() {
    localStorage.removeItem('hasLogin');
    localStorage.removeItem('username');
    localStorage.removeItem('email');
    localStorage.removeItem('password');
  location.reload();
}
return (
      <>
      {/* NAVBAR */}
<nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Zeru Dashboard </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link " aria-current="page" href="#">All management</a>
        </li>
        <hr />
        <li className="nav-item">
          <a className="nav-link" href="/">Go HomeZeru</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-danger" onClick={logoutUser}>Logout</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
{/* NAVBAR */}
      </>
    )
}

const Account = () => {
    
    const [user, setUser] = useState("")
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState("")
    
    const handleSubmit = (e: React.FormEvent <HTMLFormElement>): void => {
        e.preventDefault()
        
        var result = {
            username: user,
            email: email,
            password: pass,
            created_at: new Date(),
            updated_at: new Date()
        }
        
        if (user === 'admin') {
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
                alert("succes create account")
                location.reload()
            }
        })
        
    }
    
    const handleIptUsn = (e: React.ChangeEvent <HTMLInputElement>): void => {
        setUser(e.target.value)
    }
    const handleIptEmail = (e: React.ChangeEvent <HTMLInputElement>): void => {
        setEmail(e.target.value)
    }
    const handleIptPass = (e: React.ChangeEvent <HTMLInputElement>): void => {
        setPass(e.target.value)
    }
    
    return (
     <div className="todo">
          <h3 className="fw-bold">Account add</h3>
          <form onSubmit={handleSubmit} className="d-flex gap-2 flex-column">
            <label htmlFor="">Username</label>
            <input type="text" required onInput={handleIptUsn} />
            <label htmlFor="">Email</label>
            <input type="email" required onInput={handleIptEmail} />
            <label htmlFor="">Password</label>
            <input type="password" required onInput={handleIptPass} />
            <button className="btn btn-success" type="submit">SUBMIT</button>
          </form>
        </div>
   )
}

const Project = () => {
    
    const [title, setTitle] = useState("")
    const [tech, setTech] = useState("")
    const [desc, setDesc] = useState("")
    const [disp, setDisp] = useState("")
    const [urlP, setUrlP] = useState("")
    const [date, setDate] = useState("")
  const [result, setResult] = useState<any[]>([]);
  
    useEffect(() => {
  async function fetchData() {
    const response = await fetch(urlDb + "project.json");
    const data: { [key: string]: any } = await response.json();
    const projectArray: any[] = [];
    for (let key in data) {
      projectArray.push(data[key]);
    }
    setResult(projectArray);
  }
  fetchData();
}, []);
     
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
      e.preventDefault()
         let length: number = 0;
         fetch(urlDb + "project.json")
        .then(res => res.json())
        .then(data => {
           Object.keys(data).forEach(() => length++);
      
        })
      var result = {
        id: length + 1,
        title: title,
        tech: tech,
        description: desc,
        display: disp,
        url: urlP,
        date: date
      }  
      fetch(urlDb + "project.json", {
          method: "POST",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify(result)
      })
      .then(res => {
          if (res.ok) {
              alert("succes create projek")
              location.reload()
          }
      })
      .catch(e => alert(e))
    }
    
    const handleTitleInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
      setTitle(e.target.value)
    }
    const handleTechInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
      setTech(e.target.value)
    }
    const handleDescInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
      setDesc(e.target.value)
    }
    const handleDispInput = (e: React.ChangeEvent<HTMLSelectElement>): void => {
      setDisp(e.target.value)
    }
    const handleUrlPInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
      setUrlP(e.target.value)
    }
    const handleDateInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
      setDate(e.target.value)
    }
    
/*const handleEdit = (id: number | string) => {
  setEditTable(true)
  setEditedRow(id)
}

const handleSave = () => {
  // Save the edited row to your database or API
  setEditTable(false)
  setEditedRow(null)
}

const handleDelete = (id) => {
  // Delete the row from your database or API
}

    const deleteProject = (key) => {
        
    }
    */
    return (
        <div className="todo">
          <h3 className="fw-bold">Project Management</h3>
            <form id="form-project" onSubmit={handleSubmit} className="d-flex gap-2 flex-column">
              <label htmlFor="">Title project</label>
              <input type="text" required value={title} onInput={handleTitleInput} />
              <label htmlFor="">Tech project</label>
              <input type="text" required value={tech} onInput={handleTechInput} />
              <label htmlFor="">Description project</label>
              <input type="text" required value={desc} onInput={handleDescInput} />
              <label htmlFor="">Display project</label>
              <select required value={disp} onInput={handleDispInput}>
                <option value="choose this" hidden />
                <option value="fake">Fake project</option>
                <option value="real">Real project</option>
              </select>
              <label htmlFor="">Url project</label>
              <input type="text" required value={urlP} onInput={handleUrlPInput} />
              <label htmlFor="">Tanggal pembuatan project</label>
              <input type="date" required value={date} onInput={handleDateInput} />
              <button className="btn btn-success" type="submit">SUBMIT</button>
            </form>
          <hr />
          <div className="overflow-x-auto">
            <table id="table-project" border={0}>
              <thead>
                <tr>
                  <td>id</td>
                  <td>title project</td>
                  <td>description project</td>
                  <td>tech project</td>
                  <td>display</td>
                  <td>url</td>
                  <td>date</td>
                  <td>option</td>
                </tr>
              </thead>
              <tbody id="project-body">
              {
  result.map((val: Project) => (
    <tr key={val.id}>
  <td>
    <input
      type="text"
      value={val.id}
    />
  </td>
  <td>
    <input
      type="text"
      value={val.title}
    />
  </td>
  <td>
    <input
      type="text"
      value={val.description}
    />
  </td>
  <td>
    <input
      type="text"
      value={val.tech}
    />
  </td>
  <td>
    <input
      type="text"
      value={val.display}
    />
  </td>
  <td>
    <input
      type="text"
      value={val.url}
    />
  </td>
  <td>
    <input
      type="date"
      value={val.date}
    />
  </td>
  <td>{/*
    <button onClick={handleSave}>SAVE</button>
    <button onClick={() => handleEdit(val.id)}>EDIT</button>
    <button onClick={() => handleDelete(val.id)}>DELETE</button>*/}
  </td>
</tr>
  ))
}
              </tbody>
            </table>
          </div>
        </div>
    )
}

const Porto = () => {
    
    const [title, setTitle] = useState('')
    const [file, setFile] = useState<File | null>(null);
    const [downloadURL, setDownloadURL] = useState<string>('');
   const [result, setResult] = useState<any[]>([]);
   const [btn, setBtn] = useState('SUBMIT')

    const handleIptTitle = (e: React.ChangeEvent <HTMLInputElement>): void => {
        setTitle(e.target.value)
    }
    const handleIptFile = (e: React.ChangeEvent <HTMLInputElement>): void => {
        setFile(e.target.files![0])
    }
    useEffect(() => {
    if (file) {
        setBtn('loading upload file..')
      const firebaseConfig = {
    databaseURL: "https://zerupgmm-default-rtdb.firebaseio.com/",
    storageBucket: "gs://zerupgmm.appspot.com"
      };

      // Initialize Firebase
     const app = (window as any).firebase.initializeApp(firebaseConfig);
      const storage = app.storage();

      const fileName = Date.now() + "_" + file.name;
      const storageRef = storage.ref();
      const uploadTask = storageRef.child("portofolio/" + fileName).put(file);

      uploadTask.on(
        "state_Inputd",
        (snapshot: any) => {
            console.log(`Upload progress: ${snapshot.bytesTransferred} / ${snapshot.totalBytes}`);
  },
        (error: Error) => {
          console.error("Error uploading profile image:", error);
        },
        () => {
          uploadTask.snapshot.ref.getDownloadURL().then((downloadURLs: string) => {
            setDownloadURL(downloadURLs);
            setBtn('SUBMIT')
          });
        }
      );
    }
  }, [file]);
  
  
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        fetch(urlDb + 'portofolio.json')
        .then(res => res.json())
        .then(data => {
            var length = 0
            Object.keys(data).forEach(() => length++);
         
        var result = {
            id: length + 1,
            title: title,
            url: downloadURL
        }
        
        fetch(urlDb + 'portofolio.json', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(result)
        })
        .then(res => {
            if (res.ok) {
                alert("succes create porotofolio")
                location.reload()
            }
        })
        })
    }
    useEffect(() => {
  fetch(`${urlDb}portofolio.json`)
   .then((res) => res.json())
   .then((data) => {
      const dataArray: any[] = [];
      for (const key in data) {
        dataArray.push(data[key]);
      }
      setResult(dataArray);
    });
}, []);
   
   /* const editPorto = (id, elem) => {
        
    }
    const deletePorto = (id) => {
        
    }*/
    return (
        <div className="todo">
          <h3 className="fw-bold">Portofolio Management</h3>
          <form id="form-porto" onSubmit={handleSubmit} className="d-flex gap-2 flex-column">
            <label htmlFor="">Title portofolio</label>
            <input type="text" onInput={handleIptTitle} id="titlePorto" />
            <label htmlFor="">File gambar</label>
            <input type="file" onInput={handleIptFile} id="filePorto" />
            <button className="btn btn-success" type="submit">{btn}</button>
          </form>
          <hr />
          <div className="overflow-x-auto">
            <table id="table-project" border={0}>
              <thead>
                <tr>
                  <td>id</td>
                  <td>title portofolio</td>
                  <td>url gambar</td>
                  <td>option</td>
                </tr>
              </thead>
              <tbody id="portofolio-body">
               {
                   result.map((val: Porto) => (
                 <tr key={val.id}>
                 <td>{val.id}</td>
                 <td>{val.title}</td>
                 <td><img src={val.url} style={{width:"50px"}} /></td>
                 <td>{/*<button style={{padding:"10px",marginRight:"8px", background:"yellow"}} onClick={editPorto('{val.id}', this)}>EDIT</button><button style={{padding:"10px", background:"red"}} onClick={deletePorto('{val.id}')}>DELETE</bbutton*/}</td>
                 </tr>
                   ))
               }
              </tbody>
            </table>
          </div>
        </div>
     )
}

const SourceCode = () => {
    
    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')
    const [url, setUrl] = useState('')
    const [result, setResult] = useState<any[]>([]);
    
    const handleIptTitle = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setTitle(e.target.value)
    }
    const handleIptDesc = (e: React.FormEvent<HTMLTextAreaElement>) => {
      setDesc(e.currentTarget.value);
    };
    const handleIptUrl = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setUrl(e.target.value)
    }
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault()
        fetch(urlDb + "sourceCode.json")
        .then(res => res.json())
        .then(data => {
       // alert(title + desc + url)
            var length = 0
            Object.keys(data).forEach(() => length++);
            var result = {
                id: length + 1,
                title: title,
                description: desc,
                url: url
            }
            
            fetch(urlDb + "sourceCode.json", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(result)
            })
            .then(res => {
                if (res.ok) {
                    alert('berhasil membuat source code, jangan lupa membuat file source nya.')
                    location.reload()
                }
            })
            
        })
    }
    
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
   
  /*  const editPorto = (id, elem) => {
        
    }
    const deletePorto = (id) => {
        
    }*/
    return (
        <div className="todo">
          <h3 className="fw-bold">Source code page Management</h3>
          <form id="form-porto" onSubmit={handleSubmit} className="d-flex gap-2 flex-column">
            <label htmlFor="">Title Source code</label>
            <input type="text" onInput={handleIptTitle} id="titlePorto" />
            <label htmlFor="">Description Source code</label>
            <textarea onInput={handleIptDesc} id="titlePorto"></textarea>
            <label htmlFor="">File source code</label>
            <input type="text" onInput={handleIptUrl} id="" />
            <button className="btn btn-success" type="submit">SUBMIT</button>
          </form>
          <hr />
          <div className="overflow-x-auto">
            <table id="table-project" border={0}>
              <thead>
                <tr>
                  <td>id</td>
                  <td>title source code</td>
                  <td>description</td>
                  <td>url file</td>
                  <td>option</td>
                </tr>
              </thead>
              <tbody id="portofolio-body">
               {
                   result.map((val) => (
                 <tr key={val.id}>
                 <td>{val.id}</td>
                 <td>{val.title}</td>
                 <td>{val.description}</td>
                 <td>{val.url}</td>
                 <td>{/*<button style={{padding:"10px",marginRight:"8px", background:"yellow"}} onClick={editPorto('{val.id}', this)}>EDIT</button><button style={{padding:"10px", background:"red"}} onClick={deletePorto('{val.id}')}>DELETE</button>*/}</td>
                 </tr>
                   ))
               }
              </tbody>
            </table>
          </div>
        </div>
     )
}

const MainContent = () => {
    return (
  <>
    <main className="container-fluid mt-3 px-3">
      <h1>Dashboard</h1>
      <div className="table-data">
        <Account/>
        <Project/>  
        <Porto />
        <SourceCode/>
      </div>
    </main>
  </>
)
}


const Dashboard = () => {
    return (
     <>
      <Navbar />
      <MainContent />
     </>
    )
}

export default Dashboard