import React,{useState,useEffect} from 'react';

export default function FetchOrgMembers({org}) {
    const [data,setData]=useState([]);
    const getData=()=>{
        fetch(`https://api.github.com/orgs/${org}/members`
            ,{
                headers : {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
        )
            .then(function(response){
                console.log("%c" + `STATUS: ${response.status}`, "color: #7a99ff; font-size: 15px; font-weight: bold;")
                return response.json();
            })
            .then(function(myJson) {
                setData(myJson)
            });
    }
    useEffect(()=>{
        getData()
    },[])
    const style = {
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)"
    };
    return (
        <div className="flex py-5 space-x-2">
            {data.map((r, index) => (
                <a key={index} href={r.html_url} className="group relative">
                    <svg style={style}
                         className="opacity-0 group-hover:opacity-100 absolute w-5 h-5 transition-all" fill="white" viewBox="0 0 16 16"
                         xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M6.58534 2.05029C6.03305 2.05029 5.58534 2.49801 5.58534 3.05029C5.58534 3.60258 6.03305 4.05029 6.58534 4.05029L10.5351 4.05029L2.3427 12.2427C1.95217 12.6332 1.95217 13.2664 2.3427 13.6569C2.73322 14.0474 3.36639 14.0474 3.75691 13.6569L11.9493 5.46451V9.41425C11.9493 9.96654 12.397 10.4143 12.9493 10.4143C13.5016 10.4143 13.9493 9.96654 13.9493 9.41425L13.9493 3.15029C13.9493 3.13308 13.9489 3.11597 13.9481 3.09895C13.9613 2.82706 13.864 2.55083 13.6564 2.34319C13.4488 2.13555 13.1725 2.03831 12.9006 2.05147C12.8836 2.05069 12.8665 2.05029 12.8493 2.05029L6.58534 2.05029Z"></path>
                    </svg>
                    <div className="bg-stone-900 rounded-full">
                        <img src={r.avatar_url} className='group-hover:opacity-50 w-7 h-7 rounded-full transition-all' alt={r.name + 'image'}/>
                    </div>
                </a>
            ))}
        </div>
    )
}

