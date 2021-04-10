import React, { useState, useEffect } from 'react';

export default function CheckBoxForm(props) {

	const newList = props.items;
	newList.reduce((Item, index) => {
		newList.indexOf(Item) === index
		console.log("updated List", newList.indexOf(Item) === index)
	})
	// console.log("updated List", RefreshList);
	return (
		<>
			{
				newList.map((e) =>
					<>
						<li key={e.id}>
							<label htmlFor={e.type}>{e.type}
								<input type="checkbox"
									name={e.type}
									id={e.type}
									value={e.type}
									checked={e.Selection ? true : false}
									onChange={() => { props.ToggleItem(e.type) }}
								/>
							</label>
						</li>
					</>
				)

			}

		</>
	)
}
