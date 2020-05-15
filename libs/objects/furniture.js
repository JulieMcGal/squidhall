var furniture = (function(){

   return {
      layouts: [
         {
            "area": "artshow",
            "origin": [
               3,
               0,
               0
            ],
            "object-placements": [
               {
                  "name": "signhalfs",
                  "object": "signhalf",
                  "placer": "signhalfplacer"
               },
               {
                  "name": "signfulls",
                  "object": "signfull",
                  "placer": "signfullplacer"
               },
               {
                  "name": "artpnl1",
                  "object": "panel",
                  "placer": "linear-series",
                  "data": {
                     "count": 8,
                     "position": [
                        10,
                        0.01,
                        1
                     ],
                     "offset": 1.3,
                     "rotation": false
                  }
               },
               {
                  "name": "artpnl1-1",
                  "object": "panel",
                  "placer": "linear-series",
                  "data": {
                     "count": 2,
                     "position": [
                        11,
                        0.01,
                        1
                     ],
                     "offset": 1.3,
                     "rotation": true,
                     "across": false
                  }
               },
               {
                  "name": "rectangleexample",
                  "object": "panel",
                  "placer": "rectangle-series",
                  "data": {
                     "position": [
                        10,
                        0.01,
                        37
                     ],
                     "countWide": 5,
                     "countDeep": 6,
                     "lengthOffset": 1.3,
                     "widthOffset": 0.1
                  }
               },
               {
                  "name": "plinth1",
                  "object": "plinth",
                  "placer": "single",
                  "data": {
                     "position": [
                        20,
                        0.01,
                        20
                     ],
                     "rotation": true
                  }
               },
               {
                  "name": "plinth2",
                  "object": "plinth",
                  "placer": "single",
                  "data": {
                     "position": [
                        16,
                        0.01,
                        16
                     ],
                     "rotation": true
                  }
               },
               {
                  "name": "lonelypanelexample",
                  "object": "panel",
                  "placer": "single",
                  "data": {
                     "position": [
                        10,
                        0.01,
                        6
                     ],
                     "rotation": true
                  }
               },
 							{
                   "name": "bigsquid",
                   "object": "squid",
                   "placer": "simpleplacer",
                   "data":{
                     "position": [2, 10, -63],
                     "rotation": false
 									}
 							}
            ]
         },
      ]
   };
})();
