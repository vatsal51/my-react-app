import React, { useState, useEffect } from 'react';
import CheckBoxForm from "./CheckBoxForm"
// import ItemList from "./ItemList"
import SearchForm from "./SearchForm"

function Airports(data) {
	const [isLoading,setIsLoading] = useState(false)

	const [items, setItems] = useState([]);
	// Show item list on checkbox selected
	const ToggleItem = (itemsName) => {
		console.log('ToggleNew', itemsName);
		const UpdateItems = items.map(ItemList =>
			// ItemList.type === itemsName ? items : items
			ItemList.type === itemsName ?
				{ ...ItemList, Selection: !ItemList.Selection ? true : false }
				: ItemList
		)
		
		setItems(UpdateItems);
		// console.log("dsadsa", UpdateItems);
	}

	// Fetching Json data and storing
	useEffect(() => {
		setIsLoading(true)

		// fetch("https://raw.githubusercontent.com/vatsal51/my-react-app/main/public/airports_full.json")
		fetch("https://raw.githubusercontent.com/vatsal51/my-react-app/main/public/airports.json")
			.then((response) => response.json())
			.then((data) => {
				setItems(
					data.map(ItemList =>
						ItemList ? { ...ItemList, Selection: true } : ItemList
					)
				);
				setIsLoading(false)
				// console.table(data)
			});
	}, [])


	if(isLoading){
		return <h2>Loading... Please wait</h2>
	}
	
	return (
		<>
			<CheckBoxForm items={items} ToggleItem={ToggleItem} />
			<SearchForm items={items} setItems={setItems} />
			{/* <ItemList items={items} /> */}
		</>
	);
}

export default Airports




