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

  var AJAXRequest = function(url, isCrossDomain, token, callback) {
  if(!isCrossDomain) {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function(){
  if(xhr.readyState == 4 && xhr.status == 200)
  callback.call(this, xhr.response);
  }
  xhr.open("GET", url);
      // Verify if Token is not empty
      if( token.hasOwnProperty("name")){
        xhr.setRequestHeader(token.name, token.value);
      }
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
  AJAXRequest(query, CROSSDOMAIN, token, callback);
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
