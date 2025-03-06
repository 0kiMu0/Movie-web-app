import { Link } from "react-router-dom";
import '../CSS/NavbarCss.css';

function NavBar(){
    return(
        <nav className="navbar">
            <Link to="/movies">Movies</Link> | <Link to="/tv-shows">TV Shows</Link>
        </nav>
    );
}

export default NavBar;