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
          "required": true,
          "type": "html",
          "content": "\u003Ciframe width=\"560\" height=\"315\" src=\"https:\u002F\u002Fwww.youtube.com\u002Fembed\u002F3p6JSSdu-7E\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen\u003E\u003C\u002Fiframe\u003E",
          "name": ""
        },
        {
          "required": true,
          "type": "text",
          "title": "",
          "content": "↑の動画を再生し，視聴が終わったら，右下の「次へ」をクリックしてください。"
        }
      ],
      "scrollTop": true,
      "submitButtonText": "動画の視聴が終わったので，次へいく",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {},
      "parameters": {},
      "messageHandlers": {},
      "title": "movie"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "title": "動画の印象について評定してください"
        },
        {
          "required": true,
          "type": "radio",
          "options": [
            {
              "label": "非常にネガティブ",
              "coding": "1"
            },
            {
              "label": "ネガティブ",
              "coding": "2"
            },
            {
              "label": "ニュートラル",
              "coding": "3"
            },
            {
              "label": "ポジティブ",
              "coding": "4"
            },
            {
              "label": "非常にポジティブ",
              "coding": "5"
            }
          ],
          "label": "感情価",
          "name": "valance"
        }
      ],
      "scrollTop": true,
      "submitButtonText": "次へ",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {},
      "parameters": {},
      "messageHandlers": {},
      "title": "questionnaire"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "title": "調査終了です。ありがとうございました。",
          "content": "終了ボタンをクリックした後，ウィンドウを閉じてください。"
        }
      ],
      "scrollTop": true,
      "submitButtonText": "終了",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {},
      "parameters": {},
      "messageHandlers": {},
      "title": "thanks"
    }
  ]
})

// Let's go!
study.run()