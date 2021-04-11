import React, { useState, useEffect } from 'react';
import ItemList from "./ItemList"
import axios from 'axios';


// const people = [
// 	  "Siri",
// 	  "Alexa",
// 	  "Google",
// 	  "Facebook",
// 	  "Twitter",
// 	  "Linkedin",
// 	  "Sinkedin"
// 	];
export default function SearchForm(props) {
	const people2 = []
	props.items.map((p) => {
	people2.push(p.name);
	})

	const [searchTerm, setSearchTerm] = React.useState("");
  const handleChange = event => {
    setSearchTerm(event.target.value);
  };

  const results = !searchTerm
    ? people2
    : people2.filter(person =>
        person.toLowerCase().includes(searchTerm.toLocaleLowerCase())
      );


	
	//console.log(data)

  


	// useEffect(() => {
	// 	// const results = props.items.filter(person => {
	// 	// 	person.map((n) => {
	// 	// 		n.name == searchTerm ? [...n] : n
	// 	// 	})
	// 	// 	person.toLowerCase().includes(searchTerm.toLowerCase())
	// 	// 	console.log("Person", person)
	// 	// }
	// 	// );

	// 	const results = props.items.filter(FilterList =>
	// 		FilterList.name.includes(searchTerm) ?
	// 			{ ...FilterList, name: "aa" }
	// 			: FilterList.name
	// 	)
	// 	console.log(results.name);


	// 	setSearchResults(results);
	// }, []);

	console.log("Searched ", searchTerm)
	return (
		<div>
<input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleChange}
      />
      <ul>
        {results.map(item => (
          <li>{item}</li>
        ))}
      </ul>
			{/* <input
				type="text"
				placeholder="Search"
				value={searchTerm}
				onChange={handleChange}
			/>
			<ItemList items={props.items} /> */}

		</div>
	)
}




