import React, { useState, useEffect } from 'react';
import ItemList from "./ItemList"


export default function SearchForm(props) {
	const people = props.items
	const [people2, setPeople2] = useState(people);
	// setPeople2(people);
	useEffect(() => {
		setPeople2(people);
		console.log("set ppl", people2)
	}, [])
	const [searchTerm, setSearchTerm] = React.useState("");
	const handleChange = event => {
		setSearchTerm(event.target.value);
		handleSearch(event.target.value)
	};



	var handleSearch = (searchValue) => {
		// Add More Param as per Response to get more filtering across serveral Coloumn
		let FilterParam = ["name", "city", "iata"];
		const filterdata = people.filter((entry) => {
			return FilterParam.some(filter => entry[filter].includes(searchValue))
		})
		setPeople2(filterdata); //Setting Filter Data
		console.log("Pof", people2);
	};



	return (
		<div className="Div">
			<input
				type="text"
				placeholder="Search"
				value={searchTerm}
				onChange={(handleChange)}
			/>
			<ItemList items={searchTerm == "" ? people : people2} results={people2} />


		</div>
	)
}




