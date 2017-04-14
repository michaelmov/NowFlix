/**
 * Created by Michael Movsesov on 1/22/17.
 */

function routing($urlRouterProvider, $locationProvider) {
    'ngInject';

    // $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/');
}

function theme($mdThemingProvider) {
    'ngInject';

    const darkBluePalette = {
        '50': 'e9ecee',
        '100': 'c8cfd5',
        '200': 'a3afb9',
        '300': '7e8f9d',
        '400': '637788',
        '500': '475f73',
        '600': '40576b',
        '700': '374d60',
        '800': '2f4356',
        '900': '203243',
        'A100': '88c3ff',
        'A200': '55aaff',
        'A400': '2290ff',
        'A700': '0884ff',
        'contrastDefaultColor': 'light',
        'contrastDarkColors': [
            '50',
            '100',
            '200',
            '300',
            'A100',
            'A200'
        ],
        'contrastLightColors': [
            '400',
            '500',
            '600',
            '700',
            '800',
            '900',
            'A400',
            'A700'
        ]
    };
    $mdThemingProvider.definePalette('darkBlue', darkBluePalette);
    $mdThemingProvider.theme('default')
        .primaryPalette('orange')
        .backgroundPalette('darkBlue');

}

export { routing, theme }