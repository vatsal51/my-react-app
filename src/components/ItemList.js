import React from 'react'

export default function ItemList(props) {
    console.log("Final", props.items);
    function show(post) {

        return <>
            {post.name} | &nbsp;
            {post.icao} | &nbsp;
            {post.iata} | &nbsp;
            {post.elevation} | &nbsp;
            {post.latitude} |  &nbsp;
            {post.longitude} | &nbsp;
            {post.type} |&nbsp;
            {post.Selection}
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
