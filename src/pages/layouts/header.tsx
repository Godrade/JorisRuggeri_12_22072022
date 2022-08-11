//NAV LOGO
import LogoNav from "../../images/logo.svg"

//ICON
import IconYoga from '../../images/icon/icon-yoga.svg';
import IconSwimming from '../../images/icon/icon-swimming.svg';
import IconBike from '../../images/icon/icon-bike.svg';
import IconAlters from '../../images/icon/icon-alters.svg';

export const Header = () => {
    return (
        <header>
            <nav className="nav-horizontal">
                <ul>
                    <li><img src={LogoNav} alt="" /></li>
                    <li>Accueil</li>
                    <li>Profil</li>
                    <li>Réglage</li>
                    <li>Communauté</li>
                </ul>
            </nav>

            <div className="nav-vertical">
                <ul>
                    <li><img src={IconYoga} alt="" /></li>
                    <li><img src={IconSwimming} alt="" /></li>
                    <li><img src={IconBike} alt="" /></li>
                    <li><img src={IconAlters} alt="" /></li>
                </ul>
                <p>Copiryght, SportSee 2022</p>
            </div>
        </header>
    )
}