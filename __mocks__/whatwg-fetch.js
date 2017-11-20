import getData from './mock-data';

'use strict';

const whatwgFetch = jest.genMockFromModule('whatwg-fetch');

const fetch = function(url) {

    const objectState = getData(url);

    const response = {};

    response.json = function() {
        return objectState;
    };

    return {
<<<<<<< HEAD
        then: function() {
=======
        then: function(func) {
>>>>>>> a46fb58b3e29564bd64aaf94c84436404d11f2dd
            return {
                then: function(func) {
                    func(objectState);
                    return {
                        catch: function(e) {
                        }
                    };
                }
            };
        }
    };
};

whatwgFetch.fetch = fetch;
window.fetch = fetch;
<<<<<<< HEAD
module.exports = whatwgFetch;
=======
module.exports = whatwgFetch;
>>>>>>> a46fb58b3e29564bd64aaf94c84436404d11f2dd
