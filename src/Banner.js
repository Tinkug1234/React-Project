import React from 'react'
import Container from 'react-bootstrap/Container';




const Banner = () => {
    return (
        <div>
            <Container className='banner'>
                <div>
                    <img src="./refer.png" alt="..." />
                    <div>
                        <h3> Refer & Earn</h3>
                        <p> Refer upskilling content to your friends & family to earn cash for each registration</p>
                        <button type="button" className="btn btn-danger">My Referrals</button>
                    </div>
                </div>
            </Container>


            <div className='container'>
                <div className='h1'>
                    <h4> Our Programs to Refer & Earn</h4>
                </div>

                <div className="row">
                    <div className="col-sm-4">
                        <div className="card1">
                            <div className="card-body">
                                <p className="card-text">Certification Program in Full stack Developement</p>
                                <h5 className="card-title">Earn ₹250 per invite </h5>

                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="card2">
                            <div className="card-body">
                                <p className="card-text">Certification Program in Business <br /> Strategy</p>
                                <h5 className="card-title">Earn ₹300 per invite</h5>

                            </div>
                        </div>
                    </div>

                    <div className="col-sm-4">
                        <div className="card3">
                            <div className="card-body">
                                <p className="card-text">Certification Program in Digital <br />Marketing</p>
                                <h5 className="card-title">Earn ₹350 per invite</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
};

export default Banner;
