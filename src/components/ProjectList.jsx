import React, { useEffect, useState } from 'react'
import useFetch from './useFetch';
import Project from './Project'
import Loader from './Loader';
import Notfound from './Notfound';


function ProjectList() {

    const [Projects, setProjects,Dummy,setDummy,error] = useFetch()


    if(!Projects) {
        return (
        <>
        {!error && <Loader />}
        {error && <Notfound error={"Fetch Error "} />}
        </>
        )
    }

    function DeleteProjects(id){
        console.log(id);
    const Deleted_projects = Projects.filter((project)=> project.id != id);
    setProjects(Deleted_projects);
    }


    function Dummyhnd(){
        setDummy((prev)=>!prev);
        console.log(Dummy);
    }

    Projects.sort((a,b)=> b.price - a.price);

    // const vfmProjects = Projects.filter((project)=>project.price < 300);


    const projecti = Projects.map(
        (projec,i)=> 
        <Project key={i} 
        name={projec.name} 
        price={projec.price} 
        image={projec.image} 
        rating={projec.rating}
        id = {projec.id}  
        Delete = {DeleteProjects}
        /> )
  return (
    <>
    {projecti}
    <button className='btn btn-primary' onClick={Dummyhnd}>Dummy</button>
    </>
  )
}

export default ProjectList