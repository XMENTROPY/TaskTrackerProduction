import React from 'react'
import { test } from '../../Util/API'
import { Calendar } from '../Common/Calendar/Calendar'
import { Navbar } from '../Common/Navbar/Navbar'


export const Dashboard = () => {
	const data = test()
	return (
		<div>
			<Navbar />
            <Calendar />
			{data}
		</div>
	)
}
