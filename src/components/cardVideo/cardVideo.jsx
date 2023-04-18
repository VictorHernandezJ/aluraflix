import './cardVideo.css'
function CardVideo(props) {
    const style = {
        '--url-img': 'url(public/img/d1.jpg)',
        '--color': '#a5f871'
    }
    return (
        <div style={style} className="card">
        </div>
    )
}
export default CardVideo