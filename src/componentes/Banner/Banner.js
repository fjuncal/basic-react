import banner from '../../assets/imagens/banner-tela-princial.png';
import './Banner.css'
export const Banner = () => {
    return (
        <header className="banner">
            <img src={banner} alt="banner da tela principal"></img>
        </header>
    )
}
