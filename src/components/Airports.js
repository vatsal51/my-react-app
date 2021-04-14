import React, { useState, useEffect } from 'react';
import CheckBoxForm from "./CheckBoxForm"
import ItemList from "./ItemList"
import SearchForm from "./SearchForm"

function Airports(data) {

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
		// console.log("dsadsa", UpdateItems);
		setItems(UpdateItems);
	}

	// Fetching Json data and storing
	useEffect(() => {

		fetch("https://raw.githubusercontent.com/vatsal51/my-react-app/main/public/airports.json")
			.then((response) => response.json())
			.then((data) => {
				setItems(
					data.map(ItemList =>
						ItemList ? { ...ItemList, Selection: true } : ItemList
					)
				);
				// console.table(data)
			});
	}, [])

	return (
		<>
			<CheckBoxForm items={items} ToggleItem={ToggleItem} />
			<SearchForm items={items} />
			{/* <ItemList items={items} /> */}
		</>
	);
}

export default Airports




