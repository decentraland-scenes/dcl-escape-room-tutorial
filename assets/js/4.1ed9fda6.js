(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{193:function(t,e,a){t.exports=a.p+"assets/img/defaultScene.a3379034.png"},200:function(t,e,a){"use strict";a.r(e);var s=a(0),n=Object(s.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"_00-setup"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_00-setup","aria-hidden":"true"}},[t._v("#")]),t._v(" 00: Setup")]),t._v(" "),s("center",[s("iframe",{attrs:{width:"560",height:"315",src:"https://www.youtube.com/embed/_9-74i-1c2k",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})]),t._v(" "),s("p",[t._v("Resources:")]),t._v(" "),s("ul",[s("li",[t._v("Documentation: "),s("a",{attrs:{href:"https://docs.decentraland.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("docs.decentraland.org"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://nodejs.org/en/",target:"_blank",rel:"noopener noreferrer"}},[t._v("NodeJS"),s("OutboundLink")],1)]),t._v(" "),s("li",[t._v("Complete example repo: "),s("a",{attrs:{href:"https://github.com/HardlyDifficult/dcl-escape-room-tutorial/tree/master/00-setup-complete",target:"_blank",rel:"noopener noreferrer"}},[t._v("00-setup-complete"),s("OutboundLink")],1)])]),t._v(" "),s("h2",{attrs:{id:"getting-started"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#getting-started","aria-hidden":"true"}},[t._v("#")]),t._v(" Getting Started")]),t._v(" "),s("p",[t._v("Navigate to an empty folder you want to work in, open a command prompt or Powershell window and run the following:")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("npm i -g decentraland\ndcl init\n")])])]),s("p",[t._v('And then run the following to see the "game" running in your browser:')]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("dcl start\n")])])]),s("p",[t._v("It should look something like this:")]),t._v(" "),s("p",[s("img",{attrs:{src:a(193),alt:"Default Scene"}})]),t._v(" "),s("p",[t._v("Frame rate for debugging in top left")]),t._v(" "),s("p",[t._v("Chat in bottom left.  It actually works when players are connected to the same server.  Try it by using a second tab.")]),t._v(" "),s("p",[t._v("A spinning box in the scene")]),t._v(" "),s("p",[t._v("You can walk (wasd or arrows) around and jump (space).")]),t._v(" "),s("h2",{attrs:{id:"add-a-model"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#add-a-model","aria-hidden":"true"}},[t._v("#")]),t._v(" Add a model")]),t._v(" "),s("p",[t._v("First we'll need the model itself, you can copy "),s("code",[t._v("models/scene.glb")]),t._v(" from one of our example scenes.")]),t._v(" "),s("p",[t._v("Delete the example contents inside "),s("code",[t._v("game.ts")]),t._v(" and then type the following:")]),t._v(" "),s("div",{staticClass:"language-typescript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-typescript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Create an entity for the main scene model")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" baseScene "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Entity")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Add it to the engine for rendering")]),t._v("\nengine"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEntity")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("baseScene"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Give it a component for the model itself")]),t._v("\nbaseScene"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addComponent")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("GLTFShape")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"models/scene.glb"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"configure-the-scene"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#configure-the-scene","aria-hidden":"true"}},[t._v("#")]),t._v(" Configure the scene")]),t._v(" "),s("p",[t._v("The house we are working in spans several parcels of land.  Update "),s("code",[t._v("scene.json")]),t._v(" to include multiple parcels as seen here:")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"parcels"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0,0"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1,0"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0,1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1,1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1,2"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0,2"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2,0"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2,1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2,2"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])])],1)},[],!1,null,null,null);e.default=n.exports}}]);