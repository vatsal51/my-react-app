import React, { useState, useEffect } from 'react';
import ItemList from "./ItemList"


export default function SearchForm(props) {
	const people = props.items
	const [people2, setPeople2] = useState(people);
	const [searchTerm, setSearchTerm] = React.useState("");
	// setPeople2(people);
	useEffect(() => {
		setPeople2(people);
		console.log("set ppl", people2)
	}, [])
	const handleChange = event => {
		setSearchTerm(event.target.value);
		handleSearch(event.target.value)
	};


	// Filtering data on search 
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
			<div className="search"><h3>Filter by Search</h3>
				<input
					type="text"
					placeholder="Search"
					value={searchTerm}
					onChange={(handleChange)}
				/></div>

			<ItemList items={searchTerm == "" ? people : people2} results={people2} className="itemData" />


		</div>
	)
}




