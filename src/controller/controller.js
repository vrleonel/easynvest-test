module.exports = function(config, error){
  //console.log('controller carregada');
	var utils = require('./../utils/utils.js')(config),
		model = require('./../model/model.js')(utils.event, utils.dom, utils.ajax, error),
		view = require('./../view/view.js')(utils.event, utils.dom, error),
		eventHandler = utils.event;

	eventHandler.addEventListener("ScopesFromView", readScopes);
	eventHandler.addEventListener("SKUsFromModel", renderView);

	view.start();

	function renderView(response){
		view.render(response);
	}

	function readScopes(response){
		model.getSKUs(response);
	}

}
