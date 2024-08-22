"use client"
import { FloatingNav } from '@/components/FloatingNavbar'
import FormField from '@/components/FormField'
import SubmitButtun from '@/components/SubmitButtun'
import { navItems } from '@/data/data'
import { CommentType, Stack } from '@/type/indes'
import React, { useState } from 'react'

const Comment = () => {
  
  // we define the comment
  const [comment, setComment] = useState<CommentType>({
    peopleName: '',
    peopleWorkstation: '',
    comment: '',
    file: null,
    BearerToken: '',
  });

  // we change any value of type different to file
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setComment((prevState) => ({
        ...prevState,
        [name]: value,
    }));
  };

  // we change the file
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setComment((prevState) => ({
      ...prevState,
      file: e.target.files ? e.target.files[0] : null,  // Assurez-vous de gérer le cas où `files` pourrait être `null`
    }));
  };

  // we sublit our comment
  async function handleSubmitComment() {
    const formData = new FormData();
    const commentData = comment
    formData.append('peopleName', commentData.peopleName);
    formData.append('peopleWorkstation', commentData.peopleWorkstation);
    formData.append('comment', commentData.comment);
    
    // Vérification si le fichier n'est pas null avant de l'ajouter au FormData
    if (commentData.file) {
        formData.append('profileUrl', commentData.file);
    }
    
    try {
        const response = await fetch('https://api-niedjo-kuitche.onrender.com/comment', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${commentData.BearerToken}`
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
        setComment({
          peopleName: '',
          peopleWorkstation: '',
          comment: '',
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

      {/* now the form of our comment */}
      <h1 className='text-3xl underline text-center pt-32'>Add a new <b className="text-purple">Comment of your work</b></h1>
      <form id='projectForm' className='h-[80vh] max-w-[80%] flex flex-col justify-evenly pt-11 space-y-6'>
        <FormField 
          htmlfor='peopleName'
          label='People Name :'
          type='text'
          value={comment.peopleName}
          onchange={handleChange}
        />
        <FormField 
          htmlfor='peopleWorkstation'
          label='People Workstation :'
          type='text'
          value={comment.peopleWorkstation}
          onchange={handleChange}
        />
        <FormField 
          htmlfor='comment'
          label='Comment :'
          type='textarea'
          value={comment.comment}
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
          value={comment.BearerToken}
          onchange={handleChange}
        />
        <SubmitButtun 
          label='Send'
          handleSubmit={handleSubmitComment}
        />
      </form>
    </div>
  )
}

export default Comment
