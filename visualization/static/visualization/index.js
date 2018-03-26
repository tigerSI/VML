$(document).ready(function() {
    // create an array with nodes
    
    // var arr = [];

    // for (var i = 1; i <= 7; i++) {
    //     arr.push({id: i, label: 'Node'+i});
    // }

    // var nodes = new vis.DataSet(arr);
    var nodes = new vis.DataSet([
        {id: 1, label: 'Node 1', text:'items1', group: 1},
        {id: 2, label: 'Node 2', text:'items2',group:1},
        {id: 3, label: 'Node 3', text:'items3',group: 2},
        {id: 4, label: 'Node 4', text:'items4', group: 4,first: true},
        {id: 5, label: 'Node 5'},
        {id: 6, label: 'Node 6'},
        {id: 7, label: 'Node 7'},
      ]);
    
      // create an array with edges
      var edges = new vis.DataSet([
        {from: 7, to: 4},
        {from: 6, to: 4},
        {from: 3, to: 4},
        {from: 2, to: 4},
        {from: 1, to: 2},
        {from: 7, to: 5},
        {from: 1, to: 3},
        {from: 1, to: 6},
        {from: 1, to: 7},
      ]);
  
  
      // create a network
      var container = document.getElementById('mynetwork');
      var data = {
        nodes: nodes,
        edges: edges
      };
      var options = {
                  nodes:   {
                      fixed:{
                        x:true,
                        y:true,
  
                      }
                  },
                  layout: {
                      hierarchical: {
                          enabled: true,
                          direction: "LR",
                          sortMethod: "directed",
                      }
                  }
                  
              }
      
      var network = new vis.Network(container, data, options);
      network.on('select', function (params) {    
            var items = nodes.get({
              filter: function (item) {
                return (item.id == params.nodes);
              },
              fields: ['id','text']
            });
            
            document.getElementById('selection').innerHTML = 'Selection: ' + params.nodes;
            console.log(items[0].text);
      });
});