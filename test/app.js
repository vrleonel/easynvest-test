(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

module.exports = function (config, error) {
	//console.log('controller carregada');
	var utils = require('./../utils/utils.js')(config),
	    model = require('./../model/model.js')(utils.event, utils.dom, utils.ajax, error),
	    view = require('./../view/view.js')(utils.event, utils.dom, error),
	    eventHandler = utils.event;

	eventHandler.addEventListener("LoadItems", readItems);

	view.start();

	function readItems(response) {
		model.populate(response);
	}

	function renderView(response) {
		view.render(response);
	}
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRyb2xsZXIuanMiXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsImNvbmZpZyIsImVycm9yIiwidXRpbHMiLCJyZXF1aXJlIiwibW9kZWwiLCJldmVudCIsImRvbSIsImFqYXgiLCJ2aWV3IiwiZXZlbnRIYW5kbGVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlYWRJdGVtcyIsInN0YXJ0IiwicmVzcG9uc2UiLCJwb3B1bGF0ZSIsInJlbmRlclZpZXciLCJyZW5kZXIiXSwibWFwcGluZ3MiOiI7O0FBQUFBLE9BQU9DLE9BQVAsR0FBaUIsVUFBU0MsTUFBVCxFQUFpQkMsS0FBakIsRUFBdUI7QUFDdEM7QUFDRCxLQUFJQyxRQUFRQyxRQUFRLHFCQUFSLEVBQStCSCxNQUEvQixDQUFaO0FBQUEsS0FDQ0ksUUFBUUQsUUFBUSxxQkFBUixFQUErQkQsTUFBTUcsS0FBckMsRUFBNENILE1BQU1JLEdBQWxELEVBQXVESixNQUFNSyxJQUE3RCxFQUFtRU4sS0FBbkUsQ0FEVDtBQUFBLEtBRUNPLE9BQU9MLFFBQVEsbUJBQVIsRUFBNkJELE1BQU1HLEtBQW5DLEVBQTBDSCxNQUFNSSxHQUFoRCxFQUFxREwsS0FBckQsQ0FGUjtBQUFBLEtBR0NRLGVBQWVQLE1BQU1HLEtBSHRCOztBQUtBSSxjQUFhQyxnQkFBYixDQUE4QixXQUE5QixFQUEyQ0MsU0FBM0M7O0FBSUFILE1BQUtJLEtBQUw7O0FBRUMsVUFBU0QsU0FBVCxDQUFvQkUsUUFBcEIsRUFBOEI7QUFDNUJULFFBQU1VLFFBQU4sQ0FBZUQsUUFBZjtBQUNEOztBQUVGLFVBQVNFLFVBQVQsQ0FBb0JGLFFBQXBCLEVBQTZCO0FBQzVCTCxPQUFLUSxNQUFMLENBQVlILFFBQVo7QUFDQTtBQUVELENBckJEIiwiZmlsZSI6ImNvbnRyb2xsZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGNvbmZpZywgZXJyb3Ipe1xuICAvL2NvbnNvbGUubG9nKCdjb250cm9sbGVyIGNhcnJlZ2FkYScpO1xuXHR2YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzL3V0aWxzLmpzJykoY29uZmlnKSxcblx0XHRtb2RlbCA9IHJlcXVpcmUoJy4vLi4vbW9kZWwvbW9kZWwuanMnKSh1dGlscy5ldmVudCwgdXRpbHMuZG9tLCB1dGlscy5hamF4LCBlcnJvciksXG5cdFx0dmlldyA9IHJlcXVpcmUoJy4vLi4vdmlldy92aWV3LmpzJykodXRpbHMuZXZlbnQsIHV0aWxzLmRvbSwgZXJyb3IpLFxuXHRcdGV2ZW50SGFuZGxlciA9IHV0aWxzLmV2ZW50O1xuXG5cdGV2ZW50SGFuZGxlci5hZGRFdmVudExpc3RlbmVyKFwiTG9hZEl0ZW1zXCIsIHJlYWRJdGVtcyk7XG5cblxuXG5cdHZpZXcuc3RhcnQoKTtcblxuICBmdW5jdGlvbiByZWFkSXRlbXMgKHJlc3BvbnNlKSB7XG4gICAgbW9kZWwucG9wdWxhdGUocmVzcG9uc2UpO1xuICB9XG5cblx0ZnVuY3Rpb24gcmVuZGVyVmlldyhyZXNwb25zZSl7XG5cdFx0dmlldy5yZW5kZXIocmVzcG9uc2UpO1xuXHR9XG5cbn1cbiJdfQ==
},{"./../model/model.js":3,"./../utils/utils.js":5,"./../view/view.js":6}],2:[function(require,module,exports){
'use strict';

;(function () {
  window.onload = start;

  function start() {
    var config = {
      apiUrl: "../src/static/api/mock.json",
      cross: false
    },
        error = require('./utils/error.js')();

    if (config.apiUrl.length) require('./controller/controller.js')(config, error);else error.showError("apiurl");
  }
})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZha2VfZjNkZWNiNzIuanMiXSwibmFtZXMiOlsid2luZG93Iiwib25sb2FkIiwic3RhcnQiLCJjb25maWciLCJhcGlVcmwiLCJjcm9zcyIsImVycm9yIiwicmVxdWlyZSIsImxlbmd0aCIsInNob3dFcnJvciJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxDQUFDLENBQUMsWUFBVTtBQUNWQSxTQUFPQyxNQUFQLEdBQWdCQyxLQUFoQjs7QUFFQSxXQUFTQSxLQUFULEdBQWdCO0FBQ2QsUUFBSUMsU0FBVztBQUNUQyxjQUFTLDZCQURBO0FBRVRDLGFBQVE7QUFGQyxLQUFmO0FBQUEsUUFJSUMsUUFBUUMsUUFBUSxrQkFBUixHQUpaOztBQU9BLFFBQUdKLE9BQU9DLE1BQVAsQ0FBY0ksTUFBakIsRUFDRUQsUUFBUSw0QkFBUixFQUFzQ0osTUFBdEMsRUFBOENHLEtBQTlDLEVBREYsS0FHRUEsTUFBTUcsU0FBTixDQUFnQixRQUFoQjtBQUNKO0FBQ0QsQ0FoQkEiLCJmaWxlIjoiZmFrZV9mM2RlY2I3Mi5qcyIsInNvdXJjZXNDb250ZW50IjpbIjsoZnVuY3Rpb24oKXtcbiAgd2luZG93Lm9ubG9hZCA9IHN0YXJ0O1xuXG4gIGZ1bmN0aW9uIHN0YXJ0KCl7XG4gICAgdmFyIGNvbmZpZyAgPSAge1xuICAgICAgICAgIGFwaVVybCA6IFwiLi4vc3JjL3N0YXRpYy9hcGkvbW9jay5qc29uXCIsXG4gICAgICAgICAgY3Jvc3MgOiBmYWxzZVxuICAgICAgICB9LFxuICAgICAgICBlcnJvciA9IHJlcXVpcmUoJy4vdXRpbHMvZXJyb3IuanMnKSgpO1xuXG5cbiAgICBpZihjb25maWcuYXBpVXJsLmxlbmd0aClcbiAgICAgIHJlcXVpcmUoJy4vY29udHJvbGxlci9jb250cm9sbGVyLmpzJykoY29uZmlnLCBlcnJvcik7XG4gICAgZWxzZVxuICAgICAgZXJyb3Iuc2hvd0Vycm9yKFwiYXBpdXJsXCIpO1xuXHR9XG59KSgpXG4iXX0=
},{"./controller/controller.js":1,"./utils/error.js":4}],3:[function(require,module,exports){
"use strict";

module.exports = function (event, DOMUtils, ajax, error) {
  var DOMToArray = DOMUtils.DOMToArray;

  var start = function start(response) {};

  var createInput = function createInput(key, obj) {
    console.log(obj[key]);

    var input = obj.map(function (item) {
      return "<input class=" + item["class"] + ">";
    });

    return input;
  };

  var populate = function populate(param) {
    ajax.fetchItems(function (elem) {
      var dom = "";
      var obj = elem.fields;
      var items = Object.keys(obj).map(function (key) {
        return obj[key];
        console.log(createInput(key, obj[key]));
      });
      console.log("items", items);
    });
  };

  return {
    start: start,
    populate: populate
  };
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGVsLmpzIl0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJldmVudCIsIkRPTVV0aWxzIiwiYWpheCIsImVycm9yIiwiRE9NVG9BcnJheSIsInN0YXJ0IiwicmVzcG9uc2UiLCJjcmVhdGVJbnB1dCIsImtleSIsIm9iaiIsImNvbnNvbGUiLCJsb2ciLCJpbnB1dCIsIm1hcCIsIml0ZW0iLCJwb3B1bGF0ZSIsInBhcmFtIiwiZmV0Y2hJdGVtcyIsImVsZW0iLCJkb20iLCJmaWVsZHMiLCJpdGVtcyIsIk9iamVjdCIsImtleXMiXSwibWFwcGluZ3MiOiI7O0FBQUFBLE9BQU9DLE9BQVAsR0FBaUIsVUFBU0MsS0FBVCxFQUFnQkMsUUFBaEIsRUFBMEJDLElBQTFCLEVBQWdDQyxLQUFoQyxFQUFzQztBQUNyRCxNQUFNQyxhQUFhSCxTQUFTRyxVQUE1Qjs7QUFFQSxNQUFJQyxRQUFRLFNBQVJBLEtBQVEsQ0FBU0MsUUFBVCxFQUFrQixDQUM3QixDQUREOztBQUlBLE1BQUlDLGNBQWMsU0FBZEEsV0FBYyxDQUFTQyxHQUFULEVBQWNDLEdBQWQsRUFBbUI7QUFDbkNDLFlBQVFDLEdBQVIsQ0FBWUYsSUFBSUQsR0FBSixDQUFaOztBQUVBLFFBQUlJLFFBQVFILElBQUlJLEdBQUosQ0FBUyxVQUFDQyxJQUFELEVBQVU7QUFDN0IsK0JBQXVCQSxLQUFLLE9BQUwsQ0FBdkI7QUFFRCxLQUhXLENBQVo7O0FBS0EsV0FBT0YsS0FBUDtBQUVELEdBVkQ7O0FBWUEsTUFBSUcsV0FBVyxTQUFYQSxRQUFXLENBQVNDLEtBQVQsRUFBZ0I7QUFDN0JkLFNBQUtlLFVBQUwsQ0FBaUIsVUFBQ0MsSUFBRCxFQUFVO0FBQ3pCLFVBQUlDLE1BQU0sRUFBVjtBQUNBLFVBQUlWLE1BQU1TLEtBQUtFLE1BQWY7QUFDQSxVQUFJQyxRQUFRQyxPQUFPQyxJQUFQLENBQVlkLEdBQVosRUFBaUJJLEdBQWpCLENBQXNCLFVBQUNMLEdBQUQsRUFBUztBQUN6QyxlQUFPQyxJQUFJRCxHQUFKLENBQVA7QUFDQUUsZ0JBQVFDLEdBQVIsQ0FBWUosWUFBWUMsR0FBWixFQUFpQkMsSUFBSUQsR0FBSixDQUFqQixDQUFaO0FBQ0QsT0FIVyxDQUFaO0FBSUFFLGNBQVFDLEdBQVIsQ0FBWSxPQUFaLEVBQXFCVSxLQUFyQjtBQUlELEtBWEQ7QUFZRCxHQWJEOztBQWlCQSxTQUFPO0FBQ0xoQixXQUFPQSxLQURGO0FBRUxVLGNBQVdBO0FBRk4sR0FBUDtBQUlELENBeENEIiwiZmlsZSI6Im1vZGVsLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihldmVudCwgRE9NVXRpbHMsIGFqYXgsIGVycm9yKXtcbiAgY29uc3QgRE9NVG9BcnJheSA9IERPTVV0aWxzLkRPTVRvQXJyYXk7XG5cbiAgdmFyIHN0YXJ0ID0gZnVuY3Rpb24ocmVzcG9uc2Upe1xuICB9XG5cblxuICB2YXIgY3JlYXRlSW5wdXQgPSBmdW5jdGlvbihrZXksIG9iaikge1xuICAgIGNvbnNvbGUubG9nKG9ialtrZXldKTtcblxuICAgIHZhciBpbnB1dCA9IG9iai5tYXAoIChpdGVtKSA9PiB7XG4gICAgICByZXR1cm4gYDxpbnB1dCBjbGFzcz0ke2l0ZW1bXCJjbGFzc1wiXX0+YDtcblxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGlucHV0O1xuXG4gIH1cblxuICB2YXIgcG9wdWxhdGUgPSBmdW5jdGlvbihwYXJhbSkge1xuICAgIGFqYXguZmV0Y2hJdGVtcyggKGVsZW0pID0+IHtcbiAgICAgIGxldCBkb20gPSBcIlwiO1xuICAgICAgbGV0IG9iaiA9IGVsZW0uZmllbGRzO1xuICAgICAgbGV0IGl0ZW1zID0gT2JqZWN0LmtleXMob2JqKS5tYXAoIChrZXkpID0+IHtcbiAgICAgICAgcmV0dXJuIG9ialtrZXldO1xuICAgICAgICBjb25zb2xlLmxvZyhjcmVhdGVJbnB1dChrZXksIG9ialtrZXldKSk7XG4gICAgICB9KTtcbiAgICAgIGNvbnNvbGUubG9nKFwiaXRlbXNcIiwgaXRlbXMpO1xuXG5cblxuICAgIH0pO1xuICB9XG5cblxuXG4gIHJldHVybiB7XG4gICAgc3RhcnQ6IHN0YXJ0LFxuICAgIHBvcHVsYXRlIDogcG9wdWxhdGVcbiAgfVxufVxuIl19
},{}],4:[function(require,module,exports){
"use strict";

module.exports = function () {

  var pluginName = "Easynvest",
      errorTypes = {
    "erro": " Erro 1 ",
    "error2": "Erro 2"
  };

  /**
  * @module error
  * @method showError
  * @desc Show a customized warning
  * @param {string=} type - a white list of error from obj errorTypes
  * @param {string=} msg - a customized error message
  **/
  var showError = function showError(type, msg) {
    console.warn("[" + pluginName + "]", errorTypes[type] || errorTypes["default"], msg || "");
  };

  return {
    showError: showError
  };
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVycm9yLmpzIl0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJwbHVnaW5OYW1lIiwiZXJyb3JUeXBlcyIsInNob3dFcnJvciIsInR5cGUiLCJtc2ciLCJjb25zb2xlIiwid2FybiJdLCJtYXBwaW5ncyI6Ijs7QUFBQUEsT0FBT0MsT0FBUCxHQUFpQixZQUFVOztBQUV6QixNQUFJQyxhQUFhLFdBQWpCO0FBQUEsTUFDRUMsYUFBYTtBQUNYLFlBQWEsVUFERjtBQUVYLGNBQWE7QUFGRixHQURmOztBQU1BOzs7Ozs7O0FBT0EsTUFBSUMsWUFBWSxTQUFaQSxTQUFZLENBQVNDLElBQVQsRUFBZUMsR0FBZixFQUFvQjtBQUNsQ0MsWUFBUUMsSUFBUixDQUNFLE1BQU1OLFVBQU4sR0FBbUIsR0FEckIsRUFFRUMsV0FBV0UsSUFBWCxLQUFvQkYsV0FBVyxTQUFYLENBRnRCLEVBR0VHLE9BQU8sRUFIVDtBQUlELEdBTEQ7O0FBT0QsU0FBTztBQUNKRixlQUFZQTtBQURSLEdBQVA7QUFHQSxDQXpCRCIsImZpbGUiOiJlcnJvci5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKXtcblxuICB2YXIgcGx1Z2luTmFtZSA9IFwiRWFzeW52ZXN0XCIsXG4gICAgZXJyb3JUeXBlcyA9IHtcbiAgICAgIFwiZXJyb1wiICAgICA6IFwiIEVycm8gMSBcIixcbiAgICAgIFwiZXJyb3IyXCIgICA6IFwiRXJybyAyXCJcbiAgICB9O1xuXG4gIC8qKlxuICAqIEBtb2R1bGUgZXJyb3JcbiAgKiBAbWV0aG9kIHNob3dFcnJvclxuICAqIEBkZXNjIFNob3cgYSBjdXN0b21pemVkIHdhcm5pbmdcbiAgKiBAcGFyYW0ge3N0cmluZz19IHR5cGUgLSBhIHdoaXRlIGxpc3Qgb2YgZXJyb3IgZnJvbSBvYmogZXJyb3JUeXBlc1xuICAqIEBwYXJhbSB7c3RyaW5nPX0gbXNnIC0gYSBjdXN0b21pemVkIGVycm9yIG1lc3NhZ2VcbiAgKiovXG4gIHZhciBzaG93RXJyb3IgPSBmdW5jdGlvbih0eXBlLCBtc2cpIHtcbiAgICBjb25zb2xlLndhcm4oXG4gICAgICBcIltcIiArIHBsdWdpbk5hbWUgKyBcIl1cIixcbiAgICAgIGVycm9yVHlwZXNbdHlwZV0gfHwgZXJyb3JUeXBlc1tcImRlZmF1bHRcIl0sXG4gICAgICBtc2cgfHwgXCJcIiApO1xuICB9O1xuXG5cdHJldHVybiB7XG4gICAgc2hvd0Vycm9yIDogc2hvd0Vycm9yXG5cdH1cbn1cbiJdfQ==
},{}],5:[function(require,module,exports){
"use strict";

module.exports = function (config) {

  var listeners = {},
      APIURL = config.apiUrl,
      // http://docn201.ecom.carrefour:8089/content/v1/products/list
  CROSSDOMAIN = config.cross == "true",
      // isCross, true or false
  token = config.header || {}; // Object {name: value}

  var addEventListener = function addEventListener(strEvent, fn) {
    listeners[strEvent] = fn;
  };

  var removeEventListener = function removeEventListener(strEvent) {
    listeners[strEvent] = null;
  };

  var dispatchEvent = function dispatchEvent(strEvent, param) {
    listeners[strEvent](param);
  };

  var DOMToArray = function DOMToArray(DOM) {
    return [].slice.call(DOM);
  };

  var AJAXRequest = function AJAXRequest(url, isCrossDomain, callback) {
    if (!isCrossDomain) {
      var xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function () {

        if (xhr.readyState == 4 && xhr.status == 200) callback.call(this, xhr.response);
      };

      xhr.open("GET", url);
      xhr.responseType = "json";
      xhr.send();
    } else {
      var api = document.createElement('script');
      var time = new Date().getTime();
      api.setAttribute('src', url + '&callback=funcJsonP');
      api.setAttribute('data-type', 'ajax');
      window['funcJsonP'] = function (e) {
        var node = document.querySelectorAll('script[data-type=ajax]')[0];
        document.querySelectorAll('head')[0].removeChild(node);
        callback.call(this, e);
        window['funcJsonP'] = null;
      };
      document.querySelectorAll('head')[0].appendChild(api);
    }
  };

  var fetchItems = function fetchItems(callback) {
    var query = APIURL;
    AJAXRequest(query, CROSSDOMAIN, callback);
  };

  return {
    event: {
      addEventListener: addEventListener,
      removeEventListener: removeEventListener,
      dispatchEvent: dispatchEvent
    },
    ajax: {
      fetchItems: fetchItems
    },
    dom: {
      DOMToArray: DOMToArray
    }
  };
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWxzLmpzIl0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJjb25maWciLCJsaXN0ZW5lcnMiLCJBUElVUkwiLCJhcGlVcmwiLCJDUk9TU0RPTUFJTiIsImNyb3NzIiwidG9rZW4iLCJoZWFkZXIiLCJhZGRFdmVudExpc3RlbmVyIiwic3RyRXZlbnQiLCJmbiIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJkaXNwYXRjaEV2ZW50IiwicGFyYW0iLCJET01Ub0FycmF5IiwiRE9NIiwic2xpY2UiLCJjYWxsIiwiQUpBWFJlcXVlc3QiLCJ1cmwiLCJpc0Nyb3NzRG9tYWluIiwiY2FsbGJhY2siLCJ4aHIiLCJYTUxIdHRwUmVxdWVzdCIsIm9ucmVhZHlzdGF0ZWNoYW5nZSIsInJlYWR5U3RhdGUiLCJzdGF0dXMiLCJyZXNwb25zZSIsIm9wZW4iLCJyZXNwb25zZVR5cGUiLCJzZW5kIiwiYXBpIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwidGltZSIsIkRhdGUiLCJnZXRUaW1lIiwic2V0QXR0cmlidXRlIiwid2luZG93IiwiZSIsIm5vZGUiLCJxdWVyeVNlbGVjdG9yQWxsIiwicmVtb3ZlQ2hpbGQiLCJhcHBlbmRDaGlsZCIsImZldGNoSXRlbXMiLCJxdWVyeSIsImV2ZW50IiwiYWpheCIsImRvbSJdLCJtYXBwaW5ncyI6Ijs7QUFBQUEsT0FBT0MsT0FBUCxHQUFpQixVQUFTQyxNQUFULEVBQWdCOztBQUUvQixNQUFJQyxZQUFZLEVBQWhCO0FBQUEsTUFDRUMsU0FBY0YsT0FBT0csTUFEdkI7QUFBQSxNQUNnQztBQUM5QkMsZ0JBQWNKLE9BQU9LLEtBQVAsSUFBZ0IsTUFGaEM7QUFBQSxNQUV5QztBQUN2Q0MsVUFBY04sT0FBT08sTUFBUCxJQUFpQixFQUhqQyxDQUYrQixDQUtNOztBQUVyQyxNQUFJQyxtQkFBbUIsU0FBbkJBLGdCQUFtQixDQUFTQyxRQUFULEVBQW1CQyxFQUFuQixFQUFzQjtBQUMzQ1QsY0FBVVEsUUFBVixJQUFzQkMsRUFBdEI7QUFDRCxHQUZEOztBQUlBLE1BQUlDLHNCQUFzQixTQUF0QkEsbUJBQXNCLENBQVNGLFFBQVQsRUFBa0I7QUFDMUNSLGNBQVVRLFFBQVYsSUFBc0IsSUFBdEI7QUFDRCxHQUZEOztBQUlBLE1BQUlHLGdCQUFnQixTQUFoQkEsYUFBZ0IsQ0FBU0gsUUFBVCxFQUFtQkksS0FBbkIsRUFBeUI7QUFDM0NaLGNBQVVRLFFBQVYsRUFBb0JJLEtBQXBCO0FBQ0QsR0FGRDs7QUFJQSxNQUFJQyxhQUFhLFNBQWJBLFVBQWEsQ0FBU0MsR0FBVCxFQUFhO0FBQzVCLFdBQU8sR0FBR0MsS0FBSCxDQUFTQyxJQUFULENBQWNGLEdBQWQsQ0FBUDtBQUNELEdBRkQ7O0FBSUEsTUFBSUcsY0FBYyxTQUFkQSxXQUFjLENBQVNDLEdBQVQsRUFBY0MsYUFBZCxFQUE2QkMsUUFBN0IsRUFBdUM7QUFDdkQsUUFBRyxDQUFDRCxhQUFKLEVBQW1CO0FBQ2pCLFVBQUlFLE1BQU0sSUFBSUMsY0FBSixFQUFWO0FBQ0FELFVBQUlFLGtCQUFKLEdBQXlCLFlBQVU7O0FBRW5DLFlBQUdGLElBQUlHLFVBQUosSUFBa0IsQ0FBbEIsSUFBdUJILElBQUlJLE1BQUosSUFBYyxHQUF4QyxFQUNFTCxTQUFTSixJQUFULENBQWMsSUFBZCxFQUFvQkssSUFBSUssUUFBeEI7QUFDRCxPQUpEOztBQU1BTCxVQUFJTSxJQUFKLENBQVMsS0FBVCxFQUFnQlQsR0FBaEI7QUFDQUcsVUFBSU8sWUFBSixHQUFtQixNQUFuQjtBQUNBUCxVQUFJUSxJQUFKO0FBRUQsS0FaRCxNQVlPO0FBQ0wsVUFBSUMsTUFBTUMsU0FBU0MsYUFBVCxDQUF1QixRQUF2QixDQUFWO0FBQ0EsVUFBSUMsT0FBTyxJQUFJQyxJQUFKLEdBQVdDLE9BQVgsRUFBWDtBQUNBTCxVQUFJTSxZQUFKLENBQWlCLEtBQWpCLEVBQXVCbEIsTUFBSyxxQkFBNUI7QUFDQVksVUFBSU0sWUFBSixDQUFpQixXQUFqQixFQUE4QixNQUE5QjtBQUNBQyxhQUFPLFdBQVAsSUFBc0IsVUFBU0MsQ0FBVCxFQUFXO0FBQy9CLFlBQUlDLE9BQU9SLFNBQVNTLGdCQUFULENBQTBCLHdCQUExQixFQUFvRCxDQUFwRCxDQUFYO0FBQ0FULGlCQUFTUyxnQkFBVCxDQUEwQixNQUExQixFQUFrQyxDQUFsQyxFQUFxQ0MsV0FBckMsQ0FBaURGLElBQWpEO0FBQ0FuQixpQkFBU0osSUFBVCxDQUFjLElBQWQsRUFBb0JzQixDQUFwQjtBQUNBRCxlQUFPLFdBQVAsSUFBc0IsSUFBdEI7QUFDRCxPQUxEO0FBTUFOLGVBQVNTLGdCQUFULENBQTBCLE1BQTFCLEVBQWtDLENBQWxDLEVBQXFDRSxXQUFyQyxDQUFpRFosR0FBakQ7QUFDRDtBQUNGLEdBMUJEOztBQTRCQSxNQUFJYSxhQUFhLFNBQWJBLFVBQWEsQ0FBU3ZCLFFBQVQsRUFBa0I7QUFDakMsUUFBSXdCLFFBQVEzQyxNQUFaO0FBQ0FnQixnQkFBWTJCLEtBQVosRUFBbUJ6QyxXQUFuQixFQUFnQ2lCLFFBQWhDO0FBQ0QsR0FIRDs7QUFNQSxTQUFPO0FBQ0x5QixXQUFPO0FBQ0x0Qyx3QkFBa0JBLGdCQURiO0FBRUxHLDJCQUFxQkEsbUJBRmhCO0FBR0xDLHFCQUFlQTtBQUhWLEtBREY7QUFNTG1DLFVBQU07QUFDSkgsa0JBQVlBO0FBRFIsS0FORDtBQVNMSSxTQUFLO0FBQ0hsQyxrQkFBWUE7QUFEVDtBQVRBLEdBQVA7QUFhRCxDQXRFRCIsImZpbGUiOiJ1dGlscy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oY29uZmlnKXtcblxuICB2YXIgbGlzdGVuZXJzID0ge30sXG4gICAgQVBJVVJMICAgICAgPSBjb25maWcuYXBpVXJsLCAgLy8gaHR0cDovL2RvY24yMDEuZWNvbS5jYXJyZWZvdXI6ODA4OS9jb250ZW50L3YxL3Byb2R1Y3RzL2xpc3RcbiAgICBDUk9TU0RPTUFJTiA9IGNvbmZpZy5jcm9zcyA9PSBcInRydWVcIiwgIC8vIGlzQ3Jvc3MsIHRydWUgb3IgZmFsc2VcbiAgICB0b2tlbiAgICAgICA9IGNvbmZpZy5oZWFkZXIgfHwge307IC8vIE9iamVjdCB7bmFtZTogdmFsdWV9XG5cbiAgdmFyIGFkZEV2ZW50TGlzdGVuZXIgPSBmdW5jdGlvbihzdHJFdmVudCwgZm4pe1xuICAgIGxpc3RlbmVyc1tzdHJFdmVudF0gPSBmbjtcbiAgfVxuXG4gIHZhciByZW1vdmVFdmVudExpc3RlbmVyID0gZnVuY3Rpb24oc3RyRXZlbnQpe1xuICAgIGxpc3RlbmVyc1tzdHJFdmVudF0gPSBudWxsO1xuICB9XG5cbiAgdmFyIGRpc3BhdGNoRXZlbnQgPSBmdW5jdGlvbihzdHJFdmVudCwgcGFyYW0pe1xuICAgIGxpc3RlbmVyc1tzdHJFdmVudF0ocGFyYW0pO1xuICB9XG5cbiAgdmFyIERPTVRvQXJyYXkgPSBmdW5jdGlvbihET00pe1xuICAgIHJldHVybiBbXS5zbGljZS5jYWxsKERPTSk7XG4gIH1cblxuICB2YXIgQUpBWFJlcXVlc3QgPSBmdW5jdGlvbih1cmwsIGlzQ3Jvc3NEb21haW4sIGNhbGxiYWNrKSB7XG4gICAgaWYoIWlzQ3Jvc3NEb21haW4pIHtcbiAgICAgIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbigpe1xuXG4gICAgICBpZih4aHIucmVhZHlTdGF0ZSA9PSA0ICYmIHhoci5zdGF0dXMgPT0gMjAwKVxuICAgICAgICBjYWxsYmFjay5jYWxsKHRoaXMsIHhoci5yZXNwb25zZSk7XG4gICAgICB9XG5cbiAgICAgIHhoci5vcGVuKFwiR0VUXCIsIHVybCk7XG4gICAgICB4aHIucmVzcG9uc2VUeXBlID0gXCJqc29uXCI7XG4gICAgICB4aHIuc2VuZCgpO1xuXG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBhcGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICAgIHZhciB0aW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICBhcGkuc2V0QXR0cmlidXRlKCdzcmMnLHVybCArJyZjYWxsYmFjaz1mdW5jSnNvblAnKTtcbiAgICAgIGFwaS5zZXRBdHRyaWJ1dGUoJ2RhdGEtdHlwZScsICdhamF4Jyk7XG4gICAgICB3aW5kb3dbJ2Z1bmNKc29uUCddID0gZnVuY3Rpb24oZSl7XG4gICAgICAgIHZhciBub2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnc2NyaXB0W2RhdGEtdHlwZT1hamF4XScpWzBdO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdoZWFkJylbMF0ucmVtb3ZlQ2hpbGQobm9kZSk7XG4gICAgICAgIGNhbGxiYWNrLmNhbGwodGhpcywgZSk7XG4gICAgICAgIHdpbmRvd1snZnVuY0pzb25QJ10gPSBudWxsO1xuICAgICAgfVxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaGVhZCcpWzBdLmFwcGVuZENoaWxkKGFwaSk7XG4gICAgfVxuICB9XG5cbiAgdmFyIGZldGNoSXRlbXMgPSBmdW5jdGlvbihjYWxsYmFjayl7XG4gICAgdmFyIHF1ZXJ5ID0gQVBJVVJMO1xuICAgIEFKQVhSZXF1ZXN0KHF1ZXJ5LCBDUk9TU0RPTUFJTiwgY2FsbGJhY2spO1xuICB9XG5cblxuICByZXR1cm4ge1xuICAgIGV2ZW50OiB7XG4gICAgICBhZGRFdmVudExpc3RlbmVyOiBhZGRFdmVudExpc3RlbmVyLFxuICAgICAgcmVtb3ZlRXZlbnRMaXN0ZW5lcjogcmVtb3ZlRXZlbnRMaXN0ZW5lcixcbiAgICAgIGRpc3BhdGNoRXZlbnQ6IGRpc3BhdGNoRXZlbnRcbiAgICB9LFxuICAgIGFqYXg6IHtcbiAgICAgIGZldGNoSXRlbXM6IGZldGNoSXRlbXNcbiAgICB9LFxuICAgIGRvbToge1xuICAgICAgRE9NVG9BcnJheTogRE9NVG9BcnJheSxcbiAgICB9XG4gIH1cbn1cbiJdfQ==
},{}],6:[function(require,module,exports){
"use strict";

module.exports = function (event, DOMUtils, error) {
  //console.log('view carregada');
  var DOMToArray = DOMUtils.DOMToArray;

  var start = function start() {
    console.log("Teste");
    event.dispatchEvent("LoadItems", { item: 1 });
  };

  var render = function render() {};

  return {
    start: start

  };
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXcuanMiXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsImV2ZW50IiwiRE9NVXRpbHMiLCJlcnJvciIsIkRPTVRvQXJyYXkiLCJzdGFydCIsImNvbnNvbGUiLCJsb2ciLCJkaXNwYXRjaEV2ZW50IiwiaXRlbSIsInJlbmRlciJdLCJtYXBwaW5ncyI6Ijs7QUFBQUEsT0FBT0MsT0FBUCxHQUFpQixVQUFTQyxLQUFULEVBQWdCQyxRQUFoQixFQUEwQkMsS0FBMUIsRUFBZ0M7QUFDL0M7QUFDQSxNQUFJQyxhQUFhRixTQUFTRSxVQUExQjs7QUFHQSxNQUFJQyxRQUFRLFNBQVJBLEtBQVEsR0FBVTtBQUNwQkMsWUFBUUMsR0FBUixDQUFZLE9BQVo7QUFDQU4sVUFBTU8sYUFBTixDQUFvQixXQUFwQixFQUFpQyxFQUFDQyxNQUFNLENBQVAsRUFBakM7QUFDRCxHQUhEOztBQU9BLE1BQUlDLFNBQVMsU0FBVEEsTUFBUyxHQUFZLENBRXhCLENBRkQ7O0FBTUEsU0FBTztBQUNMTCxXQUFRQTs7QUFESCxHQUFQO0FBSUQsQ0F0QkQiLCJmaWxlIjoidmlldy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZXZlbnQsIERPTVV0aWxzLCBlcnJvcil7XG4gIC8vY29uc29sZS5sb2coJ3ZpZXcgY2FycmVnYWRhJyk7XG4gIHZhciBET01Ub0FycmF5ID0gRE9NVXRpbHMuRE9NVG9BcnJheTtcblxuXG4gIHZhciBzdGFydCA9IGZ1bmN0aW9uKCl7XG4gICAgY29uc29sZS5sb2coXCJUZXN0ZVwiKTtcbiAgICBldmVudC5kaXNwYXRjaEV2ZW50KFwiTG9hZEl0ZW1zXCIsIHtpdGVtOiAxfSApO1xuICB9XG5cblxuXG4gIHZhciByZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG5cbiAgfVxuXG5cblxuICByZXR1cm4ge1xuICAgIHN0YXJ0IDogc3RhcnRcblxuICB9XG59XG4iXX0=
},{}]},{},[2])