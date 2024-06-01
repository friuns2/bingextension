<template>
  <div id="app">
    <div class="todo-item" v-for="todo in todos" :key="todo.id">
      <input type="checkbox" v-model="todo.done" class="todo-checkbox">
      <span class="todo-text">{{ todo.text }}</span>
      <span class="todo-delete" @click="removeTodo(todo.id)">X</span>
    </div>
    <div class="add-todo">
      <input type="text" v-model="newTodoText" placeholder="Add new todo">
      <button @click="addTodo">Add</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TodoApp',
  data() {
    return {
      newTodoText: '',
      todos: [
        { id: 1, text: 'Learn Vue.js', done: false },
        { id: 2, text: 'Build a Vue app', done: false },
        { id: 3, text: 'Master Vue', done: false }
      ],
      nextTodoId: 4
    }
  },
  methods: {
    addTodo() {
      if (this.newTodoText.trim() !== '') {
        this.todos.push({
          id: this.nextTodoId++,
          text: this.newTodoText,
          done: false
        });
        this.newTodoText = '';
      }
    },
    removeTodo(todoId) {
      this.todos = this.todos.filter(todo => todo.id !== todoId);
    },
    toggleTodoDone(todoId) {
      const todo = this.todos.find(todo => todo.id === todoId);
      if (todo) {
        todo.done = !todo.done;
      }
    }
  }
}
</script>

<style scoped>
/* Basic styling for the to-do list application */
body {
  font-family: Arial, sans-serif;
  background-color: #f5f5f5;
  margin: 0;
  padding: 20px;
}

#app {
  max-width: 600px;
  margin: 0 auto;
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
}

.todo-item {
  display: flex;
  align-items: center;
  padding: 10px 0;
}

.todo-item:not(:last-child) {
  border-bottom: 1px solid #eee;
}

.todo-checkbox {
  margin-right: 15px;
}

.todo-text {
  flex: 1;
}

.todo-delete {
  color: #888;
  cursor: pointer;
}

.todo-delete:hover {
  color: #f00;
}

.add-todo {
  display: flex;
  margin-top: 20px;
}

.add-todo input[type="text"] {
  flex: 1;
  padding: 10px;
  margin-right: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.add-todo button {
  padding: 10px 20px;
  background-color: #5cb85c;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.add-todo button:hover {
  background-color: #449d44;
}
</style>
