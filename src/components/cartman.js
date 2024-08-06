import { useEffect, useState } from 'react';
/* import axios from 'axios'; */

function SouthPark(){
	const [cartman, setCartman] = useState([]);
	
	useEffect(() => {
		fetch("https://spapi.dev/api/characters")
			.then(response => {
				return response.json();
			})
			.then(data => {
				setCartman(data.data);
			})
	}, []);
	
	console.log(cartman);
	
	return (
		<div>
			<h3>Personajes South Park</h3>
			{cartman.map((name) => {
				return <li>{name.name}</li>
			})}
		
		</div>
	)
}

export default SouthPark;
