import React from 'react'
import { GrLinkedin } from "react-icons/gr";
import { AiFillFacebook } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { RiWhatsappFill } from "react-icons/ri";



const Or = () => {


    return (

        <div>

            <div className='container'>

                <div className='h2'>
                    <h4>OR</h4>
                </div>

                <div className='Link'>

                    <div className='head'>
                        <lable> Referral Link : </lable>
                        <input type='text' placeholder='https://www.eduonix.com/refe&earn/efvquyd...' id='text' />
                      
                    
                    </div>


                    <div className='head'>
                        <lable> &nbsp;&nbsp;&nbsp;&nbsp;Referral Code : </lable>
                        <input type='text' placeholder='r23qfc2' id='text' />
                    
                    </div>

                    <div className='head'>
                        <lable> &nbsp;&nbsp;&nbsp;&nbsp;Share Via social: </lable>
                        <GrLinkedin color="#0e76a8" size={25} />
                        <AiFillFacebook color="#3b5998" size={30} />
                        <BsTwitter color="#1DA1F2" size={30} />
                        <RiWhatsappFill color="rgb(83,204,97)" size={30} />



                    </div>

                </div>



                <div className='status'>
                    <div className=''>
                        <p> <b> Your referral status </b> </p>
                    </div>

                    <div className="row">
                        <div className="col-sm-4">
                            <div className="card1">
                                <div className="card-body">
                                    <h1> 0</h1>
                                    <h5 className="card-title">Referral Entries </h5>

                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="card2">
                                <div className="card-body">
                                    <h1> 0</h1>
                                    <h5 className="card-title">Successful Sign-ups</h5>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-4">
                            <div className="card3">
                                <div className="card-body">
                                    <h1> 0</h1>
                                    <h5 className="card-title">Registrations</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Or;
