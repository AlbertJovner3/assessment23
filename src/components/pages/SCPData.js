import React, {useState, useEffect} from 'react'
import '../../App.css';
import '../../simple.css';

function SCPData({match}) {
    useEffect(() => {
        fetchItem();
        console.log(match);
    });

    const [item,setItem] = useState({});

    const fetchItem = async () => {

        const url = `https://scpalbert-eac6.restdb.io/rest/scp/${match.params._id}`;
        const fetchData = await fetch(url,{method: 'GET',
    headers:{
        'cache-control': 'no-cache',
        'x-apikey': '60c16401f2a01c34b8ed36fb'
    }});
    const item = await fetchData.json();
    setItem(item);

    };
    return (
        <div>
        <div className='hero-container'>
      <video alt="Background" src='../../videos/SCPlogoIdle.mp4' autoPlay loop muted />
      <h1>{item.name}</h1>
      <p>{item.objectclass}</p>
    </div>
        <div>
           <div className="content">
           <h2>{item.con}</h2>
           <p>{item.contain}</p>
           <h2>{item.dis}</h2>
           <p>{item.description}</p>
           <h2>{item.refr}</h2>
           <p>{item.ref}</p>
           </div>
        </div>
        
        </div> 
    )
}
   

export default SCPData