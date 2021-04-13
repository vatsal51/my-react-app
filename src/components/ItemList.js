import React from 'react'

export default function ItemList(props) {
    // console.log("Final", props.items);
    function show(post) {

        return <>
            <span>  {post.name} | &nbsp;</span>
            <span>  {post.icao} | &nbsp;</span>
            <span>  {post.iata} | &nbsp;</span>
            <span>  {post.elevation} | &nbsp;</span>
            <span>  {post.latitude} |  &nbsp;</span>
            <span>  {post.longitude} | &nbsp;</span>
            <span>  {post.type} |&nbsp;</span>
            <span>  {post.Selection}</span>
        </>
    }
    return (
        <div>
            {props.items.map((e) =>
                <div key={e.id}>
                    {e.Selection === true ? show(e) : false}
                </div>
            )}
        </div>
    )
}
