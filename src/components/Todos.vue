<template>
  <div class="container card ">
    <div class="row " >
      <div    v-bind:class="{Todo_UnCompleted: todo.completed, Todo_Completed: !todo.completed}" class="shadow card col-sm-3 m-3 mx-4 py-3   rounded"  v-for="todo in getTodos" :key="todo.id">
          <div class="card-title" @click="goDetails(todo.id)">{{todo.title}}</div>
          <i class="fas fa-trash-alt" @click="onDelete(todo.id)"></i>
      </div>
    </div>
     
  </div>
</template>

<script>
import {mapGetters, mapActions} from'vuex'
export default {
name: 'Todos',

methods:{
  ...mapActions(['fetchTodos', 'deleteTodo']),
  onDelete(id){
      this.deleteTodo(id)
  },

  goDetails(id){
    
      this.$emit('sendId', id);  /* Send data using custom event  */

      this.$store.commit('setId', id); /* Vuex data set using mutation */

     // alert(this.$store.getters.getId); /* Vuex data get using getter */

      this.$router.push('/about/'+ id); /* pushing router to another route with addition route paremeter */
  }

},
computed :{
...mapGetters({
  getTodos: 'getTodos'
})
} ,
created(){
  
this.fetchTodos();

}

}
</script>

<style scoped>
.Todo_UnCompleted {
  background: #41B883;
  color: white;
}

.Todo_Completed{
background: rgb(184, 73, 65);
  color: white;
}
</style>