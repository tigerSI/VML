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