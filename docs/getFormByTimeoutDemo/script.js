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
      "filePrefix": "getformbytimeout",
      "path": undefined
    }
  ],
  "metadata": {
    "title": "getFormByTimeout",
    "description": "",
    "repository": "",
    "contributors": "Masanori Kobayashi"
  },
  "files": {},
  "responses": {},
  "content": [
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "title": "1ヶ月後に山形県を旅行しているという想像を行ってください",
          "content": "10秒経つと次に移ります"
        }
      ],
      "scrollTop": true,
      "submitButtonText": "Continue →",
      "submitButtonPosition": "hidden",
      "files": {},
      "responses": {},
      "parameters": {},
      "messageHandlers": {},
      "title": "cue",
      "timeout": "10000"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "required": true,
          "type": "textarea",
          "label": "先ほど想像した内容をできるだけ詳しく入力してください。",
          "help": "10秒経つと次へ移ります。",
          "name": "response"
        }
      ],
      "scrollTop": true,
      "submitButtonText": "次へ",
      "submitButtonPosition": "hidden",
      "files": {},
      "responses": {},
      "parameters": {},
      "messageHandlers": {
        "end": function anonymous(
) {
this.data.response = document.getElementsByName("response")[0].value;
}
      },
      "title": "typing",
      "timeout": "10000"
    }
  ]
})

// Let's go!
study.run()