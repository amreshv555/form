import React from 'react';
import { Field, Form, Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import './style.css';
import './dropdown.css'
import './error.css'


const Form2 = () => {
    const form = {
        firstName: '',
        lastName: '',
        phoneNumber: '',
        gender: '',
        state: '',
    }
    const stateOfResidence =['Delhi','Maharashtra','Karnataka','Gujrat','West Bengal'];
    const schema = yup.object().shape({
        firstName: yup.string().matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field! ").required("First Name is required!"),
        lastName: yup.string().matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field! ").required("Last Name is required!"),
        phoneNumber: yup.number().min(1000000000, "Not Valid Phone Number!").max(9999999999, "Not Valid Phone Number!").required("Phone Number is required!"),
        gender: yup.string().required("Gender is required!"),
        state: yup.string().required("State is not selected!"),
    });

    const handleSubmit = (values) => {
        console.log("Form", values)
    }
    return (
        <div>
            <Formik initialValues={form} validationSchema={schema} onSubmit={handleSubmit}>
                {(formik)=>{
                    const { errors, touched } = formik;
                    return(
                        <Form data-forms="floating-label" className="ml-form ">
                        <h1>Form</h1>
                        <br />
                        <div className='ml-form-field'>
                            <label>
                                <Field name="firstName" type="text" className={errors.firstName && touched.firstName ? 'texter' : null} placeholder="First Name"/>
                                <span className={errors.firstName && touched.firstName ? 'texterr' : null}>First Name</span>
                                <p><ErrorMessage name='firstName' /></p>
                            </label>
                            <br />
                            <label>
                                <Field name="lastName" type="text" className={errors.lastName && touched.lastName ? 'texter' : null} placeholder="Last Name" />
                                <span>Last Name</span>
                                <p><ErrorMessage name='lastName' className='ml-form-field-errortext' /></p>
    
                            </label>
                            <br />
                            <label>
                                <Field name="phoneNumber" type="number" className={errors.phoneNumber && touched.phoneNumber ? 'texter' : null}placeholder="XXXXXXXXXX"/>
                                <span>Phone Number</span>
                                <p><ErrorMessage name='phoneNumber' className='ml-form-field-errortext' /></p>
                            </label>
    
                        </div>
                        <div className='ml-form-field ml-form-field-radio'>
                            <legend>Gender:</legend>
                            <div className={errors.gender && touched.gender ? 'radioer' : 'radioner'}>
                                <div className='ml-form-field-radio-group'>
                                    <Field name="gender" type="radio" value="male" />
                                    <label>Male</label>
                                </div>
                                <div className='ml-form-field-radio-group '>
                                    <Field name="gender" type="radio" value="female" />
                                    <label>Female</label>
                                </div>
                            </div>
                            <p><ErrorMessage name="gender"/></p>
                        </div>
    
                        <div className='ml-form-field ml-form-field-select'>
                            <legend>State of Residenece : </legend>
                            <Field name="state" as="select" >
                                <option value='' disabled selected>Select a State</option>
                                <option value="Maharashtra">Maharashtra</option>
                                <option value="Karnataka">Karnataka</option>
                                <option value="Gujrat">Gujrat</option>
                                <option value="West Bengal">West Bengal</option>
                            </Field>
                            <p><ErrorMessage name="state" className='ml-form-field-errortext' /></p>
                        </div>
                        <br />
                        <button type="submit" className='ml-button-primary'>Submit</button>
                    </Form>
                    )
                }}
                
            </Formik>
        </div>
    );
};

export default Form2;