var app = new Vue({
    el: '#app',
    data: {
        title: 'tieu de',
    },
    methods: {
        say: function(text){
            return "hello " + text;
        }
    },  
});

setTimeout(()=>{
    app.title = "tieu de moi sau 3s";
},3000)