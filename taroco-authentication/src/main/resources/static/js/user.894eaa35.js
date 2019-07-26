(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["user"],{1058:function(e,t,a){},"85ce":function(e,t,a){"use strict";var r=a("1058"),i=a.n(r);i.a},ac2a:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"main"},[a("a-form",{ref:"formLogin",staticClass:"user-layout-login",attrs:{id:"formLogin",form:e.form},on:{submit:e.handleSubmit}},[a("a-tabs",{attrs:{activeKey:e.customActiveKey,tabBarStyle:{textAlign:"center",borderBottom:"unset"}},on:{change:e.handleTabClick}},[a("a-tab-pane",{key:"tab1",attrs:{tab:"账号密码登录"}},[a("a-form-item",[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["username",{rules:[{required:!0,message:"请输入帐户名或邮箱地址"},{validator:e.handleUsernameOrEmail}],validateTrigger:"change"}],expression:"[\n              'username',\n              {rules: [{ required: true, message: '请输入帐户名或邮箱地址' }, { validator: handleUsernameOrEmail }], validateTrigger: 'change'}\n            ]"}],attrs:{size:"large",type:"text",placeholder:"账户: admin"}},[a("a-icon",{style:{color:"rgba(0,0,0,.25)"},attrs:{slot:"prefix",type:"user"},slot:"prefix"})],1)],1),a("a-form-item",[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["password",{rules:[{required:!0,message:"请输入密码"}],validateTrigger:"blur"}],expression:"[\n              'password',\n              {rules: [{ required: true, message: '请输入密码' }], validateTrigger: 'blur'}\n            ]"}],attrs:{size:"large",type:"password",autocomplete:"false",placeholder:"密码: admin"}},[a("a-icon",{style:{color:"rgba(0,0,0,.25)"},attrs:{slot:"prefix",type:"lock"},slot:"prefix"})],1)],1)],1),a("a-tab-pane",{key:"tab2",attrs:{tab:"手机号登录"}},[a("a-form-item",[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["mobile",{rules:[{required:!0,pattern:/^[1](([3][0-9])|([4][5-9])|([5][0-3,5-9])|([6][5,6])|([7][0-8])|([8][0-9])|([9][1,8,9]))[0-9]{8}$/,message:"请输入正确的手机号"}],validateTrigger:"change"}],expression:"['mobile', {rules: [{ required: true, pattern: /^[1](([3][0-9])|([4][5-9])|([5][0-3,5-9])|([6][5,6])|([7][0-8])|([8][0-9])|([9][1,8,9]))[0-9]{8}$/, message: '请输入正确的手机号' }], validateTrigger: 'change'}]"}],attrs:{size:"large",type:"text",placeholder:"手机号"}},[a("a-icon",{style:{color:"rgba(0,0,0,.25)"},attrs:{slot:"prefix",type:"mobile"},slot:"prefix"})],1)],1),a("a-row",{attrs:{gutter:16}},[a("a-col",{staticClass:"gutter-row",attrs:{span:16}},[a("a-form-item",[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["code",{rules:[{required:!0,message:"请输入验证码"}],validateTrigger:"blur"}],expression:"['code', {rules: [{ required: true, message: '请输入验证码' }], validateTrigger: 'blur'}]"}],attrs:{size:"large",type:"text",placeholder:"验证码"}},[a("a-icon",{style:{color:"rgba(0,0,0,.25)"},attrs:{slot:"prefix",type:"mail"},slot:"prefix"})],1)],1)],1),a("a-col",{staticClass:"gutter-row",attrs:{span:8}},[a("a-button",{staticClass:"getCaptcha",attrs:{tabindex:"-1",disabled:e.state.smsSendBtn},domProps:{textContent:e._s(e.state.smsSendBtn?e.state.time+" s":"获取验证码")},on:{click:function(t){return t.stopPropagation(),t.preventDefault(),e.getCaptcha(t)}}})],1)],1)],1)],1),a("a-form-item",{staticStyle:{"margin-bottom":"0"}},[a("a-checkbox",{directives:[{name:"decorator",rawName:"v-decorator",value:["remember-me"],expression:"['remember-me']"}]},[e._v("自动登录")])],1),a("a-form-item",[a("a-button",{staticClass:"login-button",attrs:{size:"large",type:"primary",htmlType:"submit",loading:e.state.loginBtn,disabled:e.state.loginBtn}},[e._v("确定")])],1)],1)],1)},i=[],s=a("cebc"),n=a("2f62"),o=a("c24f"),l={components:{},data:function(){return{customActiveKey:"tab1",loginBtn:!1,loginType:0,stepCaptchaVisible:!1,form:this.$form.createForm(this),state:{time:60,loginBtn:!1,loginType:0,smsSendBtn:!1}}},created:function(){},methods:Object(s["a"])({},Object(n["b"])(["Login","Logout","LoginByMobile"]),{handleUsernameOrEmail:function(e,t,a){var r=this.state,i=/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/;i.test(t)?r.loginType=0:r.loginType=1,a()},handleTabClick:function(e){this.customActiveKey=e},handleSubmit:function(e){var t=this;e.preventDefault();var a=this.form.validateFields,r=this.state,i=this.customActiveKey,n=this.Login,o=this.LoginByMobile;r.loginBtn=!0;var l="tab1"===i?["username","password","remember-me"]:["mobile","code","remember-me"];a(l,{force:!0},function(e,a){if(e)setTimeout(function(){r.loginBtn=!1},600);else{var l=Object(s["a"])({},a);"tab1"===i?n(l).then(function(e){return t.loginSuccess(e)}).finally(function(){r.loginBtn=!1}):o(l).then(function(e){return t.loginSuccess(e)}).finally(function(){r.loginBtn=!1})}})},getCaptcha:function(e){var t=this;e.preventDefault();var a=this.form.validateFields,r=this.state;a(["mobile"],{force:!0},function(e,a){if(!e){r.smsSendBtn=!0;var i=window.setInterval(function(){r.time--<=0&&(r.time=60,r.smsSendBtn=!1,window.clearInterval(i))},1e3),s=t.$message.loading("验证码发送中..",0);Object(o["e"])(a.mobile).then(function(e){setTimeout(s,1),"SUCCEED"===e.status&&t.$notification["success"]({message:"提示",description:"验证码获取成功，您的验证码为："+e.result,duration:10})}).catch(function(){setTimeout(s,1),clearInterval(i),r.time=60,r.smsSendBtn=!1})}})},stepCaptchaCancel:function(){var e=this;this.Logout().then(function(){e.loginBtn=!1,e.stepCaptchaVisible=!1})},loginSuccess:function(e){var t=e.result;t?window.location.href=t:this.$router.push({name:"home"})}})},c=l,u=(a("85ce"),a("2877")),m=Object(u["a"])(c,r,i,!1,null,"3a9914ce",null);t["default"]=m.exports}}]);