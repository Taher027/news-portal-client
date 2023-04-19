import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {
    const [menuItem, setMenuITem] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/news-categories')
        .then(res => res.json())
        .then(data=> setMenuITem(data))
    },[])
    return (
        <div>
            {
                menuItem?.map(item=> <p key ={item.id}>
                    <Link to={`/category/${item.id}`}>{item.name}</Link>
                </p>)
            }
        </div>
    );
};

export default LeftSideNav;