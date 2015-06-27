(function() {
var def = {
	"!name" : "Chrome Apps",
	"CreateWindowOptions" : {
      "!url" : "https://developer.chrome.com/apps/app_window#type-CreateWindowOptions",
			"id" : {
				"!doc" : "Id to identify the window. This will be used to remember the size and position of the window and restore that geometry when a window with the same id is later opened. If a window with a given id is created while another window with the same id already exists, the currently opened window will be focused instead of creating a new window.",
				"!type" : "string"
			},
			"hidden" : {
				"!doc" : "If true, the window will be created in a hidden state. Call show() on the window to show it once it has been created. Defaults to false.",
				"!type" : "bool"
			}
	},
	"chrome" : {
		"!doc" : "global variable",
		"app" : {
			"runtime" : {
				"onLaunched" : {
					"addListener" : "fn() -> ()"
				}
			},
			"window" : {
				"create" : {
          "!type" : "fn(url: string, options: +CreateWindowOptions, callback: fn())",
          "!url" : "https://developer.chrome.com/apps/app_window#method-create"
        }
			}
		}
	}
}
CodeMirror.tern.addDef(def);
})();