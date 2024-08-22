import { ChangeEventHandler, MouseEventHandler, TextareaHTMLAttributes } from "react";

export type Stack = {
    id: number;
    st: string;
}

export type FormFieldType = { 
    htmlfor : string; 
    label : string; 
    type : string; 
    value? : string | Stack[];
    onchange : ChangeEventHandler<HTMLInputElement> | TextareaHTMLAttributes<HTMLTextAreaElement> | ChangeEventHandler<HTMLSelectElement>
}

export type SubmitButtonProps = {
    label : string;
    handleSubmit : MouseEventHandler<HTMLButtonElement>;
}

export type ProjectType = {
    projectName: string;
    description: string;
    fullDescription: string;
    technologie: Stack[];
    urlOfSite: string;
    demoUrl: string;
    file: File | null; 
    BearerToken: string;
}

export type CommentType = {
    peopleName: string;
    peopleWorkstation: string;
    comment: string;
    file: File | null; 
    BearerToken: string;
}

export type ExperianceType = {
    experianceName: string;
    description: string;
    file: File | null; 
    BearerToken: string;
}