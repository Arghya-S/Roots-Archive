import { Link } from 'react-router-dom'
import "../styles/Navbar.css";

export default function Navbar() {
    return (
        <nav>
            <ul>
                <li><Link to="/browse">Browse submissions</Link></li>
                <li><Link to="/archive">Archives</Link></li>
                <li><Link to="/recordoh">Record</Link></li>
                <li><Link to="/contact-us">Contact</Link></li>
            </ul> 
            <div className="login">
                <button>Log in</button>
                <button>Sign up</button>
            </div>
        </nav>
    );
}