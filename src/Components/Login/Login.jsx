import React from 'react'
import { get } from '../../Util/API'
import { Navbar } from '../Common/Navbar/Navbar'
import { useEffect, useState } from 'react'

export const Login = () => {

	const [testData, setTestData] = useState()

	useEffect(()=>{
		get('test').then((e) => {
			console.log(e.data)
			setTestData(e.data.id)
		})
		.catch((error) => {
			console.log(error.message)
		})
	},[])

	return (
		<div>
            <Navbar/>
			{testData}
		</div>
	)
}
