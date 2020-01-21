<template>
  <div class="home">
   <NewTodo/>
   <br>
   <FilterTodo/>
   <br>

<!-- receiving an custom event  -->
   <Todos v-on:sendId="sendId"/>
    
  </div>
</template>

<script>
// @ is an alias to /src
import Todos from '../components/Todos'
import NewTodo from '../components/NewTodo'
import FilterTodo from '../components/FilterTodo'

export default {
  name: 'home',
  components: {
    Todos,
    NewTodo,
    FilterTodo
  },
  methods:{
    sendId(id){
      console.log(id);
     this.$emit('sendId', id);  //sending a Custom event 
    }
  }
}
</script>
