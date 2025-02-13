import React, { useEffect } from 'react';
import { useState } from 'react';
import Style from "./AllOrders.module.css/";

export default  function AllOrders () {
    const [string, setstring] = useState("hi");
    useEffect(()=>{},[])
    return (
        <div>
            <h2 className={`${Style['bg-danger']}`}>orders COMPO</h2>
            <p>{string}Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis, iusto.</p>
        </div>
    );
}


