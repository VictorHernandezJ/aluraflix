import './boton.css'
function Boton(props) {
    const style = {
        backgroundColor : props.bgColor,
        color: props.textColor,
        '--color': props.textColor
    }
    return (
        <>
            <button style={style}>
                {props.children}
            </button>
        </>
    )
}

export default Boton