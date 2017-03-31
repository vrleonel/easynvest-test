(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

module.exports = function (config, error) {
	//console.log('controller carregada');
	var utils = require('./../utils/utils.js')(config),
	    model = require('./../model/model.js')(utils.event, utils.dom, utils.ajax, error),
	    view = require('./../view/view.js')(utils.event, utils.dom, error),
	    eventHandler = utils.event,
	    response;

	eventHandler.addEventListener("LoadItems", readItems);
	eventHandler.addEventListener("DomLoaded", renderView);

	view.start();

	function readItems(response) {
		model.populate(response);
	}

	function renderView(response) {
		view.render(response);
	}
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRyb2xsZXIuanMiXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsImNvbmZpZyIsImVycm9yIiwidXRpbHMiLCJyZXF1aXJlIiwibW9kZWwiLCJldmVudCIsImRvbSIsImFqYXgiLCJ2aWV3IiwiZXZlbnRIYW5kbGVyIiwicmVzcG9uc2UiLCJhZGRFdmVudExpc3RlbmVyIiwicmVhZEl0ZW1zIiwicmVuZGVyVmlldyIsInN0YXJ0IiwicG9wdWxhdGUiLCJyZW5kZXIiXSwibWFwcGluZ3MiOiI7O0FBQUFBLE9BQU9DLE9BQVAsR0FBaUIsVUFBU0MsTUFBVCxFQUFpQkMsS0FBakIsRUFBdUI7QUFDdEM7QUFDRCxLQUFJQyxRQUFRQyxRQUFRLHFCQUFSLEVBQStCSCxNQUEvQixDQUFaO0FBQUEsS0FDQ0ksUUFBUUQsUUFBUSxxQkFBUixFQUErQkQsTUFBTUcsS0FBckMsRUFBNENILE1BQU1JLEdBQWxELEVBQXVESixNQUFNSyxJQUE3RCxFQUFtRU4sS0FBbkUsQ0FEVDtBQUFBLEtBRUNPLE9BQU9MLFFBQVEsbUJBQVIsRUFBNkJELE1BQU1HLEtBQW5DLEVBQTBDSCxNQUFNSSxHQUFoRCxFQUFxREwsS0FBckQsQ0FGUjtBQUFBLEtBR0NRLGVBQWVQLE1BQU1HLEtBSHRCO0FBQUEsS0FJR0ssUUFKSDs7QUFNQUQsY0FBYUUsZ0JBQWIsQ0FBOEIsV0FBOUIsRUFBMkNDLFNBQTNDO0FBQ0NILGNBQWFFLGdCQUFiLENBQThCLFdBQTlCLEVBQTJDRSxVQUEzQzs7QUFFQUwsTUFBS00sS0FBTDs7QUFFQSxVQUFTRixTQUFULENBQW9CRixRQUFwQixFQUE4QjtBQUM1Qk4sUUFBTVcsUUFBTixDQUFlTCxRQUFmO0FBQ0Q7O0FBRUYsVUFBU0csVUFBVCxDQUFvQkgsUUFBcEIsRUFBNkI7QUFDNUJGLE9BQUtRLE1BQUwsQ0FBWU4sUUFBWjtBQUNBO0FBRUQsQ0FyQkQiLCJmaWxlIjoiY29udHJvbGxlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oY29uZmlnLCBlcnJvcil7XG4gIC8vY29uc29sZS5sb2coJ2NvbnRyb2xsZXIgY2FycmVnYWRhJyk7XG5cdHZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMvdXRpbHMuanMnKShjb25maWcpLFxuXHRcdG1vZGVsID0gcmVxdWlyZSgnLi8uLi9tb2RlbC9tb2RlbC5qcycpKHV0aWxzLmV2ZW50LCB1dGlscy5kb20sIHV0aWxzLmFqYXgsIGVycm9yKSxcblx0XHR2aWV3ID0gcmVxdWlyZSgnLi8uLi92aWV3L3ZpZXcuanMnKSh1dGlscy5ldmVudCwgdXRpbHMuZG9tLCBlcnJvciksXG5cdFx0ZXZlbnRIYW5kbGVyID0gdXRpbHMuZXZlbnQsXG4gICAgcmVzcG9uc2U7XG5cblx0ZXZlbnRIYW5kbGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJMb2FkSXRlbXNcIiwgcmVhZEl0ZW1zKTtcbiAgZXZlbnRIYW5kbGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJEb21Mb2FkZWRcIiwgcmVuZGVyVmlldyk7XG5cbiAgdmlldy5zdGFydCgpO1xuXG4gIGZ1bmN0aW9uIHJlYWRJdGVtcyAocmVzcG9uc2UpIHtcbiAgICBtb2RlbC5wb3B1bGF0ZShyZXNwb25zZSk7XG4gIH1cblxuXHRmdW5jdGlvbiByZW5kZXJWaWV3KHJlc3BvbnNlKXtcblx0XHR2aWV3LnJlbmRlcihyZXNwb25zZSk7XG5cdH1cblxufVxuIl19
},{"./../model/model.js":3,"./../utils/utils.js":5,"./../view/view.js":6}],2:[function(require,module,exports){
'use strict';

;(function () {
  window.onload = start;

  function start() {
    var config = {
      apiUrl: "../src/static/api/mock2.json",
      cross: false
    },
        error = require('./utils/error.js')();

    if (config.apiUrl.length) require('./controller/controller.js')(config, error);else error.showError("apiurl");
  }
})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZha2VfM2YyZDVkMjMuanMiXSwibmFtZXMiOlsid2luZG93Iiwib25sb2FkIiwic3RhcnQiLCJjb25maWciLCJhcGlVcmwiLCJjcm9zcyIsImVycm9yIiwicmVxdWlyZSIsImxlbmd0aCIsInNob3dFcnJvciJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxDQUFDLENBQUMsWUFBVTtBQUNWQSxTQUFPQyxNQUFQLEdBQWdCQyxLQUFoQjs7QUFFQSxXQUFTQSxLQUFULEdBQWdCO0FBQ2QsUUFBSUMsU0FBVztBQUNUQyxjQUFTLDhCQURBO0FBRVRDLGFBQVE7QUFGQyxLQUFmO0FBQUEsUUFJSUMsUUFBUUMsUUFBUSxrQkFBUixHQUpaOztBQU9BLFFBQUdKLE9BQU9DLE1BQVAsQ0FBY0ksTUFBakIsRUFDRUQsUUFBUSw0QkFBUixFQUFzQ0osTUFBdEMsRUFBOENHLEtBQTlDLEVBREYsS0FHRUEsTUFBTUcsU0FBTixDQUFnQixRQUFoQjtBQUNKO0FBQ0QsQ0FoQkEiLCJmaWxlIjoiZmFrZV8zZjJkNWQyMy5qcyIsInNvdXJjZXNDb250ZW50IjpbIjsoZnVuY3Rpb24oKXtcbiAgd2luZG93Lm9ubG9hZCA9IHN0YXJ0O1xuXG4gIGZ1bmN0aW9uIHN0YXJ0KCl7XG4gICAgdmFyIGNvbmZpZyAgPSAge1xuICAgICAgICAgIGFwaVVybCA6IFwiLi4vc3JjL3N0YXRpYy9hcGkvbW9jazIuanNvblwiLFxuICAgICAgICAgIGNyb3NzIDogZmFsc2VcbiAgICAgICAgfSxcbiAgICAgICAgZXJyb3IgPSByZXF1aXJlKCcuL3V0aWxzL2Vycm9yLmpzJykoKTtcblxuXG4gICAgaWYoY29uZmlnLmFwaVVybC5sZW5ndGgpXG4gICAgICByZXF1aXJlKCcuL2NvbnRyb2xsZXIvY29udHJvbGxlci5qcycpKGNvbmZpZywgZXJyb3IpO1xuICAgIGVsc2VcbiAgICAgIGVycm9yLnNob3dFcnJvcihcImFwaXVybFwiKTtcblx0fVxufSkoKVxuIl19
},{"./controller/controller.js":1,"./utils/error.js":4}],3:[function(require,module,exports){
"use strict";

module.exports = function (event, DOMUtils, ajax, error) {
  var DOMToArray = DOMUtils.DOMToArray;

  var start = function start(response) {};

  var createInput = function createInput(key, obj) {
    //console.log("input", key, obj);
    var type = obj.type ? "type=\"" + obj.type + "\"" : "",
        className = obj.class || "",
        value = obj.value || "",
        mask = obj.Mask || "",
        elementName = key,
        input = "";

    if (key === "upload") {
      elementName = "input";
      type = "type=\"file\"";
    }

    if (key === "button") {
      value = "salvar";
      type = "type=\"button\"";
      elementName = "input";
    }

    if (key === "map") {
      input = "<div class=\"" + key + "\" class=\"" + className + "\" id=\"" + obj.id + "\"> " + obj.name + " </div>";
    } else {
      input = "<" + elementName + " " + type + " class=\"" + className + "\" id=\"" + obj.id + "\" name=\"" + obj.name + "\" placeholder=\"" + obj.name + "\" value=\"" + value + "\" />";
    }

    return input;
  };

  var populate = function populate(param) {
    ajax.fetchItems(function (elem) {
      var dom = [];
      var obj = elem.fields;
      console.log(obj);
      var items = Object.keys(obj).map(function (key) {
        if (obj[key].length) {
          obj[key].map(function (objItem) {
            //console.log("objItem", objItem);
            dom.push(createInput(key, objItem));
          });
        } else {
          dom.push(createInput(key, obj[key]));
        }
      });

      console.log(dom);

      event.dispatchEvent("DomLoaded", dom);
    });
  };

  return {
    start: start,
    populate: populate
  };
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGVsLmpzIl0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJldmVudCIsIkRPTVV0aWxzIiwiYWpheCIsImVycm9yIiwiRE9NVG9BcnJheSIsInN0YXJ0IiwicmVzcG9uc2UiLCJjcmVhdGVJbnB1dCIsImtleSIsIm9iaiIsInR5cGUiLCJjbGFzc05hbWUiLCJjbGFzcyIsInZhbHVlIiwibWFzayIsIk1hc2siLCJlbGVtZW50TmFtZSIsImlucHV0IiwiaWQiLCJuYW1lIiwicG9wdWxhdGUiLCJwYXJhbSIsImZldGNoSXRlbXMiLCJlbGVtIiwiZG9tIiwiZmllbGRzIiwiY29uc29sZSIsImxvZyIsIml0ZW1zIiwiT2JqZWN0Iiwia2V5cyIsIm1hcCIsImxlbmd0aCIsIm9iakl0ZW0iLCJwdXNoIiwiZGlzcGF0Y2hFdmVudCJdLCJtYXBwaW5ncyI6Ijs7QUFBQUEsT0FBT0MsT0FBUCxHQUFpQixVQUFTQyxLQUFULEVBQWdCQyxRQUFoQixFQUEwQkMsSUFBMUIsRUFBZ0NDLEtBQWhDLEVBQXNDO0FBQ3JELE1BQU1DLGFBQWFILFNBQVNHLFVBQTVCOztBQUVBLE1BQUlDLFFBQVEsU0FBUkEsS0FBUSxDQUFTQyxRQUFULEVBQWtCLENBQzdCLENBREQ7O0FBSUEsTUFBSUMsY0FBYyxTQUFkQSxXQUFjLENBQVNDLEdBQVQsRUFBY0MsR0FBZCxFQUFtQjtBQUNuQztBQUNBLFFBQUlDLE9BQU9ELElBQUlDLElBQUosZUFBb0JELElBQUlDLElBQXhCLFVBQWtDLEVBQTdDO0FBQUEsUUFDSUMsWUFBWUYsSUFBSUcsS0FBSixJQUFhLEVBRDdCO0FBQUEsUUFFSUMsUUFBUUosSUFBSUksS0FBSixJQUFhLEVBRnpCO0FBQUEsUUFHSUMsT0FBT0wsSUFBSU0sSUFBSixJQUFZLEVBSHZCO0FBQUEsUUFJSUMsY0FBY1IsR0FKbEI7QUFBQSxRQUtJUyxRQUFRLEVBTFo7O0FBUUEsUUFBR1QsUUFBUSxRQUFYLEVBQW9CO0FBQ2xCUSxvQkFBYyxPQUFkO0FBQ0FOO0FBQ0Q7O0FBRUQsUUFBR0YsUUFBUSxRQUFYLEVBQXFCO0FBQ25CSyxjQUFRLFFBQVI7QUFDQUg7QUFDQU0sb0JBQWMsT0FBZDtBQUNEOztBQUlELFFBQUlSLFFBQVEsS0FBWixFQUFtQjtBQUNqQlMsZ0NBQXVCVCxHQUF2QixtQkFBc0NHLFNBQXRDLGdCQUF3REYsSUFBSVMsRUFBNUQsWUFBb0VULElBQUlVLElBQXhFO0FBQ0QsS0FGRCxNQUVPO0FBQ0xGLG9CQUFZRCxXQUFaLFNBQTJCTixJQUEzQixpQkFBMENDLFNBQTFDLGdCQUE0REYsSUFBSVMsRUFBaEUsa0JBQTZFVCxJQUFJVSxJQUFqRix5QkFBdUdWLElBQUlVLElBQTNHLG1CQUEySE4sS0FBM0g7QUFDRDs7QUFJRCxXQUFPSSxLQUFQO0FBQ0QsR0FoQ0Q7O0FBa0NBLE1BQUlHLFdBQVcsU0FBWEEsUUFBVyxDQUFTQyxLQUFULEVBQWdCO0FBQzdCbkIsU0FBS29CLFVBQUwsQ0FBaUIsVUFBQ0MsSUFBRCxFQUFVO0FBQ3pCLFVBQUlDLE1BQU0sRUFBVjtBQUNBLFVBQUlmLE1BQU1jLEtBQUtFLE1BQWY7QUFDQUMsY0FBUUMsR0FBUixDQUFZbEIsR0FBWjtBQUNBLFVBQUltQixRQUFRQyxPQUFPQyxJQUFQLENBQVlyQixHQUFaLEVBQWlCc0IsR0FBakIsQ0FBc0IsVUFBQ3ZCLEdBQUQsRUFBUztBQUN6QyxZQUFHQyxJQUFJRCxHQUFKLEVBQVN3QixNQUFaLEVBQW9CO0FBQ2xCdkIsY0FBSUQsR0FBSixFQUFTdUIsR0FBVCxDQUFjLFVBQUNFLE9BQUQsRUFBWTtBQUN4QjtBQUNBVCxnQkFBSVUsSUFBSixDQUFTM0IsWUFBWUMsR0FBWixFQUFpQnlCLE9BQWpCLENBQVQ7QUFDRCxXQUhEO0FBSUQsU0FMRCxNQUtPO0FBQ0xULGNBQUlVLElBQUosQ0FBUzNCLFlBQVlDLEdBQVosRUFBaUJDLElBQUlELEdBQUosQ0FBakIsQ0FBVDtBQUNEO0FBRUYsT0FWVyxDQUFaOztBQVlBa0IsY0FBUUMsR0FBUixDQUFZSCxHQUFaOztBQUVBeEIsWUFBTW1DLGFBQU4sQ0FBb0IsV0FBcEIsRUFBaUNYLEdBQWpDO0FBQ0QsS0FuQkQ7QUFvQkQsR0FyQkQ7O0FBeUJBLFNBQU87QUFDTG5CLFdBQU9BLEtBREY7QUFFTGUsY0FBV0E7QUFGTixHQUFQO0FBSUQsQ0F0RUQiLCJmaWxlIjoibW9kZWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGV2ZW50LCBET01VdGlscywgYWpheCwgZXJyb3Ipe1xuICBjb25zdCBET01Ub0FycmF5ID0gRE9NVXRpbHMuRE9NVG9BcnJheTtcblxuICB2YXIgc3RhcnQgPSBmdW5jdGlvbihyZXNwb25zZSl7XG4gIH1cblxuXG4gIHZhciBjcmVhdGVJbnB1dCA9IGZ1bmN0aW9uKGtleSwgb2JqKSB7XG4gICAgLy9jb25zb2xlLmxvZyhcImlucHV0XCIsIGtleSwgb2JqKTtcbiAgICBsZXQgdHlwZSA9IG9iai50eXBlID8gYHR5cGU9XCIke29iai50eXBlfVwiYCA6IFwiXCIsXG4gICAgICAgIGNsYXNzTmFtZSA9IG9iai5jbGFzcyB8fCBcIlwiLFxuICAgICAgICB2YWx1ZSA9IG9iai52YWx1ZSB8fCBcIlwiLFxuICAgICAgICBtYXNrID0gb2JqLk1hc2sgfHwgXCJcIixcbiAgICAgICAgZWxlbWVudE5hbWUgPSBrZXksXG4gICAgICAgIGlucHV0ID0gXCJcIjtcblxuXG4gICAgaWYoa2V5ID09PSBcInVwbG9hZFwiKXtcbiAgICAgIGVsZW1lbnROYW1lID0gXCJpbnB1dFwiO1xuICAgICAgdHlwZSA9IGB0eXBlPVwiZmlsZVwiYDtcbiAgICB9XG5cbiAgICBpZihrZXkgPT09IFwiYnV0dG9uXCIpIHtcbiAgICAgIHZhbHVlID0gXCJzYWx2YXJcIjtcbiAgICAgIHR5cGUgPSBgdHlwZT1cImJ1dHRvblwiYDtcbiAgICAgIGVsZW1lbnROYW1lID0gXCJpbnB1dFwiO1xuICAgIH1cblxuICAgIFxuXG4gICAgaWYoIGtleSA9PT0gXCJtYXBcIikge1xuICAgICAgaW5wdXQgPSBgPGRpdiBjbGFzcz1cIiR7a2V5fVwiIGNsYXNzPVwiJHtjbGFzc05hbWV9XCIgaWQ9XCIke29iai5pZH1cIj4gJHtvYmoubmFtZX0gPC9kaXY+YDtcbiAgICB9IGVsc2Uge1xuICAgICAgaW5wdXQgPSBgPCR7ZWxlbWVudE5hbWV9ICR7dHlwZX0gY2xhc3M9XCIke2NsYXNzTmFtZX1cIiBpZD1cIiR7b2JqLmlkfVwiIG5hbWU9XCIke29iai5uYW1lfVwiIHBsYWNlaG9sZGVyPVwiJHtvYmoubmFtZX1cIiB2YWx1ZT1cIiR7dmFsdWV9XCIgLz5gO1xuICAgIH1cblxuXG5cbiAgICByZXR1cm4gaW5wdXQ7XG4gIH1cblxuICB2YXIgcG9wdWxhdGUgPSBmdW5jdGlvbihwYXJhbSkge1xuICAgIGFqYXguZmV0Y2hJdGVtcyggKGVsZW0pID0+IHtcbiAgICAgIGxldCBkb20gPSBbXTtcbiAgICAgIGxldCBvYmogPSBlbGVtLmZpZWxkcztcbiAgICAgIGNvbnNvbGUubG9nKG9iaik7XG4gICAgICBsZXQgaXRlbXMgPSBPYmplY3Qua2V5cyhvYmopLm1hcCggKGtleSkgPT4ge1xuICAgICAgICBpZihvYmpba2V5XS5sZW5ndGgpIHtcbiAgICAgICAgICBvYmpba2V5XS5tYXAoIChvYmpJdGVtKSA9PntcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJvYmpJdGVtXCIsIG9iakl0ZW0pO1xuICAgICAgICAgICAgZG9tLnB1c2goY3JlYXRlSW5wdXQoa2V5LCBvYmpJdGVtKSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZG9tLnB1c2goY3JlYXRlSW5wdXQoa2V5LCBvYmpba2V5XSkpO1xuICAgICAgICB9XG5cbiAgICAgIH0pO1xuXG4gICAgICBjb25zb2xlLmxvZyhkb20pO1xuXG4gICAgICBldmVudC5kaXNwYXRjaEV2ZW50KFwiRG9tTG9hZGVkXCIsIGRvbSk7XG4gICAgfSk7XG4gIH1cblxuXG5cbiAgcmV0dXJuIHtcbiAgICBzdGFydDogc3RhcnQsXG4gICAgcG9wdWxhdGUgOiBwb3B1bGF0ZVxuICB9XG59XG4iXX0=
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
  var formElement = document.querySelector("form");

  var start = function start() {
    event.dispatchEvent("LoadItems", { item: 1 });
  };

  var render = function render(response) {
    console.log(formElement);
    console.log(response);
    formElement.innerHTML += response.join("");
    //formElement.appendChild();
  };

  return {
    start: start,
    render: render

  };
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXcuanMiXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsImV2ZW50IiwiRE9NVXRpbHMiLCJlcnJvciIsIkRPTVRvQXJyYXkiLCJmb3JtRWxlbWVudCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInN0YXJ0IiwiZGlzcGF0Y2hFdmVudCIsIml0ZW0iLCJyZW5kZXIiLCJyZXNwb25zZSIsImNvbnNvbGUiLCJsb2ciLCJpbm5lckhUTUwiLCJqb2luIl0sIm1hcHBpbmdzIjoiOztBQUFBQSxPQUFPQyxPQUFQLEdBQWlCLFVBQVNDLEtBQVQsRUFBZ0JDLFFBQWhCLEVBQTBCQyxLQUExQixFQUFnQztBQUMvQztBQUNBLE1BQU1DLGFBQWFGLFNBQVNFLFVBQTVCO0FBQ0EsTUFBTUMsY0FBY0MsU0FBU0MsYUFBVCxDQUF1QixNQUF2QixDQUFwQjs7QUFHQSxNQUFJQyxRQUFRLFNBQVJBLEtBQVEsR0FBVTtBQUNwQlAsVUFBTVEsYUFBTixDQUFvQixXQUFwQixFQUFpQyxFQUFDQyxNQUFNLENBQVAsRUFBakM7QUFDRCxHQUZEOztBQU1BLE1BQUlDLFNBQVMsU0FBVEEsTUFBUyxDQUFVQyxRQUFWLEVBQW9CO0FBQy9CQyxZQUFRQyxHQUFSLENBQVlULFdBQVo7QUFDQVEsWUFBUUMsR0FBUixDQUFZRixRQUFaO0FBQ0FQLGdCQUFZVSxTQUFaLElBQXlCSCxTQUFTSSxJQUFULENBQWMsRUFBZCxDQUF6QjtBQUNBO0FBQ0QsR0FMRDs7QUFTQSxTQUFPO0FBQ0xSLFdBQVFBLEtBREg7QUFFTEcsWUFBU0E7O0FBRkosR0FBUDtBQUtELENBMUJEIiwiZmlsZSI6InZpZXcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGV2ZW50LCBET01VdGlscywgZXJyb3Ipe1xuICAvL2NvbnNvbGUubG9nKCd2aWV3IGNhcnJlZ2FkYScpO1xuICBjb25zdCBET01Ub0FycmF5ID0gRE9NVXRpbHMuRE9NVG9BcnJheTtcbiAgY29uc3QgZm9ybUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZm9ybVwiKTtcblxuXG4gIHZhciBzdGFydCA9IGZ1bmN0aW9uKCl7XG4gICAgZXZlbnQuZGlzcGF0Y2hFdmVudChcIkxvYWRJdGVtc1wiLCB7aXRlbTogMX0gKTtcbiAgfVxuXG5cblxuICB2YXIgcmVuZGVyID0gZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgY29uc29sZS5sb2coZm9ybUVsZW1lbnQpO1xuICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgICBmb3JtRWxlbWVudC5pbm5lckhUTUwgKz0gcmVzcG9uc2Uuam9pbihcIlwiKVxuICAgIC8vZm9ybUVsZW1lbnQuYXBwZW5kQ2hpbGQoKTtcbiAgfVxuXG5cblxuICByZXR1cm4ge1xuICAgIHN0YXJ0IDogc3RhcnQsXG4gICAgcmVuZGVyIDogcmVuZGVyXG5cbiAgfVxufVxuIl19
},{}]},{},[2])