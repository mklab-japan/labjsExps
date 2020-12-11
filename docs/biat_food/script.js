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
      "filePrefix": "biat",
      "path": undefined
    }
  ],
  "metadata": {
    "title": "BIAT",
    "description": "The brief version of the Implicit Association Test",
    "repository": "",
    "contributors": "Masanori Kobayashi and Takayuki Osugi (Yamagata Univ.)"
  },
  "files": {},
  "responses": {},
  "content": [
    {
      "type": "lab.flow.Loop",
      "templateParameters": [],
      "sample": {
        "mode": "draw-shuffle"
      },
      "files": {},
      "responses": {},
      "parameters": {},
      "messageHandlers": {
        "before:prepare": async function anonymous(
) {
let participantID;

//JATOS以外の場合は参加者番号をランダム生成する
if (typeof jatos == 'undefined') {
  participantID = this.random.range(10000, 100000);
}
//JATOS利用時は参加者番号にJATOSのWorker IDを置き換える
else{
  participantID = await new Promise((resolve) => {
    jatos.onLoad(() => resolve(jatos.workerId))
  })
}

//作成した(または読み込んだ)参加者番号をlab.jsに読み込む
this.options.templateParameters.push({participantID: participantID})
}
      },
      "title": "Global loop",
      "plugins": [
        {
          "type": "fullscreen",
          "message": "この実験はフルスクリーンで実施します。準備ができたら，下のボタンを押してください。",
          "hint": "\u003Cbutton\u003Eフルスクリーンを許可する\u003C\u002Fbutton\u003E",
          "path": "lab.plugins.Fullscreen"
        }
      ],
      "shuffleGroups": [],
      "template": {
        "type": "lab.flow.Sequence",
        "files": {},
        "responses": {},
        "parameters": {},
        "messageHandlers": {},
        "title": "Global Sequence",
        "content": [
          {
            "type": "lab.html.Page",
            "items": [
              {
                "type": "text",
                "title": "ご参加ありがとうございます。",
                "content": "本研究では，単語を分類する課題を行っていただきます。"
              },
              {
                "required": true,
                "type": "text",
                "content": "",
                "title": "準備ができた方は「次へ」を押して，開始してください。"
              },
              {
                "required": true,
                "type": "html",
                "content": "\u003Cdiv class = 'content-horizontal-center'\u003E\u003Cbutton id = \"nextBtn\"\u003E次へ\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E",
                "name": ""
              }
            ],
            "scrollTop": true,
            "submitButtonText": "次へ",
            "submitButtonPosition": "hidden",
            "files": {
              "inst.001.png": "embedded\u002F3c3debfd0f862e2cd8b74bd5429a56760959056bfb6ba3c435ae0e1cc2442603.png"
            },
            "responses": {},
            "parameters": {},
            "messageHandlers": {},
            "title": "Instruction"
          },
          {
            "type": "lab.flow.Loop",
            "templateParameters": [
              {
                "concept1": "鳥",
                "attitude1": "快"
              }
            ],
            "sample": {
              "mode": "draw-shuffle"
            },
            "files": {},
            "responses": {},
            "parameters": {},
            "messageHandlers": {
              "run": function anonymous(
) {
document.body.style.cursor = 'none'
},
              "end": function anonymous(
) {
document.body.style.cursor = 'auto'
}
            },
            "title": "practiceBlock",
            "shuffleGroups": [],
            "template": {
              "type": "lab.flow.Sequence",
              "files": {},
              "responses": {},
              "parameters": {},
              "messageHandlers": {},
              "title": "\u002F",
              "content": [
                {
                  "type": "lab.flow.Sequence",
                  "files": {},
                  "responses": {},
                  "parameters": {},
                  "messageHandlers": {},
                  "title": "instructionSequence",
                  "content": [
                    {
                      "type": "lab.html.Page",
                      "items": [
                        {
                          "type": "text",
                          "title": "カテゴリ分類課題",
                          "content": "これから以下のように画面の真ん中に様々な単語が表示されます。"
                        },
                        {
                          "required": true,
                          "type": "image",
                          "width": "",
                          "height": "",
                          "src": "${ this.files[\"inst_1.jpg\"] }",
                          "name": ""
                        },
                        {
                          "required": true,
                          "type": "text",
                          "title": "単語が「\u003Cspan style = \"color: #0070d9;\"\u003E${this.parameters.concept1}\u003C\u002Fspan\u003E」または「\u003Cspan style = \"color: #ff8800;\"\u003E${this.parameters.attitude1}\u003C\u002Fspan\u003E」に当てはまる場合",
                          "content": "→「Jキー」を押してください"
                        },
                        {
                          "required": true,
                          "type": "text",
                          "title": "単語が「\u003Cspan style = \"color: #0070d9;\"\u003E${this.parameters.concept1}\u003C\u002Fspan\u003E」または「\u003Cspan style = \"color: #ff8800;\"\u003E${this.parameters.attitude1}\u003C\u002Fspan\u003E」に当てはまらない場合",
                          "content": "→「Fキー」を押してください"
                        },
                        {
                          "required": true,
                          "type": "text",
                          "content": "\u003Cdiv style = \"text-align : center; color: tomato\"\u003Eスペースを押すと次に進みます\u003C\u002Fdiv\u003E"
                        }
                      ],
                      "scrollTop": true,
                      "submitButtonText": "Continue →",
                      "submitButtonPosition": "hidden",
                      "files": {
                        "inst_1.jpg": "embedded\u002F7d3fc4e4d2a6b0fe056324b9b7999380f541779418eafacae54990e8e2ce05d3.jpg"
                      },
                      "responses": {
                        "keydown(Space)": "space"
                      },
                      "parameters": {},
                      "messageHandlers": {},
                      "title": "instruction_1"
                    },
                    {
                      "type": "lab.html.Page",
                      "items": [
                        {
                          "type": "text",
                          "title": "分類は，できるだけ「速く」かつ「正確」に行ってください！",
                          "content": "間違えた場合は以下のように「×」が表示されるので，\u003Cstrong\u003E正しいキーを押し直してください\u003C\u002Fstrong\u003E。"
                        },
                        {
                          "required": true,
                          "type": "image",
                          "width": "",
                          "height": "",
                          "src": "${ this.files[\"inst_2.jpg\"] }",
                          "name": ""
                        },
                        {
                          "required": true,
                          "type": "text",
                          "content": "",
                          "title": "それでは，これから練習を行っていただきます。"
                        },
                        {
                          "required": true,
                          "type": "text",
                          "content": "\u003Cdiv style = \"text-align : center; color: tomato\"\u003Eスペースを押すと次に進みます\u003C\u002Fdiv\u003E"
                        }
                      ],
                      "scrollTop": true,
                      "submitButtonText": "Continue →",
                      "submitButtonPosition": "hidden",
                      "files": {
                        "inst_2.jpg": "embedded\u002F857e96d161a11a153fe1b02e09aba92b24f32065f612f85fadf14571d17821e3.jpg"
                      },
                      "responses": {
                        "keydown(Space)": "space"
                      },
                      "parameters": {},
                      "messageHandlers": {},
                      "title": "instruction_2"
                    },
                    {
                      "type": "lab.html.Page",
                      "items": [
                        {
                          "type": "text",
                          "title": "以下のような分類基準になっています。分類基準を確認してください。",
                          "content": ""
                        },
                        {
                          "required": true,
                          "type": "text",
                          "title": "単語が「\u003Cspan style = \"color: #0070d9;\"\u003E${this.parameters.concept1}\u003C\u002Fspan\u003E」または「\u003Cspan style = \"color: #ff8800;\"\u003E${this.parameters.attitude1}\u003C\u002Fspan\u003E」に当てはまる場合",
                          "content": "→「Jキー」を押してください"
                        },
                        {
                          "required": true,
                          "type": "text",
                          "title": "単語が「\u003Cspan style = \"color: #0070d9;\"\u003E${this.parameters.concept1}\u003C\u002Fspan\u003E」または「\u003Cspan style = \"color: #ff8800;\"\u003E${this.parameters.attitude1}\u003C\u002Fspan\u003E」に当てはまらない場合",
                          "content": "→「Fキー」を押してください"
                        },
                        {
                          "required": true,
                          "type": "text",
                          "title": "分類は，できるだけ「速く」かつ「正確」に行ってください！",
                          "content": "間違えた場合は「×」が表示されるので，正しいキーを押し直してください。"
                        },
                        {
                          "required": true,
                          "type": "text",
                          "content": "\u003Cdiv style = \"text-align : center; color: tomato\"\u003E準備ができたら，スペースを押してください。分類課題を開始します。\u003C\u002Fdiv\u003E",
                          "title": ""
                        }
                      ],
                      "scrollTop": true,
                      "submitButtonText": "Continue →",
                      "submitButtonPosition": "hidden",
                      "files": {},
                      "responses": {
                        "keydown(Space)": "space"
                      },
                      "parameters": {},
                      "messageHandlers": {},
                      "title": "instruction_3"
                    },
                    {
                      "type": "lab.canvas.Screen",
                      "content": [
                        {
                          "type": "i-text",
                          "left": 0,
                          "top": 0,
                          "angle": 0,
                          "width": 203.1,
                          "height": 56.5,
                          "stroke": null,
                          "strokeWidth": 1,
                          "fill": "tomato",
                          "text": "START ! ",
                          "fontStyle": "normal",
                          "fontWeight": "normal",
                          "fontSize": "50",
                          "fontFamily": "sans-serif",
                          "lineHeight": 1.16,
                          "textAlign": "center"
                        }
                      ],
                      "viewport": [
                        800,
                        600
                      ],
                      "files": {},
                      "responses": {},
                      "parameters": {},
                      "messageHandlers": {},
                      "title": "start",
                      "timeout": "1000"
                    },
                    {
                      "type": "lab.canvas.Screen",
                      "content": [
                        {
                          "type": "i-text",
                          "left": 0,
                          "top": -275,
                          "angle": 0,
                          "width": 416.83,
                          "height": 36.16,
                          "stroke": "",
                          "strokeWidth": 1,
                          "fill": "#0070d9",
                          "text": "${this.parameters.concept1}",
                          "fontStyle": "normal",
                          "fontWeight": "normal",
                          "fontSize": "32",
                          "fontFamily": "sans-serif",
                          "lineHeight": 1.16,
                          "textAlign": "center"
                        },
                        {
                          "type": "i-text",
                          "left": 0,
                          "top": -242,
                          "angle": 0,
                          "width": 60,
                          "height": 22.6,
                          "stroke": "",
                          "strokeWidth": 1,
                          "fill": "#aaaaaa",
                          "text": "または",
                          "fontStyle": "normal",
                          "fontWeight": "normal",
                          "fontSize": "20",
                          "fontFamily": "sans-serif",
                          "lineHeight": 1.16,
                          "textAlign": "center"
                        },
                        {
                          "type": "i-text",
                          "left": 0,
                          "top": -210,
                          "angle": 0,
                          "width": 414.4,
                          "height": 36.16,
                          "stroke": null,
                          "strokeWidth": 1,
                          "fill": "#ff8800",
                          "text": "${this.parameters.attitude1}",
                          "fontStyle": "normal",
                          "fontWeight": "normal",
                          "fontSize": "32",
                          "fontFamily": "sans-serif",
                          "lineHeight": 1.16,
                          "textAlign": "center"
                        },
                        {
                          "type": "i-text",
                          "left": 0,
                          "top": 0,
                          "angle": 0,
                          "width": 33.21,
                          "height": 51.98,
                          "stroke": "",
                          "strokeWidth": 1,
                          "fill": "#000000",
                          "text": "+",
                          "fontStyle": "normal",
                          "fontWeight": "normal",
                          "fontSize": "46",
                          "fontFamily": "sans-serif",
                          "lineHeight": 1.16,
                          "textAlign": "center"
                        },
                        {
                          "type": "i-text",
                          "left": 300,
                          "top": 262,
                          "angle": 0,
                          "width": 180,
                          "height": 67.53,
                          "stroke": null,
                          "strokeWidth": 1,
                          "fill": "#555555",
                          "text": "どちらかのカテゴリに\n当てはまる場合\n→ Jキー",
                          "fontStyle": "normal",
                          "fontWeight": "normal",
                          "fontSize": "18",
                          "fontFamily": "sans-serif",
                          "lineHeight": 1.16,
                          "textAlign": "center"
                        },
                        {
                          "type": "i-text",
                          "left": -300,
                          "top": 262,
                          "angle": 0,
                          "width": 180,
                          "height": 67.53,
                          "stroke": null,
                          "strokeWidth": 1,
                          "fill": "#555555",
                          "text": "どちらのカテゴリにも\n当てはまらない場合\n→ Fキー",
                          "fontStyle": "normal",
                          "fontWeight": "normal",
                          "fontSize": "18",
                          "fontFamily": "sans-serif",
                          "lineHeight": 1.16,
                          "textAlign": "center"
                        }
                      ],
                      "viewport": [
                        800,
                        600
                      ],
                      "files": {},
                      "responses": {},
                      "parameters": {},
                      "messageHandlers": {},
                      "title": "fixation",
                      "timeout": "1000"
                    }
                  ]
                },
                {
                  "type": "lab.canvas.Frame",
                  "context": "\u003C!-- Nested components use this canvas --\u003E\n\u003Ccanvas \u002F\u003E",
                  "contextSelector": "canvas",
                  "files": {},
                  "responses": {},
                  "parameters": {},
                  "messageHandlers": {},
                  "title": "practiceFrame",
                  "content": {
                    "type": "lab.flow.Sequence",
                    "files": {},
                    "responses": {},
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "\u002F",
                    "content": [
                      {
                        "type": "lab.flow.Loop",
                        "templateParameters": [
                          {
                            "examplar": "ハヤブサ",
                            "examplarCategory": "concept1"
                          },
                          {
                            "examplar": "カラス",
                            "examplarCategory": "concept1"
                          },
                          {
                            "examplar": "スズメ",
                            "examplarCategory": "concept1"
                          },
                          {
                            "examplar": "アヒル",
                            "examplarCategory": "concept1"
                          },
                          {
                            "examplar": "バッタ",
                            "examplarCategory": "concept2"
                          },
                          {
                            "examplar": "カブトムシ",
                            "examplarCategory": "concept2"
                          },
                          {
                            "examplar": "クワガタ",
                            "examplarCategory": "concept2"
                          },
                          {
                            "examplar": "スズムシ",
                            "examplarCategory": "concept2"
                          }
                        ],
                        "sample": {
                          "mode": "draw-shuffle",
                          "n": "4"
                        },
                        "files": {},
                        "responses": {},
                        "parameters": {},
                        "messageHandlers": {},
                        "title": "practiceTrialLoop_burn_in",
                        "shuffleGroups": [],
                        "template": {
                          "type": "lab.flow.Sequence",
                          "files": {},
                          "responses": {},
                          "parameters": {},
                          "messageHandlers": {},
                          "title": "\u002F",
                          "content": [
                            {
                              "type": "lab.canvas.Screen",
                              "content": [
                                {
                                  "type": "i-text",
                                  "left": 0,
                                  "top": -275,
                                  "angle": 0,
                                  "width": 416.83,
                                  "height": 36.16,
                                  "stroke": "",
                                  "strokeWidth": 1,
                                  "fill": "#0070d9",
                                  "text": "${this.parameters.concept1}",
                                  "fontStyle": "normal",
                                  "fontWeight": "normal",
                                  "fontSize": "32",
                                  "fontFamily": "sans-serif",
                                  "lineHeight": 1.16,
                                  "textAlign": "center"
                                },
                                {
                                  "type": "i-text",
                                  "left": 0,
                                  "top": -242,
                                  "angle": 0,
                                  "width": 60,
                                  "height": 22.6,
                                  "stroke": "",
                                  "strokeWidth": 1,
                                  "fill": "#aaaaaa",
                                  "text": "または",
                                  "fontStyle": "normal",
                                  "fontWeight": "normal",
                                  "fontSize": "20",
                                  "fontFamily": "sans-serif",
                                  "lineHeight": 1.16,
                                  "textAlign": "center"
                                },
                                {
                                  "type": "i-text",
                                  "left": 0,
                                  "top": -210,
                                  "angle": 0,
                                  "width": 414.4,
                                  "height": 36.16,
                                  "stroke": null,
                                  "strokeWidth": 1,
                                  "fill": "#ff8800",
                                  "text": "${this.parameters.attitude1}",
                                  "fontStyle": "normal",
                                  "fontWeight": "normal",
                                  "fontSize": "32",
                                  "fontFamily": "sans-serif",
                                  "lineHeight": 1.16,
                                  "textAlign": "center"
                                },
                                {
                                  "type": "i-text",
                                  "left": 0,
                                  "top": 0,
                                  "angle": 0,
                                  "width": 599.47,
                                  "height": 51.98,
                                  "stroke": "",
                                  "strokeWidth": 1,
                                  "fill": "${this.parameters.examplarCategory == \"concept1\" |this.parameters.examplarCategory == \"concept2\"? \"#0070d9\" : \"#ff8800\"}",
                                  "text": "${this.parameters.examplar}",
                                  "fontStyle": "normal",
                                  "fontWeight": "normal",
                                  "fontSize": "46",
                                  "fontFamily": "sans-serif",
                                  "lineHeight": 1.16,
                                  "textAlign": "center"
                                },
                                {
                                  "type": "i-text",
                                  "left": 300,
                                  "top": 262,
                                  "angle": 0,
                                  "width": 180,
                                  "height": 67.53,
                                  "stroke": null,
                                  "strokeWidth": 1,
                                  "fill": "#555555",
                                  "text": "どちらかのカテゴリに\n当てはまる場合\n→ Jキー",
                                  "fontStyle": "normal",
                                  "fontWeight": "normal",
                                  "fontSize": "18",
                                  "fontFamily": "sans-serif",
                                  "lineHeight": 1.16,
                                  "textAlign": "center"
                                },
                                {
                                  "type": "i-text",
                                  "left": -300,
                                  "top": 262,
                                  "angle": 0,
                                  "width": 180,
                                  "height": 67.53,
                                  "stroke": null,
                                  "strokeWidth": 1,
                                  "fill": "#555555",
                                  "text": "どちらのカテゴリにも\n当てはまらない場合\n→ Fキー",
                                  "fontStyle": "normal",
                                  "fontWeight": "normal",
                                  "fontSize": "18",
                                  "fontFamily": "sans-serif",
                                  "lineHeight": 1.16,
                                  "textAlign": "center"
                                }
                              ],
                              "viewport": [
                                800,
                                600
                              ],
                              "files": {},
                              "responses": {},
                              "parameters": {},
                              "messageHandlers": {
                                "before:prepare": function anonymous(
) {
this.options.events['keydown'] = function(e) {
  //正答キーを指定
  let correctKey;
  let incorrectKey;
  if(this.parameters.examplarCategory == "concept1" |
  this.parameters.examplarCategory == "attitude1"){
    correctKey = "j"
    incorrectKey = "f"
  }
  else if(this.parameters.examplarCategory == "concept2" |
    this.parameters.examplarCategory == "attitude2"){
      correctKey = "f"
      incorrectKey = "j"
  }

  //キーに応じた応答（誤答時は押し直せるようにする）
  if(e.key == correctKey){
    this.data.response = "trueKey"
    this.data.correct = "correct";
    this.end();
  }
  else if(e.key == incorrectKey){
    this.data.correct = "incorrect";
    //×を表示する
    const canvas = this.options.el.querySelector('canvas');
    const ctx = canvas.getContext("2d");
    ctx.font = "40px 'sans-serif'";
    ctx.textAlign = "center"
    ctx.fillStyle = "red";
    ctx.fillText("×", 0, -50); 
  }
}
}
                              },
                              "title": "practiceTrial_burn_in"
                            },
                            {
                              "type": "lab.canvas.Screen",
                              "content": [
                                {
                                  "type": "i-text",
                                  "left": 0,
                                  "top": -275,
                                  "angle": 0,
                                  "width": 416.83,
                                  "height": 36.16,
                                  "stroke": "",
                                  "strokeWidth": 1,
                                  "fill": "#0070d9",
                                  "text": "${this.parameters.concept1}",
                                  "fontStyle": "normal",
                                  "fontWeight": "normal",
                                  "fontSize": "32",
                                  "fontFamily": "sans-serif",
                                  "lineHeight": 1.16,
                                  "textAlign": "center"
                                },
                                {
                                  "type": "i-text",
                                  "left": 0,
                                  "top": -242,
                                  "angle": 0,
                                  "width": 60,
                                  "height": 22.6,
                                  "stroke": "",
                                  "strokeWidth": 1,
                                  "fill": "#aaaaaa",
                                  "text": "または",
                                  "fontStyle": "normal",
                                  "fontWeight": "normal",
                                  "fontSize": "20",
                                  "fontFamily": "sans-serif",
                                  "lineHeight": 1.16,
                                  "textAlign": "center"
                                },
                                {
                                  "type": "i-text",
                                  "left": 0,
                                  "top": -210,
                                  "angle": 0,
                                  "width": 414.4,
                                  "height": 36.16,
                                  "stroke": null,
                                  "strokeWidth": 1,
                                  "fill": "#ff8800",
                                  "text": "${this.parameters.attitude1}",
                                  "fontStyle": "normal",
                                  "fontWeight": "normal",
                                  "fontSize": "32",
                                  "fontFamily": "sans-serif",
                                  "lineHeight": 1.16,
                                  "textAlign": "center"
                                },
                                {
                                  "type": "i-text",
                                  "left": 300,
                                  "top": 262,
                                  "angle": 0,
                                  "width": 180,
                                  "height": 67.53,
                                  "stroke": null,
                                  "strokeWidth": 1,
                                  "fill": "#555555",
                                  "text": "どちらかのカテゴリに\n当てはまる場合\n→ Jキー",
                                  "fontStyle": "normal",
                                  "fontWeight": "normal",
                                  "fontSize": "18",
                                  "fontFamily": "sans-serif",
                                  "lineHeight": 1.16,
                                  "textAlign": "center"
                                },
                                {
                                  "type": "i-text",
                                  "left": -300,
                                  "top": 262,
                                  "angle": 0,
                                  "width": 180,
                                  "height": 67.53,
                                  "stroke": null,
                                  "strokeWidth": 1,
                                  "fill": "#555555",
                                  "text": "どちらのカテゴリにも\n当てはまらない場合\n→ Fキー",
                                  "fontStyle": "normal",
                                  "fontWeight": "normal",
                                  "fontSize": "18",
                                  "fontFamily": "sans-serif",
                                  "lineHeight": 1.16,
                                  "textAlign": "center"
                                }
                              ],
                              "viewport": [
                                800,
                                600
                              ],
                              "files": {},
                              "responses": {},
                              "parameters": {},
                              "messageHandlers": {},
                              "title": "blank",
                              "timeout": "100"
                            }
                          ]
                        }
                      },
                      {
                        "type": "lab.flow.Loop",
                        "templateParameters": [
                          {
                            "examplar": "ハヤブサ",
                            "examplarCategory": "concept1"
                          },
                          {
                            "examplar": "カラス",
                            "examplarCategory": "concept1"
                          },
                          {
                            "examplar": "スズメ",
                            "examplarCategory": "concept1"
                          },
                          {
                            "examplar": "アヒル",
                            "examplarCategory": "concept1"
                          },
                          {
                            "examplar": "バッタ",
                            "examplarCategory": "concept2"
                          },
                          {
                            "examplar": "カブトムシ",
                            "examplarCategory": "concept2"
                          },
                          {
                            "examplar": "クワガタ",
                            "examplarCategory": "concept2"
                          },
                          {
                            "examplar": "スズムシ",
                            "examplarCategory": "concept2"
                          },
                          {
                            "examplar": "よい",
                            "examplarCategory": "attitude1"
                          },
                          {
                            "examplar": "うつくしい",
                            "examplarCategory": "attitude1"
                          },
                          {
                            "examplar": "すき",
                            "examplarCategory": "attitude1"
                          },
                          {
                            "examplar": "すばらしい",
                            "examplarCategory": "attitude1"
                          },
                          {
                            "examplar": "わるい",
                            "examplarCategory": "attitude2"
                          },
                          {
                            "examplar": "みにくい",
                            "examplarCategory": "attitude2"
                          },
                          {
                            "examplar": "きらい",
                            "examplarCategory": "attitude2"
                          },
                          {
                            "examplar": "きたない",
                            "examplarCategory": "attitude2"
                          }
                        ],
                        "sample": {
                          "mode": "draw-shuffle",
                          "n": ""
                        },
                        "files": {},
                        "responses": {},
                        "parameters": {},
                        "messageHandlers": {},
                        "title": "practiceTrialLoop",
                        "shuffleGroups": [],
                        "template": {
                          "type": "lab.flow.Sequence",
                          "files": {},
                          "responses": {},
                          "parameters": {},
                          "messageHandlers": {},
                          "title": "\u002F",
                          "content": [
                            {
                              "type": "lab.canvas.Screen",
                              "content": [
                                {
                                  "type": "i-text",
                                  "left": 0,
                                  "top": -275,
                                  "angle": 0,
                                  "width": 460.58,
                                  "height": 36.16,
                                  "stroke": "",
                                  "strokeWidth": 1,
                                  "fill": "#0070d9",
                                  "text": "${this.parameters.concept1}",
                                  "fontStyle": "normal",
                                  "fontWeight": "normal",
                                  "fontSize": "32",
                                  "fontFamily": "sans-serif",
                                  "lineHeight": 1.16,
                                  "textAlign": "center"
                                },
                                {
                                  "type": "i-text",
                                  "left": 0,
                                  "top": -242,
                                  "angle": 0,
                                  "width": 60,
                                  "height": 22.6,
                                  "stroke": "",
                                  "strokeWidth": 1,
                                  "fill": "#aaaaaa",
                                  "text": "または",
                                  "fontStyle": "normal",
                                  "fontWeight": "normal",
                                  "fontSize": "20",
                                  "fontFamily": "sans-serif",
                                  "lineHeight": 1.16,
                                  "textAlign": "center"
                                },
                                {
                                  "type": "i-text",
                                  "left": 0,
                                  "top": -210,
                                  "angle": 0,
                                  "width": 455.1,
                                  "height": 36.16,
                                  "stroke": null,
                                  "strokeWidth": 1,
                                  "fill": "#ff8800",
                                  "text": "${this.parameters.attitude1}",
                                  "fontStyle": "normal",
                                  "fontWeight": "normal",
                                  "fontSize": "32",
                                  "fontFamily": "sans-serif",
                                  "lineHeight": 1.16,
                                  "textAlign": "center"
                                },
                                {
                                  "type": "i-text",
                                  "left": 0,
                                  "top": 0,
                                  "angle": 0,
                                  "width": 655.41,
                                  "height": 51.98,
                                  "stroke": "",
                                  "strokeWidth": 1,
                                  "fill": "${this.parameters.examplarCategory == \"concept1\" |this.parameters.examplarCategory == \"concept2\"? \"#0070d9\" : \"#ff8800\"}",
                                  "text": "${this.parameters.examplar}",
                                  "fontStyle": "normal",
                                  "fontWeight": "normal",
                                  "fontSize": "46",
                                  "fontFamily": "sans-serif",
                                  "lineHeight": 1.16,
                                  "textAlign": "center"
                                },
                                {
                                  "type": "i-text",
                                  "left": 300,
                                  "top": 262,
                                  "angle": 0,
                                  "width": 180,
                                  "height": 67.53,
                                  "stroke": null,
                                  "strokeWidth": 1,
                                  "fill": "#555555",
                                  "text": "どちらかのカテゴリに\n当てはまる場合\n→ Jキー",
                                  "fontStyle": "normal",
                                  "fontWeight": "normal",
                                  "fontSize": "18",
                                  "fontFamily": "sans-serif",
                                  "lineHeight": 1.16,
                                  "textAlign": "center"
                                },
                                {
                                  "type": "i-text",
                                  "left": -300,
                                  "top": 262,
                                  "angle": 0,
                                  "width": 180,
                                  "height": 67.53,
                                  "stroke": null,
                                  "strokeWidth": 1,
                                  "fill": "#555555",
                                  "text": "どちらのカテゴリにも\n当てはまらない場合\n→ Fキー",
                                  "fontStyle": "normal",
                                  "fontWeight": "normal",
                                  "fontSize": "18",
                                  "fontFamily": "sans-serif",
                                  "lineHeight": 1.16,
                                  "textAlign": "center"
                                }
                              ],
                              "viewport": [
                                800,
                                600
                              ],
                              "files": {},
                              "responses": {},
                              "parameters": {},
                              "messageHandlers": {
                                "before:prepare": function anonymous(
) {
this.options.events['keydown'] = function(e) {
  //正答キーを指定
  let correctKey;
  let incorrectKey;
  if(this.parameters.examplarCategory == "concept1" |
  this.parameters.examplarCategory == "attitude1"){
    correctKey = "j"
    incorrectKey = "f"
  }
  else if(this.parameters.examplarCategory == "concept2" |
    this.parameters.examplarCategory == "attitude2"){
      correctKey = "f"
      incorrectKey = "j"
  }

  //キーに応じた応答（誤答時は押し直せるようにする）
  if(e.key == correctKey){
    this.data.response = "trueKey"
    this.data.correct = "correct";
    this.end();
  }
  else if(e.key == incorrectKey){
    this.data.correct = "incorrect";
    //×を表示する
    const canvas = this.options.el.querySelector('canvas');
    const ctx = canvas.getContext("2d");
    ctx.font = "40px 'sans-serif'";
    ctx.textAlign = "center"
    ctx.fillStyle = "red";
    ctx.fillText("×", 0, -50); 
  }
}
}
                              },
                              "title": "practiceTrial"
                            },
                            {
                              "type": "lab.canvas.Screen",
                              "content": [
                                {
                                  "type": "i-text",
                                  "left": 0,
                                  "top": -275,
                                  "angle": 0,
                                  "width": 416.83,
                                  "height": 36.16,
                                  "stroke": "",
                                  "strokeWidth": 1,
                                  "fill": "#0070d9",
                                  "text": "${this.parameters.concept1}",
                                  "fontStyle": "normal",
                                  "fontWeight": "normal",
                                  "fontSize": "32",
                                  "fontFamily": "sans-serif",
                                  "lineHeight": 1.16,
                                  "textAlign": "center"
                                },
                                {
                                  "type": "i-text",
                                  "left": 0,
                                  "top": -242,
                                  "angle": 0,
                                  "width": 60,
                                  "height": 22.6,
                                  "stroke": "",
                                  "strokeWidth": 1,
                                  "fill": "#aaaaaa",
                                  "text": "または",
                                  "fontStyle": "normal",
                                  "fontWeight": "normal",
                                  "fontSize": "20",
                                  "fontFamily": "sans-serif",
                                  "lineHeight": 1.16,
                                  "textAlign": "center"
                                },
                                {
                                  "type": "i-text",
                                  "left": 0,
                                  "top": -210,
                                  "angle": 0,
                                  "width": 414.4,
                                  "height": 36.16,
                                  "stroke": null,
                                  "strokeWidth": 1,
                                  "fill": "#ff8800",
                                  "text": "${this.parameters.attitude1}",
                                  "fontStyle": "normal",
                                  "fontWeight": "normal",
                                  "fontSize": "32",
                                  "fontFamily": "sans-serif",
                                  "lineHeight": 1.16,
                                  "textAlign": "center"
                                },
                                {
                                  "type": "i-text",
                                  "left": 300,
                                  "top": 262,
                                  "angle": 0,
                                  "width": 180,
                                  "height": 67.53,
                                  "stroke": null,
                                  "strokeWidth": 1,
                                  "fill": "#555555",
                                  "text": "どちらかのカテゴリに\n当てはまる場合\n→ Jキー",
                                  "fontStyle": "normal",
                                  "fontWeight": "normal",
                                  "fontSize": "18",
                                  "fontFamily": "sans-serif",
                                  "lineHeight": 1.16,
                                  "textAlign": "center"
                                },
                                {
                                  "type": "i-text",
                                  "left": -300,
                                  "top": 262,
                                  "angle": 0,
                                  "width": 180,
                                  "height": 67.53,
                                  "stroke": null,
                                  "strokeWidth": 1,
                                  "fill": "#555555",
                                  "text": "どちらのカテゴリにも\n当てはまらない場合\n→ Fキー",
                                  "fontStyle": "normal",
                                  "fontWeight": "normal",
                                  "fontSize": "18",
                                  "fontFamily": "sans-serif",
                                  "lineHeight": 1.16,
                                  "textAlign": "center"
                                }
                              ],
                              "viewport": [
                                800,
                                600
                              ],
                              "files": {},
                              "responses": {},
                              "parameters": {},
                              "messageHandlers": {},
                              "title": "blank",
                              "timeout": "100"
                            }
                          ]
                        }
                      }
                    ]
                  }
                },
                {
                  "type": "lab.html.Page",
                  "items": [
                    {
                      "type": "text",
                      "title": "練習おつかれさまでした。",
                      "content": ""
                    },
                    {
                      "required": true,
                      "type": "text",
                      "title": "続いて本番を行います。",
                      "content": "練習と本番では分類する基準が異なります。次のページで確認してください。"
                    },
                    {
                      "required": true,
                      "type": "text",
                      "content": "\u003Cdiv style = \"text-align : center; color: tomato\"\u003Eスペースを押すと次に進みます。\u003C\u002Fdiv\u003E"
                    }
                  ],
                  "scrollTop": true,
                  "submitButtonText": "Continue →",
                  "submitButtonPosition": "hidden",
                  "files": {},
                  "responses": {
                    "keydown(Space)": "space"
                  },
                  "parameters": {},
                  "messageHandlers": {},
                  "title": "instruction_4"
                }
              ]
            }
          },
          {
            "type": "lab.flow.Loop",
            "templateParameters": [
              {
                "BlockNo": "1"
              },
              {
                "BlockNo": "2"
              }
            ],
            "sample": {
              "mode": "sequential"
            },
            "files": {},
            "responses": {},
            "parameters": {
              "c1": "高カロリー",
              "c2": "低カロリー",
              "a1": "良い",
              "c1E1": "ハンバーガー",
              "c1E2": "ラーメン",
              "c1E3": "ピザ",
              "c1E4": "ドーナツ",
              "c2E1": "冷や奴",
              "c2E2": "レタス",
              "c2E3": "ゼリー",
              "c2E4": "トマト",
              "a1E1": "よい",
              "a1E2": "ポジティブ",
              "a1E3": "positive",
              "a1E4": "good",
              "a2E1": "わるい",
              "a2E2": "ネガティブ",
              "a2E3": "negative",
              "a2E4": "bad"
            },
            "messageHandlers": {
              "before:prepare": function anonymous(
) {
// Concept & Attitude
this.parameters.c1p = this.parameters.c1;
this.parameters.c2p = this.parameters.c2;
this.parameters.a1p = this.parameters.a1;

// Exampler
// Concept 1
this.parameters.c1E1p = this.parameters.c1E1;
this.parameters.c1E2p = this.parameters.c1E2;
this.parameters.c1E3p = this.parameters.c1E3;
this.parameters.c1E4p = this.parameters.c1E4;

// Concept 2
this.parameters.c2E1p = this.parameters.c2E1;
this.parameters.c2E2p = this.parameters.c2E2;
this.parameters.c2E3p = this.parameters.c2E3;
this.parameters.c2E4p = this.parameters.c2E4;

// Attitude 1
this.parameters.a1E1p = this.parameters.a1E1;
this.parameters.a1E2p = this.parameters.a1E2;
this.parameters.a1E3p = this.parameters.a1E3;
this.parameters.a1E4p = this.parameters.a1E4;

// Attitude 2
this.parameters.a2E1p = this.parameters.a2E1;
this.parameters.a2E2p = this.parameters.a2E2;
this.parameters.a2E3p = this.parameters.a2E3;
this.parameters.a2E4p = this.parameters.a2E4;
},
              "run": function anonymous(
) {
document.body.style.cursor = 'none'
},
              "end": function anonymous(
) {
document.body.style.cursor = 'auto'
}
            },
            "title": "MainLoop(要修正)",
            "notes": "対にする概念(高カロリー-低カロリー)を（c1-c2）で設定。評価次元(良い-悪い)の(a1-a2)のa1のみを設定\n・c1(concept1)のExampler  ：c1E1 c1E2 c1E3 c1E4\n・c2(concept2)のExampler ：c2E1 c2E2 c2E3 c2E4\n・a1(attitude1)のExampler ：a1E1 a1E2 a1E3 a1E4\n・a2(attitude2)のExampler ：a2E1 a2E2 a2E3 a2E4\n\n",
            "shuffleGroups": [],
            "template": {
              "type": "lab.flow.Sequence",
              "files": {},
              "responses": {},
              "parameters": {},
              "messageHandlers": {
                "before:prepare": function anonymous(
) {
//参加者番号に応じてブロック順を指定
if(this.options.participantID % 2 == 1)
{
  this.options.content=[this.options.content[1], this.options.content[0]]
}
else if(this.options.participantID % 2 == 0)
{
  this.options.content=[this.options.content[0], this.options.content[1]]
}
}
              },
              "title": "\u002F",
              "content": [
                {
                  "type": "lab.flow.Loop",
                  "templateParameters": [
                    {
                      "concept1": "${parameters.c1p}",
                      "attitude1": "${parameters.a1p}"
                    }
                  ],
                  "sample": {
                    "mode": "draw-shuffle"
                  },
                  "files": {},
                  "responses": {},
                  "parameters": {},
                  "messageHandlers": {},
                  "title": "concept1FocalBlock（要修正）",
                  "shuffleGroups": [],
                  "template": {
                    "type": "lab.flow.Sequence",
                    "files": {},
                    "responses": {},
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "\u002F",
                    "content": [
                      {
                        "type": "lab.flow.Sequence",
                        "files": {},
                        "responses": {},
                        "parameters": {},
                        "messageHandlers": {},
                        "title": "instructionSequence",
                        "content": [
                          {
                            "type": "lab.html.Page",
                            "items": [
                              {
                                "type": "text",
                                "title": "先ほどとは異なる分類基準になっています。以下の分類基準を改めて確認してください。",
                                "content": ""
                              },
                              {
                                "required": true,
                                "type": "text",
                                "title": "単語が「\u003Cspan style = \"color: #0070d9;\"\u003E${this.parameters.concept1}\u003C\u002Fspan\u003E」または「\u003Cspan style = \"color: #ff8800;\"\u003E${this.parameters.attitude1}\u003C\u002Fspan\u003E」に当てはまる場合",
                                "content": "→「Jキー」を押してください"
                              },
                              {
                                "required": true,
                                "type": "text",
                                "title": "単語が「\u003Cspan style = \"color: #0070d9;\"\u003E${this.parameters.concept1}\u003C\u002Fspan\u003E」または「\u003Cspan style = \"color: #ff8800;\"\u003E${this.parameters.attitude1}\u003C\u002Fspan\u003E」に当てはまらない場合",
                                "content": "→「Fキー」を押してください"
                              },
                              {
                                "required": true,
                                "type": "text",
                                "title": "分類は，できるだけ「速く」かつ「正確」に行ってください！",
                                "content": "間違えた場合は「×」が表示されるので，正しいキーを押し直してください。"
                              },
                              {
                                "required": true,
                                "type": "text",
                                "content": "\u003Cdiv style = \"text-align : center; color: tomato\"\u003E準備ができたら，スペースを押してください。分類課題を開始します。\u003C\u002Fdiv\u003E"
                              }
                            ],
                            "scrollTop": true,
                            "submitButtonText": "Continue →",
                            "submitButtonPosition": "hidden",
                            "files": {},
                            "responses": {
                              "keydown(Space)": "space"
                            },
                            "parameters": {},
                            "messageHandlers": {},
                            "title": "instruction"
                          },
                          {
                            "type": "lab.canvas.Screen",
                            "content": [
                              {
                                "type": "i-text",
                                "left": 0,
                                "top": 0,
                                "angle": 0,
                                "width": 220,
                                "height": 56.5,
                                "stroke": null,
                                "strokeWidth": 1,
                                "fill": "tomato",
                                "text": "START ! ",
                                "fontStyle": "normal",
                                "fontWeight": "normal",
                                "fontSize": "50",
                                "fontFamily": "sans-serif",
                                "lineHeight": 1.16,
                                "textAlign": "center"
                              }
                            ],
                            "viewport": [
                              800,
                              600
                            ],
                            "files": {},
                            "responses": {},
                            "parameters": {},
                            "messageHandlers": {},
                            "title": "start",
                            "timeout": "1000"
                          },
                          {
                            "type": "lab.canvas.Screen",
                            "content": [
                              {
                                "type": "i-text",
                                "left": 0,
                                "top": -275,
                                "angle": 0,
                                "width": 416.83,
                                "height": 36.16,
                                "stroke": "",
                                "strokeWidth": 1,
                                "fill": "#0070d9",
                                "text": "${this.parameters.concept1}",
                                "fontStyle": "normal",
                                "fontWeight": "normal",
                                "fontSize": "32",
                                "fontFamily": "sans-serif",
                                "lineHeight": 1.16,
                                "textAlign": "center"
                              },
                              {
                                "type": "i-text",
                                "left": 0,
                                "top": -242,
                                "angle": 0,
                                "width": 60,
                                "height": 22.6,
                                "stroke": "",
                                "strokeWidth": 1,
                                "fill": "#aaaaaa",
                                "text": "または",
                                "fontStyle": "normal",
                                "fontWeight": "normal",
                                "fontSize": "20",
                                "fontFamily": "sans-serif",
                                "lineHeight": 1.16,
                                "textAlign": "center"
                              },
                              {
                                "type": "i-text",
                                "left": 0,
                                "top": -210,
                                "angle": 0,
                                "width": 414.4,
                                "height": 36.16,
                                "stroke": null,
                                "strokeWidth": 1,
                                "fill": "#ff8800",
                                "text": "${this.parameters.attitude1}",
                                "fontStyle": "normal",
                                "fontWeight": "normal",
                                "fontSize": "32",
                                "fontFamily": "sans-serif",
                                "lineHeight": 1.16,
                                "textAlign": "center"
                              },
                              {
                                "type": "i-text",
                                "left": 0,
                                "top": 0,
                                "angle": 0,
                                "width": 33.21,
                                "height": 51.98,
                                "stroke": "",
                                "strokeWidth": 1,
                                "fill": "#000000",
                                "text": "+",
                                "fontStyle": "normal",
                                "fontWeight": "normal",
                                "fontSize": "46",
                                "fontFamily": "sans-serif",
                                "lineHeight": 1.16,
                                "textAlign": "center"
                              },
                              {
                                "type": "i-text",
                                "left": 300,
                                "top": 262,
                                "angle": 0,
                                "width": 180,
                                "height": 67.53,
                                "stroke": null,
                                "strokeWidth": 1,
                                "fill": "#555555",
                                "text": "どちらかのカテゴリに\n当てはまる場合\n→ Jキー",
                                "fontStyle": "normal",
                                "fontWeight": "normal",
                                "fontSize": "18",
                                "fontFamily": "sans-serif",
                                "lineHeight": 1.16,
                                "textAlign": "center"
                              },
                              {
                                "type": "i-text",
                                "left": -300,
                                "top": 262,
                                "angle": 0,
                                "width": 180,
                                "height": 67.53,
                                "stroke": null,
                                "strokeWidth": 1,
                                "fill": "#555555",
                                "text": "どちらのカテゴリにも\n当てはまらない場合\n→ Fキー",
                                "fontStyle": "normal",
                                "fontWeight": "normal",
                                "fontSize": "18",
                                "fontFamily": "sans-serif",
                                "lineHeight": 1.16,
                                "textAlign": "center"
                              }
                            ],
                            "viewport": [
                              800,
                              600
                            ],
                            "files": {},
                            "responses": {},
                            "parameters": {},
                            "messageHandlers": {},
                            "title": "fixation",
                            "timeout": "1000"
                          }
                        ]
                      },
                      {
                        "type": "lab.canvas.Frame",
                        "context": "\u003C!-- Nested components use this canvas --\u003E\n\u003Ccanvas \u002F\u003E",
                        "contextSelector": "canvas",
                        "files": {},
                        "responses": {},
                        "parameters": {},
                        "messageHandlers": {},
                        "title": "concept1FocalFrame",
                        "content": {
                          "type": "lab.flow.Sequence",
                          "files": {},
                          "responses": {},
                          "parameters": {},
                          "messageHandlers": {},
                          "title": "\u002F",
                          "content": [
                            {
                              "type": "lab.flow.Loop",
                              "templateParameters": [
                                {
                                  "examplar": "${parameters.c1E1p}",
                                  "examplarCategory": "concept1"
                                },
                                {
                                  "examplar": "${parameters.c1E2p}",
                                  "examplarCategory": "concept1"
                                },
                                {
                                  "examplar": "${parameters.c1E3p}",
                                  "examplarCategory": "concept1"
                                },
                                {
                                  "examplar": "${parameters.c1E4p}",
                                  "examplarCategory": "concept1"
                                },
                                {
                                  "examplar": "${parameters.c2E1p}",
                                  "examplarCategory": "concept2"
                                },
                                {
                                  "examplar": "${parameters.c2E2p}",
                                  "examplarCategory": "concept2"
                                },
                                {
                                  "examplar": "${parameters.c2E3p}",
                                  "examplarCategory": "concept2"
                                },
                                {
                                  "examplar": "${parameters.c2E4p}",
                                  "examplarCategory": "concept2"
                                }
                              ],
                              "sample": {
                                "mode": "draw-shuffle",
                                "n": "4"
                              },
                              "files": {},
                              "responses": {},
                              "parameters": {},
                              "messageHandlers": {},
                              "title": "concept1Focal_burn_in（要修正）",
                              "shuffleGroups": [],
                              "template": {
                                "type": "lab.flow.Sequence",
                                "files": {},
                                "responses": {},
                                "parameters": {},
                                "messageHandlers": {},
                                "title": "\u002F",
                                "content": [
                                  {
                                    "type": "lab.canvas.Screen",
                                    "content": [
                                      {
                                        "type": "i-text",
                                        "left": 0,
                                        "top": -275,
                                        "angle": 0,
                                        "width": 416.83,
                                        "height": 36.16,
                                        "stroke": "",
                                        "strokeWidth": 1,
                                        "fill": "#0070d9",
                                        "text": "${this.parameters.concept1}",
                                        "fontStyle": "normal",
                                        "fontWeight": "normal",
                                        "fontSize": "32",
                                        "fontFamily": "sans-serif",
                                        "lineHeight": 1.16,
                                        "textAlign": "center"
                                      },
                                      {
                                        "type": "i-text",
                                        "left": 0,
                                        "top": -242,
                                        "angle": 0,
                                        "width": 60,
                                        "height": 22.6,
                                        "stroke": "",
                                        "strokeWidth": 1,
                                        "fill": "#aaaaaa",
                                        "text": "または",
                                        "fontStyle": "normal",
                                        "fontWeight": "normal",
                                        "fontSize": "20",
                                        "fontFamily": "sans-serif",
                                        "lineHeight": 1.16,
                                        "textAlign": "center"
                                      },
                                      {
                                        "type": "i-text",
                                        "left": 0,
                                        "top": -210,
                                        "angle": 0,
                                        "width": 414.4,
                                        "height": 36.16,
                                        "stroke": null,
                                        "strokeWidth": 1,
                                        "fill": "#ff8800",
                                        "text": "${this.parameters.attitude1}",
                                        "fontStyle": "normal",
                                        "fontWeight": "normal",
                                        "fontSize": "32",
                                        "fontFamily": "sans-serif",
                                        "lineHeight": 1.16,
                                        "textAlign": "center"
                                      },
                                      {
                                        "type": "i-text",
                                        "left": 0,
                                        "top": 0,
                                        "angle": 0,
                                        "width": 599.47,
                                        "height": 51.98,
                                        "stroke": "",
                                        "strokeWidth": 1,
                                        "fill": "${this.parameters.examplarCategory == \"concept1\" |this.parameters.examplarCategory == \"concept2\"? \"#0070d9\" : \"#ff8800\"}",
                                        "text": "${this.parameters.examplar}",
                                        "fontStyle": "normal",
                                        "fontWeight": "normal",
                                        "fontSize": "46",
                                        "fontFamily": "sans-serif",
                                        "lineHeight": 1.16,
                                        "textAlign": "center"
                                      },
                                      {
                                        "type": "i-text",
                                        "left": 300,
                                        "top": 262,
                                        "angle": 0,
                                        "width": 180,
                                        "height": 67.53,
                                        "stroke": null,
                                        "strokeWidth": 1,
                                        "fill": "#555555",
                                        "text": "どちらかのカテゴリに\n当てはまる場合\n→ Jキー",
                                        "fontStyle": "normal",
                                        "fontWeight": "normal",
                                        "fontSize": "18",
                                        "fontFamily": "sans-serif",
                                        "lineHeight": 1.16,
                                        "textAlign": "center"
                                      },
                                      {
                                        "type": "i-text",
                                        "left": -300,
                                        "top": 262,
                                        "angle": 0,
                                        "width": 180,
                                        "height": 67.53,
                                        "stroke": null,
                                        "strokeWidth": 1,
                                        "fill": "#555555",
                                        "text": "どちらのカテゴリにも\n当てはまらない場合\n→ Fキー",
                                        "fontStyle": "normal",
                                        "fontWeight": "normal",
                                        "fontSize": "18",
                                        "fontFamily": "sans-serif",
                                        "lineHeight": 1.16,
                                        "textAlign": "center"
                                      }
                                    ],
                                    "viewport": [
                                      800,
                                      600
                                    ],
                                    "files": {},
                                    "responses": {},
                                    "parameters": {},
                                    "messageHandlers": {
                                      "before:prepare": function anonymous(
) {
this.options.events['keydown'] = function(e) {
  //正答キーを指定
  let correctKey;
  let incorrectKey;
  if(this.parameters.examplarCategory == "concept1" |
  this.parameters.examplarCategory == "attitude1"){
    correctKey = "j"
    incorrectKey = "f"
  }
  else if(this.parameters.examplarCategory == "concept2" |
    this.parameters.examplarCategory == "attitude2"){
      correctKey = "f"
      incorrectKey = "j"
  }

  //キーに応じた応答（誤答時は押し直せるようにする）
  if(e.key == correctKey){
    this.data.response = "trueKey"
    this.data.correct = "correct";
    this.end();
  }
  else if(e.key == incorrectKey){
    this.data.correct = "incorrect";
    //×を表示する
    const canvas = this.options.el.querySelector('canvas');
    const ctx = canvas.getContext("2d");
    ctx.font = "40px 'sans-serif'";
    ctx.textAlign = "center"
    ctx.fillStyle = "red";
    ctx.fillText("×", 0, -50); 
  }
}
}
                                    },
                                    "title": "concept1FocalTrial_burn_in"
                                  },
                                  {
                                    "type": "lab.canvas.Screen",
                                    "content": [
                                      {
                                        "type": "i-text",
                                        "left": 0,
                                        "top": -275,
                                        "angle": 0,
                                        "width": 416.83,
                                        "height": 36.16,
                                        "stroke": "",
                                        "strokeWidth": 1,
                                        "fill": "#0070d9",
                                        "text": "${this.parameters.concept1}",
                                        "fontStyle": "normal",
                                        "fontWeight": "normal",
                                        "fontSize": "32",
                                        "fontFamily": "sans-serif",
                                        "lineHeight": 1.16,
                                        "textAlign": "center"
                                      },
                                      {
                                        "type": "i-text",
                                        "left": 0,
                                        "top": -242,
                                        "angle": 0,
                                        "width": 60,
                                        "height": 22.6,
                                        "stroke": "",
                                        "strokeWidth": 1,
                                        "fill": "#aaaaaa",
                                        "text": "または",
                                        "fontStyle": "normal",
                                        "fontWeight": "normal",
                                        "fontSize": "20",
                                        "fontFamily": "sans-serif",
                                        "lineHeight": 1.16,
                                        "textAlign": "center"
                                      },
                                      {
                                        "type": "i-text",
                                        "left": 0,
                                        "top": -210,
                                        "angle": 0,
                                        "width": 414.4,
                                        "height": 36.16,
                                        "stroke": null,
                                        "strokeWidth": 1,
                                        "fill": "#ff8800",
                                        "text": "${this.parameters.attitude1}",
                                        "fontStyle": "normal",
                                        "fontWeight": "normal",
                                        "fontSize": "32",
                                        "fontFamily": "sans-serif",
                                        "lineHeight": 1.16,
                                        "textAlign": "center"
                                      },
                                      {
                                        "type": "i-text",
                                        "left": 300,
                                        "top": 262,
                                        "angle": 0,
                                        "width": 180,
                                        "height": 67.53,
                                        "stroke": null,
                                        "strokeWidth": 1,
                                        "fill": "#555555",
                                        "text": "どちらかのカテゴリに\n当てはまる場合\n→ Jキー",
                                        "fontStyle": "normal",
                                        "fontWeight": "normal",
                                        "fontSize": "18",
                                        "fontFamily": "sans-serif",
                                        "lineHeight": 1.16,
                                        "textAlign": "center"
                                      },
                                      {
                                        "type": "i-text",
                                        "left": -300,
                                        "top": 262,
                                        "angle": 0,
                                        "width": 180,
                                        "height": 67.53,
                                        "stroke": null,
                                        "strokeWidth": 1,
                                        "fill": "#555555",
                                        "text": "どちらのカテゴリにも\n当てはまらない場合\n→ Fキー",
                                        "fontStyle": "normal",
                                        "fontWeight": "normal",
                                        "fontSize": "18",
                                        "fontFamily": "sans-serif",
                                        "lineHeight": 1.16,
                                        "textAlign": "center"
                                      }
                                    ],
                                    "viewport": [
                                      800,
                                      600
                                    ],
                                    "files": {},
                                    "responses": {},
                                    "parameters": {},
                                    "messageHandlers": {},
                                    "title": "blank",
                                    "timeout": "100"
                                  }
                                ]
                              }
                            },
                            {
                              "type": "lab.flow.Loop",
                              "templateParameters": [
                                {
                                  "examplar": "${parameters.c1E1p}",
                                  "examplarCategory": "concept1"
                                },
                                {
                                  "examplar": "${parameters.c1E2p}",
                                  "examplarCategory": "concept1"
                                },
                                {
                                  "examplar": "${parameters.c1E3p}",
                                  "examplarCategory": "concept1"
                                },
                                {
                                  "examplar": "${parameters.c1E4p}",
                                  "examplarCategory": "concept1"
                                },
                                {
                                  "examplar": "${parameters.c2E1p}",
                                  "examplarCategory": "concept2"
                                },
                                {
                                  "examplar": "${parameters.c2E2p}",
                                  "examplarCategory": "concept2"
                                },
                                {
                                  "examplar": "${parameters.c2E3p}",
                                  "examplarCategory": "concept2"
                                },
                                {
                                  "examplar": "${parameters.c2E4p}",
                                  "examplarCategory": "concept2"
                                },
                                {
                                  "examplar": "${parameters.a1E1p}",
                                  "examplarCategory": "attitude1"
                                },
                                {
                                  "examplar": "${parameters.a1E2p}",
                                  "examplarCategory": "attitude1"
                                },
                                {
                                  "examplar": "${parameters.a1E3p}",
                                  "examplarCategory": "attitude1"
                                },
                                {
                                  "examplar": "${parameters.a1E4p}",
                                  "examplarCategory": "attitude1"
                                },
                                {
                                  "examplar": "${parameters.a2E1p}",
                                  "examplarCategory": "attitude2"
                                },
                                {
                                  "examplar": "${parameters.a2E2p}",
                                  "examplarCategory": "attitude2"
                                },
                                {
                                  "examplar": "${parameters.a2E3p}",
                                  "examplarCategory": "attitude2"
                                },
                                {
                                  "examplar": "${parameters.a2E4p}",
                                  "examplarCategory": "attitude2"
                                }
                              ],
                              "sample": {
                                "mode": "draw-shuffle",
                                "n": ""
                              },
                              "files": {},
                              "responses": {},
                              "parameters": {},
                              "messageHandlers": {},
                              "title": "concept1FocalTrialLoop（要修正）",
                              "shuffleGroups": [],
                              "template": {
                                "type": "lab.flow.Sequence",
                                "files": {},
                                "responses": {},
                                "parameters": {},
                                "messageHandlers": {},
                                "title": "\u002F",
                                "content": [
                                  {
                                    "type": "lab.canvas.Screen",
                                    "content": [
                                      {
                                        "type": "i-text",
                                        "left": 0,
                                        "top": -275,
                                        "angle": 0,
                                        "width": 416.83,
                                        "height": 36.16,
                                        "stroke": "",
                                        "strokeWidth": 1,
                                        "fill": "#0070d9",
                                        "text": "${this.parameters.concept1}",
                                        "fontStyle": "normal",
                                        "fontWeight": "normal",
                                        "fontSize": "32",
                                        "fontFamily": "sans-serif",
                                        "lineHeight": 1.16,
                                        "textAlign": "center"
                                      },
                                      {
                                        "type": "i-text",
                                        "left": 0,
                                        "top": -242,
                                        "angle": 0,
                                        "width": 60,
                                        "height": 22.6,
                                        "stroke": "",
                                        "strokeWidth": 1,
                                        "fill": "#aaaaaa",
                                        "text": "または",
                                        "fontStyle": "normal",
                                        "fontWeight": "normal",
                                        "fontSize": "20",
                                        "fontFamily": "sans-serif",
                                        "lineHeight": 1.16,
                                        "textAlign": "center"
                                      },
                                      {
                                        "type": "i-text",
                                        "left": 0,
                                        "top": -210,
                                        "angle": 0,
                                        "width": 414.4,
                                        "height": 36.16,
                                        "stroke": null,
                                        "strokeWidth": 1,
                                        "fill": "#ff8800",
                                        "text": "${this.parameters.attitude1}",
                                        "fontStyle": "normal",
                                        "fontWeight": "normal",
                                        "fontSize": "32",
                                        "fontFamily": "sans-serif",
                                        "lineHeight": 1.16,
                                        "textAlign": "center"
                                      },
                                      {
                                        "type": "i-text",
                                        "left": 0,
                                        "top": 0,
                                        "angle": 0,
                                        "width": 599.47,
                                        "height": 51.98,
                                        "stroke": "",
                                        "strokeWidth": 1,
                                        "fill": "${this.parameters.examplarCategory == \"concept1\" |this.parameters.examplarCategory == \"concept2\"? \"#0070d9\" : \"#ff8800\"}",
                                        "text": "${this.parameters.examplar}",
                                        "fontStyle": "normal",
                                        "fontWeight": "normal",
                                        "fontSize": "46",
                                        "fontFamily": "sans-serif",
                                        "lineHeight": 1.16,
                                        "textAlign": "center"
                                      },
                                      {
                                        "type": "i-text",
                                        "left": 300,
                                        "top": 262,
                                        "angle": 0,
                                        "width": 180,
                                        "height": 67.53,
                                        "stroke": null,
                                        "strokeWidth": 1,
                                        "fill": "#555555",
                                        "text": "どちらかのカテゴリに\n当てはまる場合\n→ Jキー",
                                        "fontStyle": "normal",
                                        "fontWeight": "normal",
                                        "fontSize": "18",
                                        "fontFamily": "sans-serif",
                                        "lineHeight": 1.16,
                                        "textAlign": "center"
                                      },
                                      {
                                        "type": "i-text",
                                        "left": -300,
                                        "top": 262,
                                        "angle": 0,
                                        "width": 180,
                                        "height": 67.53,
                                        "stroke": null,
                                        "strokeWidth": 1,
                                        "fill": "#555555",
                                        "text": "どちらのカテゴリにも\n当てはまらない場合\n→ Fキー",
                                        "fontStyle": "normal",
                                        "fontWeight": "normal",
                                        "fontSize": "18",
                                        "fontFamily": "sans-serif",
                                        "lineHeight": 1.16,
                                        "textAlign": "center"
                                      }
                                    ],
                                    "viewport": [
                                      800,
                                      600
                                    ],
                                    "files": {},
                                    "responses": {},
                                    "parameters": {},
                                    "messageHandlers": {
                                      "before:prepare": function anonymous(
) {
this.options.events['keydown'] = function(e) {
  //正答キーを指定
  let correctKey;
  let incorrectKey;
  if(this.parameters.examplarCategory == "concept1" |
  this.parameters.examplarCategory == "attitude1"){
    correctKey = "j"
    incorrectKey = "f"
  }
  else if(this.parameters.examplarCategory == "concept2" |
    this.parameters.examplarCategory == "attitude2"){
      correctKey = "f"
      incorrectKey = "j"
  }

  //キーに応じた応答（誤答時は押し直せるようにする）
  if(e.key == correctKey){
    this.data.response = "trueKey"
    this.data.correct = "correct";
    this.end();
  }
  else if(e.key == incorrectKey){
    this.data.correct = "incorrect";
    //×を表示する
    const canvas = this.options.el.querySelector('canvas');
    const ctx = canvas.getContext("2d");
    ctx.font = "40px 'sans-serif'";
    ctx.textAlign = "center"
    ctx.fillStyle = "red";
    ctx.fillText("×", 0, -50); 
  }
}
}
                                    },
                                    "title": "concept1FocalTrial"
                                  },
                                  {
                                    "type": "lab.canvas.Screen",
                                    "content": [
                                      {
                                        "type": "i-text",
                                        "left": 0,
                                        "top": -275,
                                        "angle": 0,
                                        "width": 416.83,
                                        "height": 36.16,
                                        "stroke": "",
                                        "strokeWidth": 1,
                                        "fill": "#0070d9",
                                        "text": "${this.parameters.concept1}",
                                        "fontStyle": "normal",
                                        "fontWeight": "normal",
                                        "fontSize": "32",
                                        "fontFamily": "sans-serif",
                                        "lineHeight": 1.16,
                                        "textAlign": "center"
                                      },
                                      {
                                        "type": "i-text",
                                        "left": 0,
                                        "top": -242,
                                        "angle": 0,
                                        "width": 60,
                                        "height": 22.6,
                                        "stroke": "",
                                        "strokeWidth": 1,
                                        "fill": "#aaaaaa",
                                        "text": "または",
                                        "fontStyle": "normal",
                                        "fontWeight": "normal",
                                        "fontSize": "20",
                                        "fontFamily": "sans-serif",
                                        "lineHeight": 1.16,
                                        "textAlign": "center"
                                      },
                                      {
                                        "type": "i-text",
                                        "left": 0,
                                        "top": -210,
                                        "angle": 0,
                                        "width": 414.4,
                                        "height": 36.16,
                                        "stroke": null,
                                        "strokeWidth": 1,
                                        "fill": "#ff8800",
                                        "text": "${this.parameters.attitude1}",
                                        "fontStyle": "normal",
                                        "fontWeight": "normal",
                                        "fontSize": "32",
                                        "fontFamily": "sans-serif",
                                        "lineHeight": 1.16,
                                        "textAlign": "center"
                                      },
                                      {
                                        "type": "i-text",
                                        "left": 300,
                                        "top": 262,
                                        "angle": 0,
                                        "width": 180,
                                        "height": 67.53,
                                        "stroke": null,
                                        "strokeWidth": 1,
                                        "fill": "#555555",
                                        "text": "どちらかのカテゴリに\n当てはまる場合\n→ Jキー",
                                        "fontStyle": "normal",
                                        "fontWeight": "normal",
                                        "fontSize": "18",
                                        "fontFamily": "sans-serif",
                                        "lineHeight": 1.16,
                                        "textAlign": "center"
                                      },
                                      {
                                        "type": "i-text",
                                        "left": -300,
                                        "top": 262,
                                        "angle": 0,
                                        "width": 180,
                                        "height": 67.53,
                                        "stroke": null,
                                        "strokeWidth": 1,
                                        "fill": "#555555",
                                        "text": "どちらのカテゴリにも\n当てはまらない場合\n→ Fキー",
                                        "fontStyle": "normal",
                                        "fontWeight": "normal",
                                        "fontSize": "18",
                                        "fontFamily": "sans-serif",
                                        "lineHeight": 1.16,
                                        "textAlign": "center"
                                      }
                                    ],
                                    "viewport": [
                                      800,
                                      600
                                    ],
                                    "files": {},
                                    "responses": {},
                                    "parameters": {},
                                    "messageHandlers": {},
                                    "title": "blank",
                                    "timeout": "100"
                                  }
                                ]
                              }
                            }
                          ]
                        }
                      }
                    ]
                  }
                },
                {
                  "type": "lab.flow.Loop",
                  "templateParameters": [
                    {
                      "concept2": "${parameters.c2p}",
                      "attitude1": "${parameters.a1p}"
                    }
                  ],
                  "sample": {
                    "mode": "draw-shuffle"
                  },
                  "files": {},
                  "responses": {},
                  "parameters": {},
                  "messageHandlers": {},
                  "title": "concept2FocalBlock（要修正）",
                  "shuffleGroups": [],
                  "template": {
                    "type": "lab.flow.Sequence",
                    "files": {},
                    "responses": {},
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "\u002F",
                    "content": [
                      {
                        "type": "lab.flow.Sequence",
                        "files": {},
                        "responses": {},
                        "parameters": {},
                        "messageHandlers": {},
                        "title": "instructionSequence",
                        "content": [
                          {
                            "type": "lab.html.Page",
                            "items": [
                              {
                                "type": "text",
                                "title": "先ほどとは異なる分類基準になっています。以下の分類基準を改めて確認してください。",
                                "content": ""
                              },
                              {
                                "required": true,
                                "type": "text",
                                "title": "単語が「\u003Cspan style = \"color: #0070d9;\"\u003E${this.parameters.concept2}\u003C\u002Fspan\u003E」または「\u003Cspan style = \"color: #ff8800;\"\u003E${this.parameters.attitude1}\u003C\u002Fspan\u003E」に当てはまる場合",
                                "content": "→「Jキー」を押してください"
                              },
                              {
                                "required": true,
                                "type": "text",
                                "title": "単語が「\u003Cspan style = \"color: #0070d9;\"\u003E${this.parameters.concept2}\u003C\u002Fspan\u003E」または「\u003Cspan style = \"color: #ff8800;\"\u003E${this.parameters.attitude1}\u003C\u002Fspan\u003E」に当てはまらない場合",
                                "content": "→「Fキー」を押してください"
                              },
                              {
                                "required": true,
                                "type": "text",
                                "title": "分類は，できるだけ「速く」かつ「正確」に行ってください！",
                                "content": "間違えた場合は「×」が表示されるので，正しいキーを押し直してください。"
                              },
                              {
                                "required": true,
                                "type": "text",
                                "content": "\u003Cdiv style = \"text-align : center; color: tomato\"\u003E準備ができたら，スペースを押してください。分類課題を開始します。\u003C\u002Fdiv\u003E"
                              }
                            ],
                            "scrollTop": true,
                            "submitButtonText": "Continue →",
                            "submitButtonPosition": "hidden",
                            "files": {},
                            "responses": {
                              "keydown(Space)": "space"
                            },
                            "parameters": {},
                            "messageHandlers": {},
                            "title": "instruction"
                          },
                          {
                            "type": "lab.canvas.Screen",
                            "content": [
                              {
                                "type": "i-text",
                                "left": 0,
                                "top": 0,
                                "angle": 0,
                                "width": 203.1,
                                "height": 56.5,
                                "stroke": null,
                                "strokeWidth": 1,
                                "fill": "tomato",
                                "text": "START ! ",
                                "fontStyle": "normal",
                                "fontWeight": "normal",
                                "fontSize": "50",
                                "fontFamily": "sans-serif",
                                "lineHeight": 1.16,
                                "textAlign": "center"
                              }
                            ],
                            "viewport": [
                              800,
                              600
                            ],
                            "files": {},
                            "responses": {},
                            "parameters": {},
                            "messageHandlers": {},
                            "title": "start",
                            "timeout": "1000"
                          },
                          {
                            "type": "lab.canvas.Screen",
                            "content": [
                              {
                                "type": "i-text",
                                "left": 0,
                                "top": -275,
                                "angle": 0,
                                "width": 416.83,
                                "height": 36.16,
                                "stroke": "",
                                "strokeWidth": 1,
                                "fill": "#0070d9",
                                "text": "${this.parameters.concept2}",
                                "fontStyle": "normal",
                                "fontWeight": "normal",
                                "fontSize": "32",
                                "fontFamily": "sans-serif",
                                "lineHeight": 1.16,
                                "textAlign": "center"
                              },
                              {
                                "type": "i-text",
                                "left": 0,
                                "top": -242,
                                "angle": 0,
                                "width": 60,
                                "height": 22.6,
                                "stroke": "",
                                "strokeWidth": 1,
                                "fill": "#aaaaaa",
                                "text": "または",
                                "fontStyle": "normal",
                                "fontWeight": "normal",
                                "fontSize": "20",
                                "fontFamily": "sans-serif",
                                "lineHeight": 1.16,
                                "textAlign": "center"
                              },
                              {
                                "type": "i-text",
                                "left": 0,
                                "top": -210,
                                "angle": 0,
                                "width": 414.4,
                                "height": 36.16,
                                "stroke": null,
                                "strokeWidth": 1,
                                "fill": "#ff8800",
                                "text": "${this.parameters.attitude1}",
                                "fontStyle": "normal",
                                "fontWeight": "normal",
                                "fontSize": "32",
                                "fontFamily": "sans-serif",
                                "lineHeight": 1.16,
                                "textAlign": "center"
                              },
                              {
                                "type": "i-text",
                                "left": 0,
                                "top": 0,
                                "angle": 0,
                                "width": 33.21,
                                "height": 51.98,
                                "stroke": "",
                                "strokeWidth": 1,
                                "fill": "#000000",
                                "text": "+",
                                "fontStyle": "normal",
                                "fontWeight": "normal",
                                "fontSize": "46",
                                "fontFamily": "sans-serif",
                                "lineHeight": 1.16,
                                "textAlign": "center"
                              },
                              {
                                "type": "i-text",
                                "left": 300,
                                "top": 262,
                                "angle": 0,
                                "width": 180,
                                "height": 67.53,
                                "stroke": null,
                                "strokeWidth": 1,
                                "fill": "#555555",
                                "text": "どちらかのカテゴリに\n当てはまる場合\n→ Jキー",
                                "fontStyle": "normal",
                                "fontWeight": "normal",
                                "fontSize": "18",
                                "fontFamily": "sans-serif",
                                "lineHeight": 1.16,
                                "textAlign": "center"
                              },
                              {
                                "type": "i-text",
                                "left": -300,
                                "top": 262,
                                "angle": 0,
                                "width": 180,
                                "height": 67.53,
                                "stroke": null,
                                "strokeWidth": 1,
                                "fill": "#555555",
                                "text": "どちらのカテゴリにも\n当てはまらない場合\n→ Fキー",
                                "fontStyle": "normal",
                                "fontWeight": "normal",
                                "fontSize": "18",
                                "fontFamily": "sans-serif",
                                "lineHeight": 1.16,
                                "textAlign": "center"
                              }
                            ],
                            "viewport": [
                              800,
                              600
                            ],
                            "files": {},
                            "responses": {},
                            "parameters": {},
                            "messageHandlers": {},
                            "title": "fixation",
                            "timeout": "1000"
                          }
                        ]
                      },
                      {
                        "type": "lab.canvas.Frame",
                        "context": "\u003C!-- Nested components use this canvas --\u003E\n\u003Ccanvas \u002F\u003E",
                        "contextSelector": "canvas",
                        "files": {},
                        "responses": {},
                        "parameters": {},
                        "messageHandlers": {},
                        "title": "concept2FocalFrame",
                        "content": {
                          "type": "lab.flow.Sequence",
                          "files": {},
                          "responses": {},
                          "parameters": {},
                          "messageHandlers": {},
                          "title": "\u002F",
                          "content": [
                            {
                              "type": "lab.flow.Loop",
                              "templateParameters": [
                                {
                                  "examplar": "${parameters.c1E1p}",
                                  "examplarCategory": "concept1"
                                },
                                {
                                  "examplar": "${parameters.c1E2p}",
                                  "examplarCategory": "concept1"
                                },
                                {
                                  "examplar": "${parameters.c1E3p}",
                                  "examplarCategory": "concept1"
                                },
                                {
                                  "examplar": "${parameters.c1E4p}",
                                  "examplarCategory": "concept1"
                                },
                                {
                                  "examplar": "${parameters.c2E1p}",
                                  "examplarCategory": "concept2"
                                },
                                {
                                  "examplar": "${parameters.c2E2p}",
                                  "examplarCategory": "concept2"
                                },
                                {
                                  "examplar": "${parameters.c2E3p}",
                                  "examplarCategory": "concept2"
                                },
                                {
                                  "examplar": "${parameters.c2E4p}",
                                  "examplarCategory": "concept2"
                                }
                              ],
                              "sample": {
                                "mode": "draw-shuffle",
                                "n": "4"
                              },
                              "files": {},
                              "responses": {},
                              "parameters": {},
                              "messageHandlers": {},
                              "title": "concept2Focal_burn_in（要修正）",
                              "shuffleGroups": [],
                              "template": {
                                "type": "lab.flow.Sequence",
                                "files": {},
                                "responses": {},
                                "parameters": {},
                                "messageHandlers": {},
                                "title": "\u002F",
                                "content": [
                                  {
                                    "type": "lab.canvas.Screen",
                                    "content": [
                                      {
                                        "type": "i-text",
                                        "left": 0,
                                        "top": -275,
                                        "angle": 0,
                                        "width": 416.83,
                                        "height": 36.16,
                                        "stroke": "",
                                        "strokeWidth": 1,
                                        "fill": "#0070d9",
                                        "text": "${this.parameters.concept2}",
                                        "fontStyle": "normal",
                                        "fontWeight": "normal",
                                        "fontSize": "32",
                                        "fontFamily": "sans-serif",
                                        "lineHeight": 1.16,
                                        "textAlign": "center"
                                      },
                                      {
                                        "type": "i-text",
                                        "left": 0,
                                        "top": -242,
                                        "angle": 0,
                                        "width": 60,
                                        "height": 22.6,
                                        "stroke": "",
                                        "strokeWidth": 1,
                                        "fill": "#aaaaaa",
                                        "text": "または",
                                        "fontStyle": "normal",
                                        "fontWeight": "normal",
                                        "fontSize": "20",
                                        "fontFamily": "sans-serif",
                                        "lineHeight": 1.16,
                                        "textAlign": "center"
                                      },
                                      {
                                        "type": "i-text",
                                        "left": 0,
                                        "top": -210,
                                        "angle": 0,
                                        "width": 414.4,
                                        "height": 36.16,
                                        "stroke": null,
                                        "strokeWidth": 1,
                                        "fill": "#ff8800",
                                        "text": "${this.parameters.attitude1}",
                                        "fontStyle": "normal",
                                        "fontWeight": "normal",
                                        "fontSize": "32",
                                        "fontFamily": "sans-serif",
                                        "lineHeight": 1.16,
                                        "textAlign": "center"
                                      },
                                      {
                                        "type": "i-text",
                                        "left": 0,
                                        "top": 0,
                                        "angle": 0,
                                        "width": 599.47,
                                        "height": 51.98,
                                        "stroke": "",
                                        "strokeWidth": 1,
                                        "fill": "${this.parameters.examplarCategory == \"concept1\" |this.parameters.examplarCategory == \"concept2\"? \"#0070d9\" : \"#ff8800\"}",
                                        "text": "${this.parameters.examplar}",
                                        "fontStyle": "normal",
                                        "fontWeight": "normal",
                                        "fontSize": "46",
                                        "fontFamily": "sans-serif",
                                        "lineHeight": 1.16,
                                        "textAlign": "center"
                                      },
                                      {
                                        "type": "i-text",
                                        "left": 300,
                                        "top": 262,
                                        "angle": 0,
                                        "width": 180,
                                        "height": 67.53,
                                        "stroke": null,
                                        "strokeWidth": 1,
                                        "fill": "#555555",
                                        "text": "どちらかのカテゴリに\n当てはまる場合\n→ Jキー",
                                        "fontStyle": "normal",
                                        "fontWeight": "normal",
                                        "fontSize": "18",
                                        "fontFamily": "sans-serif",
                                        "lineHeight": 1.16,
                                        "textAlign": "center"
                                      },
                                      {
                                        "type": "i-text",
                                        "left": -300,
                                        "top": 262,
                                        "angle": 0,
                                        "width": 180,
                                        "height": 67.53,
                                        "stroke": null,
                                        "strokeWidth": 1,
                                        "fill": "#555555",
                                        "text": "どちらのカテゴリにも\n当てはまらない場合\n→ Fキー",
                                        "fontStyle": "normal",
                                        "fontWeight": "normal",
                                        "fontSize": "18",
                                        "fontFamily": "sans-serif",
                                        "lineHeight": 1.16,
                                        "textAlign": "center"
                                      }
                                    ],
                                    "viewport": [
                                      800,
                                      600
                                    ],
                                    "files": {},
                                    "responses": {},
                                    "parameters": {},
                                    "messageHandlers": {
                                      "before:prepare": function anonymous(
) {
this.options.events['keydown'] = function(e) {
  //正答キーを指定
  let correctKey;
  let incorrectKey;
  if(this.parameters.examplarCategory == "concept2" |
  this.parameters.examplarCategory == "attitude1"){
    correctKey = "j"
    incorrectKey = "f"
  }
  else if(this.parameters.examplarCategory == "concept1" |
    this.parameters.examplarCategory == "attitude2"){
      correctKey = "f"
      incorrectKey = "j"
  }

  //キーに応じた応答（誤答時は押し直せるようにする）
  if(e.key == correctKey){
    this.data.response = "trueKey"
    this.data.correct = "correct";
    this.end();
  }
  else if(e.key == incorrectKey){
    this.data.correct = "incorrect";
    //×を表示する
    const canvas = this.options.el.querySelector('canvas');
    const ctx = canvas.getContext("2d");
    ctx.font = "40px 'sans-serif'";
    ctx.textAlign = "center"
    ctx.fillStyle = "red";
    ctx.fillText("×", 0, -50); 
  }
}
}
                                    },
                                    "title": "concept2FocalTrial_burn_in"
                                  },
                                  {
                                    "type": "lab.canvas.Screen",
                                    "content": [
                                      {
                                        "type": "i-text",
                                        "left": 0,
                                        "top": -275,
                                        "angle": 0,
                                        "width": 416.83,
                                        "height": 36.16,
                                        "stroke": "",
                                        "strokeWidth": 1,
                                        "fill": "#0070d9",
                                        "text": "${this.parameters.concept2}",
                                        "fontStyle": "normal",
                                        "fontWeight": "normal",
                                        "fontSize": "32",
                                        "fontFamily": "sans-serif",
                                        "lineHeight": 1.16,
                                        "textAlign": "center"
                                      },
                                      {
                                        "type": "i-text",
                                        "left": 0,
                                        "top": -242,
                                        "angle": 0,
                                        "width": 60,
                                        "height": 22.6,
                                        "stroke": "",
                                        "strokeWidth": 1,
                                        "fill": "#aaaaaa",
                                        "text": "または",
                                        "fontStyle": "normal",
                                        "fontWeight": "normal",
                                        "fontSize": "20",
                                        "fontFamily": "sans-serif",
                                        "lineHeight": 1.16,
                                        "textAlign": "center"
                                      },
                                      {
                                        "type": "i-text",
                                        "left": 0,
                                        "top": -210,
                                        "angle": 0,
                                        "width": 414.4,
                                        "height": 36.16,
                                        "stroke": null,
                                        "strokeWidth": 1,
                                        "fill": "#ff8800",
                                        "text": "${this.parameters.attitude1}",
                                        "fontStyle": "normal",
                                        "fontWeight": "normal",
                                        "fontSize": "32",
                                        "fontFamily": "sans-serif",
                                        "lineHeight": 1.16,
                                        "textAlign": "center"
                                      },
                                      {
                                        "type": "i-text",
                                        "left": 300,
                                        "top": 262,
                                        "angle": 0,
                                        "width": 180,
                                        "height": 67.53,
                                        "stroke": null,
                                        "strokeWidth": 1,
                                        "fill": "#555555",
                                        "text": "どちらかのカテゴリに\n当てはまる場合\n→ Jキー",
                                        "fontStyle": "normal",
                                        "fontWeight": "normal",
                                        "fontSize": "18",
                                        "fontFamily": "sans-serif",
                                        "lineHeight": 1.16,
                                        "textAlign": "center"
                                      },
                                      {
                                        "type": "i-text",
                                        "left": -300,
                                        "top": 262,
                                        "angle": 0,
                                        "width": 180,
                                        "height": 67.53,
                                        "stroke": null,
                                        "strokeWidth": 1,
                                        "fill": "#555555",
                                        "text": "どちらのカテゴリにも\n当てはまらない場合\n→ Fキー",
                                        "fontStyle": "normal",
                                        "fontWeight": "normal",
                                        "fontSize": "18",
                                        "fontFamily": "sans-serif",
                                        "lineHeight": 1.16,
                                        "textAlign": "center"
                                      }
                                    ],
                                    "viewport": [
                                      800,
                                      600
                                    ],
                                    "files": {},
                                    "responses": {},
                                    "parameters": {},
                                    "messageHandlers": {},
                                    "title": "blank",
                                    "timeout": "100"
                                  }
                                ]
                              }
                            },
                            {
                              "type": "lab.flow.Loop",
                              "templateParameters": [
                                {
                                  "examplar": "${parameters.c1E1p}",
                                  "examplarCategory": "concept1"
                                },
                                {
                                  "examplar": "${parameters.c1E2p}",
                                  "examplarCategory": "concept1"
                                },
                                {
                                  "examplar": "${parameters.c1E3p}",
                                  "examplarCategory": "concept1"
                                },
                                {
                                  "examplar": "${parameters.c1E4p}",
                                  "examplarCategory": "concept1"
                                },
                                {
                                  "examplar": "${parameters.c2E1p}",
                                  "examplarCategory": "concept2"
                                },
                                {
                                  "examplar": "${parameters.c2E2p}",
                                  "examplarCategory": "concept2"
                                },
                                {
                                  "examplar": "${parameters.c2E3p}",
                                  "examplarCategory": "concept2"
                                },
                                {
                                  "examplar": "${parameters.c2E4p}",
                                  "examplarCategory": "concept2"
                                },
                                {
                                  "examplar": "${parameters.a1E1p}",
                                  "examplarCategory": "attitude1"
                                },
                                {
                                  "examplar": "${parameters.a1E2p}",
                                  "examplarCategory": "attitude1"
                                },
                                {
                                  "examplar": "${parameters.a1E3p}",
                                  "examplarCategory": "attitude1"
                                },
                                {
                                  "examplar": "${parameters.a1E4p}",
                                  "examplarCategory": "attitude1"
                                },
                                {
                                  "examplar": "${parameters.a2E1p}",
                                  "examplarCategory": "attitude2"
                                },
                                {
                                  "examplar": "${parameters.a2E2p}",
                                  "examplarCategory": "attitude2"
                                },
                                {
                                  "examplar": "${parameters.a2E3p}",
                                  "examplarCategory": "attitude2"
                                },
                                {
                                  "examplar": "${parameters.a2E4p}",
                                  "examplarCategory": "attitude2"
                                }
                              ],
                              "sample": {
                                "mode": "draw-shuffle",
                                "n": ""
                              },
                              "files": {},
                              "responses": {},
                              "parameters": {},
                              "messageHandlers": {},
                              "title": "concept2FocalTrialLoop（要修正）",
                              "shuffleGroups": [],
                              "template": {
                                "type": "lab.flow.Sequence",
                                "files": {},
                                "responses": {},
                                "parameters": {},
                                "messageHandlers": {},
                                "title": "\u002F",
                                "content": [
                                  {
                                    "type": "lab.canvas.Screen",
                                    "content": [
                                      {
                                        "type": "i-text",
                                        "left": 0,
                                        "top": -275,
                                        "angle": 0,
                                        "width": 416.83,
                                        "height": 36.16,
                                        "stroke": "",
                                        "strokeWidth": 1,
                                        "fill": "#0070d9",
                                        "text": "${this.parameters.concept2}",
                                        "fontStyle": "normal",
                                        "fontWeight": "normal",
                                        "fontSize": "32",
                                        "fontFamily": "sans-serif",
                                        "lineHeight": 1.16,
                                        "textAlign": "center"
                                      },
                                      {
                                        "type": "i-text",
                                        "left": 0,
                                        "top": -242,
                                        "angle": 0,
                                        "width": 60,
                                        "height": 22.6,
                                        "stroke": "",
                                        "strokeWidth": 1,
                                        "fill": "#aaaaaa",
                                        "text": "または",
                                        "fontStyle": "normal",
                                        "fontWeight": "normal",
                                        "fontSize": "20",
                                        "fontFamily": "sans-serif",
                                        "lineHeight": 1.16,
                                        "textAlign": "center"
                                      },
                                      {
                                        "type": "i-text",
                                        "left": 0,
                                        "top": -210,
                                        "angle": 0,
                                        "width": 414.4,
                                        "height": 36.16,
                                        "stroke": null,
                                        "strokeWidth": 1,
                                        "fill": "#ff8800",
                                        "text": "${this.parameters.attitude1}",
                                        "fontStyle": "normal",
                                        "fontWeight": "normal",
                                        "fontSize": "32",
                                        "fontFamily": "sans-serif",
                                        "lineHeight": 1.16,
                                        "textAlign": "center"
                                      },
                                      {
                                        "type": "i-text",
                                        "left": 0,
                                        "top": 0,
                                        "angle": 0,
                                        "width": 599.47,
                                        "height": 51.98,
                                        "stroke": "",
                                        "strokeWidth": 1,
                                        "fill": "${this.parameters.examplarCategory == \"concept1\" |this.parameters.examplarCategory == \"concept2\"? \"#0070d9\" : \"#ff8800\"}",
                                        "text": "${this.parameters.examplar}",
                                        "fontStyle": "normal",
                                        "fontWeight": "normal",
                                        "fontSize": "46",
                                        "fontFamily": "sans-serif",
                                        "lineHeight": 1.16,
                                        "textAlign": "center"
                                      },
                                      {
                                        "type": "i-text",
                                        "left": 300,
                                        "top": 262,
                                        "angle": 0,
                                        "width": 180,
                                        "height": 67.53,
                                        "stroke": null,
                                        "strokeWidth": 1,
                                        "fill": "#555555",
                                        "text": "どちらかのカテゴリに\n当てはまる場合\n→ Jキー",
                                        "fontStyle": "normal",
                                        "fontWeight": "normal",
                                        "fontSize": "18",
                                        "fontFamily": "sans-serif",
                                        "lineHeight": 1.16,
                                        "textAlign": "center"
                                      },
                                      {
                                        "type": "i-text",
                                        "left": -300,
                                        "top": 262,
                                        "angle": 0,
                                        "width": 180,
                                        "height": 67.53,
                                        "stroke": null,
                                        "strokeWidth": 1,
                                        "fill": "#555555",
                                        "text": "どちらのカテゴリにも\n当てはまらない場合\n→ Fキー",
                                        "fontStyle": "normal",
                                        "fontWeight": "normal",
                                        "fontSize": "18",
                                        "fontFamily": "sans-serif",
                                        "lineHeight": 1.16,
                                        "textAlign": "center"
                                      }
                                    ],
                                    "viewport": [
                                      800,
                                      600
                                    ],
                                    "files": {},
                                    "responses": {},
                                    "parameters": {},
                                    "messageHandlers": {
                                      "before:prepare": function anonymous(
) {
this.options.events['keydown'] = function(e) {
  //正答キーを指定
  let correctKey;
  let incorrectKey;
  if(this.parameters.examplarCategory == "concept2" |
  this.parameters.examplarCategory == "attitude1"){
    correctKey = "j"
    incorrectKey = "f"
  }
  else if(this.parameters.examplarCategory == "concept1" |
    this.parameters.examplarCategory == "attitude2"){
      correctKey = "f"
      incorrectKey = "j"
  }

  //キーに応じた応答（誤答時は押し直せるようにする）
  if(e.key == correctKey){
    this.data.response = "trueKey"
    this.data.correct = "correct";
    this.end();
  }
  else if(e.key == incorrectKey){
    this.data.correct = "incorrect";
    //×を表示する
    const canvas = this.options.el.querySelector('canvas');
    const ctx = canvas.getContext("2d");
    ctx.font = "40px 'sans-serif'";
    ctx.textAlign = "center"
    ctx.fillStyle = "red";
    ctx.fillText("×", 0, -50); 
  }
}
}
                                    },
                                    "title": "concept2FocalTrial"
                                  },
                                  {
                                    "type": "lab.canvas.Screen",
                                    "content": [
                                      {
                                        "type": "i-text",
                                        "left": 0,
                                        "top": -275,
                                        "angle": 0,
                                        "width": 416.83,
                                        "height": 36.16,
                                        "stroke": "",
                                        "strokeWidth": 1,
                                        "fill": "#0070d9",
                                        "text": "${this.parameters.concept2}",
                                        "fontStyle": "normal",
                                        "fontWeight": "normal",
                                        "fontSize": "32",
                                        "fontFamily": "sans-serif",
                                        "lineHeight": 1.16,
                                        "textAlign": "center"
                                      },
                                      {
                                        "type": "i-text",
                                        "left": 0,
                                        "top": -242,
                                        "angle": 0,
                                        "width": 60,
                                        "height": 22.6,
                                        "stroke": "",
                                        "strokeWidth": 1,
                                        "fill": "#aaaaaa",
                                        "text": "または",
                                        "fontStyle": "normal",
                                        "fontWeight": "normal",
                                        "fontSize": "20",
                                        "fontFamily": "sans-serif",
                                        "lineHeight": 1.16,
                                        "textAlign": "center"
                                      },
                                      {
                                        "type": "i-text",
                                        "left": 0,
                                        "top": -210,
                                        "angle": 0,
                                        "width": 414.4,
                                        "height": 36.16,
                                        "stroke": null,
                                        "strokeWidth": 1,
                                        "fill": "#ff8800",
                                        "text": "${this.parameters.attitude1}",
                                        "fontStyle": "normal",
                                        "fontWeight": "normal",
                                        "fontSize": "32",
                                        "fontFamily": "sans-serif",
                                        "lineHeight": 1.16,
                                        "textAlign": "center"
                                      },
                                      {
                                        "type": "i-text",
                                        "left": 300,
                                        "top": 262,
                                        "angle": 0,
                                        "width": 180,
                                        "height": 67.53,
                                        "stroke": null,
                                        "strokeWidth": 1,
                                        "fill": "#555555",
                                        "text": "どちらかのカテゴリに\n当てはまる場合\n→ Jキー",
                                        "fontStyle": "normal",
                                        "fontWeight": "normal",
                                        "fontSize": "18",
                                        "fontFamily": "sans-serif",
                                        "lineHeight": 1.16,
                                        "textAlign": "center"
                                      },
                                      {
                                        "type": "i-text",
                                        "left": -300,
                                        "top": 262,
                                        "angle": 0,
                                        "width": 180,
                                        "height": 67.53,
                                        "stroke": null,
                                        "strokeWidth": 1,
                                        "fill": "#555555",
                                        "text": "どちらのカテゴリにも\n当てはまらない場合\n→ Fキー",
                                        "fontStyle": "normal",
                                        "fontWeight": "normal",
                                        "fontSize": "18",
                                        "fontFamily": "sans-serif",
                                        "lineHeight": 1.16,
                                        "textAlign": "center"
                                      }
                                    ],
                                    "viewport": [
                                      800,
                                      600
                                    ],
                                    "files": {},
                                    "responses": {},
                                    "parameters": {},
                                    "messageHandlers": {},
                                    "title": "blank",
                                    "timeout": "100"
                                  }
                                ]
                              }
                            }
                          ]
                        }
                      }
                    ]
                  }
                }
              ]
            }
          },
          {
            "type": "lab.html.Page",
            "items": [
              {
                "type": "text",
                "content": "${this.state.block1Concept1FocalMeanRT}",
                "title": "1ブロック目の概念1分類ブロックの平均反応時間"
              },
              {
                "required": true,
                "type": "text",
                "title": "2ブロック目の概念1分類ブロックの平均反応時間",
                "content": "${this.state.block2Concept1FocalMeanRT}"
              },
              {
                "required": true,
                "type": "text",
                "title": "1ブロック目の概念2分類ブロックの平均反応時間",
                "content": "${this.state.block1Concept2FocalMeanRT}"
              },
              {
                "required": true,
                "type": "text",
                "title": "2ブロック目の概念2分類ブロックの平均反応時間",
                "content": "${this.state.block2Concept2FocalMeanRT}"
              },
              {
                "required": true,
                "type": "text",
                "title": "1ブロック目のDスコア",
                "content": "${this.state.block1Dscore}"
              },
              {
                "required": true,
                "type": "text",
                "title": "2ブロック目のDスコア",
                "content": "${this.state.block2Dscore}"
              },
              {
                "required": true,
                "type": "text",
                "title": "平均Dスコア（メインの結果）",
                "content": "${this.state.meanDscore}"
              },
              {
                "required": true,
                "type": "text",
                "title": "フライング反応率（10％以上の参加者は除外推奨）",
                "content": "${this.state.fastResponceRate}"
              },
              {
                "required": true,
                "type": "html",
                "content": "\u003Cdiv class=\"content-horizontal-center\"\u003E\u003Cbutton\u003E終了\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E",
                "name": ""
              }
            ],
            "scrollTop": true,
            "submitButtonPosition": "hidden",
            "files": {},
            "responses": {},
            "parameters": {},
            "messageHandlers": {
              "before:prepare": function anonymous(
) {
//値の変換の関数を作成
function convertRTs(RTs){
  for(i = 0; i < RTs.length; i++)
  {
    if(RTs[i] < 400)
    {
      //400msに変換
      RTs[i] = 400
    }
    else if(RTs[i] > 2000 && RTs[i] < 10000)
    {
      //2〜10秒の場合は2秒に変換
      RTs[i] = 2000
    }
    else if(RTs[i] >= 10000)
    {
      //10秒以上の場合は除外
      RTs[i] = 0
    }
  }
  //0を除外
  RTs = RTs.filter(n => n !== 0);
  return RTs;
}

//概念1ブロックのRTを取得
let concept1FocalRTs = this.options.datastore.extract(
  'duration',
  'concept1FocalTrial'
)

//概念2ブロックのRTを取得
let concept2FocalRTs = this.options.datastore.extract(
  'duration',
  'concept2FocalTrial'
)

//全反応時間の配列を作成
const allRTs = concept1FocalRTs.concat(concept2FocalRTs);

//速すぎる反応回数を計算
let fastResponceNo = 0;
for(i in allRTs)
{
  if(allRTs[i] < 300)
  {
    fastResponceNo += 1
  }
}

const fastResponceRate = fastResponceNo/allRTs.length

//1ブロック目と2ブロック目の概念1ブロックの反応時間に分類
let block1Concept1FocalRTs = concept1FocalRTs.splice(0, concept1FocalRTs.length/2-1);
let block2Concept1FocalRTs = concept1FocalRTs.splice(concept1FocalRTs.length/2, concept1FocalRTs.length);

//配列の値を変換
block1Concept1FocalRTs = convertRTs(block1Concept1FocalRTs)
block2Concept1FocalRTs = convertRTs(block2Concept1FocalRTs)

//1ブロックの概念1ブロックの平均反応時間
const block1Concept1FocalMeanRT = ss.mean(block1Concept1FocalRTs)

//2ブロックの概念1ブロックの平均反応時間
const block2Concept1FocalMeanRT = ss.mean(block2Concept1FocalRTs)

//1,2ブロックの概念1ブロックの平均反応時間を代入
this.state.block1Concept1FocalMeanRT = Math.round(block1Concept1FocalMeanRT);
this.state.block2Concept1FocalMeanRT = Math.round(block2Concept1FocalMeanRT);

//1ブロック目と2ブロック目の概念1ブロックの反応時間に分類
let block1Concept2FocalRTs = concept2FocalRTs.splice(0, concept2FocalRTs.length/2-1);
let block2Concept2FocalRTs = concept2FocalRTs.splice(concept2FocalRTs.length/2, concept2FocalRTs.length);

//配列の値を変換
block1Concept2FocalRTs = convertRTs(block1Concept2FocalRTs)
block2Concept2FocalRTs = convertRTs(block2Concept2FocalRTs)


//1ブロックの概念2ブロックの平均反応時間
const block1Concept2FocalMeanRT = ss.mean(block1Concept2FocalRTs)

//2ブロックの概念2ブロックの平均反応時間
const block2Concept2FocalMeanRT = ss.mean(block2Concept2FocalRTs)

//1,2ブロックの概念1ブロックの平均反応時間を代入
this.state.block1Concept2FocalMeanRT = Math.round(block1Concept2FocalMeanRT);
this.state.block2Concept2FocalMeanRT = Math.round(block2Concept2FocalMeanRT);

//1ブロックのRT配列を作成
let block1RTs = block1Concept1FocalRTs.concat(block1Concept2FocalRTs)

//1ブロックのSDを計算
const block1PooledSD = ss.standardDeviation(block1RTs);

//2ブロックのRT配列を作成
let block2RTs = block2Concept1FocalRTs.concat(block2Concept2FocalRTs)

//2ブロックのSDを計算
const block2PooledSD = ss.standardDeviation(block2RTs);

//Dスコアを計算
const block1Dscore = (block1Concept2FocalMeanRT - block1Concept1FocalMeanRT)/block1PooledSD
this.state.block1Dscore = Math.round(block1Dscore * 100)/100

const block2Dscore = (block2Concept2FocalMeanRT - block2Concept1FocalMeanRT)/block2PooledSD
this.state.block2Dscore = Math.round(block2Dscore * 100)/100

const meanDscore = (block1Dscore + block2Dscore)/2
this.state.meanDscore = Math.round(meanDscore * 100)/100;

this.state.fastResponceRate = Math.round(fastResponceRate * 10000)/100
}
            },
            "title": "Results",
            "tardy": true
          }
        ]
      }
    }
  ]
})

// Let's go!
study.run()