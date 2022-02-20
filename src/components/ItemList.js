import React, { useState } from "react";

function ItemList(props) {
  const [postperpage] = useState([5]);
  const [currentPage, setCurrentPage] = useState([1]);
  
  var list = props.items;
  var setList = props.setItems;
  const max_len = props.items.length;
  console.log(max_len);

  // Get current posts
  const indexOfLastPost = currentPage * postperpage;
  const indexOfFirstPost = indexOfLastPost - postperpage;
  const currentPost = list.slice(indexOfFirstPost, indexOfLastPost);
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(max_len / postperpage); i++) {
    pageNumbers.push(i);
  }

  //Change page
  const paginate = (pageNumbers) => {
    setCurrentPage(pageNumbers);
  };
  function show(post) {
    return (
      <>
        <div className="data currenttpost">
          <span data-head="Name"> {post.name} </span>
          <span data-head="city"> {post.city} </span>
          <span data-head="country"> {post.country} </span>
          <span data-head="ICAO"> {post.icao} </span>
          <span data-head="IATA"> {post.iata} </span>
          <span data-head="Elev"> {post.elevation} ft </span>
          <span data-head="Lat."> N {post.latitude} </span>
          <span data-head="Long."> W {post.longitude} </span>
          <span data-head="Type"> {post.type} </span>
          {/* <span>  {post.Selection}</span> */}
        </div>
      </>
    );
  }

  return (
    <>
      <div className="itemData">
        <ul className="header">
          <li>
            <h4>Name</h4>
          </li>
          <li>
            <h4>City</h4>
          </li>
          <li>
            <h4>Country</h4>
          </li>
          <li>
            <h4>ICAO</h4>
          </li>
          <li>
            <h4>IATA</h4>
          </li>
          <li>
            <h4>Elev</h4>
          </li>
          <li>
            <h4>Lat.</h4>
          </li>
          <li>
            <h4>Long.</h4>
          </li>
          <li>
            <h4>Type</h4>
          </li>
        </ul>

        {currentPost.map((e) => (
          <div key={e.id}>{e.Selection === true ? show(e) : false}</div>
        ))}

        <div>
          <ul>
            {pageNumbers.map((number) => {
              return (
                <li key={number}>
                  <a href="!#" onClick={() => paginate(number)}>
                    {number}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}

export default ItemList;
