import React, { useEffect } from 'react';
import { useState } from 'react';
import Style from "./Allorders.module.css/";

export default  function Allorders () {
    const [string, setstring] = useState("hi");
    useEffect(()=>{},[])
    return (
        <div>
            <h2 className={`${Style['bg-danger']}`}>all orders COMPO</h2>
            <p>{string}Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis, iusto.</p>
        </div>
    );
}

