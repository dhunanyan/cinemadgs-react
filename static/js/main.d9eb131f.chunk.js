(this["webpackJsonpreact-website"]=this["webpackJsonpreact-website"]||[]).push([[0],{28:function(e,a,t){},29:function(e,a,t){},35:function(e,a,t){},37:function(e,a,t){},38:function(e,a,t){},39:function(e,a,t){"use strict";t.r(a);var i=t(0),n=t.n(i),r=t(16),s=t.n(r),m=(t(28),t(7)),o=t(8),c=t(11),d=t(10),g=t(23),M=t(2),l=(t(29),t(22)),_=(t(35),t(3)),p=function(e){var a=e.movie;return Object(_.jsx)("div",{class:"card",style:{backgroundImage:"url('".concat(a.image,"')"),backgroundPosition:"bottom center",backgroundSize:"cover"},children:Object(_.jsxs)("div",{className:"card__content",children:[Object(_.jsxs)("h2",{className:"card__subtitle subtitle",children:[" ",a.name.length>20?"".concat(a.name.slice(0,20),"..."):a.name]}),Object(_.jsx)("p",{className:"card__descr descr",children:a.description.length>120?"".concat(a.description.slice(0,120),"..."):a.description}),Object(_.jsx)("button",{className:"card__btn",style:{transition:"all 350ms ease-out"},children:"Reserve"})]})})},j=(t(37),function(e){var a=e.movies,t=(e.genres,e.sliderGenre);return Object(_.jsx)(l.a,{breakPoints:[{width:1,itemsToShow:1},{width:500,itemsToShow:2},{width:768,itemsToShow:3},{width:1e3,itemsToShow:4},{width:1200,itemsToShow:4}],className:"slider slider--horror styling-example",children:a.map((function(e){return e.genres.map((function(a){return a===t&&Object(_.jsx)(p,{movie:e},e.roomID)}))}))})}),h=(t(38),function(e){Object(c.a)(t,e);var a=Object(d.a)(t);function t(){var e;return Object(m.a)(this,t),(e=a.call(this)).state={monsters:[],movies:[{id:"786621",name:"Harry Potter i Insygnia \u015amierci",description:"ipsam sed dolores aliquam et alias tempora maiores ipsum pariatur, dolore animi vel ducimus fugit eaque! Quibusdam maiores, obcaecati quia tempore adipisci eligendi eum placeat perspiciatis repellendus esse veritatis blanditiis voluptate nam excepturi similique totam sed exercitationem rerum quo est, nulla fugit recusandae labore. Eveniet laborum enim impedit mollitia placeat aspernatur modi obcaecati.",date:"2012-12-01 12:00:21",genres:["adventure","fantastic","family"],length:180,roomID:1,freeSeats:42,image:"https://m.media-amazon.com/images/M/MV5BMGVmMWNiMDktYjQ0Mi00MWIxLTk0N2UtN2ZlYTdkN2IzNDNlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX150_CR0,0,150,150_.jpg"},{id:"786622",name:"Mroczny Rycerz powstaje",description:"string",genres:["fantastic"],date:"2012-12-01 12:00:21",length:180,roomID:2,freeSeats:42,image:"https://m.media-amazon.com/images/M/MV5BMTk4ODQzNDY3Ml5BMl5BanBnXkFtZTcwODA0NTM4Nw@@._V1_SX150_CR0,0,150,150_.jpg"},{id:"786623",name:"Hobbit: Niezwyk\u0142a podr\xf3\u017c",description:"string",genres:["family","adventure","fantastic"],date:"2012-12-01 12:00:21",length:180,roomID:3,freeSeats:42,image:"https://m.media-amazon.com/images/M/MV5BMTcwNTE4MTUxMl5BMl5BanBnXkFtZTcwMDIyODM4OA@@._V1_SX150_CR0,0,150,150_.jpg"},{id:"786624",name:"Mroczny Rycerz",description:"string",genres:["fantastic"],date:"2012-12-01 12:00:21",length:180,roomID:4,freeSeats:42,image:"https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX150_CR0,0,150,150_.jpg"},{id:"786625",name:"Harry Potter i Kamie\u0144 Filozoficzny",description:"string",genres:["fantastic","family","adventure"],date:"2012-12-01 12:00:21",length:180,roomID:5,freeSeats:42,image:"https://m.media-amazon.com/images/M/MV5BNjQ3NWNlNmQtMTE5ZS00MDdmLTlkZjUtZTBlM2UxMGFiMTU3XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_SX150_CR0,0,150,150_.jpg"},{id:"786626",name:"Harry Potter i Insygnia \u015amierci",description:"string",genres:["fantastic","family","adventure"],date:"2012-12-01 12:00:21",length:180,roomID:6,freeSeats:42,image:"https://m.media-amazon.com/images/M/MV5BMTQ2OTE1Mjk0N15BMl5BanBnXkFtZTcwODE3MDAwNA@@._V1_SX150_CR0,0,150,150_.jpg"},{id:"786627",name:"Hobbit: Pustkowie Smauga",description:"string",genres:["fantastic","family","adventure"],date:"2012-12-01 12:00:21",length:180,roomID:7,freeSeats:42,image:"https://m.media-amazon.com/images/M/MV5BMzU0NDY0NDEzNV5BMl5BanBnXkFtZTgwOTIxNDU1MDE@._V1_SX150_CR0,0,150,150_.jpg"},{id:"786628",name:"Hobbit: Bitwa Pi\u0119ciu Armii",description:"string",genres:["fantastic","family","adventure"],date:"2012-12-01 12:00:21",length:180,roomID:8,freeSeats:42,image:"https://m.media-amazon.com/images/M/MV5BMTYzNDE3OTQ3MF5BMl5BanBnXkFtZTgwODczMTg4MjE@._V1_SX150_CR0,0,150,150_.jpg"},{id:"786629",name:"Harry Potter i Zakon Feniksa",description:"string",genres:["fantastic","family","adventure"],date:"2012-12-01 12:00:21",length:180,roomID:9,freeSeats:42,image:"https://m.media-amazon.com/images/M/MV5BMTM0NTczMTUzOV5BMl5BanBnXkFtZTYwMzIxNTg3._V1_SX150_CR0,0,150,150_.jpg"},{id:"786630",name:"Harry Potter i Ksi\u0105\u017c\u0119 P\xf3\u0142krwi",description:"string",genres:["fantastic","family","adventure"],date:"2012-12-01 12:00:21",length:180,roomID:10,freeSeats:42,image:"https://m.media-amazon.com/images/M/MV5BNzU3NDg4NTAyNV5BMl5BanBnXkFtZTcwOTg2ODg1Mg@@._V1_SX150_CR0,0,150,150_.jpg"},{id:"786631",name:"Harry Potter i Czara Ognia",description:"string",genres:["fantastic","family","adventure"],date:"2012-12-01 12:00:21",length:180,roomID:11,freeSeats:42,image:"https://m.media-amazon.com/images/M/MV5BMTI1NDMyMjExOF5BMl5BanBnXkFtZTcwOTc4MjQzMQ@@._V1_SX150_CR0,0,150,150_.jpg"},{id:"786632",name:"Harry Potter i Komnata Tajemnic",description:"string",genres:["fantastic","family","adventure"],date:"2012-12-01 12:00:21",length:180,roomID:12,freeSeats:42,image:"https://m.media-amazon.com/images/M/MV5BMTcxODgwMDkxNV5BMl5BanBnXkFtZTYwMDk2MDg3._V1_SX150_CR0,0,150,150_.jpg"},{id:"786633",name:"Batman kontra Superman: \u015awit sprawiedliwo\u015bci ",description:"string",genres:["fantastic"],date:"2012-12-01 12:00:21",length:180,roomID:13,freeSeats:42,image:"https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX150_CR0,0,150,150_.jpg"},{id:"786634",name:"Incepcja",description:"string",genres:["horror","fantastic"],date:"2012-12-01 12:00:21",length:180,roomID:14,freeSeats:42,image:"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX150_CR0,0,150,150_.jpg"},{id:"786635",name:"Harry Potter i wi\u0119zie\u0144 Azkabanu",description:"string",genres:["fantastic","family","adventure"],date:"2012-12-01 12:00:21",length:180,roomID:15,freeSeats:42,image:"https://m.media-amazon.com/images/M/MV5BMTY4NTIwODg0N15BMl5BanBnXkFtZTcwOTc0MjEzMw@@._V1_SX150_CR0,0,150,150_.jpg"},{id:"786636",name:"Fantastyczne zwierz\u0119ta i jak je znale\u017a\u0107",description:"string",genres:["comedy","fantastic","family","adventure"],date:"2012-12-01 12:00:21",length:180,roomID:16,freeSeats:42,image:"https://m.media-amazon.com/images/M/MV5BMjMxOTM1OTI4MV5BMl5BanBnXkFtZTgwODE5OTYxMDI@._V1_SX150_CR0,0,150,150_.jpg"},{id:"786637",name:"Legion samob\xf3jc\xf3w",description:"string",genres:["horror","comedy","fantastic","adventure"],date:"2012-12-01 12:00:21",length:180,roomID:17,freeSeats:42,image:"https://m.media-amazon.com/images/M/MV5BMjM1OTMxNzUyM15BMl5BanBnXkFtZTgwNjYzMTIzOTE@._V1_SX150_CR0,0,150,150_.jpg"},{id:"786638",name:"Matrix: Reaktywacja",description:"string",genres:["horror","fantastic"],date:"2012-12-01 12:00:21",length:180,roomID:18,freeSeats:42,image:"https://m.media-amazon.com/images/M/MV5BODE0MzZhZTgtYzkwYi00YmI5LThlZWYtOWRmNWE5ODk0NzMxXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX150_CR0,0,150,150_.jpg"},{id:"786639",name:"Grawitacja",description:"string",genres:["horror","fantastic","adventure"],date:"2012-12-01 12:00:21",length:180,roomID:19,freeSeats:42,image:"https://m.media-amazon.com/images/M/MV5BNjE5MzYwMzYxMF5BMl5BanBnXkFtZTcwOTk4MTk0OQ@@._V1_SX150_CR0,0,150,150_.jpg"},{id:"786640",name:"Cz\u0142owiek ze stali",description:"string",genres:["family","adventure","fantastic"],date:"2012-12-01 12:00:21",length:180,roomID:20,freeSeats:42,image:"https://m.media-amazon.com/images/M/MV5BMTk5ODk1NDkxMF5BMl5BanBnXkFtZTcwNTA5OTY0OQ@@._V1_SX150_CR0,0,150,150_.jpg"},{id:"786641",name:"Kac Vegas w Bangkoku",description:"string",genres:["comedy","adventure"],date:"2012-12-01 12:00:21",length:180,roomID:21,freeSeats:42,image:"https://m.media-amazon.com/images/M/MV5BMTM2MTM4MzY2OV5BMl5BanBnXkFtZTcwNjQ3NzI4NA@@._V1_SX150_CR0,0,150,150_.jpg"},{id:"786642",name:"Jestem legend\u0105",description:"string",genres:["horror","fantastic","adventure"],date:"2012-12-01 12:00:21",length:180,roomID:22,freeSeats:42,image:"https://m.media-amazon.com/images/M/MV5BYTE1ZTBlYzgtNmMyNS00ZTQ2LWE4NjEtZjUxNDJkNTg2MzlhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX150_CR0,0,150,150_.jpg"},{id:"786643",name:"Snajper",description:"string",genres:["adventure"],date:"2012-12-01 12:00:21",length:180,roomID:23,freeSeats:42,image:"https://m.media-amazon.com/images/M/MV5BMTkxNzI3ODI4Nl5BMl5BanBnXkFtZTgwMjkwMjY4MjE@._V1_SX150_CR0,0,150,150_.jpg"},{id:"786644",name:"Sherlock Holmes: Gra cieni",description:"string",genres:["fantastic","adventure"],date:"2012-12-01 12:00:21",length:180,roomID:24,freeSeats:42,image:"https://m.media-amazon.com/images/M/MV5BMTQwMzQ5Njk1MF5BMl5BanBnXkFtZTcwNjIxNzIxNw@@._V1_SX150_CR0,0,150,150_.jpg"},{id:"786645",name:"Godzilla",description:"string",genres:["horror","comefantasticdy"],date:"2012-12-01 12:00:21",length:180,roomID:25,freeSeats:42,image:"https://m.media-amazon.com/images/M/MV5BZDFmYTM4NzAtNWM0ZC00MGJlLWEyYzQtYzA3ZTFiNzc1YjllXkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_SX150_CR0,0,150,150_.jpg"}],genres:["adventure","horror","family","comedy","fantastic"]},e}return Object(o.a)(t,[{key:"render",value:function(){var e=this;return Object(_.jsx)("div",{className:"container",children:this.state.genres.map((function(a){return Object(_.jsxs)("div",{className:"card-carousel__container",children:[Object(_.jsx)("div",{className:"card-carousel__genre",children:Object(_.jsx)("h2",{className:"card-carousel__title",children:a})}),Object(_.jsx)(j,{sliderGenre:a,genres:e.state.genres,movies:e.state.movies})]})}))})}}]),t}(i.Component)),u=function(e){Object(c.a)(t,e);var a=Object(d.a)(t);function t(){var e;return Object(m.a)(this,t),(e=a.call(this)).state={},e}return Object(o.a)(t,[{key:"render",value:function(){return Object(_.jsx)(g.a,{children:Object(_.jsx)(M.c,{children:Object(_.jsx)(M.a,{path:"/movies",element:Object(_.jsx)(h,{})})})})}}]),t}(i.Component),T=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,40)).then((function(a){var t=a.getCLS,i=a.getFID,n=a.getFCP,r=a.getLCP,s=a.getTTFB;t(e),i(e),n(e),r(e),s(e)}))};s.a.render(Object(_.jsx)(n.a.StrictMode,{children:Object(_.jsx)(u,{})}),document.getElementById("root")),T()}},[[39,1,2]]]);
//# sourceMappingURL=main.d9eb131f.chunk.js.map