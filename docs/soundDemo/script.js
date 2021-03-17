// Define study
const study = lab.util.fromObject({
  "title": "root",
  "type": "lab.flow.Sequence",
  "parameters": {},
  "plugins": [
    {
      "type": "lab.plugins.Metadata",
      "path": undefined
    },
    {
      "type": "lab.plugins.Download",
      "filePrefix": "study",
      "path": undefined
    }
  ],
  "metadata": {
    "title": "",
    "description": "",
    "repository": "",
    "contributors": ""
  },
  "files": {},
  "responses": {},
  "content": [
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "title": "サウンドテスト",
          "content": "音を流すには下のボタンをクリックしてください。\n＊音を出すには参加者のインタラクションが必要なので，2個目以降のコンポーネントに配置してください。"
        }
      ],
      "scrollTop": true,
      "submitButtonText": "音を出す",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "start"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "title": "ラーメン大好き"
        }
      ],
      "scrollTop": true,
      "submitButtonText": "次へ",
      "submitButtonPosition": "right",
      "files": {
        "ramen.mp3": "embedded\u002F9c1db6b4713671c1d9ba37dd55d55e0d228d83d64f9a744b14077a80ff9af5dc.mp3"
      },
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "sound",
      "timeline": [
        {
          "type": "sound",
          "payload": {
            "src": "${ this.files[\"ramen.mp3\"] }",
            "loop": false
          },
          "gain": "",
          "pan": "",
          "rampUp": "",
          "rampDown": "",
          "start": 0,
          "stop": "10000",
          "priority": 0
        }
      ]
    }
  ]
})

// Let's go!
study.run()