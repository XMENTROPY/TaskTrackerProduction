import React from 'react'
import { Navbar } from '../Common/Navbar/Navbar'
import { getTable } from '../../Util/DatabaseFunctions'

export const Login = () => {

	const testf = getTable('test');

	return (
		<div>
            <Navbar/>
			{testf}
		</div>
	)
}
