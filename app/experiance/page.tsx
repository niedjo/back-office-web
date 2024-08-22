"use client"
import { FloatingNav } from '@/components/FloatingNavbar'
import FormField from '@/components/FormField'
import SubmitButtun from '@/components/SubmitButtun'
import { navItems } from '@/data/data'
import { ExperianceType } from '@/type/indes'
import React, { useState } from 'react'

const Experiance = () => {
  
  // we definr the experiance
  const [experiance, setExperiance] = useState<ExperianceType>({
    experianceName: '',
    description: '',
    file: null,
    BearerToken: '',
  });

  // we change any value of type different to file
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setExperiance((prevState) => ({
        ...prevState,
        [name]: value,
    }));
  };

  // we change the file
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setExperiance((prevState) => ({
      ...prevState,
      file: e.target.files ? e.target.files[0] : null,  // Assurez-vous de gérer le cas où `files` pourrait être `null`
    }));
  };

  // we sublit our experiance
  async function handleSubmitExperiance() {
    const formData = new FormData();
    const experianceData = experiance
    formData.append('experianceName', experianceData.experianceName);
    formData.append('description', experianceData.description);
    
    // Vérification si le fichier n'est pas null avant de l'ajouter au FormData
    if (experianceData.file) {
        formData.append('imgUrlOfExperiance', experianceData.file);
    }
    
    try {
        const response = await fetch('https://api-niedjo-kuitche.onrender.com/experiance', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${experianceData.BearerToken}`
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
        setExperiance({
          experianceName: '',
          description: '',
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

      {/* now the form of our experiance */}
      <h1 className='text-3xl underline text-center pt-32'>Add a new <b className="text-purple">Experiance</b></h1>
      <form id='projectForm' className='h-[80vh] max-w-[80%] flex flex-col justify-evenly pt-11 space-y-6'>
        <FormField 
          htmlfor='experianceName'
          label='Experiance Name :'
          type='text'
          value={experiance.experianceName}
          onchange={handleChange}
        />
        <FormField 
          htmlfor='description'
          label='Description :'
          type='textarea'
          value={experiance.description}
          onchange={handleChange}
        />
        
        <FormField 
          htmlfor='profileUrl'
          label='Profile Url :'
          type='file'
          onchange={handleFileChange}
        />
        <FormField 
          htmlfor='BearerToken'
          label='Bearer Token :'
          type='text'
          value={experiance.BearerToken}
          onchange={handleChange}
        />
        <SubmitButtun 
          label='Send'
          handleSubmit={handleSubmitExperiance}
        />
      </form>
    </div>
  )
}

export default Experiance