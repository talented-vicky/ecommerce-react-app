import { ReactComponent as Logo} from '../../assets/crown.svg';
import { Link } from "react-router-dom";
import './Header.scss';
import { auth } from '../../Firebase/Firebase';
import { connect } from 'react-redux';
import CartIcon from '../Cart/CartIcon';
import CartDropdown from '../CartDropdown/CartDropdown';

const Header = ( {currentUser} ) => {
    return ( 
        <div className='header'>
            <Link to='/'>
                <Logo className='home'/>
            </Link>

            <div className='options'>
                <Link className="option" to='/shop'>
                    SHOP
                </Link>

                <Link className="option" to='/contact'>
                    CONTACT
                </Link>
                {/* if current user, sign out button displayed, else, sign in button displayed */}
                {
                    currentUser ?
                    <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
                    :
                    <Link className='option' to='/signin'> SIGN IN</Link>
                }
                <CartIcon />
            </div>
            <CartDropdown />
        </div>
     );
};

const mapStateToProps = state => ({
    currentUser: state.user.currentUser
});
 
export default connect(mapStateToProps)(Header);