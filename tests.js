var ikimap_search = require("./ikimap_search");

exports.test_ikimap_searchString_error = function(test){
    test.doesNotThrow(function() {ikimap_search.ikimap_searchString("rutas", function(data){})},Error,"Are you connected to the internet?");
    test.done();
};

