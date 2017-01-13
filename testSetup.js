"use strict";

import jsdom from "jsdom";

global.document = jsdom.jsdom("<html><body></body></html>");
global.window = document.defaultView;
global.navigator = window.navigator;

function noop() {
  return {};
}

require.extensions[".css"] = noop;
require.extensions[".svg"] = noop;
