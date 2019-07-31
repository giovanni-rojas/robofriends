import React from 'react';

const Scroll = (props) => {
	return(
		<div style = {{ overflowY: 'scroll', border: '5px solid black', height: '500px' }}>			{/* Double curly brackets, outer to signify JS expression, inner to return an object with CSS styles */}
			{ props.children }
		</div>
	);
	
}

export default Scroll;