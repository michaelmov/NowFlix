/**
 * Created by Michael Movsesov on 1/22/17.
 */

export default class MoviesController {

    constructor($state, MOVIE_DB_API) {
        'ngInject';

        this.name = 'World';
        this.state = $state;
        this.apiKey = MOVIE_DB_API.API_KEY
    }

    changeName() {
        if (this.state.is('upcomingMovies')) {
            this.name = 'Upcoming movies';
            return;
        }
        this.name = 'NowFlix ' + this.apiKey;
    }
}
