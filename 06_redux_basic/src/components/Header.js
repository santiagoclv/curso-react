import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
    <header>
         <Link to={`/`} ><div>DaylyNews</div></Link>
    </header>
)

export default Header;