import Tile from '../Tile/Tile.jsx'
import PropTypes from "prop-types";

Grid.propTypes = {
    grid: PropTypes.object
};

export default function Grid({ grid }) {
    return (
        <>
            {   
                Object.keys(grid).map((k, i) => {
                    return (
                        <Tile key={i} num={grid[k]}></Tile>
                    )
                })
            }
        </>
    )
}