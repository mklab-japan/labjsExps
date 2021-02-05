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
      "filePrefix": "introjsdemo",
      "path": undefined
    }
  ],
  "metadata": {
    "title": "introJSdemo",
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
          "title": "\u003Cspan data-intro='ご参加ありがとうございます😃'\u003Eはじめに\u003C\u002Fspan\u003E",
          "content": "\u003Cspan data-intro='記憶課題に組んでいただきます。'\u003E本実験では記憶課題を実施します。\u003C\u002Fspan\u003E"
        },
        {
          "required": true,
          "type": "text",
          "title": "覚える単語の例",
          "content": "\u003Cspan data-intro='このような単語がでてくるので覚えてください。'\u003E果物 - リンゴ\u003C\u002Fspan\u003E"
        }
      ],
      "scrollTop": true,
      "submitButtonText": "終了",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {
        "run": function anonymous(
) {
//run introJS
introJs().setOptions({
  nextLabel: '次へ',
  prevLabel: '戻る',
  doneLabel: '終了'
}).start();
}
      },
      "title": "introJSdemo"
    }
  ]
})

// Let's go!
study.run()