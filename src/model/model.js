module.exports = function(event, DOMUtils, ajax, error){
  const DOMToArray = DOMUtils.DOMToArray;

  var start = function(response){
  }


  var createInput = function(key, obj) {
    console.log(obj[key]);

    var input = obj.map( (item) => {
      return `<input class=${item["class"]}>`;

    });

    return input;

  }

  var populate = function(param) {
    ajax.fetchItems( (elem) => {
      let dom = "";
      let obj = elem.fields;
      let items = Object.keys(obj).map( (key) => {
        return obj[key];
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
