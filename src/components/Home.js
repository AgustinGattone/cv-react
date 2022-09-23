import React, { Component } from 'react';
import Navbar from './Navbar';
import Profile from './Profile';
import Skills from './Skills';
import Experiences from './Experiences';
import Educations from './Educations';
import Languages from './Languages';

export default class Home extends Component {
	render() {
		return (
			<section>
				<Navbar />
				<div className='container'>
					<div className='row'>
						<div className='col s12 m3'>
							<Profile />
						</div>
						<div className='col s12 m9'>
							<Experiences />
							<Educations />
							<Skills />
							<Languages />
						</div>
					</div>
				</div>
			</section>
		);
	}
}
