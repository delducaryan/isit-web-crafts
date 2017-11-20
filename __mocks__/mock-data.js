const getData = (url) => {
    switch (url) {
        case '/api/foo':
            return {
                foo: 'url-mock-bar',
                file: 'url-mock-api.js'
            };

        case '/makers/config':
            const configSummary = {
                'base-dir': '/home/bcuser/',
                'bootswatch': 'cosmo',
                'most-recent-date': '2017-08-14',
                'highlight': true,
                'siteDirs': [
                    'Documents/AllTest',
                    'Git/CloudNotes/Isit320'
                ],
                'destinationDirs': [
                    '/var/www/html/AllSite/',
                    '/home/charlie/Git/charliecalvert.github.io/books/CloudNotes/Isit320/'
                ],
                'destination-dirs-extra': [{
                    'base': '/var/www/html/',
                    'extra': ''
                }, {
                    'base': '/var/www/html/Assignments/',
                    'extra': 'Assignments'
                }]
            };
            return configSummary;
<<<<<<< HEAD
            
=======

>>>>>>> a46fb58b3e29564bd64aaf94c84436404d11f2dd
        default:
            return {};
    }
};

<<<<<<< HEAD
export default getData;
=======
export default getData;
>>>>>>> a46fb58b3e29564bd64aaf94c84436404d11f2dd
