import React from 'react';

interface FormFieldI {
    name: string;
    type: 'text' | 'textArea';
    label: string
}

const FormField: React.FC<FormFieldI> = ({name, label, type}) => {
    return (
        <div className="w-full mb-2">
            <label className="block text-lg font-bold mb-1" htmlFor={name}>{label}</label>
            {type !== 'textArea' &&
                <input className="border w-full rounded px-2 py-1" type={type} id={name} name={name}/>}
            {type === 'textArea' &&
                <textarea className="border w-full rounded px-2 py-1" name={name} id={name} cols={30}
                          rows={5}></textarea>}
        </div>
    );
};

export default FormField;