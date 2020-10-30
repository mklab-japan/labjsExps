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
      "filePrefix": "rating-task-demo",
      "path": undefined
    }
  ],
  "metadata": {
    "title": "rating task demo",
    "description": "",
    "repository": "",
    "contributors": "Masanori Kobayashi（Yamagata University)"
  },
  "files": {},
  "responses": {},
  "content": [
    {
      "type": "lab.flow.Loop",
      "templateParameters": [
        {
          "image": "1.jpg",
          "": ""
        },
        {
          "image": "2.jpg",
          "": ""
        },
        {
          "image": "3.jpg",
          "": ""
        },
        {
          "image": "4.jpg",
          "": ""
        }
      ],
      "sample": {
        "mode": "draw-shuffle"
      },
      "files": {},
      "responses": {},
      "parameters": {},
      "messageHandlers": {},
      "title": "rating phase",
      "shuffleGroups": [],
      "template": {
        "type": "lab.flow.Sequence",
        "files": {},
        "responses": {},
        "parameters": {},
        "messageHandlers": {},
        "title": "rating trial",
        "content": [
          {
            "type": "lab.html.Page",
            "items": [
              {
                "required": true,
                "type": "image",
                "width": "",
                "height": "",
                "src": "${ this.files[this.parameters.image] }",
                "name": ""
              },
              {
                "required": true,
                "type": "text",
                "title": "\u003Cdiv class = \"content-horizontal-center\"\u003E画像の美味しさを評価してください\u003C\u002Fdiv\u003E",
                "content": "\u003Cdiv class = \"content-horizontal-center\"\u003E\u003Cp\u003E1 = 非常に不味そう　〜　5 = 非常に美味しそう\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E"
              },
              {
                "required": true,
                "type": "html",
                "content": "\u003Cdiv class = \"content-horizontal-space-between\"\u003E\n  \u003Cbutton id =\"btn1\"\u003E1\u003C\u002Fbutton\u003E\n  \u003Cbutton id =\"btn2\"\u003E2\u003C\u002Fbutton\u003E\n  \u003Cbutton id =\"btn3\"\u003E3\u003C\u002Fbutton\u003E\n  \u003Cbutton id =\"btn4\"\u003E4\u003C\u002Fbutton\u003E\n  \u003Cbutton id =\"btn5\"\u003E5\u003C\u002Fbutton\u003E\n\u003C\u002Fdiv\u003E",
                "name": ""
              }
            ],
            "scrollTop": true,
            "submitButtonText": "Continue →",
            "submitButtonPosition": "hidden",
            "files": {
              "1.jpg": "embedded\u002Ffa03cdae569849721ff4d0b23d7ef570fb46c34d629bc0215ba636362aad3406.jpg",
              "2.jpg": "embedded\u002F52109d5ae355bb1ed7537069d38373dff623655e5dbd33848a1c75ed76d887f1.jpg",
              "3.jpg": "embedded\u002F14ad2487171aae42fcfddb59838e5ef9584c909e045d3e1d091c695b3fbf103b.jpg",
              "4.jpg": "embedded\u002Ff57ba8d0a9b281c8681defb745684cb99af7492986d5f5e63f680e9c7ddf8417.jpg"
            },
            "responses": {
              "click button#btn1": "1",
              "click button#btn2": "2",
              "click button#btn3": "3",
              "click button#btn4": "4",
              "click button#btn5": "5"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "rating"
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
            "responses": {},
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