import { Link } from 'react-scroll';


function Navbar() {
    return (
        <nav className="custom-navbar navbar navbar-expand-lg bg-body-tertiary fixed-top py-3">
            <div className="container-fluid">
                <a className="navbar-brand" href="./">Logo</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item pe-5">
                            <Link className="nav-link" aria-current="page" to="kezdolap" activeClass="active" spy={true} smooth={true} offset={-90} duration={50}>Kezdőlap</Link>
                        </li>
                        <li className="nav-item pe-5">
                            <Link className="nav-link" to="kikvagyunk" activeClass="active" spy={true} smooth={true} offset={-90} duration={50}>Kik vagyunk mi?</Link>
                        </li>
                        <li className="nav-item pe-5">
                            <Link className="nav-link" to="termekek" activeClass="active" spy={true} smooth={true} offset={-90} duration={50}>Termékek</Link>
                        </li>
                        <li className="nav-item pe-5">
                            <Link className="nav-link" to="kapcsolat" activeClass="active" spy={true} smooth={true} offset={-90} duration={50}>Kapcsolat</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
