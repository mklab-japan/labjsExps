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
      "filePrefix": "break-loop-demo",
      "path": undefined
    }
  ],
  "metadata": {
    "title": "break loop demo",
    "description": "",
    "repository": "",
    "contributors": "Masanori Kobayashi"
  },
  "files": {},
  "responses": {},
  "content": [
    {
      "type": "lab.flow.Loop",
      "templateParameters": [
        {
          "trialNo": "1",
          "": ""
        },
        {
          "trialNo": "2",
          "": ""
        },
        {
          "trialNo": "3",
          "": ""
        },
        {
          "trialNo": "4",
          "": ""
        },
        {
          "trialNo": "5",
          "": ""
        }
      ],
      "sample": {
        "mode": "sequential"
      },
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Loop",
      "shuffleGroups": [],
      "template": {
        "type": "lab.html.Page",
        "items": [
          {
            "type": "text",
            "title": "\u003Cdiv class=\"content-horizontal-center\"\u003E${this.parameters.trialNo}\u003C\u002Fdiv\u003E",
            "content": "\u003Cdiv class=\"content-horizontal-space-around\"\u003E\n\u003Cbutton id = \"next\"\u003ENext\u003C\u002Fbutton\u003E\n\u003Cbutton id = \"end\"\u003EEnd\u003C\u002Fbutton\u003E\n\u003C\u002Fdiv\u003E"
          }
        ],
        "scrollTop": true,
        "submitButtonText": "Continue →",
        "submitButtonPosition": "hidden",
        "files": {},
        "responses": {
          "click button#next": "next",
          "click button#end": "end"
        },
        "parameters": {},
        "messageHandlers": {
          "end": function anonymous(
) {
if(this.data.response =="end")
{
  this.parent.end()
}
}
        },
        "title": "trial"
      }
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "title": "Finish!"
        }
      ],
      "scrollTop": true,
      "submitButtonText": "Continue →",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "finish",
      "timeout": "1000"
    }
  ]
})

// Let's go!
study.run()