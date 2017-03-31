;(function(){
  window.onload = start;

  function start(){
    var config  =  {
          apiUrl : "../src/static/api/mock2.json",
          cross : false
        },
        error = require('./utils/error.js')();


    if(config.apiUrl.length)
      require('./controller/controller.js')(config, error);
    else
      error.showError("apiurl");
	}
})()
