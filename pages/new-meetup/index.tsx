import React from 'react';
import Form from "@components/common/Form/Form";
import FormField from "@components/common/Form/formField";


const NewMeetup = () => {
    return (
        <div className="flex justify-center">
            <Form submitText="Show Details"
                  className="flex flex-col max-w-lg w-full px-4 py-5 rounded-lg border shadow-lg">
                <FormField name="title" type="text" label="Meetup Title" regExp="^[a-z]+$"
                           errorMessage="Only lowercase"/>
                <FormField name="image" type="text" label="Meetup Image"/>
                <FormField name="address" type="text" label="Address" regExp="^[a-z0-9]+$"
                           errorMessage="Only lowercase + numbers"/>
                <FormField name="description" type="textArea" label="Description" regExp="^[a-z0-9]+$"
                           errorMessage="Only lowercase + numbers"/>
            </Form>
        </div>

    );
};

export default NewMeetup;