new Vue({
  el: '#app',
  data: {
    newTodoText: '',
    todos: [
      { id: 1, text: 'Learn Vue.js', done: false },
      { id: 2, text: 'Build a Vue app', done: false },
      { id: 3, text: 'Master Vue', done: false }
    ],
    nextTodoId: 4
  },
  methods: {
    addTodo: function() {
      if (this.newTodoText.trim() !== '') {
        this.todos.push({
          id: this.nextTodoId++,
          text: this.newTodoText,
          done: false
        });
        this.newTodoText = '';
      }
    },
    removeTodo: function(todoId) {
      this.todos = this.todos.filter(todo => todo.id !== todoId);
    },
    toggleTodoDone: function(todoId) {
      const todo = this.todos.find(todo => todo.id === todoId);
      if (todo) {
        todo.done = !todo.done;
      }
    }
  }
});
