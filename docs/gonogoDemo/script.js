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
      "filePrefix": "go_nogo_demo",
      "path": undefined
    }
  ],
  "metadata": {
    "title": "go_nogo_demo",
    "description": "",
    "repository": "",
    "contributors": "Masanori Kobayashi"
  },
  "messageHandlers": {},
  "files": {},
  "responses": {},
  "content": [
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "content": "3以外はスペースを押してください。数字が消えても次の試行まで反応は有効です（任意の時間経過まで反応しても移動しません）。",
          "title": "Go\u002FNogo課題"
        }
      ],
      "scrollTop": true,
      "submitButtonText": "次へ",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Instruction"
    },
    {
      "type": "lab.flow.Sequence",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Main",
      "content": [
        {
          "type": "lab.html.Screen",
          "files": {},
          "responses": {},
          "parameters": {},
          "messageHandlers": {},
          "title": "Start",
          "content": "\n\u003Cmain class=\"content-horizontal-center content-vertical-center\"\u003E\n  \u003Cdiv\u003E\n    \u003Cspan style = \"font-size: 6vh\"\u003ESTART!\u003C\u002Fspan\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fmain\u003E",
          "timeout": "1000"
        },
        {
          "type": "lab.flow.Loop",
          "templateParameters": [
            {
              "item": "1",
              "type": "go"
            },
            {
              "item": "2",
              "type": "go"
            },
            {
              "item": "3",
              "type": "nogo"
            },
            {
              "item": "4",
              "type": "go"
            },
            {
              "item": "5",
              "type": "go"
            },
            {
              "item": "6",
              "type": "go"
            },
            {
              "item": "7",
              "type": "go"
            },
            {
              "item": "8",
              "type": "go"
            },
            {
              "item": "9",
              "type": "go"
            }
          ],
          "sample": {
            "mode": "draw-shuffle",
            "n": ""
          },
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "go_nogo_phase",
          "shuffleGroups": [],
          "template": {
            "type": "lab.flow.Sequence",
            "files": {},
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {
              "before:prepare": function anonymous(
) {
//nogo反応（無反応時の出力）をデフォルトとして指定しておく
//今回は手続き上は繰り返し反応してもOKですが，1回だけ反応してほしい場合もあるので，respondenedで1回反応したらロックするように処理をしています

//無反応時の反応をデータに（仮に）入れておく
//今回はnogo反応と，条件に応じた正誤（例.nogo試行ならnogoは正答）を入れておく

this.data.response = "nogo";

if(this.parameters.type == "go"){
    this.data.correct = "incorrect";
}
else if(this.parameters.type == "nogo"){
  this.data.correct = "correct";
}

//反応の有無を記録する変数
let responded = false;

//go反応（スペースボタン）があった場合に反応記録と正誤判定

//スペースを押した場合
this.options.events['keypress(Space)'] = (e) =>
{
  e.preventDefault();

  //反応済みの場合は何もしない
  if(responded)
  {
    return;
  }

  //初回の場合
  else{
    //反応時間を記録
    this.data.responseTime = e.timeStamp - this.internals.timestamps.show;

    //go反応を記録
    this.data.response = "go";

    //正誤判断
    if(this.parameters.type == "go"){
      this.data.correct = "correct";
    }
    else if(this.parameters.type == "nogo"){
      this.data.correct = "incorrect";
    }
    //反応済みと記録
    responded = true;
  }
}
}
            },
            "title": "go_nogo_trial",
            "content": [
              {
                "type": "lab.html.Screen",
                "files": {},
                "responses": {},
                "parameters": {},
                "messageHandlers": {},
                "title": "go_nogo_item",
                "content": "\n\u003Cmain class=\"content-horizontal-center content-vertical-center\"\u003E\n  \u003Cdiv\u003E\n    \u003Cspan style = \"font-size: 6vh\"\u003E${this.parameters.item}\u003C\u002Fspan\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fmain\u003E",
                "timeout": "500"
              },
              {
                "type": "lab.html.Screen",
                "files": {},
                "responses": {},
                "parameters": {},
                "messageHandlers": {},
                "title": "blank",
                "timeout": "2000"
              }
            ]
          }
        }
      ]
    }
  ]
})

// Let's go!
study.run()