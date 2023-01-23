import React from 'react'

export const FieldEntry = (FieldLabel) => {

	return (
		<div>
            {FieldLabel}
            <form>
                <input type='text' placeholder='City' id='message5' onChange={(e) => setMessage5(e.target.value)} value={message5}/>
            </form>
		</div>
	)
}
