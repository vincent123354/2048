import Square from './Square.jsx'
export default function Row({ row }) {
    return (
        <>
            {
                row.map((num) => {
                    <Square num={num}></Square>
                })
                
            }
        </>
    )
}