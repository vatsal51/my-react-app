import React from 'react'
export default function ItemList(props) {
	// console.log("Final", props.items);
	function show(post) {

		return <>
			<div className="data">
				<span data-head="Name">  {post.name} </span>
				<span data-head="city">  {post.city} </span>
				<span data-head="country"> {post.country} </span>
				<span data-head="ICAO">  {post.icao}  </span>
				<span data-head="IATA">  {post.iata}  </span>
				<span data-head="Elev">  {post.elevation} ft </span>
				<span data-head="Lat."> N {post.latitude}  </span>
				<span data-head="Long."> W {post.longitude}  </span>
				<span data-head="Type">  {post.type} </span>
				{/* <span>  {post.Selection}</span> */}
			</div>
		</>
	}
	return (
		<div className="itemData">

			<ul className="header">
				<li><h4>Name</h4></li>
				<li><h4>City</h4></li>
				<li><h4>Country</h4></li>
				<li><h4>ICAO</h4></li>
				<li><h4>IATA</h4></li>
				<li><h4>Elev</h4></li>
				<li><h4>Lat.</h4></li>
				<li><h4>Long.</h4></li>
				<li><h4>Type</h4></li>
			</ul>

			{props.items.map((e) =>
				<div key={e.id}>
					{e.Selection === true ? show(e) : false}
				</div>

			)}
		</div>
	)
}
