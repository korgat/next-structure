import React, {useState} from 'react';

interface FormFieldI {
    name: string;
    type: 'text' | 'textArea';
    label: string
    submitted?: boolean
    regExp?: string
    errorMessage?: string
}

const FormField: React.FC<FormFieldI> = ({
                                             name,
                                             label,
                                             type,
                                             submitted,
                                             regExp, errorMessage,
                                         }) => {
    const [isValid, setIsValid] = useState(false)
    const [isTouched, setIsTouched] = useState(false)
    const isError = (!isValid && isTouched) || (submitted && !isValid)
    let inputBaseClass = ["border w-full rounded px-2 py-1"]
    if (isError) {
        inputBaseClass.push('border-red-400')
    }
    const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setIsTouched(true)
        if (!regExp) {
            setIsValid(true)
            return
        } else {
            const re = new RegExp(regExp)

            if (!re.test(e.target.value)) {
                setIsValid(false)
            } else {

                setIsValid(true)
            }
        }

    }
    return (
        <div className="w-full mb-2">
            <label className="block text-lg font-bold mb-1" htmlFor={name}>{label}</label>
            {type !== 'textArea' &&
                <input onBlur={handleBlur} className={inputBaseClass.join(' ')} type={type} id={name}
                       name={name}/>}
            {type === 'textArea' &&
                <textarea onBlur={handleBlur} className={inputBaseClass.join(' ')} name={name} id={name}
                          cols={30}
                          rows={5}></textarea>}
            {isError &&
                <div className="text-red-400 mt-2">{errorMessage}</div>}
        </div>
    );
};

export default FormField;