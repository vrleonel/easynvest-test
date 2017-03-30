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
