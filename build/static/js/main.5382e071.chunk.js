(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{23:function(e,t,a){e.exports=a(53)},29:function(e,t,a){},30:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){},51:function(e,t,a){},53:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),s=a(19),r=a.n(s),c=(a(29),a(2)),i=a(3),l=a(5),u=a(4),d=a(6),m=(a(30),a(9)),k=a(8),h=a.n(k),f=a(22),p=a(20),j=a(7),v=(a(32),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).addNewJokes=a.addNewJokes.bind(Object(j.a)(a)),a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"addNewJokes",value:function(){this.props.addNewJokes()}},{key:"render",value:function(){return o.a.createElement("div",{className:"LeftHeader"},o.a.createElement("h1",{className:"LeftHeader-title"},o.a.createElement("span",null,"Dad")," Jokes"),o.a.createElement("div",{className:"LeftHeader-emoji"},o.a.createElement("img",{src:"https://assets.dryicons.com/uploads/icon/svg/8927/0eb14c71-38f2-433a-bfc8-23d9c99b3647.svg",alt:"Smiling Emoji"})),o.a.createElement("button",{className:"LeftHeader-btn",onClick:this.addNewJokes},"New Jokes"))}}]),t}(n.Component)),g=(a(33),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={score:0},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"changeEmoji",value:function(){var e=this.props.score;return e>=15?"em em-rolling_on_the_floor_laughing":e>=12?"em em-laughing":e>=9?"em em-smiley":e>=6?"em em-slightly_smiling_face":e>=3?"em em-neutral_face":e>=0?"em em-confused":"em em-angry"}},{key:"changeBorderColor",value:function(){var e=this.props.score;return e>=15?"#4CAF50":e>=12?"#8BC34A":e>=9?"#CDDC39":e>=6?"#FFEB3B":e>=3?"#FFC107":e>=0?"#FF9800":"#f44336"}},{key:"render",value:function(){return o.a.createElement("li",{className:"Joke"},o.a.createElement("div",{className:"Joke-vote-score"},o.a.createElement("i",{className:"fas fa-arrow-up",onClick:this.props.voteUp,id:this.props.id}),o.a.createElement("div",{className:"Joke-score",style:{borderColor:this.changeBorderColor()}},this.props.score),o.a.createElement("i",{className:"fas fa-arrow-down",onClick:this.props.voteDown,id:this.props.id})),o.a.createElement("div",{className:"Joke-joke"},this.props.joke),o.a.createElement("span",{className:"Joke-emoji"},o.a.createElement("i",{className:this.changeEmoji()})))}}]),t}(n.Component)),b=a(21),w=a.n(b),J=(a(51),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={jokesData:JSON.parse(window.localStorage.getItem("jokes")||"[]"),isLoading:!1},a.seenJoke=new Set(a.state.jokesData.map(function(e){return e.joke})),console.log(a.seenJoke),a.addNewJokes=a.addNewJokes.bind(Object(j.a)(a)),a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){0===this.state.jokesData.length&&this.getJokes()}},{key:"getJokes",value:function(){var e=Object(p.a)(h.a.mark(function e(){var t,a,n;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:e.prev=0,t=[];case 2:if(!(t.length<this.props.numJokes)){e.next=10;break}return e.next=5,w.a.get("https://icanhazdadjoke.com/",{headers:{Accept:"application/json"}});case 5:a=e.sent,n=a.data,this.seenJoke.has(n.joke)?console.log("Duplicate has an id "+n.joke):(n.score=0,t.push(n),this.seenJoke.add(n.joke)),e.next=2;break;case 10:this.setState(function(e){return{jokesData:[].concat(Object(f.a)(e.jokesData),t),isLoading:!1}}),window.localStorage.setItem("jokes",JSON.stringify(this.state.jokesData)),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(0),alert(e.t0),this.setState({isLoading:!1});case 18:case"end":return e.stop()}},e,this,[[0,14]])}));return function(){return e.apply(this,arguments)}}()},{key:"handleVote",value:function(e,t){var a=this;this.setState(function(a){return{jokesData:a.jokesData.map(function(a){return a.id===e?Object(m.a)({},a,{score:a.score+t}):Object(m.a)({},a)})}},function(){return window.localStorage.setItem("jokes",JSON.stringify(a.state.jokesData))})}},{key:"addNewJokes",value:function(){this.setState({isLoading:!0},this.getJokes)}},{key:"render",value:function(){var e=this,t=this.state.jokesData.sort(function(e,t){return t.score-e.score});return o.a.createElement("div",{className:"DadJokes"},o.a.createElement(v,{addNewJokes:this.addNewJokes}),o.a.createElement("div",{className:"DadJokes-container"},this.state.isLoading?o.a.createElement("div",{className:"DadJokes-load"},o.a.createElement("p",null,"Loading..."),o.a.createElement("i",{className:"far fa-8x fa-laugh fa-spin"})):o.a.createElement("ul",null,t.map(function(t){return o.a.createElement(g,{key:t.id,joke:t.joke,id:t.id,voteUp:function(){return e.handleVote(t.id,1)},voteDown:function(){return e.handleVote(t.id,-1)},score:t.score})}))))}}]),t}(n.Component));J.defaultProps={numJokes:10};var N=J,E=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement(N,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(52);r.a.render(o.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[23,1,2]]]);
//# sourceMappingURL=main.5382e071.chunk.js.map