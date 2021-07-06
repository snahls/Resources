import {Link} from 'react-router-dom';

const Header=(props)=>{
    return <div>
        <nav>
            <ul className="nav-links">
                <Link to='/about' style={{ textDecoration: 'none' }}>
                    <li>About Us</li>
                </Link>
                <Link to='/contact' style={{ textDecoration: 'none' }}>
                    <li>Contact Us</li>
                </Link>             
            </ul>
        </nav>
    </div>
}

export default Header;