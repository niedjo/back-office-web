"use client"
import { FloatingNav } from '@/components/FloatingNavbar'
import FormField from '@/components/FormField'
import SubmitButtun from '@/components/SubmitButtun'
import { navItems } from '@/data/data'
import { ProjectType, Stack } from '@/type/indes'
import React, { useState } from 'react'

const Projet = () => {

  // we define the stack
  const [stack, setStack] = useState<Stack[]>([])
  
  // we definr the project
  const [projet, setProjet] = useState<ProjectType>({
    projectName: '',
    description: '',
    fullDescription: '',
    technologie: stack,
    urlOfSite: '',
    demoUrl: '',
    file: null,
    BearerToken: '',
  });

  // we change any value of type different to file
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProjet((prevState) => ({
        ...prevState,
        [name]: value,
    }));
  };

  // we change the file
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProjet((prevState) => ({
      ...prevState,
      file: e.target.files ? e.target.files[0] : null,  // Assurez-vous de gérer le cas où `files` pourrait être `null`
    }));
  };

  // we add stacks
  const ajouter = (e: React.ChangeEvent<HTMLInputElement>) => {
    
    let id : number = new Date().getTime();
    let st : string = e.target.value;
    const newSt = {id, st}
    
    const new_stack_state = stack.slice()

    new_stack_state.push(newSt)
    setStack(new_stack_state)
    setProjet((prevState) => ({
        ...prevState,
        technologie: new_stack_state,
    }));
  }

  // we sublit our project
  async function handleSubmitProject() {
    const formData = new FormData();
    const project = projet
    formData.append('projectName', project.projectName);
    formData.append('description', project.description);
    formData.append('fullDescription', project.fullDescription);
    // we format the technologies
    const technologieArray = project.technologie.map(t => t.st);
    formData.append('technologie', JSON.stringify(technologieArray));
    formData.append('urlOfSite', project.urlOfSite);
    formData.append('demoUrl', project.demoUrl);
    
    // Vérification si le fichier n'est pas null avant de l'ajouter au FormData
    if (project.file) {
        formData.append('imgUrlOfProjet', project.file);
    }
    
    try {
        const response = await fetch('https://api-niedjo-kuitche.onrender.com/projet', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${project.BearerToken}`
            },
            body: formData
        });

        if (!response.ok) {
            throw new Error(`Erreur HTTP! Statut: ${response.status}`);
        }

        const data = await response.json();
        console.log('Réponse de l\'API:', data);

      } catch (error) {
        console.error('Erreur lors de l\'envoi des données:', error);
      }
      finally {
        setProjet({
          projectName: '',
          description: '',
          fullDescription: '',
          technologie: stack,
          urlOfSite: '',
          demoUrl: '',
          file: null,
          BearerToken: '',
        })
    }
}

  return (
    <div className="w-full h-[101vh] flex flex-col justify-center items-center dark:bg-black-100 pt-20">
      <FloatingNav 
        navItems={navItems}
      />

      {/* now the form of our projects */}
      <h1 className='text-3xl underline text-center pt-32'>Add a new impressive <b className="text-purple">Project</b></h1>
      <form id='projectForm' className='h-[80vh] max-w-[80%] flex flex-col justify-evenly pt-11 space-y-6'>
        <FormField 
          htmlfor='projectName'
          label='Project Name :'
          type='text'
          value={projet.projectName}
          onchange={handleChange}
        />
        <FormField 
          htmlfor='description'
          label='Description :'
          type='text'
          value={projet.description}
          onchange={handleChange}
        />
        <FormField 
          htmlfor='fullDescription'
          label='Full Description :'
          type='textarea'
          value={projet.fullDescription}
          onchange={handleChange}
        />
        <FormField 
          htmlfor='technologie'
          label='Stack :'
          type='select'
          value={projet.technologie}
          onchange={ajouter}
        />
        <FormField 
          htmlfor='urlOfSite'
          label='Url Of Website :'
          type='text'
          value={projet.urlOfSite}
          onchange={handleChange}
        />
        <FormField 
          htmlfor='demoUrl'
          label='DemoUrl :'
          type='text'
          value={projet.demoUrl}
          onchange={handleChange}
        />
        <FormField 
          htmlfor='file'
          label='Project image :'
          type='file'
          onchange={handleFileChange}
        />
        <FormField 
          htmlfor='BearerToken'
          label='Bearer Token :'
          type='text'
          value={projet.BearerToken}
          onchange={handleChange}
        />
        <SubmitButtun 
          label='Send'
          handleSubmit={handleSubmitProject}
        />
      </form>
    </div>
  )
}

export default Projet
