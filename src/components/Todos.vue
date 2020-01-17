<template>
  <div>
    <div class="Todos">
      <div class="Todo">

      </div>
    </div>
      <li v-for="todo in allTodos" :key="todo.id" >{{todo.title}}</li>
  </div>
</template>

<script>
import {mapGetters} from'vuex'
export default {
name: 'Todos',
computed :{
...mapGetters({
  allTodos: 'allTodos'
})
} 

}
</script>

<style scoped>
.Todos {
  
}
</style>