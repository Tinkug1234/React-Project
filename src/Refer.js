import React, { useState } from "react";
// import Button from 'react-bootstrap/Button';

export function Refer() {
    const [formValues, setFormValues] = useState([{ name: "", email: "" }])

    let handleChange = (i, e) => {
        let newFormValues = [...formValues];
        newFormValues[i][e.target.name] = e.target.value;
        setFormValues(newFormValues);
    }

    let addFormFields = () => {
        setFormValues([...formValues, { name: "", email: "" }])
    }

    let removeFormFields = (i) => {
        let newFormValues = [...formValues];
        newFormValues.splice(i, 1);
        setFormValues(newFormValues)
    }

    let handleSubmit = (event) => {
        event.preventDefault();
        alert(JSON.stringify(formValues));
    }

    return (
        <div className="container">

            <div className="box">
                <p> <b> Kindly submit the candidate's information you are referring. Get them to register with this information. </b></p>
                <br />
                <form onSubmit={handleSubmit}>
                    {formValues.map((element, index) => (
                        <div className="form-inline" key={index}>
                            <div className="input-group">

                                <label className="sr-only" htmlFor="inlineFormInput"> Name  &nbsp; </label>
                                <input type="text" className="form-control mb-2 mr-sm-2" id="inlineFormInput" placeholder="Add Name of your Friend"
                                    name="name" value={element.name || ""} onChange={e => handleChange(index, e)} /> 
                                <label className="sr-only" htmlFor="isnlineFormInput">  &nbsp; &nbsp; &nbsp;Email  &nbsp; &nbsp;</label>
                                <input type="text" className="form-control mb-2 mr-sm-2" id="inlineFormInput" placeholder="Email of your Friend"
                                    name="email" value={element.email || ""} onChange={e => handleChange(index, e)} />

                                {
                                    index ?
                                        <button type="button" className="btn btn-danger" onClick={() => removeFormFields(index)}>Remove</button>
                                        : null
                                }
                            </div>
                        </div>
                    ))}
                    <div className="but btn-group ">
                    <button className="btn1"  type="button" onClick={() => addFormFields()}>Add</button>

                    <button className="btn2"  type="submit">Submit</button>


                        {/* <button className="btn btn-primary" type="button" onClick={() => addFormFields()}>Add</button> */}
                        {/* <button className="btn btn-success" type="submit">Submit</button> */}

                    </div>
                </form>
            </div>
        </div>
    )

}