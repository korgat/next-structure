import React, {useState} from 'react';

interface FormPropsI {
    children: React.ReactNode
    submitText: string
    className: string
}

const Form: React.FC<FormPropsI> = ({children, submitText, className}) => {
    const [submitted, setSubmitted] = useState(false);


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSubmitted(true)
        const formData = new FormData(e.target as HTMLFormElement)
        const data = Object.fromEntries(formData.entries())
        // console.log(e)

        const res = await fetch('/api/new-meetup', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        const respData = await res.json()
        console.log(respData)


    }

    const childrenWithProps = React.Children.map(children, child => {
        if (React.isValidElement(child) && typeof child.type !== 'string') {
            return React.cloneElement(child as React.ReactElement, {submitted});
        }
        return child;
    });

    return (
        <form onSubmit={handleSubmit} className={className}>
            {childrenWithProps}
            <button type="submit"
                    className="self-end mt-2 capitalize text-lg text-white bg-red-900 hover:bg-red-700 py-2 px-5 mb-8 rounded-lg">{submitText}
            </button>
        </form>
    );
};

export default Form;