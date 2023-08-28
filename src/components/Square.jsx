import { COLOR } from "../utils"

export default function Square({ num }) {
    const backgroundColor = COLOR[num];
    return (
        <>
            <div className={'square'} style={{'backgroundColor' : backgroundColor}}>
                {num != 0 && num}
            </div>
        </>
    )
}