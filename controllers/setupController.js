var Todos = require('../models/todoModel');

module.exports = function (app) {
    app.get('/api/setupTodos',function (req,res) {
        
        var starterTodos = [
            {
                username:"test",
                todo:"Buy Milk",
                isDone: false,
                hasAttachment: false
            },
            {
                username:"test",
                todo:"Feed Dog",
                isDone:false,
                hasAttachment:false
            },
            {
                username:"test",
                todo:"Learn Node",
                isDone:true,
                hasAttachment:false
            }
        ];
        Todos.create(starterTodos,function (err,results) {
            res.send(results);
        });
    })
}