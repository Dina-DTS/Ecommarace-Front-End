import React, { useEffect } from 'react';
import { useState } from 'react';
import Style from "./Notfound.module.css/";
import not_found from "../../assets/page not found - Copy.png"

export default  function Notfound () {
    const [string, setstring] = useState("hi");
    useEffect(()=>{},[])
    return (
        <div>
            <img src={not_found} alt="" />

        </div>
    );
}

