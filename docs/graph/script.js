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
      "filePrefix": "graph_demo",
      "path": undefined
    }
  ],
  "metadata": {
    "title": "graph_demo",
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
          "title": "グラフ表示用のデモ",
          "content": "「＋」と「−」が表示される試行が5試行実施されます。「＋」が正答扱いになっています。\n\u003Cbr\u003E「＋」を押した割合を計算し，最後に正答率として表示されます。\u003Cbr\u003E\n\u003Cbr\u003Eまた，試行の正反応時間も計算しています。"
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
      "title": "inst"
    },
    {
      "type": "lab.flow.Loop",
      "templateParameters": [
        {
          "block": "1",
          "": ""
        }
      ],
      "sample": {
        "mode": "sequential",
        "n": "5"
      },
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "block",
      "indexParameter": "trialNo",
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
            "type": "lab.html.Screen",
            "files": {},
            "responses": {
              "click button#plus": "plus",
              "click button#minus": "minus"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "choice",
            "content": "\u003Cmain class = \"content-vertical-center content-horizontal-center\"\u003E\n  \u003Cdiv class = \"w-s content-horizontal-space-between\" \u003E\n   \u003Cbutton style=\"font-size:4vh\" id = \"plus\"\u003E+\u003C\u002Fbutton\u003E\n   \u003Cbutton style=\"font-size:4vh\" id = \"minus\"\u003E-\u003C\u002Fbutton\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fmain\u003E",
            "correctResponse": "plus"
          },
          {
            "type": "lab.html.Screen",
            "files": {},
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "blank",
            "timeout": "400"
          }
        ]
      }
    },
    {
      "type": "lab.flow.Sequence",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "displaySummary",
      "content": [
        {
          "type": "lab.html.Screen",
          "files": {},
          "responses": {
            "click button#next": "next"
          },
          "parameters": {
            "previousMean": 0.7,
            "previousError": 0.05,
            "colName": "correct",
            "rowName": "choice",
            "ymax": 1,
            "ymin": 0
          },
          "messageHandlers": {
            "run": function anonymous(
) {
//コンポーネント名（試行名）
const rowName = "choice"

//列名（従属変数名)
const colName = "correct"

//データを抽出
const ds = this.options.datastore
let yourData = ds.extract(colName, rowName)

//平均を計算
let yourMean = Math.round(lab.util.stats.mean(yourData) * 100)/100

//グラフ設定
new Chart(document.getElementById('plotArea').getContext('2d'), {
  type: 'barWithErrorBars',
  data: {
    labels: ['あなたのデータ'],
    datasets: [
      {
        barThickness: 100,
        data: [
          {
            label:'あなたのデータ',
            y: yourMean
          }
        ],
        //棒グラフの色
        backgroundColor: [
          'rgba(255, 99, 132, 0.5)'
        ],
      }
    ],
  },
  //y軸の最小と最大を指定
  options : {
    scales : {
      y : {
        min: 0,
        max: 1,
      }
    }
  }
});
}
          },
          "title": "displayMeanCorrectRate",
          "content": "\u003Cheader\u003E\n  平均正答率（%)\n\u003C\u002Fheader\u003E\n\u003Cmain class = \"content-horizontal-center content-vertical-center\"\u003E\n  \u003Cdiv class = \"w-l\"\u003E\n    \u003Ccanvas id = \"plotArea\"\u003E\u003C\u002Fcanvas\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fmain\u003E\n\u003Cfooter\u003E\n  \u003Cbutton id = \"next\"\u003E次へ\u003C\u002Fbutton\u003E\n\u003C\u002Ffooter\u003E",
          "tardy": true,
          "notes": "previousMean：過去データの平均値（数値）\npreviousMean：過去データのエラーバーの片側の幅（数値）\ncolName: 従属変数名\nrowName: 従属変数が出力されるコンポーネント名\nymax: Y軸の最大値\nymin:  Y軸の最小値\n\ncolNameはデフォルトでは，コンポーネントの「Behavior」で「Correct response」に対応しているので，正答率の場合はそのまま（correct）にしてください。\ncolName以外はプログラムに合わせて変更してください。"
        },
        {
          "type": "lab.html.Screen",
          "files": {},
          "responses": {
            "click button#next": "next"
          },
          "parameters": {
            "previousMean": 0.7,
            "previousError": 0.05,
            "colName": "correct",
            "rowName": "choice",
            "ymax": 1,
            "ymin": 0
          },
          "messageHandlers": {
            "run": function anonymous(
) {
//コンポーネント名（試行名）
const rowName = "choice"

//列名（従属変数名)
const colName = "correct"

//データを抽出
const ds = this.options.datastore
let yourData = ds.extract(colName, rowName)

//平均を計算
let yourMean = Math.round(lab.util.stats.mean(yourData) * 100)/100

//グラフ設定
new Chart(document.getElementById('plotArea').getContext('2d'), {
  type: 'barWithErrorBars',
  data: {
    labels: ['あなたのデータ'],
    datasets: [
      {
        barThickness: 100,
        data: [
          {
            label:'あなたのデータ',
            y: yourMean,
            yMin: yourMean-0.1,
            yMax: yourMean+0.1,
          }
        ],
        //棒グラフの色
        backgroundColor: [
          'rgba(255, 99, 132, 0.5)'
        ],
      }
    ],
  },
  //y軸の最小と最大を指定
  options : {
    scales : {
      y : {
        min: 0,
        max: 1,
      }
    }
  }
});
}
          },
          "title": "displayMeanCorrectRate",
          "content": "\u003Cheader\u003E\n  平均正答率（%)\n\u003C\u002Fheader\u003E\n\u003Cmain class = \"content-horizontal-center content-vertical-center\"\u003E\n  \u003Cdiv class = \"w-l\"\u003E\n    \u003Ccanvas id = \"plotArea\"\u003E\u003C\u002Fcanvas\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fmain\u003E\n\u003Cfooter\u003E\n  \u003Cbutton id = \"next\"\u003E次へ\u003C\u002Fbutton\u003E\n\u003C\u002Ffooter\u003E",
          "tardy": true,
          "notes": "previousMean：過去データの平均値（数値）\npreviousMean：過去データのエラーバーの片側の幅（数値）\ncolName: 従属変数名\nrowName: 従属変数が出力されるコンポーネント名\nymax: Y軸の最大値\nymin:  Y軸の最小値\n\ncolNameはデフォルトでは，コンポーネントの「Behavior」で「Correct response」に対応しているので，正答率の場合はそのまま（correct）にしてください。\ncolName以外はプログラムに合わせて変更してください。"
        },
        {
          "type": "lab.html.Screen",
          "files": {},
          "responses": {
            "click button#next": "next"
          },
          "parameters": {
            "rowName": "choice",
            "ymax": 10000,
            "ymin": 0
          },
          "messageHandlers": {
            "run": function anonymous(
) {
//コンポーネント名（試行名）
const rowName = "choice"

//列名（従属変数名)
const colName = "duration"

//データを抽出
const ds = this.options.datastore
const yourData = ds.data.filter(
  row => row.sender === rowName && row.correct === true
)
const rtCorrectTrials = yourData.map(row => row.duration)

//平均反応時間を計算
let yourMean = Math.round(lab.util.stats.mean(rtCorrectTrials) * 100)/100

//グラフ設定
new Chart(document.getElementById('plotArea').getContext('2d'), {
  type: 'barWithErrorBars',
  data: {
    labels: ['あなたのデータ'],
    datasets: [
      {
        barThickness: 100,
        data: [
          {
            label:'あなたのデータ',
            y: yourMean
          }
        ],
        //棒グラフの色
        backgroundColor: [
          'rgba(255, 99, 132, 0.5)'
        ],
      }
    ],
  },
  //y軸の最小と最大を指定
  options : {
    scales : {
      y : {
        min: 0,
        max: 10000,
      }
    }
  }
});
}
          },
          "title": "displayMeanCorrectRT",
          "content": "\u003Cheader\u003E\n  平均正反応時間(ms)\n\u003C\u002Fheader\u003E\n\u003Cmain class = \"content-horizontal-center content-vertical-center\"\u003E\n  \u003Cdiv class = \"w-l\"\u003E\n    \u003Ccanvas id = \"plotArea\"\u003E\u003C\u002Fcanvas\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fmain\u003E\n\u003Cfooter\u003E\n  \u003Cbutton id = \"next\"\u003E次へ\u003C\u002Fbutton\u003E\n\u003C\u002Ffooter\u003E",
          "tardy": true,
          "notes": "previousMean：過去データの平均値（数値）\npreviousMean：過去データのエラーバーの片側の幅（数値）\nrowName: 反応時間を出力するコンポーネント名\nymax: Y軸の最大値\nymin:  Y軸の最小値\n\ncolNameはデフォルトでは，コンポーネントの「Behavior」で「duration」に対応しているので，反応時間の場合はそのまま（correct）にしてください。\ncolName以外はプログラムに合わせて変更してください。\n＊正反応時間を出力するので，反応時間を出力するコンポーネントにおいてcorrect responseを必ず定義してください"
        },
        {
          "type": "lab.html.Screen",
          "files": {},
          "responses": {
            "click button#next": "next"
          },
          "parameters": {},
          "messageHandlers": {
            "run": function anonymous(
) {
//過去データ
const previousMean = 0.5;
const previousError = 0.1;

//本実験のデータ
//任意のコンポーネントの変数のみを抽出する
const rowName = "choice"//行名（正誤が出力されるコンポーネント名）

//列名（従属変数名)
const colName = "correct"

//データを抽出
const ds = this.options.datastore
let yourData = ds.extract(colName, rowName)

//平均を計算
let yourMean = Math.round(lab.util.stats.mean(yourData) * 100)/100

//グラフ設定
new Chart(document.getElementById('plotArea').getContext('2d'), {
  type: 'barWithErrorBars',
  data: {
    labels: ['あなたのデータ', '過去のデータ'],
    datasets: [
      {
        barThickness: 100,
        data: [
          {
            label:'あなたのデータ',
            y: yourMean
          },
          {
            label:'過去のデータ',
            y: previousMean,
            yMin: previousMean-previousError,
            yMax: previousMean+previousError,
          },
        ],
        //棒グラフの色
        backgroundColor: [
          'rgba(255, 99, 132, 0.5)',
          'rgba(54, 162, 235, 0.5)'
        ],
      }
    ],
  },
  //y軸の最小と最大を指定
  options : {
    scales : {
      y : {
        min: this.parameters.ymin,
        max: this.parameters.ymax,
      }
    },
    plugins:{
      legend: {
        display: false
      }
    }
  }
});
}
          },
          "title": "displayMeanCorrectRate_with_other",
          "content": "\u003Cheader\u003E\n  平均正答率（%)\n\u003C\u002Fheader\u003E\n\u003Cmain class = \"content-horizontal-center content-vertical-center\"\u003E\n  \u003Cdiv class = \"w-l\"\u003E\n    \u003Ccanvas id = \"plotArea\"\u003E\u003C\u002Fcanvas\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fmain\u003E\n\u003Cfooter\u003E\n  \u003Cbutton id = \"next\"\u003E次へ\u003C\u002Fbutton\u003E\n\u003C\u002Ffooter\u003E",
          "tardy": true
        }
      ]
    }
  ]
})

// Let's go!
study.run()