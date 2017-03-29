module.exports = function(){

  var pluginName = "Showcase API",
    errorTypes = {
      "sku"     : "SKU(s) not found!",
      "apiurl"  : "API url not found!",
      "view"    : "view.render()",
      "default" : "Unknown Error!"
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
