import React from 'react'

export const WeatherBar = () => {
	return (
		<div>
            <a class="weatherwidget-io" href="https://forecast7.com/en/35d23n80d84/charlotte/?unit=us" data-label_1="Charlotte" data-label_2="North Carolina" data-theme="original" >Charlotte North Carolina</a>
				{!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js = d.createElement(s);js.id=id;js.src='https://weatherwidget.io/js/widget.min.js';fjs.parentNode.insertBefore(js,fjs);}}(document,'script','weatherwidget-io-js')}
		</div>
	)
}
