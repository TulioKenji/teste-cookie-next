'use client'

import { useState } from "react";
import { ButtonWithLoadingRoot } from "./root";

export function ButtonWithLoading(){
    const [loading, setLoading] = useState<boolean>(false);
    const handleClick = () => {
        setLoading(true);
        const timer = setTimeout(() => {
            alert("Button clicked!");
            setLoading(false);
        }, 2000);
        return () => clearTimeout(timer);
    }
    
    return (<ButtonWithLoadingRoot loading={loading}>
        <button 
            onClick={handleClick}
            disabled={loading}
        >
            Click Me Test
        </button>
    </ButtonWithLoadingRoot>);
}