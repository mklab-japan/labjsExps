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
          "title": "ご参加ありがとうございます。",
          "content": "本研究では，画面に数字が表示されます。その数字が「3」以外の場合は，できるだけ速くかつ正確にスペースキーを押してください。もし，「3」の場合はスペースキーを押ささないでください。"
        },
        {
          "required": true,
          "type": "text",
          "title": "時々，課題中に「なに」を考えていたかをお聞きします。",
          "content": "どのような回答でもかまいませんので，正直にご回答ください。"
        },
        {
          "required": true,
          "type": "text",
          "content": "眠くなる場合があるため，寝ないように気をつけてください 。",
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
      "type": "lab.flow.Sequence",
      "files": {},
      "responses": {},
      "parameters": {},
      "messageHandlers": {
        "before:prepare": function anonymous(
) {
//参加者ごとに選択肢の順番をランダム化
let btnText = [
  '<div><button id = "taskRelatedBtn" style = "font-size: 2vh">課題に関する思考を考えていた</button></div>',
  '<div style><button id = "taskUnrelatedIntentionBtn" style = "font-size: 2vh">課題以外の思考を意図的に考えていた</button></div>',
   '<div style><button id = "taskUnrelatedUnintentionBtn" style = "font-size: 2vh">課題以外の思考を無意図的に考えていた</button></div>',
  '<div style><button id = "nothingBtn" style = "font-size: 2vh">何も考えていなかった</button></div>'
]

btnText = this.random.shuffle(btnText)

const esmHtml = '<main class = "content-horizontal-center content-vertical-center">' +
  '<div style = "font-size: 2.5vh"><p>直前まで「なに」を考えていたかを選択してください</p>' + 
  btnText[0] +
  btnText[1] +
  btnText[2] +
  btnText[3] +
  '</div></main>'
  
this.state.esmHtml = esmHtml;
}
      },
      "title": "Main",
      "content": [
        {
          "type": "lab.html.Screen",
          "files": {},
          "responses": {},
          "parameters": {},
          "messageHandlers": {},
          "title": "Start",
          "content": "\u003Cmain class=\"content-horizontal-center content-vertical-center\"\u003E\n  \u003Cdiv\u003E\n    \u003Cspan style = \"font-size: 6vh; font-color: tomato\"\u003ESTART!\u003C\u002Fspan\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fmain\u003E",
          "timeout": "1000"
        },
        {
          "type": "lab.flow.Loop",
          "templateParameters": [
            {
              "trialNo": "10"
            },
            {
              "trialNo": "14"
            },
            {
              "trialNo": "18"
            },
            {
              "trialNo": "22"
            },
            {
              "trialNo": "26"
            }
          ],
          "sample": {
            "mode": "draw-shuffle"
          },
          "files": {},
          "responses": {},
          "parameters": {},
          "messageHandlers": {},
          "title": "SART block",
          "shuffleGroups": [],
          "template": {
            "type": "lab.flow.Sequence",
            "files": {},
            "responses": {},
            "parameters": {},
            "messageHandlers": {},
            "title": "SART sequence",
            "content": [
              {
                "type": "lab.flow.Loop",
                "templateParameters": [],
                "sample": {
                  "mode": "sequential",
                  "n": ""
                },
                "files": {},
                "responses": {},
                "parameters": {},
                "messageHandlers": {
                  "before:prepare": function anonymous(
) {
let stimuliList = [];

let target = '3'

target = {item: target, type: 'nogo'}

let nontargetList = ['1', '2', '4', '5', '6', '7', '8', '9']

for(i in nontargetList)
{
  nontargetList[i] = {item: nontargetList[i], type: 'go'}
}

let maxTrialNo = this.parameters.trialNo;

let firstItemList = this.random.sample(nontargetList, 1)
stimuliList = firstItemList

let lastItemList = this.random.sample(nontargetList, 5)

let midItemList = this.random.sample(nontargetList, maxTrialNo - 7);

let targetNo;

if(maxTrialNo = 10)
{
  targetNo = 1
}
else if(maxTrialNo >= 14 && maxTrialNo <= 22)
{
  targetNo = 2
}
else if(maxTrialNo > 22)
{
  targetNo = 3
}

for(i = 0; i < targetNo; i++)
{
  midItemList.push(target);
}

midItemList = this.random.shuffle(midItemList)

for(i in midItemList)
{
  stimuliList.push(midItemList[i])
}
for(i in lastItemList)
{
  stimuliList.push(lastItemList[i])
}

for(i in stimuliList)
{
  this.options.templateParameters.push(stimuliList[i])
}
}
                },
                "title": "SART loop",
                "shuffleGroups": [],
                "template": {
                  "type": "lab.flow.Sequence",
                  "files": {},
                  "responses": {},
                  "parameters": {},
                  "messageHandlers": {
                    "before:prepare": function anonymous(
) {
//nogo反応をデフォルトとして，反応と正誤判定を指定しておく
this.data.response = "nogo";

if(this.parameters.type == "go"){
    this.data.correct = "incorrect";
}
else if(this.parameters.type == "nogo"){
  this.data.correct = "correct";
}

//go反応があった場合に反応記録と正誤判定
this.options.events['keypress(Space)'] = () =>
{
  if(this.parameters.type == "go"){
    this.data.correct = "correct";
  }
  else if(this.parameters.type == "nogo"){
    this.data.correct = "incorrect";
  }
  this.data.response = "go";
}
}
                  },
                  "title": "trial",
                  "content": [
                    {
                      "type": "lab.html.Screen",
                      "files": {},
                      "responses": {},
                      "parameters": {},
                      "messageHandlers": {},
                      "title": "go_nogo",
                      "content": "\u003Cmain class=\"content-horizontal-center content-vertical-center\"\u003E\n  \u003Cdiv\u003E\n    \u003Cspan style = \"font-size: 6vh\"\u003E${this.parameters.item}\u003C\u002Fspan\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fmain\u003E",
                      "timeout": "500"
                    },
                    {
                      "type": "lab.html.Screen",
                      "files": {},
                      "responses": {},
                      "parameters": {},
                      "messageHandlers": {},
                      "title": "ITI",
                      "timeout": "2000"
                    }
                  ]
                }
              },
              {
                "type": "lab.html.Screen",
                "files": {},
                "responses": {
                  "click button#taskRelatedBtn": "taskRelated",
                  "click button#taskUnrelatedIntentionBtn": "taskUnrelatedIntention",
                  "click button#nothingBtn": "nothing",
                  "click button#ttaskUnrelatedUnintentionBtn": "taskUnrelatedUnintention"
                },
                "parameters": {},
                "messageHandlers": {
                  "before:prepare": function anonymous(
) {
//選択順は参加者ごとにランダム

this.options.content = this.state.esmHtml
}
                },
                "title": "ESM"
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