import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../Button/Button'
import { WeatherBar } from '../WeatherBar/WeatherBar'
import './Navbar.scss'

export const Navbar = () => {
	return (
		<div>
			<ul id='Navbar'>
				<li>
					<Link to={"/Dashboard"}>
						<Button text='Dashboard' />
					</Link>
				</li>
				<li>
					<Link to={'/AddList'}>
						<Button text='Add List' />
					</Link>
				</li>
			</ul>
			<WeatherBar/>
		</div>
	)
}
