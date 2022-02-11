import React from 'react';
import FavoritesView from './FavoritesView';


class HeaderNav extends React.Component {

    render() { 
        return (  
            <div className="header">
                <a><FavoritesView/></a>
            </div>
        );
    }
}
 
export default HeaderNav;