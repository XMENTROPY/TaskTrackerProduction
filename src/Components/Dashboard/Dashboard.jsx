import React, { useState, useEffect } from 'react'
import { Calendar } from '../Common/Calendar/Calendar'
import { Navbar } from '../Common/Navbar/Navbar'
import { post } from '../../Util/API'

export const Dashboard = () => {

	var [data, setData] = useState('test')

	const createTable = (data) => {
		post('Create', data).then((r) => {
			console.log(r)
		}).catch((e) => {
			console.log(e)
			console.log('postError')});
			
	}

	createTable('data')

	return (
		<div>
			<Navbar />
            <Calendar />
		</div>
	)
}
