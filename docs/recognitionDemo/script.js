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
      "type": "lab.flow.Loop",
      "templateParameters": [
        {
          "item": "リンゴ"
        },
        {
          "item": "バッタ"
        }
      ],
      "sample": {
        "mode": "draw-shuffle"
      },
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "learningPhase",
      "shuffleGroups": [],
      "template": {
        "type": "lab.flow.Sequence",
        "files": {},
        "responses": {
          "": ""
        },
        "parameters": {},
        "messageHandlers": {},
        "title": "learningTrial",
        "content": [
          {
            "type": "lab.html.Page",
            "items": [
              {
                "required": true,
                "type": "html",
                "content": "\u003Cdiv class = \"content-horizontal-center content-vertical-center\"\u003E\n  \u003Ch1\u003E+\u003C\u002Fh1\u003E\n\u003C\u002Fdiv\u003E",
                "name": ""
              }
            ],
            "scrollTop": true,
            "submitButtonText": "Continue →",
            "submitButtonPosition": "hidden",
            "files": {},
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "fixation",
            "timeout": "1000"
          },
          {
            "type": "lab.html.Page",
            "items": [
              {
                "required": true,
                "type": "html",
                "content": "\u003Cdiv class = \"content-horizontal-center content-vertical-center\"\u003E\n  \u003Ch1\u003E ${this.parameters.item} \u003C\u002Fh1\u003E\n\u003C\u002Fdiv\u003E",
                "name": ""
              }
            ],
            "scrollTop": true,
            "submitButtonText": "Continue →",
            "submitButtonPosition": "hidden",
            "files": {},
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "item",
            "timeout": "1000"
          },
          {
            "type": "lab.html.Page",
            "items": [
              {
                "type": "text"
              }
            ],
            "scrollTop": true,
            "submitButtonText": "Continue →",
            "submitButtonPosition": "hidden",
            "files": {},
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "blank",
            "timeout": "500"
          }
        ]
      }
    },
    {
      "type": "lab.flow.Loop",
      "templateParameters": [
        {
          "correctResponse": "correct"
        },
        {
          "correctResponse": "incorrect"
        }
      ],
      "sample": {
        "mode": "draw-shuffle",
        "n": "500"
      },
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {
        "before:prepare": function anonymous(
) {
const condition = this.random.choice(['delay', 'control']);
this.state.condition = condition;
}
      },
      "title": "mathPhase",
      "timeout": "30000",
      "tardy": true,
      "skip": "${this.state.condition == 'control'}",
      "shuffleGroups": [],
      "template": {
        "type": "lab.flow.Sequence",
        "files": {},
        "responses": {
          "": ""
        },
        "parameters": {},
        "messageHandlers": {},
        "title": "mathTrial",
        "content": [
          {
            "type": "lab.html.Page",
            "items": [
              {
                "required": true,
                "type": "html",
                "content": "\u003Cdiv class = \"content-horizontal-center\"\u003E\n  以下の計算式が正しいかを判断し，ボタンを押して判断してください。\n\u003C\u002Fdiv\u003E",
                "name": ""
              },
              {
                "required": true,
                "type": "html",
                "content": "\u003Cdiv class = \"alert content-horizontal-center\"\u003E\n  \u003Ch1\u003E${this.parameters.stimulus}\u003Ch1\u003E\n\u003C\u002Fdiv\u003E",
                "name": ""
              },
              {
                "required": true,
                "type": "html",
                "content": "\u003Cdiv class=\"w-l content-horizontal-space-around\"\u003E\n  \u003Cbutton id = 'correctBtn'\u003E\u003Ch3\u003E正しい\u003C\u002Fh3\u003E\u003C\u002Fbuton\u003E\n  \u003Cbutton id = 'incorrectBtn'\u003E\u003Ch3\u003E誤り\u003C\u002Fh3\u003E\u003C\u002Fbutton\u003E\n\u003C\u002Fdiv\u003E",
                "name": ""
              }
            ],
            "scrollTop": true,
            "submitButtonText": "Continue →",
            "submitButtonPosition": "hidden",
            "files": {},
            "responses": {
              "click button#correctBtn": "correct",
              "click button#incorrectBtn": "incorrect"
            },
            "parameters": {},
            "messageHandlers": {
              "before:prepare": function anonymous(
) {
const mathArray = [];
let mathAnswer = 0;

//1〜9の範囲からランダムに3つの数字を生成
//合計をmathAnswerに入れておく
for (i = 0; i < 3; i++)
{
  mathArray[i] = Math.floor(Math.random()*10) + 1
  mathAnswer += mathArray[i]
}

//誤った回答を出す場合は乱数を答えに加える
if(this.parameters.correctResponse == 'incorrect')
{ 
  mathAnswer　+= this.random.choice([-2,-1,1,2])
}

//数式をテキストとしてまとめる
const mathText = String(mathArray[0]) + ' + ' + String(mathArray[1]) + ' + ' + String(mathArray[2]) + ' = ' + String(mathAnswer) + ' ?';
this.parameters.stimulus = mathText;
}
            },
            "title": "math",
            "correctResponse": "${this.parameters.correctResponse}"
          },
          {
            "type": "lab.html.Page",
            "items": [
              {
                "required": true,
                "type": "html",
                "content": "\u003Cdiv class = \"content-horizontal-center\"\u003E\n  \u003Ch1 style=\"color: tomato;\"\u003E${state.correct? '○' : '×'}\u003C\u002Fh1\u003E\n\u003C\u002Fdiv\u003E",
                "name": ""
              }
            ],
            "scrollTop": true,
            "submitButtonText": "Continue →",
            "submitButtonPosition": "hidden",
            "files": {},
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "feedback",
            "tardy": true,
            "timeout": "1000"
          },
          {
            "type": "lab.html.Page",
            "items": [
              {
                "type": "text"
              }
            ],
            "scrollTop": true,
            "submitButtonText": "Continue →",
            "submitButtonPosition": "hidden",
            "files": {},
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "blank",
            "timeout": "500"
          }
        ]
      }
    },
    {
      "type": "lab.flow.Loop",
      "templateParameters": [
        {
          "item": "リンゴ",
          "itemType": "old"
        },
        {
          "item": "バッタ",
          "itemType": "old"
        },
        {
          "item": "ブドウ",
          "itemType": "new"
        },
        {
          "item": "チョウ",
          "itemType": "new"
        }
      ],
      "sample": {
        "mode": "draw-shuffle"
      },
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "recognitionPhase",
      "shuffleGroups": [],
      "template": {
        "type": "lab.flow.Sequence",
        "files": {},
        "responses": {
          "": ""
        },
        "parameters": {},
        "messageHandlers": {},
        "title": "recognitionTrial",
        "content": [
          {
            "type": "lab.html.Page",
            "items": [
              {
                "required": true,
                "type": "html",
                "content": "\u003Cdiv class = \"content-horizontal-center content-vertical-center\"\u003E\n  \u003Ch1\u003E+\u003C\u002Fh1\u003E\n\u003C\u002Fdiv\u003E",
                "name": ""
              }
            ],
            "scrollTop": true,
            "submitButtonText": "Continue →",
            "submitButtonPosition": "hidden",
            "files": {},
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "fixation",
            "timeout": "1000"
          },
          {
            "type": "lab.html.Page",
            "items": [
              {
                "required": true,
                "type": "html",
                "content": "\u003Cdiv class = \"content-horizontal-center content-vertical-center\"\u003E\n  \u003Ch1\u003E ${this.parameters.item} \u003C\u002Fh1\u003E\n\u003C\u002Fdiv\u003E\n\n\u003Cdiv class = \"content-horizontal-space-around content-vertical-center\"\u003E\n  \u003Cbutton id =\"oldBtn\"\u003E見た\u003C\u002Fbutton\u003E  \u003Cbutton id = \"newBtn\"\u003E見てない\u003C\u002Fbutton\u003E\n\u003C\u002Fdiv\u003E",
                "name": ""
              }
            ],
            "scrollTop": true,
            "submitButtonText": "Continue →",
            "submitButtonPosition": "hidden",
            "files": {},
            "responses": {
              "click button#oldBtn": "old",
              "click button#newBtn": "new"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "item",
            "correctResponse": "${this.parameters.itemType}"
          },
          {
            "type": "lab.html.Page",
            "items": [
              {
                "type": "text"
              }
            ],
            "scrollTop": true,
            "submitButtonText": "Continue →",
            "submitButtonPosition": "hidden",
            "files": {},
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "blank",
            "timeout": "500"
          }
        ]
      }
    }
  ]
})

// Let's go!
study.run()