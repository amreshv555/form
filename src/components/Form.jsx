import React from 'react';
import { useState } from 'react';
import './style.css'
import './dropdown.css'
import * as yup from 'yup'



const Form = () => {
    const [form, setForm] = useState({
        firstName: '',
        lastName: '',
        phoneNumber: '',
        gender: '',
        state: '',

    });
    const schema = yup.object().shape({
        firstName: yup.string().matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field ").required("First Name is required!"),
        lastName: yup.string().matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field ").required("Last Name is required!"),
        phoneNumber: yup.number().min(1000000000,"Not Valid Phone Number!").max(9999999999,"Not Valid Phone Number!").required("Phone Number is required!"),
        gender: yup.string().required("Gender is required!"),
        state: yup.string().required("State is not selected!"),
       });
    // const [errors,setErrors] = useState({ }) 

  
     
    const onChange = (e) => {
        const { value, name } = e.target;
    
        setForm((state) => ({
            ...state,
            [name]: value
        }));
    }
    const showData = () => {
        // console.log('Form :', form)
    };
    const onSubmit = (e) => {
        e.preventDefault();
    //    setErrors(validate(form));
    schema.validate(form).then((value)=>{
        console.log(value)
    }).catch((e)=>{
        console.log(e)
    });
    };

    return (
        <div>
            <form va onSubmit={onSubmit} data-forms="floating-label" className="ml-form">
                <fieldset className="ml-form-field">
                    <h2>Form</h2>
                    <br/>
                    <label>
                        <input onChange={onChange} type="text" name='firstName' value={form.firstName} />
                        <span> First Name</span>
                    </label>
                    <br />
                    <label>
                        <input onChange={onChange} type="text" name='lastName' value={form.lastName} />
                        <span> Last Name</span>
                    </label>
                   
                    <br />
                    <label>
                        <input onChange={onChange} type="number" name='phoneNumber'value={form.phoneNumber} placeholder="xxxxxxxxxx" />
                        <span>Phone Number </span>
                    </label>
                </fieldset>
               
                <br />
                <div>
                    <fieldset className="ml-form-field ml-form-field-radio">
                        <legend>Gender</legend>
                        <div className="ml-form-field-radio-group">
                            <input onChange={onChange} type="radio" name="gender" value="female" />
                            <label htmlFor="female">FEMALE</label>
                        </div>
                        <div className="ml-form-field-radio-group">
                            <input onChange={onChange} type="radio" name="gender" value="male" />
                            <label htmlFor="female"> MALE</label>
                        </div>
                    </fieldset>
                </div>
                <div className="ml-form-field ml-form-field-select">
                   
                        <legend>Select State of Residence</legend>

                        <select onChange={onChange} name="state">
                            <option disabled selected>Select a State</option>
                            <option value="Maharashtra">Maharashtra</option>
                            <option value="Karnatka">Karnatka</option>
                            <option value="Gujrat">Gujrat</option>
                            <option value="Uttar Pradesh">Uttar Pradesh</option>
                            <option value="West Bengal">West Bengal</option>
                        </select>
                    
                </div>
                <br />
                <div >
                    <button onClick={showData} className="ml-button-primary">Submit</button>
                </div>


            </form>

        </div>
    );
};

export default Form;