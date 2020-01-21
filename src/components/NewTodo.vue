<template>
  <div>
      <Form @submit="onSubmit">
        <input type="text" v-model="title" placeholder="Enter new Todo...">
        <input type="submit" value="submit"/>
      </Form>

  </div>
</template>

<script>
import {mapActions} from'vuex';

export default {
    name : 'NewTodo',

    data(){
    return{
        title:'',
    }



    },

    methods: {
        ...mapActions(['addTodo']),

        onSubmit(e){
            e.preventDefault();
           
            this.addTodo(this.title); /* Calling action of vuex  */
        }
    }

}
</script>

<style scoped>

</style>