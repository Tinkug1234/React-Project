import React from 'react'

const Dropdown = () => {
    return (
        <div>
            <form className='container'>

                <div className="form-group">
                    <label for="exampleFormControlSelect1"><b>Select a program to refer :</b></label>
                    <select className="form-control" id="exampleFormControlSelect1">
                        <option>Select--</option>
                        <option>Certification Program in Full stack Developement</option>

                        <option>Certification Program in Business Strategy</option>
                        <option>Certification Program in Digital Marketing</option>
                    </select>
                </div>

            </form>

        </div>
    )
}

export default Dropdown
