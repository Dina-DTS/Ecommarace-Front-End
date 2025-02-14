import React, { useEffect } from 'react';
import { useState } from 'react';
import Style from "./Orders.module.css/";

export default  function Orders () {
    const [string, setstring] = useState("hi");
    useEffect(()=>{},[])
    return (
        <div>
            <h2 className={`${Style['bg-danger']}`}>Orders COMPO</h2>
            <p>{string}Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis, iusto.</p>
        </div>
    );
}

