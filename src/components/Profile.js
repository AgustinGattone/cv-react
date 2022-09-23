import React, { Component } from 'react';
import ImgProfile from '../images/profile.jpg';
import { HashLink as Link } from 'react-router-hash-link'


class Profile extends Component {
    render() {
        return (
            <div>
                <div className='card'>
                    <div className='card-image'>
                        <img className='activator' src={ImgProfile} alt="Agustin Gattone" />
                        <Link className='btn-floating halfway-fab waves-effect wave-light red'>
                            <i className='material-icons activator'>more_vert</i>
                        </Link>
                    </div>
                    <div className='card-content'>
                        <span className='card-title activator grey-text text-darken-4'>
                            Agustin Gattone
                        </span>
                        <p>Web Developer</p>
                    </div>
                    <div className='card'>
                        <div className='card-action'>
                            <h6>
                                <strong>DATOS PERSONALES</strong>
                            </h6>
                            <div className='row mt'>
                                <div>
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
                                        <li>
                                            <i class="fa-solid fa-calendar"></i> Fecha de nacimiento: 09/05/1999
                                        </li>
                                        <li>
                                            <i class="fa-solid fa-id-card"></i> Nacionalidad: Argentino
                                        </li>
                                        <li>
                                            <i class="fa-solid fa-ring"></i> Estado civil: Soltero
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='card-reveal'>
                        <span className='card-title grey-text text-darken-4'>
                            Redes Sociales
                            <i className='material-icons right'>close</i>
                        </span>
                        <p className='flex-container'>
                            <a href="https://www.linkedin.com/in/agustin-gattone/"><i class="fa-brands fa-linkedin fa-lg"></i></a>
                            <a href="https://twitter.com/AgustinGattone"><i class="fa-brands fa-twitter fa-lg"></i></a>
                            <a href="https://instagram.com/agustingattone/"><i class="fa-brands fa-instagram fa-lg"></i></a>
                            <a href="https://github.com/AgustinGattone"><i class="fa-brands fa-github fa-lg"></i></a>
                        </p>
                    </div>
                </div>
            </div >
        );
    }
}

export default Profile;