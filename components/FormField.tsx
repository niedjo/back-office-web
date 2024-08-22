import { FormFieldType, Stack } from '@/type/indes'
import Image from 'next/image'
import React, { ChangeEventHandler, useState } from 'react'

const FormField = ({ htmlfor, label, type, value, onchange} : FormFieldType) => {
  
    if (type === 'select') {

        // we format the value of value
        const selectValue = Array.isArray(value) 
        ? value.map(v => v.st).join(', ') // Transformer en chaîne de caractères
        : value;
        return (
            <div>
        
                {/* a list of images */}
                <Image 
                    src={"./next.svg"}
                    alt='le log'
                    width={100}
                    height={100}
                />
                <div className='flex items-center gap-2 flex-wrap w-full py-4'>
                    {
                        Array.isArray(value) && value.map(st => (
                            <div key={st.id}>{st.st}</div>
                        ))
                    }
                </div>
                <div className="flex flex-col sm:flex-row justify-between sm:items-center sm:space-x-4">
                    <label className='mb-2 sm:mb-0' htmlFor={htmlfor}>{label}</label>
                    <select className='border border-gray-700 p-2 rounded-md w-full sm:w-[235px]' name={htmlfor} value={selectValue} onChange={onchange as ChangeEventHandler<HTMLSelectElement>}>
                        <option value="React native">React native</option>
                        <option value="React js">react js </option>
                        <option value="node js">node js</option>
                        <option value="Next js">Next js</option>
                        <option value="Typescript">Typescript</option>
                    </select>
                </div>
            </div>
        )
    }
    else if (type === 'textarea') {
        return (
            <div className="flex flex-col sm:flex-row justify-between sm:items-center sm:space-x-4">
                <label className='mb-2 sm:mb-0' htmlFor={htmlfor}>{label}</label>
                <textarea cols={22} className='border border-gray-700 p-2 rounded-md' name={htmlfor} value={value as string} onChange={onchange as ChangeEventHandler<HTMLTextAreaElement>} ></textarea>
            </div>
        )
    }
    
    
    return (
        <div className="flex flex-col sm:flex-row justify-between sm:items-center sm:space-x-4">
            <label className='mb-2 sm:mb-0' htmlFor={htmlfor}>{label}</label>
            <input className='border border-gray-700 p-2 rounded-md' name={htmlfor} type={type} value={value as string} onChange={onchange as ChangeEventHandler<HTMLInputElement>} />
        </div>
    )
}

export default FormField