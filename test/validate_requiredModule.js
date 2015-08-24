var util = require("./util-lint");

exports['test required module validation'] = function() {
  
  // Unknown module 'XXX'
  util.assertLint("require(['XXX'], function(xxx) {});", {
    messages : [{"message":"Unknown module 'XXX'",
                 "from":9,
                 "to":14,
                 "severity":"error",
                 "file":"test1.js"}
               ]
  });

  util.assertLint("require(['XXX'], function(xxx) {});", {
    messages : [{"message":"Unknown module 'XXX'",
                 "from":9,
                 "to":14,
                 "severity":"error",
                 "file":"test1.js"}
               ]
  });
  
  // known module
  var server = util.createServer();
  server.addFile("a.js", "define(function() {return 1;})")
  util.assertLint("require(['a'], function(a) {});", {
          messages : []
  }, server);
    
}

if (module == require.main) require("test").run(exports);