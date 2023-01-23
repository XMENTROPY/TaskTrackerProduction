import React from 'react'
import { useState } from 'react';
import { FieldEntry } from '../Common/FieldEntry/FieldEntry'
import { Navbar } from '../Common/Navbar/Navbar'
import ReactDOM from 'react-dom';

export const AddList = () => {
	const [inputs, setInputs] = useState({});

	const handleChange = (event) => {
		console.log('test')
	  const name = event.target.name;
	  const value = event.target.value;
	  setInputs(values => ({...values, [name]: value}))
	}
  
	const handleSubmit = (event) => {
	  event.preventDefault();
	  
	}

	const getElem = () => {
		try {return(console.log(document.getElementById('1').value))}
		catch{console.log('error')}
	}

	var test = Array(6).push(<FieldEntry value = {['Col 1', '1']}/>)

	return (
		<div>
            <Navbar />
			<form onSubmit={handleSubmit}>
				{test}

				<input type="submit" />
			</form>
		</div>
	)
}
