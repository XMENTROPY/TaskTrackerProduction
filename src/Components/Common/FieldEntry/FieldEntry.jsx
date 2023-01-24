import React from 'react'

export const FieldEntry = (props) => {
   

	return (
		<div>
      {'Col '.concat(props.value)}
      <br></br>
      <input type='text' id = {props}/>
      <br></br>
      Data Type
      <br></br>
      <input type='text' id = {props}/>
      <br></br>
      <br></br>
		</div>
	)
}
