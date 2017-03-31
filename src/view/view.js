module.exports = function(event, DOMUtils, error){
  //console.log('view carregada');
  const DOMToArray = DOMUtils.DOMToArray;
  const formElement = document.querySelector("form");


  var start = function(){
    event.dispatchEvent("LoadItems", {item: 1} );
  }



  var render = function (response) {
    console.log(formElement);
    console.log(response);
    formElement.innerHTML += response.join("")
    //formElement.appendChild();
  }



  return {
    start : start,
    render : render

  }
}
