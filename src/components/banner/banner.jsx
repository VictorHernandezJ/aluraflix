import CardVideo from '../cardVideo/cardVideo'
import TituloBG from '../tituloBackGround/tituloBackGround'
import './banner.css'
function Banner (){
    return (
        <section className='contenedor-banner'>
            <div className='banner-contenido'>
                <div className='banner-informacion'>
                    <TituloBG bgColor='#6BD1FF' textSize='50px'>front end</TituloBG>
                    <p>
                        Este challenge es una forma de aprendizaje. Es un mecanismo donde pordrás
                        comprometerte en la solucion de problemas
                    </p>
                </div>
                <div className='banner-video'>
                    <CardVideo/>
                </div>
            </div>
        </section>
    )
}

export default Banner