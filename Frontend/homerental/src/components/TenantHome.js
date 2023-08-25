import { Link } from 'react-router-dom';

import { useEffect, useState } from "react"

export default function TenantHome(){
    const[cityid,setCityid]=useState();
    const[areaid,setAreaid]=useState();

    const[city,setCity]=useState();
    const[area,setArea]=useState();
    useEffect(()=>{
        fetch("http://localhost:8080/getallcity")
        .then(res => res.json())
        .then(data => {setCity(data)})
        //return()=>{cont.abort()};
     },[]);
    
    const getAreaByCity=(v)=>{
        fetch("http://localhost:8080/getareabycity?city_id="+v)
        .then(resp=>resp.json())
        .then(data=>setArea(data))
    }


    const[property,setProperty]=useState();
    useEffect(()=>{
        fetch("http://localhost:8080/getallproperty")
        .then(res => res.json())
        .then(data => {setProperty(data)})
        //return()=>{cont.abort()};
     },[]);

     const getPropertyByCity=(v)=>{
        fetch("http://localhost:8080/getpropertybycityid/"+v)
        .then(resp=>resp.json())
        .then(data=>setProperty(data))
    }
    const getPropertyByArea=(v)=>{
        fetch("http://localhost:8080/getpropertybyareaid/"+v)
        .then(resp=>resp.json())
        .then(data=>setProperty(data))
    }

    
    const[tenant,setTenant]=useState();

    // useEffect(()=>{
    //     fetch("http://localhost:8080/gettenantbyloginid/"+JSON.parse(localStorage.getItem("loggedUser")).id)
    //     .then(res => res.json())
    //     .then(data => {setTenant(data);localStorage.setItem("loggedTenant",JSON.stringify(data));})
    //    // return()=>{cont.abort()};
    //  },[]);
     
     

    return(
        <div>
            <div>
           <ul class="nav navbar" style={{float:"right"}}>
                
                <li class="nav-item">
                    <Link to="/logout" class="nav-link">Logout</Link>
                </li> 
            </ul>
       </div>


            <h1><p>Welcome {JSON.parse(localStorage.getItem("loggedUser")).email}</p></h1>
          


           
                
           
               < div className="mb-3">
                <label htmlFor="city" className="form-label">Enter City Name: </label>
                    <select id="city" name="city" 
                    onChange={(e) => { setCityid(e.target.value);getAreaByCity(e.target.value);getPropertyByCity(e.target.value)}}>
                        {city && city.map((c)=>(
                             <option key={c.id} value={c.id} >{c.name}</option>
                        ))}             
                    </select>
                </div>


            <div className="mb-3">
                <label htmlFor="area" className="form-label">Enter area Name: </label>
                   <select id="area" name="area" onChange={(e) => {setCityid(e.target.value); getPropertyByArea(e.target.value)}}>
                        {area && area.map((c)=>(
                             <option key={c.id} value={c.id} >{c.name}</option>
                        ))}     
                    </select>
            </div>


            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                    {property && property.map((property) => (
                        <div className="card" style={{ width: '18rem', margin: '10px', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)' }} key={property.id}>
                        <img src={`data:image/jpeg;base64,${property.image}`} className="card-img-top" alt="..." style={{ height: '200px', objectFit: 'cover' }} />
                        <div className="card-body">
                            <h5 className="card-title">{property.property_name}</h5>
                            <p className="card-text">{property.pdesc}</p>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Price: {property.price}</li>
                            <li className="list-group-item">Deposit: {property.deposit}</li>
                        </ul>
                        <div className="card-body">
                            
                            <Link
                                to={{
                                pathname: `/ownerinfo`,
                                 state: property.id, // Pass property as a prop
                                }}
                                className="card-link"
                                onClick={(e)=>{localStorage.setItem("property",JSON.stringify(property))}}
                            >
                                View More
                            </Link>

                            {/* <button value={property.id} onClick={(e)=>{ localStorage.setItem("property",JSON.stringify(property));}}>click</button> */}
                            {/* <a href="#" className="card-link">Like</a> */}
                        </div>
                        </div>
                    ))}
                </div>
                    

        </div>
    )
     
}
