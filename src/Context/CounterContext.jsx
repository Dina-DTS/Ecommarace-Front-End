import { createContext } from "react";

const CounterContext=createContext();

//children ==>app
 export default function CounterContextProvider({children}){
    return <CounterContext.Provider>

        {children}

    </CounterContext.Provider>
    

}

