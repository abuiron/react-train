import React, { useEffect, useState } from 'react'
import useFetch from './useFetch';
import Project from './Project'
import Loader from './Loader';


function ProjectList() {

    const [Projects, Dummy,error] = useFetch()


    if(!Projects) {
        return (
        <>
        {!error && <Loader />}
        {error && <p style={{color:"red"}}>{error.message}</p>}
        </>
        )
    }

    function DeleteProjects(id){
        console.log(id);
    const Deleted_projects = Projects.filter((project)=> project.id != id);
    setProjects(Deleted_projects);
    }


    function Dummyhnd(){
        setDummy(Dummy ? false : true);
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
    <button onClick={Dummyhnd}>Dummy</button>
    </>
  )
}

export default ProjectList