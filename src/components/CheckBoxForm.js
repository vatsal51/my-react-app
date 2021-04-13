import React, { useState, useEffect } from 'react';

export default function CheckBoxForm(props) {

	var newList = props.items;
	var RefreshedList = []; const TempList = [];
	newList.map(element => {
		RefreshedList = { "type": element.type, "Selection": element.Selection }
		TempList.push(RefreshedList);
		const setArray = new Set(TempList.map(x => JSON.stringify(x)))
		newList = [...setArray].map(x => JSON.parse(x))
	});
	// console.log("NewList --", newList);
	return (
		<ul>
			{
				newList.map((e, index) =>
					<li key={index}>
						<label htmlFor={e.type}>{e.type}
							<input type="checkbox"
								name={e.type}
								id={e.type}
								value={e.Selection}
								checked={e.Selection ? true : false}
								onChange={() => { props.ToggleItem(e.type) }}
							/>
						</label>
					</li>
				)
			}
		</ul>
	)
}
