import React, { useEffect, useState } from "react";

export default function Home() {
  const [name, setName] = useState("ali");
  const [data,setData]=useState([])

  useEffect(()=>{
      fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res)=>res.json())
      .then((res)=>{
        setData(res)
        // console.log(res)
      })
  },[])

  return (
    <div className="container">
    <h1>Data</h1>

    <div className="row">
   
    {data.map((i,index)=>{
     return (<div className="col-md-4" style={{width: '18rem'}}>
     <img src={`https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2016/10/camera-photo-lens-stock-images.jpg?q=50&fit=contain&w=1500&h=750&dpr=1.5`} className="card-img-top" alt="..." />
     <div className="card-body">
       <h5 className="card-title">{i.title}</h5>
       <p className="card-text">{i.body}</p>
     </div>
   </div>)
    })}
      {/* <div>hello word</div>
      <p>{name}</p>
      <button onClick={()=>setName("zohaib")}>Name</button> */}
    </div>
    </div>
  );
}
