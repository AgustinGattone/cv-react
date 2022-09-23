import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import { NavHashLink } from 'react-router-hash-link';

export default class Navbar extends Component {
	render() {
		return (
			<>
				<nav className='light-blue darken-4'>
					<div className='container'>
						<div className='nav-wrapper'>
							<NavHashLink to='/' className='brand-logo'>
								Agustin Gattone
							</NavHashLink>
							<NavHashLink to='/' data-target='side-nav' className='sidenav-trigger'>
								<i className='material-icons'>menu</i>
							</NavHashLink>
							<ul className='right hide-on-med-and-down'>
								<li>
									<NavHashLink to='/'>
										<i class='fa-solid fa-home'></i> Home
									</NavHashLink>
								</li>
								<li>
									<NavHashLink to='/experiences'>
										<i class='fa-solid fa-id-badge'></i> Experiencia
									</NavHashLink>
								</li>
								<li>
									<NavHashLink to='/educations'>
										<i class='fa-solid fa-graduation-cap'></i> Educación
									</NavHashLink>
								</li>
								<li>
									<NavHashLink to='/skills'>
										<i class='fa-solid fa-copy'></i> Habilidades
									</NavHashLink>
								</li>
								<li>
									<NavHashLink to='/languages'>
										<i class="fa-solid fa-language"></i> Idiomas
									</NavHashLink>
								</li>
							</ul>
						</div>
					</div>
				</nav>
				<ul className='sidenav' id='side-nav'>
					<li>
						<NavHashLink to='/'>
							<i class='fas fa-home'></i> Home
						</NavHashLink>
					</li>
					<li>
						<NavHashLink to='/skills'>
							<i class='fas fa-copy'></i> Skills
						</NavHashLink>
					</li>
					<li>
						<NavHashLink to='/experiences'>
							<i class='fas fa-id-badge'></i> Experiences
						</NavHashLink>
					</li>
					<li>
						<NavHashLink to='/educations'>
							<i class='fas fa-graduation-cap'></i> Educations
						</NavHashLink>
					</li>
					<li>
						<NavHashLink to='/portfolios'>
							<i class='fas fa-address-card'></i> Portfolios
						</NavHashLink>
					</li>
				</ul>
			</>
		);
	}
}