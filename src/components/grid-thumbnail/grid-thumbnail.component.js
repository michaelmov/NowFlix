/**
 * Created by michaelmovsesov on 3/30/17.
 */

let gridThumbnail = {
    bindings: {
        // TODO: Should be passing down a complete URL instead of movieId from parent controller
        movieId: '@',
        title: '@',
        poster: '@',
        rating: '@',
        genres: '='
    },
    template: require('./grid-thumbnail.template.html')
};

export default gridThumbnail;