import { SubmitButtonProps } from '@/type/indes'
import React from 'react'

const SubmitButtun = ({ label, handleSubmit} : SubmitButtonProps) => {
  return (
    <button className='p-4 bg-black-200 rounded-xl border border-black text-white w-[50%] mx-auto' type="button" onClick={handleSubmit}>{label}</button>
  )
}

export default SubmitButtun
