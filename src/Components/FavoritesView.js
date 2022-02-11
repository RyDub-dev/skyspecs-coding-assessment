import React from "react";
import SkySpecsAPI from /API/SkySpecsAPI;

class FavoritesView extends React.Component {

    render() { 
        let api = new SkySpecsAPI()
        let favorites = this.api.getFavorites();
        //this return would loop through the return from favorites
        return (  
            <div>
                <table>
                    <tr>
                        <td>
                            gist id
                        </td>
                    </tr>
                    <tr>
                        <td>
                            gist description
                        </td>
                    </tr>
                    <tr>
                        <td>
                            gist creation date
                        </td>
                    </tr>
                </table>
            </div>
        );
    }
}
 
export default FavoritesView;