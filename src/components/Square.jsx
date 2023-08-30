import { useEffect } from "react";
import { COLOR } from "../utils"
import { useRef } from "react";

export default function Square({ num }) {
    const backgroundColor = COLOR[num];
    return (
        <>
            {/* <div className='square'> */}
                <div className='square square-animation' style={{'backgroundColor' : backgroundColor}}>
                    {num != 0 && num}
                </div>
            {/* </div> */}
            
        </>
    )
}