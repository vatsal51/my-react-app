import React from 'react'
export default function ItemList(props) {
    // console.log("Final", props.items);
    function show(post) {

        return <>
        
            <span>  {post.name} </span>
            <span>  {post.icao}  </span>
            <span>  {post.iata}  </span>
            <span>  {post.elevation} ft </span>
            <span> N {post.latitude}  </span>
            <span> W {post.longitude}  </span>
            <span>  {post.type} </span>
            {/* <span>  {post.Selection}</span> */}
        </>
    }
    return (
        <div className="itemData">
            <div>
            <ul className="header">
                <li><h4>Name</h4></li>
                <li><h4>ICAO</h4></li>
                <li><h4>IATA</h4></li>
                <li><h4>Elev</h4></li>
                <li><h4>Lat.</h4></li>
                <li><h4>Long.</h4></li>
                <li><h4>Type</h4></li>
            </ul>
        </div>
            {props.items.map((e) =>
                <div key={e.id}>
                    {e.Selection === true ? show(e) : false}
                </div>
                
            )}
        </div>
    )
}
