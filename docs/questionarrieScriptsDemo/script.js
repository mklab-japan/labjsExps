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
      "filePrefix": "questionarrie",
      "path": undefined
    }
  ],
  "metadata": {
    "title": "Questionarrie",
    "description": "",
    "repository": "",
    "contributors": "Masanori Kobayashi"
  },
  "files": {},
  "responses": {},
  "content": [
    {
      "type": "lab.html.Page",
      "items": [],
      "scrollTop": true,
      "submitButtonText": "次へ",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {},
      "parameters": {},
      "messageHandlers": {
        "before:prepare": function anonymous(
) {
//使い方: 以下の変数を適宜，変更して利用してください
//＊GUIのContentで作成した項目はすべて上書きされます

//教示タイトル
const instructionTitle = '調査';

//教示文
const instructionText = '以下の質問項目をよく読み，あなたにもっとも当てはまる選択肢を選んでください。';

//尺度名（データ記録用; 半角英数推奨)
const scaleName = 'animalLiking';

//質問項目（['']で囲み，[,]で区切る）
//項目番号をつける場合にはここに書かずに，↓の設定で行う
const items = [
  'わたしは犬が好きだ', 
  'わたしは猫が好きだ', 
  'わたしは鳥が好きだ', 
  'わたしは馬が好きだ', 
  'わたしは人が好きだ'
];

//選択肢
//必要な選択肢の数だけ増減してください（ [{}] と [,] を忘れずに）
//label: 選択肢の文章（画面に表示）
//coding: 選択肢を選んだ場合にデータに記録される値
const options = [
  {
    label: 'まったくあてはまらない',
    coding: '1'
  }, 
  {
    label:'あてはまらない',
    coding: '2'
  }, 
  {
    label:'どちらともいえない',
    coding: '3'
  }, 
  {
    label:'あてはまる',
    coding: '4'
  }, 
  {
    label:'非常によくあてはまる',
    coding: '5'
  }
]

//回答を必須にするか（回答を必須にする場合はtrue,しない場合はfalse)
const requiredOption = true;

//各質問項目に項目番号（1. 〜）をいれるか（いれる場合はtrue，いれない場合はfalse）
const addItemNumber = true;

//項目順をランダムにするか（ランダムにする場合はtrue,しない場合はfalse)
const randomaizedOrder = true;


//【注意】ここから下はむやみに変更しないでください【注意】
//調査を作成
//教示
this.options.items= [
  {
    type: "text",
    title: instructionTitle,
    content: instructionText
  }
]

//各項目と尺度名を配列に格納
let itemsArray = [];
let itemNo;

for(i in items){
  itemNo = parseInt(i) + 1;
  itemsArray.push(
    {
      item: items[i],
      scale: scaleName + '_' + itemNo
    }
  )
}

//ランダム順にする場合に並び替え
if(randomaizedOrder)
{
  itemsArray = this.random.shuffle(itemsArray)
}

//選択肢を配列に格納
const optionsArray =[]

for (i in options){
  optionsArray.push({
    label: options[i].label,
    coding: options[i].coding
  })
}

//質問項目を作成
const questions = [];

for (i in items){
  questions.push({
    required: requiredOption,
    type: 'radio',
    options: optionsArray,
    label: addItemNumber? parseInt(i) + 1 + '. ' + itemsArray[i].item: itemsArray[i].item,
    name: itemsArray[i].scale,
    shuffle: false
  })
  this.options.items.push(questions[i])
}

this.options.submitButtonPosition = 'center';
}
      },
      "title": "scale",
      "width": "m"
    }
  ]
})

// Let's go!
study.run()