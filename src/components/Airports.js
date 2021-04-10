import React, { useState, useEffect } from 'react';
import CheckBoxForm from "./CheckBoxForm"
import ItemList from "./ItemList"

function Airports(data) {

    const [items, setItems] = useState([]);

    const ToggleItem = (itemsName) => {
        console.log('ToggleNew', itemsName);
        const UpdateItems = items.map(ItemList =>
            // ItemList.type === itemsName ? items : items
            ItemList.type === itemsName ? { ...ItemList, Selection: !ItemList.Selection ? true : false } : ItemList
        )
        // console.log("dsadsa", UpdateItems);
        setItems(UpdateItems);
    }

    useEffect(() => {
        fetch("./airports.json")
            .then((response) => response.json())
            .then((data) => {
                setItems(

                    data.map(ItemList =>
                        ItemList ? { ...ItemList, Selection: true } : ItemList
                    )
                );
                console.table(data)
            });
    }, [])




    //    handleCheckbox = e => {
    //        console.log('The link was clicked.');
    //         let isChecked = e.target.value;
    //         // e.preventDefault();
    //         console.log(isChecked)
    //         // console.log(this.id)
    //         // console.log("checked")
    //         // const val=e.value
    //         // console.log(val);
    //         // console.log(e)
    //         items.map(posts => (
    //             posts.filter(isChecked === posts.value)
    //         ))
    //         // this.setState({ filter: "none" });
    //         // else this.setState({ filter: e.target.value, checked: true });
    //     };

    return (

        <>

            <ul>
                <CheckBoxForm items={items} ToggleItem={ToggleItem} />
                <ItemList items={items} />
            </ul>

        </>

    );


}


export default Airports




