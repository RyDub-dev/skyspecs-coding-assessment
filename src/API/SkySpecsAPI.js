import SkySpecsLibrary from /Library/SkySpecsLibrary;

class SkySpecsAPI {

    constructor(){
        this.library = new SkySpecsLibrary();
    }

    getGistsByUsername(username){
        return this.library.getGistsByUsername(username);
    }

    getGistById(id){
        return this.library.getGistById(id);
    }

    getFavorites() {
        //get all IDs in DB that have favorite column 'marked'
        //foreach id 
        //favorites += getGistById(id)

        let favorites = ['gistObject1', 'gistObject2', 'gistObject3'];
        return favorites;
    }

    markFavorite(id){
        let gist = this.getGistById(id)
        //TODO
        //update favorite column in DB
    }

    unmarkFavorite(id){
        let gist = this.getGistById(id)
        //TODO
        //update favorite column in DB
    }
}