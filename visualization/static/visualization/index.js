$(document).ready(function() {
    var arr = [];
    for (var i = 1; i <= 203; i++) {
        if (i <= 1) {
          arr.push({id: i, label: 'Node'+i, content:' Content inside yes ', group: 1});
        }
        else if ( 1 < i && i <= 33) {
          arr.push({id: i, label: 'Node'+i, content:' Content inside fuck ', group: 2});
        }
        else if (33 < i && i <= 65) {
          arr.push({id: i, label: 'Node'+i, content:' Content inside you ', group: 3});
        }
        else if ( 65 < i && i <= 129) {
          arr.push({id: i, label: 'Node'+i, content:' Content inside node ', group: 4});
        }
        else if ( 129 < i && i <= 193) {
          arr.push({id: i, label: 'Node'+i, content:' Content inside node ', group: 5});
        }
        else if ( 193 < i && i <= 203) {
          arr.push({id: i, label: 'Node'+i, content:' Content inside node ', group: 6});
        }
    }
    


    var nodes = new vis.DataSet(arr);
    // var nodes = new vis.DataSet([
    //   {id: 1, label: 'Node 1', content:' Content inside node 1 ', group: 1},
    //   {id: 2, label: 'Node 2', content:' Content inside node 2 ',group:1},
    //   {id: 3, label: 'Node 3', content:' Content inside node 3 ',group: 2},
    //   {id: 4, label: 'Node 4', content:' Content inside node 4 ', group: 4,first: true},
    //   {id: 5, label: 'Node 5'},
    //   {id: 6, label: 'Node 6'},
    //   {id: 7, label: 'Node 7'},
    // ]);
  
    // create an array with edges
    var arr2 = [];

    for (var i = 2; i <= 33; i++) {
        arr2.push({from: 1, to: i});
        arr2.push({from: i, to: i+32});
    }
    for (var i = 34; i <= 65; i++) {
      for (var j = 34; j <= 97; j++) {
        arr2.push({from: i, to: j+32});
      }  
    }
    for (var i = 34; i <= 65; i++) {
      for (var j = 34; j <= 97; j++) {
        arr2.push({from: i, to: j+32});
      }  
    }
    // for (var i = 65; i <= 128; i++) {
    //   for (var j = 1; j <= 64; j++) {
    //     arr2.push({from: i, to: j+64});
    //   }  
    // }


    
    var edges = new vis.DataSet(arr2);



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
                        levelSeparation: 500,
                        nodeSpacing: 100,

                    }
                }
                
            }
    
    var network = new vis.Network(container, data, options);
    network.on('select', function (params) {    
          
          var items = nodes.get({
            filter: function (item) {
              return (item.id == params.nodes);
            },
            fields: ['id','content']
          });
          
          document.getElementById('selection').innerHTML = 'Selection: ' + params.nodes + items[0].content;
          
    });


});