;(function(){
  window.onload = start;

  function start(){
    var config  =  {},
        error = require('./utils/error.js')(),
        elConfig = document.querySelector("#plugin-config [data-id=showcase]"),
        headers = elConfig.getAttribute("data-header") || "";

    config.apiUrl       = elConfig.getAttribute("data-apiurl");
    config.cross        = elConfig.getAttribute("data-cross") || true;

    if( headers.indexOf(":") !== -1) {
      headers = headers.split(":");
      config.header = {
        "name"  : headers[0],
        "value" : headers[1]
      };
    }

    if(config.apiUrl.length)
      require('./controller/controller.js')(config, error);
    else
      error.showError("apiurl");
	}
})()
