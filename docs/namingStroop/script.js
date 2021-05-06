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
      "filePrefix": "namingstroop",
      "path": undefined
    }
  ],
  "metadata": {
    "title": "namingStroop",
    "description": "This experiment use JapaneseTextInputForLabJs（https:\u002F\u002Fgithub.com\u002Fmklab-japan\u002FjapaneseTextInputForLab.js）",
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
          "title": "課題説明",
          "content": "\u003Cp\u003E下のように画面上に「\u003Cspan style =\"color:red\"\u003E赤\u003C\u002Fspan\u003E」や「\u003Cspan style =\"color:blue\"\u003E赤\u003C\u002Fspan\u003E」のように様々な色の色名が表示されます。文字の意味ではなく，\u003Cstrong\u003E書かれている文字の色をできるだけ速くかつ正確に入力してください！\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\n\u003Cp\u003E例えば，「\u003Cspan style =\"color:red\"\u003E赤\u003C\u002Fspan\u003E」の場合は「あか」が正しい回答ですが，「\u003Cspan style =\"color:blue\"\u003E赤\u003C\u002Fspan\u003E」の場合は「あお」が正しい回答です。\u003C\u002Fp\u003E"
        },
        {
          "required": true,
          "type": "image",
          "src": "${ this.files[\"スクリーンショット 2021-05-06 14.44.38.png\"] }",
          "name": ""
        },
        {
          "required": true,
          "type": "html",
          "content": "\u003Cdiv class =\"content-horizontal-center\"\u003E\n  \u003Cbutton type =\"submit\" form=\"page-form\"\u003E課題を始める\u003C\u002Fbutton\u003E\n\u003C\u002Fdiv\u003E",
          "name": ""
        }
      ],
      "scrollTop": true,
      "submitButtonText": "Continue →",
      "submitButtonPosition": "hidden",
      "files": {
        "スクリーンショット 2021-05-06 14.44.38.png": "embedded\u002F13bb39df95fd429ca3de099a33e2e9fdd68068a6d3242df31877ea61b1cddcbf.png"
      },
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "instruction"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "required": true,
          "type": "html",
          "content": "\u003Cdiv class =\"content-horizontal-center\"\u003E\n  \u003Ch1\u003ESTART!\u003C\u002Fh1\u003E\n\u003C\u002Fdiv\u003E",
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
      "title": "start",
      "timeout": "1000"
    },
    {
      "type": "lab.flow.Loop",
      "templateParameters": [
        {
          "item": "赤",
          "color": "red",
          "condition": "congruent"
        },
        {
          "item": "青",
          "color": "blue",
          "condition": "congruent"
        },
        {
          "item": "緑",
          "color": "green",
          "condition": "congruent"
        },
        {
          "item": "黄",
          "color": "gold",
          "condition": "congruent"
        },
        {
          "item": "赤",
          "color": "red",
          "condition": "congruent"
        },
        {
          "item": "青",
          "color": "blue",
          "condition": "congruent"
        },
        {
          "item": "緑",
          "color": "green",
          "condition": "congruent"
        },
        {
          "item": "黄",
          "color": "gold",
          "condition": "congruent"
        },
        {
          "item": "赤",
          "color": "red",
          "condition": "congruent"
        },
        {
          "item": "青",
          "color": "blue",
          "condition": "congruent"
        },
        {
          "item": "緑",
          "color": "green",
          "condition": "congruent"
        },
        {
          "item": "黄",
          "color": "gold",
          "condition": "congruent"
        },
        {
          "item": "緑",
          "color": "red",
          "condition": "incongruent"
        },
        {
          "item": "赤",
          "color": "blue",
          "condition": "incongruent"
        },
        {
          "item": "赤",
          "color": "green",
          "condition": "incongruent"
        },
        {
          "item": "赤",
          "color": "gold",
          "condition": "incongruent"
        },
        {
          "item": "青",
          "color": "red",
          "condition": "incongruent"
        },
        {
          "item": "青",
          "color": "green",
          "condition": "incongruent"
        },
        {
          "item": "青",
          "color": "gold",
          "condition": "incongruent"
        },
        {
          "item": "緑",
          "color": "blue",
          "condition": "incongruent"
        },
        {
          "item": "緑",
          "color": "gold",
          "condition": "incongruent"
        },
        {
          "item": "黄",
          "color": "red",
          "condition": "incongruent"
        },
        {
          "item": "黄",
          "color": "blue",
          "condition": "incongruent"
        },
        {
          "item": "黄",
          "color": "green",
          "condition": "incongruent"
        }
      ],
      "sample": {
        "mode": "draw",
        "n": ""
      },
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "mainBlock",
      "shuffleGroups": [],
      "template": {
        "type": "lab.flow.Sequence",
        "files": {},
        "responses": {
          "": ""
        },
        "parameters": {},
        "messageHandlers": {},
        "title": "trial",
        "content": [
          {
            "type": "lab.html.Page",
            "items": [
              {
                "required": true,
                "type": "html",
                "content": "\u003Cdiv class=\"content-horizontal-center\"\u003E\n  \u003Cspan style = \"color:black; font-size:6vh\"\u003E+\u003C\u002Fspan\u003E\n\u003C\u002Fdiv\u003E",
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
            "timeout": "500"
          },
          {
            "type": "lab.html.Page",
            "items": [],
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
          },
          {
            "type": "lab.html.Page",
            "items": [
              {
                "required": true,
                "type": "html",
                "content": "\u003Cdiv class=\"content-horizontal-center\"\u003E\u003Cspan style = \"color:${this.parameters.color}; font-size:6vh\"\u003E${this.parameters.item}\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E",
                "name": ""
              },
              {
                "required": true,
                "type": "html",
                "content": "\u003Cdiv class=\"w-m alert content-horizontal-center\"\u003E\u003Cspan style = \"animation: blink 0.5s linear infinite alternate;\" id=\"inputWindow\"\u003E|\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E",
                "name": ""
              },
              {
                "required": true,
                "type": "html",
                "content": "\u003Cdiv class=\"content-horizontal-center\"\u003E\n  \u003Cp style=\"color:gray; font-size:1.5vh\"\u003E刺激の色名をできるだけ速く入力し，Enterで入力を確定してください\n  \u003Cbr\u003E（色名は，\"あお\"，\"あか\"，\"みどり\"，\"き\"のいずれかを入力してください）\n  \u003C\u002Fp\u003E\n\u003C\u002Fdiv\u003E",
                "name": ""
              }
            ],
            "scrollTop": true,
            "submitButtonText": "次へ",
            "submitButtonPosition": "hidden",
            "files": {},
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {
              "before:prepare": function anonymous(
) {
let inputArray =[]
let text;
let convertText = "";
window.response = "";

//初期カーソルの点滅用のCSSを追加
const css = document.createElement('style')
css.media = 'screen'
css.type = 'text/css'

const cssKeyframes ='@keyframes blink{ 0% {opacity: 0} 100% {opacity: 1.0}}';
const rules = document.createTextNode(cssKeyframes)
css.appendChild(rules)

document.getElementsByTagName('head')[0].appendChild(css);

//キー入力時
this.options.events['keydown'] = function(e) {
  //点滅をやめる
  if(inputArray.length <= 0)
  {
    document.getElementById('inputWindow').style = 'text-decoration: underline';
  }
  //削除時
  if(e.key == 'Backspace' || e.key == 'Delete'){
      //1文字のみの時はカーソルを表示
      if(inputArray.length == 1)
      {
        inputArray =['|']
        document.getElementById('inputWindow').style = 'animation: blink 0.5s linear infinite alternate;';
      }
      else{
        inputArray.pop();
      }
  }

  //押されたキーが1文字の時
  else if(e.key.length == 1){
    //最後まで消していた場合
    if(inputArray[0] == '|')
    {
      inputArray.pop()
      document.getElementById('inputWindow').style = 'text-decoration: underline';
    }
    inputArray.push(e.key);
  }

  //Enterの場合は終了
  else if(e.key == 'Enter')
  {
    this.end();
  }
  //配列を1つにまとめる
  convertText = inputArray.join('');

  //アルファベットをひらがな/カタカナに変換
  convertText = wanakana.toHiragana(convertText, {customKanaMapping: { n: 'n', nn: 'ん'}});
  
  //変換したテキストを表示
  document.getElementById('inputWindow').textContent = convertText;
  //変換したテキストを反応として保存
  this.data.response = convertText;
  window.response = convertText;
}
},
              "end": function anonymous(
) {
const response = window.response

if(this.parameters.color == "red" && response == "あか")
{
  this.data.correct = '1';
}
else if(this.parameters.color == "blue" && response == "あお")
{
  this.data.correct = '1';
}
else if(this.parameters.color == "green" && response == "みどり")
{
  this.data.correct = '1';
}
else if(this.parameters.color == "gold" && (response == "き" || response ==  "きいろ"))
{
  this.data.correct = '1';
}
else
{
  this.data.correct = '0';
}
}
            },
            "title": "item"
          },
          {
            "type": "lab.html.Page",
            "items": [
              {
                "required": true,
                "type": "html",
                "content": "\u003Cdiv class=\"content-horizontal-center\"\u003E\n  \u003Cspan style = \"color:black; font-size:6vh\"\u003E${this.state.correct==\"1\" ? \"○\" : \"×\"}\u003C\u002Fspan\u003E\n\u003C\u002Fdiv\u003E",
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
            "timeout": "500",
            "tardy": true
          },
          {
            "type": "lab.html.Page",
            "items": [],
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
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "title": "結果",
          "content": "\u003Ctable\u003E\n \u003Ctr\u003E\n   \u003Ctd\u003E変数\u003C\u002Ftd\u003E\u003Ctd\u003E値\u003C\u002Ftd\u003E\n \u003C\u002Ftr\u003E\n \u003Ctr\u003E\n   \u003Ctd\u003E一致試行・平均正答率（％）\u003C\u002Ftd\u003E\u003Ctd\u003E${this.state.meanCongruentCorrect}\u003C\u002Ftd\u003E\n \u003C\u002Ftr\u003E\n \u003Ctr\u003E\n   \u003Ctd\u003E一致試行・平均正反応時間（ms）\u003C\u002Ftd\u003E\u003Ctd\u003E${this.state.meanCongruentRT}\u003C\u002Ftd\u003E\n \u003C\u002Ftr\u003E\n \u003Ctr\u003E\n   \u003Ctd\u003E不一致試行・平均正答率（％）\u003C\u002Ftd\u003E\u003Ctd\u003E${this.state.meanCongruentCorrect}\u003C\u002Ftd\u003E\n \u003C\u002Ftr\u003E\n \u003Ctr\u003E\n   \u003Ctd\u003E不一致試行・平均正反応時間（ms）\u003C\u002Ftd\u003E\u003Ctd\u003E${this.state.meanIncongruentRT}\u003Ctd\u003E\u003C\u002Ftd\u003E\n \u003C\u002Ftr\u003E\n \u003Ctr\u003E\n   \u003Ctd\u003E干渉量\u003C\u002Ftd\u003E\u003Ctd\u003E${this.state.stroopEffect}\u003C\u002Ftd\u003E\n \u003C\u002Ftr\u003E\n\u003C\u002Ftable\u003E"
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
        "before:prepare": function anonymous(
) {
const ds = this.options.datastore

//一致条件
//試行を抽出
const congruentData = ds.data.filter(row =>
  row.sender === 'item' && row.condition === 'congruent')
const noOfCongruentTrial = congruentData.length

//正答試行を抽出
const congruentCorrectData = ds.data.filter(row => 
  row.sender === 'item' && row.condition === 'congruent'  && row.correct ==='1'
)
const noOfCongruentCorrectTrial = congruentCorrectData.length
//時間を抽出
const congruentCorrectRTs = congruentCorrectData.map(row => row.duration)
//平均を計算
const meanCongruentRT = lab.util.stats.mean(congruentCorrectRTs)
//小数点以下を丸める
this.state.meanCongruentRT = Math.round(meanCongruentRT, 0)
//正答率
this.state.meanCongruentCorrect = Math.round((noOfCongruentCorrectTrial/noOfCongruentTrial * 100), 2)

//不一致条件
//試行を抽出
const incongruentData = ds.data.filter(row => 
  row.sender === 'item' && row.condition === 'incongruent'
)
const noOfIncongruentTrial = incongruentData.length
//正答試行を抽出
const incongruentCorrectData = ds.data.filter(row => 
  row.sender === 'item' && row.condition === 'incongruent' && row.correct ==='1'
)
const noOfIncongruentCorrectTrial = incongruentCorrectData.length
//時間を抽出
const incongruentCorrectRTs = incongruentCorrectData.map(row => row.duration)
//平均を計算
const meanIncongruentRT = lab.util.stats.mean(incongruentCorrectRTs)
//小数点以下を丸める
this.state.meanIncongruentRT = Math.round(meanIncongruentRT, 0)
//正答率
this.state.meanIncongruentCorrect = Math.round((noOfIncongruentCorrectTrial/noOfIncongruentTrial * 100), 2)

//干渉量を計算
this.state.stroopEffect = Math.round(meanIncongruentRT - meanCongruentRT)
}
      },
      "title": "result",
      "tardy": true
    }
  ]
})

// Let's go!
study.run()