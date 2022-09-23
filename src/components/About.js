import React, { Component } from 'react';

class About extends Component {
    render() {
        return (
            <div>
                <div className='card'>
                    <div className='card-action'>
                        <h6>
                            <strong>INFORMACION PERSONAL</strong>
                        </h6>
                        <div className='row mt'>
                            <div className='col s12 m6 l6 xl6'>
                                <ul>
                                    <li>
                                        <i class="fa-solid fa-location-dot"></i> Matienzo 138, Berazategui, 1884
                                    </li>
                                    <li>
                                        <i class="fa-solid fa-phone"></i> 1152611604
                                    </li>
                                    <li>
                                        <i class="fa-solid fa-envelope"></i> agustingattone@gmail.com
                                    </li>
                                    <li>
                                        <a href="https://www.linkedin.com/in/agustin-gattone/"><i class="fa-brands fa-linkedin fa-lg"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;