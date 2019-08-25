var app = new Vue({
    el: '#app',
    data: {
        title: 'tieu de',
        link: 'http://google.com',
    },
    methods: {
        say: function(text){
            return "hello " + text;
        },
        getLink: function(){
            return this.link;
        }
    },  
});

setTimeout(()=>{
    app.title = "tieu de moi sau 3s";
},3000)