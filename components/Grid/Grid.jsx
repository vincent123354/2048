import Tile from '../Tile/Tile.jsx'
import PropTypes from "prop-types";
import { useRef, useEffect } from 'react';
import Transition from "react-transition-group/Transition";

Grid.propTypes = {
    grid: PropTypes.object,
    nextPos: PropTypes.object
};

function usePrevious(value) {
    const ref = useRef();
    useEffect(() => {
        ref.current = value;
    }, [value]);
    return ref.current;
}

export default function Grid({ grid, nextPos }) {
    let prevGrid = usePrevious(grid);
    console.log(nextPos)
    return (
        <>
            {   
                Object.keys(grid).map((k, index) => {
                    if (index in nextPos) {
                        console.log(123123123)
                        return (
                            <Transition timeout={1000}>
                                {state => (
                                <div
                                style={{
                                width: "50%",
                                height: "100vh",
                                paddingTop: "10px",
                                background: "green",
                                color: "white",
                                textAlign: "center",
                                transition: "all 1s ease",
                                position: "absolute",
                                top: 0,
                                //This is where all the magic happens :)
                                left: state === "entering" || state === "entered" ? 0 : "-50%"
                                }}
                                >
                                Hi, there!
                                </div>
                                )}
                           </Transition>
                        )
                    }   
                    else {
                        return (
                            <Tile key={index} num={grid[k]}></Tile>
                        )
                    }
                    
                })
            }
        </>
    )
}