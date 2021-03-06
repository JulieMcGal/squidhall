var pipelineexample_aw = (function(){

   return {
      textures: {
         "Ai-Weiwei-1": {
               "options": {
                  "loader": "default",
                  "doc": "Since we are using the default loader and no other options, we don't actually need the options section at all."
               },
               "data": {
                  "dir": "textures/content/",
                  "file-name": "ai-weiwei-1.png"
               }
         },
         "Ai-Weiwei-2": {
               "options": {
               },
               "data": {
                  "dir": "textures/content/",
                  "file-name": "ai-weiwei-2.png"
               }
         },
         "Ai-Weiwei-3": {
               "options": {
               },
               "data": {
                  "dir": "textures/content/",
                  "file-name": "ai-weiwei-3.png"
               }
         },},
      materials: {},
      objects: {
      },
      layouts: {
         
         "artshow": {
            "options": {
               "doc": "No options, use defaults from furniture.model.json. (You can leave this options section out.)"
            },
            "objectPlacements": [
               {
                  "object": "artshow.artpnl-1-ew-1-0",
                  "doc": "The panel 'artshow.artpnl-1-ew-1-0' is from the layouts in the furniture.model.json file.",
                  "data": [
                     {
                        "doc": "The place-name is used as the base name for placed objects located on artshow.artpnl-1-ew-1-1.",
                        "place-name": "ai-weiwei",
                        "options": {
                           "placer": "ArtPlacer",
                           "doc": "The 'ArtPlacer' uses the data below to size and position the art.",
                           "moreInfoData": {
                              "link": "https://squid.fanac.com/art-show/ai-weiwei/",
                              "link-text": "Ai Weiwei's Page",
                              "text": "Ai Weiwei is a Chinese contemporary artist, active in sculpture, installation, architecture, curating, photography, film, and social, political and cultural. These photos are from an exhibit held of his work on Alcatraz island in the former prison buildings in 2015.",
                              "title": "Ai Weiwei"
                           }
                        },
                        "data": {
                           "place-on": "front",
                           "doc": "The place-on value lets you specify 'front' or 'back' of the panel.",
                           "textures": [
                              {
                                 "size": [
                                    0.6,
                                    0.45
                                 ],
                                 "doc": "Size is WxH.",
                                 "position": [
                                    0,
                                    0
                                 ],
                                 "texture": "Ai-Weiwei-1"
                              },
                              {
                                 "size": [
                                    0.6,
                                    0.8
                                 ],
                                 "doc": "Size and position must fit with panel size of X=0.6 and Y=1.",
                                 "position": [
                                    0.5,
                                    0.6
                                 ],
                                 "texture": "Ai-Weiwei-2"
                              },
                              {
                                 "size": [
                                    0.6,
                                    0.45
                                 ],
                                 "doc": "Size should reflect proportions of original image.",
                                 "position": [
                                    0.2,
                                    1.5
                                 ],
                                 "texture": "Ai-Weiwei-3"
                              }
                           ]
                        }
                     }
                  ]
               },
               {
                  "object": "GoHArtExhibitTables.GoHArtExhibitTable-0",
                  "doc": "The table 'GoHArtExhibitTables.GoHArtExhibitTable-0' is from the layouts in the furniture.model.json file.",
                  "data": [
                     {
                        "doc": "The place-name is used as the base name for placed objects located on GoHArtExhibitTables.GoHArtExhibitTable-0.",
                        "place-name": "table-test-1",
                        "options": {
                           "placer": "TablePlacer",
                           "doc": "The 'TablePlacer' uses the data below to size and position the art.",
                           "moreInfoData": {
                              "text": "This is just a test popup.",
                              "title": "Table Test 1"
                           }
                        },
                        "data": {
                           "doc": "The origin-corner value lets you specify what corner of the table is the origin point for X/Y co-ordinates, values are 'nw', 'ne', 'sw', and 'se'. Note that the user spawns in the NW corner of Squid Hall facing SE.",
                           "textures": [
                              {
                                 "size": [
                                    0.3,
                                    0.225
                                 ],
                                 "doc": "Size is WxH.",
                                 "position": [
                                    0,
                                    0
                                 ],
                                 "texture": "Ai-Weiwei-1"
                              },
                              {
                                 "size": [
                                    0.3,
                                    0.4
                                 ],
                                 "doc": "Size and position must fit with table size of X=0.9 and Y=0.375.",
                                 "position": [
                                    0.4,
                                    0
                                 ],
                                 "texture": "Ai-Weiwei-2"
                              },
                              {
                                 "size": [
                                    0.3,
                                    0.225
                                 ],
                                 "doc": "Size should reflect proportions of original image.",
                                 "position": [
                                    0.9,
                                    0.3
                                 ],
                                 "texture": "Ai-Weiwei-3"
                              }
                           ],
                           "origin-corner": "se"
                        }
                     }
                  ]
               },
               {
                  "object": "artshow.ArtShowDesk-2",
                  "data": [
                     {
                        "place-name": "table-test-2",
                        "options": {
                           "placer": "TablePlacer",
                           "moreInfoData": {
                              "text": "This is just a test popup.",
                              "title": "Table Test 1"
                           }
                        },
                        "data": {
                           "textures": [
                              {
                                 "size": [
                                    0.3,
                                    0.225
                                 ],
                                 "position": [
                                    0,
                                    0
                                 ],
                                 "texture": "Ai-Weiwei-1"
                              },
                              {
                                 "size": [
                                    0.3,
                                    0.4
                                 ],
                                 "position": [
                                    0.4,
                                    0
                                 ],
                                 "texture": "Ai-Weiwei-2"
                              },
                              {
                                 "size": [
                                    0.3,
                                    0.225
                                 ],
                                 "position": [
                                    0.9,
                                    0.3
                                 ],
                                 "texture": "Ai-Weiwei-3"
                              }
                           ],
                           "origin-corner": "sw"
                        }
                     }
                  ]
               },
            ]
         },
      }
   };
})();
SQUIDSPACE.addAutoloadModule(pipelineexample_aw);