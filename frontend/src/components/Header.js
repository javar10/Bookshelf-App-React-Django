import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faBook } from '@fortawesome/free-solid-svg-icons';


const Header = () => {
    return (
        <header className='headerDiv'>
            <h1 className='headerTitle'>My Bookshelf</h1>
            <nav className='headerNav'>
                <ul className='headerList'>
                    <li className='headerListItem'>
                        <Link to='/' className='headerListItem'>
                        <FontAwesomeIcon icon={faBook} className='headerListIcon'/>
                        My Bookshelf
                        </Link>
                        </li>
                    <li className='headerListItem'>
                        <Link to='/browse' className='headerListItem'>
                        <FontAwesomeIcon icon={faMagnifyingGlass} className='headerListIcon'/>
                        Browse Library
                        </Link>
                        </li>
                </ul>

            </nav>
        </header>
    )
}

export default Header