import React from 'react';
import './Header.css';

function Header() {
    const [{ basket , user}, dispatch] = useStateValue();
    const handleAuthentication = () => {
        if (user) {
            auth.signOut();
        }}

    return (
        <div className ="header">
            <Link to="/">
                <img 
                    className="header__logo" 
                    alt =""
                    
                    src="https://www.pikpng.com/pngl/b/327-3272114_amazon-de-marketplace-amazon-logo-on-black-clipart.png" 
                />
            </Link>
            
            <div className="header__deliver">
                <LocationOnIcon className="header__deliverIcon" />

                <div className ="header__option">
                <span className ="header__optionLineOne">Deliver to</span>
                <span className ="header__optionLineTwo">Netherlands</span>
                </div>

            </div>

            <div
                className="header__search"> 
                    <input className = "header__searchInput"
                    type = "text"/>
                    {/* Logo */}
                    <SearchIcon className="header__searchIcon" />
                
            </div>

            <div className="header__nav">
                <Link to={!user && "/login"}>  {/* Only redirect to the login page if there is no user  */}
                    <div onClick={handleAuthentication} 
                    className ="header__option">
                        {/*  Hello Sign in */}
                        <span className ="header__optionLineOne">Hello {user? user.email : 'Guest'}</span>
                        <span className ="header__optionLineTwo">{user? 'Sign Out' : 'Sign In'}</span>
                    </div>
                </Link>

               
                <Link to="/orders">
                <div className ="header__option">
                    {/*  Return & Orders */}
                    <span className ="header__optionLineOne">Returns</span>
                    <span className ="header__optionLineTwo">& Orders</span>
                </div>
                </Link>

                <div className ="header__option">
                    {/* Your Prime */}
                    <span className ="header__optionLineOne">Your</span>
                    <span className ="header__optionLineTwo">Prime</span>
                </div>
                <Link to="/checkout">
                    <div className = "header__optionBasket">
                    <ShoppingBasketIcon className = "header__BasketIcon"/>
                    <span className = "header__optionLineTwo header__basketCount">{basket?.length}</span>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Header
