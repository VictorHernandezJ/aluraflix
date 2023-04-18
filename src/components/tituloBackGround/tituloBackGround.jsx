import './tituloBackGround.css'

function TituloBG(props) {
    const style = {
        backgroundColor : props.bgColor,
        '--textSize': props.textSize
    }
    return (
        <div style={style} className='titulo-contenedor'>
            <h2 className='titulo-text'>{props.children}</h2>
        </div>
    )
}
export default TituloBG