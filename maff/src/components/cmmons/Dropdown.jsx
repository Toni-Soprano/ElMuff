import { useState } from "react";

export default function dropdown ({children, trigger}){
    const [show , setShow]=useState(false)
    return (
        <div onClick={()=> setShow(curr => !curr)}>
            <div>{trigger}</div>
            {show && <ul>{children}</ul>}
                </div>
    )
}

export function DropdownItem({children}) {
    return (
        <li className=""></li>
    )
}