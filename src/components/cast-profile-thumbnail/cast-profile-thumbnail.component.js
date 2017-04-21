/**
 * Created by michaelmovsesov on 4/20/17.
 */
let castProfileThumbnail = {
    bindings: {
        imageUrl: '@',
        name: '@',
        character: '@'
    },
    template: require('./cast-profile-thumbnail.template.html')
};

export default castProfileThumbnail;