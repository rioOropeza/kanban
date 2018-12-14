(function(t){function e(e){for(var a,r,n=e[0],d=e[1],l=e[2],u=0,p=[];u<n.length;u++)r=n[u],i[r]&&p.push(i[r][0]),i[r]=0;for(a in d)Object.prototype.hasOwnProperty.call(d,a)&&(t[a]=d[a]);c&&c(e);while(p.length)p.shift()();return o.push.apply(o,l||[]),s()}function s(){for(var t,e=0;e<o.length;e++){for(var s=o[e],a=!0,n=1;n<s.length;n++){var d=s[n];0!==i[d]&&(a=!1)}a&&(o.splice(e--,1),t=r(r.s=s[0]))}return t}var a={},i={app:0},o=[];function r(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=t,r.c=a,r.d=function(t,e,s){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(s,a,function(e){return t[e]}.bind(null,a));return s},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],d=n.push.bind(n);n.push=e,n=n.slice();for(var l=0;l<n.length;l++)e(n[l]);var c=d;o.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"034f":function(t,e,s){"use strict";var a=s("c21b"),i=s.n(a);i.a},"05b0":function(t,e,s){},1107:function(t,e,s){},"158c":function(t,e,s){"use strict";var a=s("f3dc"),i=s.n(a);i.a},3780:function(t,e,s){},"56d7":function(t,e,s){"use strict";s.r(e);var a=s("2b0e"),i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},o=[],r=(s("034f"),s("2877")),n={},d=Object(r["a"])(n,i,o,!1,null,null,null);d.options.__file="App.vue";var l=d.exports,c=s("8c4f"),u=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"boards"},[t._v("\n  WELCOME TO THE BOARDS!!!\n  "),s("button",{staticClass:"btn btn-outline-primary",attrs:{type:"button"},on:{click:t.logout}},[t._v("Logout")]),s("form",{on:{submit:function(e){return e.preventDefault(),t.addBoard(e)}}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.newBoard.title,expression:"newBoard.title"}],attrs:{type:"text",placeholder:"title",required:""},domProps:{value:t.newBoard.title},on:{input:function(e){e.target.composing||t.$set(t.newBoard,"title",e.target.value)}}}),s("input",{directives:[{name:"model",rawName:"v-model",value:t.newBoard.description,expression:"newBoard.description"}],attrs:{type:"text",placeholder:"description"},domProps:{value:t.newBoard.description},on:{input:function(e){e.target.composing||t.$set(t.newBoard,"description",e.target.value)}}}),s("button",{attrs:{type:"submit"}},[t._v("Create Board")])]),t._l(t.boards,function(e){return s("div",{key:e._id},[s("router-link",{attrs:{to:{name:"board",params:{boardId:e._id}}}},[t._v(t._s(e.title))]),s("button",{on:{click:function(s){t.deleteBoard(e._id)}}},[t._v("DELETE BOARD")])],1)})],2)},p=[],m={name:"boards",created(){this.$store.state.user._id||this.$router.push({name:"login"})},mounted(){this.$store.dispatch("getBoards")},data(){return{newBoard:{title:"",description:""}}},computed:{boards(){return this.$store.state.boards}},methods:{addBoard(){this.$store.dispatch("addBoard",this.newBoard),this.newBoard={title:"",description:""}},deleteBoard(t){this.$store.dispatch("deleteBoard",t)},logout(){this.$store.dispatch("logout")}}},h=m,v=Object(r["a"])(h,u,p,!1,null,null,null);v.options.__file="Boards.vue";var b=v.exports,f=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"board container-fluid bg-board"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-3"}),s("div",{staticClass:"col-9"}),s("router-link",{attrs:{to:{name:"boards"}}},[s("button",{staticClass:"btn btn-primary menu-buttons",attrs:{type:"button"}},[t._v("Home")])]),s("button",{staticClass:"btn btn-primary menu-buttons",attrs:{type:"button"},on:{click:t.logout}},[t._v("Logout")])],1),s("div",{staticClass:"row board-title"},[s("div",{staticClass:"col-12"},[s("h1",[t._v(t._s(t.board.title))])])]),s("div",{staticClass:"row"},t._l(t.lists,function(t){return s("List",{attrs:{listData:t}})})),s("div",{staticClass:"row add-list"},[s("form",{on:{submit:function(e){return e.preventDefault(),t.addList(e)}}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.newList.title,expression:"newList.title"}],attrs:{type:"text",placeholder:"List Title",required:""},domProps:{value:t.newList.title},on:{input:function(e){e.target.composing||t.$set(t.newList,"title",e.target.value)}}}),s("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("Add List")])])])])},g=[],w=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-4 card-stuff"},[s("div",{staticClass:"List card text-white bg-primary mb-3",staticStyle:{"max-width":"20rem",padding:"0"}},[s("div",{staticClass:"card-header header-border"},[t._v(t._s(t.listData.title))]),s("form",{on:{submit:function(e){return e.preventDefault(),t.addTask(e)}}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.newTask.title,expression:"newTask.title"}],attrs:{type:"text",placeholder:"Create Task",required:""},domProps:{value:t.newTask.title},on:{input:function(e){e.target.composing||t.$set(t.newTask,"title",e.target.value)}}}),s("button",{attrs:{type:"submit"}},[t._v("Create Task")])]),s("div",{staticClass:"card-body"},t._l(t.tasks,function(e){return s("div",{key:e._id,attrs:{div:""}},[s("ul",[s("li",[s("h4",{staticClass:"card-title"},[t._v(t._s(e.title)+" "),s("i",{staticClass:"fas fa-trash-alt cursorHand",on:{click:function(s){t.deleteTask(e._id)}}}),s("select",{directives:[{name:"model",rawName:"v-model",value:t.newListId,expression:"newListId"}],on:{change:[function(e){var s=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.newListId=e.target.multiple?s:s[0]},function(s){t.moveTask(e)}]}},[s("option",{attrs:{value:"",disabled:"",selected:""}},[t._v("Move to another list")]),t._l(t.lists,function(e){return s("option",{domProps:{value:e._id}},[t._v(t._s(e.title))])})],2)])]),t._l(e.comments,function(a){return s("p",{staticClass:"card-text comment-text"},[t._v("- "+t._s(a.description)+" "),s("i",{staticClass:"fas fa-trash-alt cursorHand",on:{click:function(s){t.deleteComment(e._id,a._id)}}})])}),s("form",{on:{submit:function(s){s.preventDefault(),t.addComment(e._id)}}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.newComment.description,expression:"newComment.description"}],attrs:{type:"text",placeholder:"Add Comment",required:""},domProps:{value:t.newComment.description},on:{input:function(e){e.target.composing||t.$set(t.newComment,"description",e.target.value)}}}),s("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("Add Comment")])])],2)])}))])])},_=[],k=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"Lists"},[s("form",{on:{submit:function(e){return e.preventDefault(),t.addList(e)}}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.newList.title,expression:"newList.title"}],attrs:{type:"text",placeholder:"title",required:""},domProps:{value:t.newList.title},on:{input:function(e){e.target.composing||t.$set(t.newList,"title",e.target.value)}}}),s("button",{staticClass:"btn btn-outline-primary",attrs:{type:"submit"}},[t._v("Add List")])]),s("div",[s("table",{staticClass:"table table-hover"},[s("tbody",[t._m(0),t._l(t.Lists,function(e){return s("div",[s("tr",{staticClass:"table-dark"},[s("th",{attrs:{scope:"row row-length"}},[t._v("Dark")]),s("td",[s("router-link",{attrs:{to:{name:"List",params:{listId:e._id,boardId:t.boardId}}}},[t._v(t._s(e.title))]),s("button",{staticClass:"btn btn-outline-danger",attrs:{type:"button"},on:{click:function(s){t.deleteList(e._id)}}},[t._v("Delete")])],1)])])})],2)])])])},L=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("tr",[s("th",{attrs:{scope:"col"}},[t._v("Type")]),s("th",{attrs:{scope:"col"}},[t._v("List Title")]),s("th",{attrs:{scope:"col"}},[t._v("Number of tasks")])])}],C={name:"Lists",data(){return{newList:{title:"",boardId:this.boardId}}},props:["boardId"],computed:{Lists(){return this.$store.state.lists[this.boardId]||[]}},mounted(){this.$store.dispatch("getLists")},methods:{addList(){console.log(this.newList),this.$store.dispatch("addList",this.newList),this.newList={title:"",boardId:this.boardId}},deleteList(t){this.$store.dispatch("deleteList",t)},switchPage(t){this.$store.dispatch("switchPage",t)}}},$=C,y=(s("a24c"),Object(r["a"])($,k,L,!1,null,"619804c2",null));y.options.__file="Lists.vue";var I=y.exports,T={name:"List",data(){return{boardId:this.$route.params.boardId,newTask:{title:"",boardId:this.$route.params.boardId,listId:this.listData._id},newComment:{description:""},newListId:""}},computed:{tasks(){return console.log(this.$store.state.tasks[this.listData._id]),this.$store.state.tasks[this.listData._id]||[]},lists(){return console.log(this.$store.state.lists[this.boardId]),this.$store.state.lists[this.boardId]||[]}},props:["listData"],methods:{addTask(){console.log(this.newTask),this.$store.dispatch("addTask",this.newTask),this.newTask={title:"",boardId:this.boardId,listId:this.listData._id}},deleteTask(t){this.$store.dispatch("deleteTask",t)},addComment(t){this.$store.dispatch("addComment",{taskId:t,data:this.newComment})},deleteComment(t,e){this.$store.dispatch("deleteComment",{taskId:t,commentId:e})},deleteList(t){this.$store.dispatch("deleteList",t)},moveTask(t){this.$store.dispatch("moveTask",{newListId:this.newListId,task:t})}},components:{Lists:I}},x=T,B=(s("f62b"),Object(r["a"])(x,w,_,!1,null,null,null));B.options.__file="List.vue";var U=B.exports,P={name:"board",created(){this.$store.state.user._id?(this.$store.dispatch("getLists",this.boardId),this.$store.dispatch("getTasks")):this.$router.push({name:"login"})},props:["boardId"],data(){return{newList:{title:"",boardId:this.boardId}}},computed:{lists(){return this.$store.state.lists[this.boardId]},board(){return this.$store.state.boards.find(t=>t._id==this.boardId)||{title:"loading"}}},methods:{logout(){this.$store.dispatch("logout")},addList(){this.$store.dispatch("addList",this.newList)}},components:{List:U}},D=P,O=(s("158c"),Object(r["a"])(D,f,g,!1,null,null,null));O.options.__file="Board.vue";var j=O.exports,N=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"login bg-login"},[t.loginForm?s("form",{on:{submit:function(e){return e.preventDefault(),t.loginUser(e)}}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.creds.email,expression:"creds.email"}],attrs:{type:"email",placeholder:"email"},domProps:{value:t.creds.email},on:{input:function(e){e.target.composing||t.$set(t.creds,"email",e.target.value)}}}),s("input",{directives:[{name:"model",rawName:"v-model",value:t.creds.password,expression:"creds.password"}],attrs:{type:"password",placeholder:"password"},domProps:{value:t.creds.password},on:{input:function(e){e.target.composing||t.$set(t.creds,"password",e.target.value)}}}),s("button",{attrs:{type:"submit"}},[t._v("Login")])]):s("form",{on:{submit:function(e){return e.preventDefault(),t.register(e)}}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.newUser.name,expression:"newUser.name"}],attrs:{type:"text",placeholder:"name"},domProps:{value:t.newUser.name},on:{input:function(e){e.target.composing||t.$set(t.newUser,"name",e.target.value)}}}),s("input",{directives:[{name:"model",rawName:"v-model",value:t.newUser.email,expression:"newUser.email"}],attrs:{type:"email",placeholder:"email"},domProps:{value:t.newUser.email},on:{input:function(e){e.target.composing||t.$set(t.newUser,"email",e.target.value)}}}),s("input",{directives:[{name:"model",rawName:"v-model",value:t.newUser.password,expression:"newUser.password"}],attrs:{type:"password",placeholder:"password"},domProps:{value:t.newUser.password},on:{input:function(e){e.target.composing||t.$set(t.newUser,"password",e.target.value)}}}),s("button",{attrs:{type:"submit"}},[t._v("Create Account")])]),s("div",{staticClass:"action",on:{click:function(e){t.loginForm=!t.loginForm}}},[t.loginForm?s("p",[t._v("No account? Click here to Register")]):s("p",[t._v("Already have an account? Click here to Login")])])])},E=[],A={name:"login",data(){return{loginForm:!0,creds:{email:"",password:""},newUser:{email:"",password:"",name:""}}},methods:{register(){this.$store.dispatch("register",this.newUser)},loginUser(){this.$store.dispatch("login",this.creds)}}},S=A,M=(s("d6db"),Object(r["a"])(S,N,E,!1,null,null,null));M.options.__file="Login.vue";var q=M.exports;a["a"].use(c["a"]);var F=new c["a"]({routes:[{path:"/",name:"boards",component:b},{path:"/board/:boardId",name:"board",props:!0,component:j},{path:"/login",name:"login",component:q},{path:"*",redirect:"/"}]}),R=s("2f62"),H=s("bc3a"),J=s.n(H);a["a"].use(R["a"]);let W=!window.location.host.includes("localhost"),z=W?"https://notebook-kanban.herokuapp.com/":"//localhost:3000",G=J.a.create({baseURL:z+"api/",timeout:3e3,withCredentials:!0}),K=J.a.create({baseURL:z+"api/",timeout:3e4,withCredentials:!0});function Q(t){let e={};for(let s=0;s<t.length;s++){let a=t[s].boardId;e[a]?e[a].push(t[s]):e[a]=[t[s]]}return e}function V(t){let e={};for(let s=0;s<t.length;s++){let a=t[s].listId;e[a]?e[a].push(t[s]):e[a]=[t[s]]}return e}var X=new R["a"].Store({state:{user:{},boards:[],activeBoard:{},lists:{},tasks:{}},mutations:{setUser(t,e){t.user=e},setBoards(t,e){t.boards=e},setLists(t,e){t.lists=Q(e),console.log(t.lists)},setTasks(t,e){a["a"].set(t,"tasks",V(e)),console.log(t.tasks)}},actions:{register({commit:t,dispatch:e},s){G.post("register",s).then(e=>{t("setUser",e.data),F.push({name:"boards"})})},authenticate({commit:t,dispatch:e}){G.get("authenticate").then(e=>{t("setUser",e.data),F.push({name:"boards"})})},login({commit:t,dispatch:e},s){G.post("login",s).then(e=>{t("setUser",e.data),F.push({name:"boards"})})},logout({commit:t,dispatch:e}){G.delete("logout").then(e=>{t("setUser")}),F.push({name:"login"})},getBoards({commit:t,dispatch:e}){K.get("boards").then(e=>{t("setBoards",e.data)})},addBoard({commit:t,dispatch:e},s){K.post("boards",s).then(t=>{e("getBoards")})},deleteBoard({commit:t,dispatch:e},s){K.delete("boards/"+s).then(t=>{e("getBoards")})},getLists({commit:t,dispatch:e},s){K.get("boards/"+s+"/lists").then(e=>{t("setLists",e.data)})},addList({commit:t,dispatch:e},s){K.post("lists",s).then(t=>{e("getLists")})},deleteList({commit:t,dispatch:e},s){K.delete("lists/"+s).then(t=>{e("getLists")})},switchPage({commit:t},e){F.push({name:"List"})},getTasks({commit:t,dispatch:e}){K.get("tasks").then(e=>{t("setTasks",e.data)})},addTask({commit:t,dispatch:e},s){K.post("tasks",s).then(t=>{e("getTasks")})},deleteTask({commit:t,dispatch:e},s){K.delete("tasks/"+s).then(t=>{e("getTasks")})},addComment({commit:t,dispatch:e},s){K.post("tasks/"+s.taskId+"/comments",s.data).then(t=>{e("getTasks")})},deleteComment({commit:t,dispatch:e},s){K.delete("tasks/"+s.taskId+"/comments/"+s.commentId).then(t=>{e("getTasks")})},moveTask({commit:t,dispatch:e},s){K.put("tasks/"+s.task._id,{listId:s.newListId}).then(t=>{e("getTasks")})}}});a["a"].config.productionTip=!1,new a["a"]({router:F,store:X,created(){this.$store.dispatch("authenticate")},render:t=>t(l)}).$mount("#app")},a24c:function(t,e,s){"use strict";var a=s("1107"),i=s.n(a);i.a},c21b:function(t,e,s){},d6db:function(t,e,s){"use strict";var a=s("05b0"),i=s.n(a);i.a},f3dc:function(t,e,s){},f62b:function(t,e,s){"use strict";var a=s("3780"),i=s.n(a);i.a}});
//# sourceMappingURL=app.7d84b799.js.map