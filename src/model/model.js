module.exports = function(event, DOMUtils, ajax, error){
  const DOMToArray = DOMUtils.DOMToArray;

  var start = function(response){
  }


  var createInput = function(key, obj) {
    //console.log("input", key, obj);
    let type = obj.type ? `type="${obj.type}"` : "",
        className = obj.class || "",
        value = obj.value || "",
        mask = obj.Mask || "",
        elementName = key,
        input = "";


    if(key === "upload"){
      elementName = "input";
      type = `type="file"`;
    }

    if(key === "button") {
      value = "salvar";
      type = `type="button"`;
      elementName = "input";
    }

    

    if( key === "map") {
      input = `<div class="${key}" class="${className}" id="${obj.id}"> ${obj.name} </div>`;
    } else {
      input = `<${elementName} ${type} class="${className}" id="${obj.id}" name="${obj.name}" placeholder="${obj.name}" value="${value}" />`;
    }



    return input;
  }

  var populate = function(param) {
    ajax.fetchItems( (elem) => {
      let dom = [];
      let obj = elem.fields;
      console.log(obj);
      let items = Object.keys(obj).map( (key) => {
        if(obj[key].length) {
          obj[key].map( (objItem) =>{
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
  }



  return {
    start: start,
    populate : populate
  }
}
