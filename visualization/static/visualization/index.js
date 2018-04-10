$(document).ready(function() {
  
  var DOTstring = $("#dot_string").html().replace(new RegExp('&gt;', 'g'), '>');
  var parsedData = vis.network.convertDot(DOTstring);
  
  var data = {
    nodes: parsedData.nodes,
    edges: parsedData.edges
  }
  
  var options = {
    nodes:   {
      fixed: {
        x:true,
        y:true,
      }
    },
    layout: {
      hierarchical: {
        enabled: true,
        direction: "LR",
        sortMethod: "directed",
        levelSeparation: 1500,
      }
    }
  };
  
  var container = document.getElementById("mynetwork");
  var network = new vis.Network(container, data, options);


});
var alpha = document.getElementById("alpha_value").innerHTML;
var size = document.getElementById("size").innerHTML;
var alpha_lst = JSON.parse("[" + alpha + "]");
var size_lst = JSON.parse("[" + size + "]");

// console.log(alpha_lst[0][160]);
var c = document.getElementById("myCanvas");
var ctx2 = c.getContext("2d");
var imgData = ctx2.createImageData(size_lst[0][0]*4, size_lst[0][1]*4);

var rgba_index = 1;
var alpha_index = 0;
var check =0;
for (var i = 0; i < imgData.data.length; i+=1) {
    if (rgba_index==4) {
      imgData.data[i] = alpha_lst[0][alpha_index ]*255;
      rgba_index=1;
      if (check==4) {
        check=0;
        alpha_index +=1;
      }
      check +=1;
    }
    else{
      imgData.data[i] = 0;
      rgba_index+=1;
    }   
}

ctx2.putImageData(imgData, 0, 0);



