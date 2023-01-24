import React, { useState } from 'react'
import { Navbar } from '../Common/Navbar/Navbar'
import { post } from '../../Util/API'

export const AddList = () => {

	var [tableStructure, setTableStructure] = useState([])


	const handleSubmit = (event) => {
	  event.preventDefault();
	  console.log(document.getElementById('tableStructureJson').value)
	  setTableStructure(document.getElementById('tableStructureJson').value)
	  createTable(tableStructure)
	}

	const createTable = (tableStructure) => {
		post('Create',tableStructure).then((r) => {
			console.log(r)
		}).catch((e) => {
			console.log(e)
			console.log('postError')});
	}

	return (
		<div>
            <Navbar />
			<form onSubmit={handleSubmit}>
				<textarea id='tableStructureJson' onSubmit={handleSubmit}></textarea>
				<input type="submit" />
			</form>
		</div>
	)
}
