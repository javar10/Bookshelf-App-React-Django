import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="headerDiv">
            <h1 className="headerTitle">My Bookshelf</h1>
            <nav className="headerNav">
                <ul>
                    <li><Link to="/">My Bookshelf</Link></li>
                    <li><Link to='/browse'>Browse Library</Link></li>
                </ul>

            </nav>
        </header>
    )
}

export default Header