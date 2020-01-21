import axios from 'axios';
const state = {
    todos: [
        
    ],
    id: 0  //Simple vuex state properties
}

const getters = {
    getTodos: (state) => state.todos,
    getId: (state) => state.id //getter for vuex state properties
    
}

const actions = {
    async fetchTodos({ commit}) {
        const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
        commit('setTodos', res.data);
    },

    async addTodo({ commit }, title) {
       
        const res = await axios.post("https://jsonplaceholder.typicode.com/todos",
            { title, completed: false });

        commit('newTodo', res.data);
    },

    async deleteTodo({ commit }, id) {
         axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
        commit('removeTodo', id);
    },

    async filterTodos({ commit }, e) {
        const limit = parseInt(e.target.options[e.target.options.selectedIndex].innerText);
        const res = await axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}`);
        console.log(limit);
        commit('setTodos', res.data);
    },

   /*  async updateTodo({ commit }, updTodo) {
        const res = await axios.put('https://jsonplaceholder.typicode.com/todos/${updTodo.id}', {updTodo.id,updTodo.title,updTodo.completed});
        commit('updateTodo', res.data);
    } */

    
}

const mutations = {
    setTodos: (state, todos) => (state.todos = todos),

    newTodo: (state, todo) => {
        state.todos.unshift(todo);
       
    },

    removeTodo: (state, id) => {
      state.todos=  state.todos.filter( todo=> todo.id!==id)
    },

   /*  updateTodo: (state, updTodo) => {
        state.todos = state.todos.findIndex(todo=>to)
    } */

    
    setId: (state, id) => {
        state.id=id
    }
}

export default {
    state,
    getters,
    actions,
    mutations

}