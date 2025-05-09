import { useEffect, useState } from "react";

const useFetch = ()=> {
    
    const [Projects, setProjects] = useState(null);
    const [Dummy, setDummy] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{
        setTimeout(()=>{
            fetch("http://localhost:3000/Projects")
            .then(response=>{
                if(!response.ok){
                    throw new Error(`${response.statusText} ${response.status}...`)
                }
                return response.json();
            })
            .then(data=>setProjects(data))
            .catch(err=>{
                console.error("Fetch error",err.message);
                setError(err);
            })
        },1000)
    },[])
    return [Projects,setProjects, Dummy,setDummy ,error];
}

export default useFetch;