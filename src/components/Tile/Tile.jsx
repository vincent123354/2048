import { COLOR } from "../../utils"
import PropTypes from "prop-types";

Tile.propTypes = {
    num: PropTypes.number
};
  
export default function Tile({ num }) {
    const backgroundColor = COLOR[num];
    // https://blog.logrocket.com/accessing-previous-props-state-react-hooks/

    return (
        <>
            <div className='square' style={{'backgroundColor' : backgroundColor}}>
                {num != 0 && num}
            </div>
        </>
    )
}