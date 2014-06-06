var cities = [];

document.addEventListener('click', function(e) {
      e = e || window.event;
      var target = e.target || e.srcElement,
          text = target.textContent || text.innerText;   
  
  console.log(text);

  var circleId = d3.select("#" + text + "");

  d3.selectAll("circle").each(function(d,i){
    
    var myId = d3.select(this).attr("id");
    
    cities.push(myId);
  
  });
  

  cities.forEach(function ( city ) {
  
    text = text.substring(0,3);
    city = city.substring(0,3);

    if ( text == city ){

          circleId.style("fill", "tomato");

                 
      }
  })

  }, false);
