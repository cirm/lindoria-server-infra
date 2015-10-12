(function () {
  'use strict';

  module.exports = {
    angular: {
      //https://github.com/johnpapa/angular-styleguide#js-hint
      "bitwise"      : true,
      "camelcase"    : true,
      "curly"        : true,
      "eqeqeq"       : true,
      "es3"          : false,
      "forin"        : true,
      "freeze"       : true,
      "immed"        : true,
      "indent"       : 4,
      "latedef"      : "nofunc",
      "newcap"       : true,
      "noarg"        : true,
      "noempty"      : true,
      "nonbsp"       : true,
      "nonew"        : true,
      "plusplus"     : false,
      "quotmark"     : "single",
      "undef"        : true,
      "unused"       : false,
      "strict"       : false,
      "maxparams"    : 10,
      "maxdepth"     : 5,
      "maxstatements": 40,
      "maxcomplexity": 8,
      "maxlen"       : 120,

      "asi"         : false,
      "boss"        : false,
      "debug"       : false,
      "eqnull"      : true,
      "esnext"      : false,
      "evil"        : false,
      "expr"        : false,
      "funcscope"   : false,
      "globalstrict": false,
      "iterator"    : false,
      "lastsemic"   : false,
      "laxbreak"    : false,
      "laxcomma"    : false,
      "loopfunc"    : true,
      "maxerr"      : false,
      "moz"         : false,
      "multistr"    : false,
      "notypeof"    : false,
      "proto"       : false,
      "scripturl"   : false,
      "shadow"      : false,
      "sub"         : true,
      "supernew"    : false,
      "validthis"   : false,
      "noyield"     : false,

      "browser": true,
      "node"   : true,

      "globals": {
        "angular": false,
        "$"      : false
      }

    },
    nodejs: {
      // https://github.com/felixge/node-style-guide/blob/master/.jshintrc
      "camelcase"    : true,
      "curly"        : true,
      "eqeqeq"       : true,
      "freeze"       : true,
      "indent"       : 2,
      "newcap"       : true,
      "quotmark"     : "single",
      "maxdepth"     : 3,
      "maxstatements": 15,
      "maxlen"       : 80,
      "eqnull"       : true,
      "funcscope"    : true,
      "node"         : true
    }
  };
})();