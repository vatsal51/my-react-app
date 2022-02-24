import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";

export default function SearchForm(props) {
  var isLoading = props.isLoading;
  var setIsLoading = props.setIsLoading;
  const people = props.items;
  // const setItems = props.setItems
  const [people2, setPeople2] = useState(people);
  const [searchTerm, setSearchTerm] = React.useState("");
  // setPeople2(people);
  useEffect(() => {
    setPeople2(people);
    console.log("set ppl", people2);
  }, []);
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    handleSearch(event.target.value);
  };

  // Filtering data on search
  var handleSearch = (searchValue) => {
    // Add More Param as per Response to get more filtering across serveral Coloumn
    let FilterParam = ["name"];
    const filterdata = people.filter((entry) => {
      console.log(searchValue,entry)
      return FilterParam.some(data => entry[data].includes(searchValue));
    });
    setPeople2(filterdata); //Setting Filter Data
    console.table("Pof", people2);
    console.log(filterdata);
  };

  return (
    <div className="Div">
      <div className="search">
        <h3>Filter by Search</h3>
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={(handleChange)}
        />
      </div>

      <ItemList
        items={searchTerm === "" ? people : people2}
        results={people2}
        className="itemData"
      />
    </div>
  );
}
