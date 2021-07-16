// Define study
const study = lab.util.fromObject({
  "title": "root",
  "type": "lab.flow.Sequence",
  "parameters": {},
  "plugins": [
    {
      "type": "metadata",
      "path": undefined
    },
    {
      "type": "lab.plugins.Download",
      "filePrefix": "cardgambling",
      "path": undefined
    }
  ],
  "metadata": {
    "title": "cardGambling",
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
          "title": "これからカードを使ったゲームに挑戦していただきます。",
          "content": "2つのカードが表示されます。そのうち，1つは当たり，もう1つは外れです。当たりの場合は賞金を獲得でき，外れの場合は罰金となります。できるだけ，当たりを引いて，多くのお金を稼いでください！"
        }
      ],
      "scrollTop": true,
      "submitButtonText": "次へ",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {
        "wallet": "1000",
        "gain": "100",
        "loss": "100",
        "trialNo": "10"
      },
      "messageHandlers": {
        "end": function anonymous(
) {
window.wallet = parseInt(this.parameters.wallet)
window.gain = this.parameters.gain
window.loss = this.parameters.loss
window.trialNo = this.parameters.trialNo
}
      },
      "title": "Inst",
      "notes": "wallet：初期の所持金\ngain：当たり時の獲得金額\nloss：外れ時の損失金額（計算時に引く値なので，正の整数にする）\ntiralNo：繰り返し試行の回数\n\n○カスタマイズ\n・教示を変えたい場合は右上の「･･･」を選び，Templateのチェックを外して下さい\n・色々なデッキを作りたい場合はInstとgamePhaseをまるごとコピーして，以下のgainとlossを変化させたものを複数作り，そのいずれかがランダムに選ばれるようにするとよいかもしれません。"
    },
    {
      "type": "lab.flow.Loop",
      "templateParameters": [],
      "sample": {
        "mode": "draw-shuffle",
        "n": ""
      },
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {
        "gain": "100",
        "loss": "100"
      },
      "messageHandlers": {
        "before:prepare": function anonymous(
) {
const gain = window.gain
const loss = window.loss
let gainCard;

const trialNo = window.trialNo;
let trials = [];

for(let i = 0; i < trialNo; i++)
{
  gainCard = this.random.choice(["right", "left"])
  trials.push(
    {
      gainCard: gainCard
    }
  )
}
this.options.templateParameters = trials;
}
      },
      "title": "gamePhase",
      "tardy": true,
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
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "rect",
                "left": -175,
                "top": 0,
                "angle": 0,
                "width": 150,
                "height": 200,
                "stroke": "#000000",
                "strokeWidth": 5,
                "fill": "deepskyblue"
              },
              {
                "type": "rect",
                "left": 175,
                "top": 0,
                "angle": 0,
                "width": 150,
                "height": 200,
                "stroke": "#000000",
                "strokeWidth": 5,
                "fill": "deepskyblue"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": -175,
                "angle": 0,
                "width": 526.32,
                "height": 27.12,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "どちらかのカードを選び，クリックしてください",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "24",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "aoi",
                "left": -175,
                "top": 0,
                "angle": 0,
                "width": 150,
                "height": 200,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "rgba(0, 0, 0, 0.2)",
                "label": "left"
              },
              {
                "type": "aoi",
                "left": 175,
                "top": 0,
                "angle": 0,
                "width": 150,
                "height": 200,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "rgba(0, 0, 0, 0.2)",
                "label": "right"
              },
              {
                "type": "i-text",
                "left": 275,
                "top": -275,
                "angle": 0,
                "width": 312.96,
                "height": 27.12,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "tomato",
                "text": "所持金：${window.wallet}円",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "24",
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
            "responses": {
              "click @right": "right",
              "click @left": "left"
            },
            "parameters": {},
            "messageHandlers": {
              "end": function anonymous(
) {
if(this.data.response == this.parameters.gainCard)
{
  window.wallet += parseInt(window.gain)
}
else
{
  window.wallet -= parseInt(window.loss)
}
}
            },
            "title": "choice",
            "tardy": true
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 820.26,
                "height": 120.05,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "tomato",
                "text": "${this.state.response == this.parameters.gainCard? \n'当たり\\n\\n +' + this.parameters.gain : \n'はずれ\\n\\n -' + this.parameters.loss}",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
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
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "feedback",
            "timeout": "1000",
            "tardy": true
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 417.28,
                "height": 36.16,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "tomato",
                "text": "所持金：${window.wallet}円",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
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
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "showWallet",
            "timeout": "1000",
            "tardy": true
          }
        ]
      }
    }
  ]
})

// Let's go!
study.run()