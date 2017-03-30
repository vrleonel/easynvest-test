(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = function(config, error){
  //console.log('controller carregada');
	var utils = require('./../utils/utils.js')(config),
		model = require('./../model/model.js')(utils.event, utils.dom, utils.ajax, error),
		view = require('./../view/view.js')(utils.event, utils.dom, error),
		eventHandler = utils.event;

	eventHandler.addEventListener("LoadItems", readItems);



	view.start();

  function readItems (response) {
    model.populate(response);
  }

	function renderView(response){
		view.render(response);
	}

}

},{"./../model/model.js":3,"./../utils/utils.js":5,"./../view/view.js":6}],2:[function(require,module,exports){
;(function(){
  window.onload = start;

  function start(){
    var config  =  {
          apiUrl : "/src/static/api/mock.json"
        },
        error = require('./utils/error.js')();


    if(config.apiUrl.length)
      require('./controller/controller.js')(config, error);
    else
      error.showError("apiurl");
	}
})()

},{"./controller/controller.js":1,"./utils/error.js":4}],3:[function(require,module,exports){
module.exports = function(event, DOMUtils, ajax, error){
  const DOMToArray = DOMUtils.DOMToArray;

  var start = function(response){
  }


  var createInput = function(key, obj) {
    console.log(obj[key]);

    var input = obj.map( (item) => {
      return '<input class=${item["class"]}>';
    });

    return input;

  }

  var populate = function(param) {
    ajax.fetchItems( (elem) => {
      let dom = "";
      let obj = elem.fields;
      let items = Object.keys(obj).map( (key) => {
        //return obj[key];
        console.log(createInput(key, obj[key]));
      });
      console.log("items", items);



    });
  }



  return {
    start: start,
    populate : populate
  }
}

},{}],4:[function(require,module,exports){
module.exports = function(){

  var pluginName = "Easynvest",
    errorTypes = {
      "erro"     : " Erro 1 ",
      "error2"   : "Erro 2"
    };

  /**
  * @module error
  * @method showError
  * @desc Show a customized warning
  * @param {string=} type - a white list of error from obj errorTypes
  * @param {string=} msg - a customized error message
  **/
  var showError = function(type, msg) {
    console.warn(
      "[" + pluginName + "]",
      errorTypes[type] || errorTypes["default"],
      msg || "" );
  };

	return {
    showError : showError
	}
}

},{}],5:[function(require,module,exports){
module.exports = function(config){

  var listeners = {},
    APIURL      = config.apiUrl,  // http://docn201.ecom.carrefour:8089/content/v1/products/list
    CROSSDOMAIN = config.cross == "true",  // isCross, true or false
    token       = config.header || {}; // Object {name: value}

  var addEventListener = function(strEvent, fn){
    listeners[strEvent] = fn;
  }

  var removeEventListener = function(strEvent){
    listeners[strEvent] = null;
  }

  var dispatchEvent = function(strEvent, param){
    listeners[strEvent](param);
  }

  var DOMToArray = function(DOM){
    return [].slice.call(DOM);
  }

  var AJAXRequest = function(url, isCrossDomain, callback) {
    if(!isCrossDomain) {
      var xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function(){

      if(xhr.readyState == 4 && xhr.status == 200)
        callback.call(this, xhr.response);
      }
      
      xhr.open("GET", url);
      xhr.responseType = "json";
      xhr.send();

    } else {
      var api = document.createElement('script');
      var time = new Date().getTime();
      api.setAttribute('src',url +'&callback=funcJsonP');
      api.setAttribute('data-type', 'ajax');
      window['funcJsonP'] = function(e){
        var node = document.querySelectorAll('script[data-type=ajax]')[0];
        document.querySelectorAll('head')[0].removeChild(node);
        callback.call(this, e);
        window['funcJsonP'] = null;
      }
      document.querySelectorAll('head')[0].appendChild(api);
    }
  }

  var fetchItems = function(callback){
    var query = APIURL;
    AJAXRequest(query, CROSSDOMAIN, callback);
  }


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
      DOMToArray: DOMToArray,
    }
  }
}

},{}],6:[function(require,module,exports){
module.exports = function(event, DOMUtils, error){
  //console.log('view carregada');
  var DOMToArray = DOMUtils.DOMToArray;


  var start = function(){
    console.log("Teste");
    event.dispatchEvent("LoadItems", {item: 1} );
  }



  var render = function () {

  }



  return {
    start : start

  }
}

},{}]},{},[2])