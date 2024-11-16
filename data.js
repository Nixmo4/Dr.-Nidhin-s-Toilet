var APP_DATA = {
  "scenes": [
    {
      "id": "0-dry-area",
      "name": "Dry Area",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.014497143848533511,
        "pitch": 0.3551908077353101,
        "fov": 1.2733156773635639
      },
      "linkHotspots": [
        {
          "yaw": -1.1599195294050038,
          "pitch": 0.20741889258999535,
          "rotation": 0.7853981633974483,
          "target": "1-wet-area"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-wet-area",
      "name": "Wet Area",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.08937631909371291,
        "pitch": -0.13530704817186567,
        "fov": 1.2733156773635639
      },
      "linkHotspots": [
        {
          "yaw": 1.6177472845550653,
          "pitch": 0.17473238390067358,
          "rotation": 3.9269908169872414,
          "target": "0-dry-area"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Dr.Nidhin's Toilet",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
