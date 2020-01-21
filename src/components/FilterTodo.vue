<template>
  <div class="container">
      <div class="d-flex">
        <div class="flex-left">Filter Todos:</div>
          <select  @change="_filterTodos($event)" >
              <option value="200">200</option>
              <option value="100">100</option>
              <option value="50">50</option>
              <option value="20">20</option>
              <option value="10">10</option>
              <option value="5">5</option>
          </select>
      </div>
      
      <div class="row mt-5">
        
        
        <p class="col-sm-4 ">Double click to complete</p>
        <div  class="col-sm-4">
            <span class="completeBox"> </span>  
            <span > means completed</span>
        </div>
        <div  class="col-sm-4">
            <span class="not_completeBox"> </span>  
            <span > means not completed</span>
        </div>
        
       </div>
   </div>
</template>

<script>
import {mapActions} from 'vuex';
export default {
    name : 'FilterTodo',

    methods: {
        ...mapActions(['filterTodos']),
         _filterTodos(e){
            //console.log(e);
                this.filterTodos(e)
        } 
    }
}
</script>

<style scoped>
.not_completeBox{
    display: inline-block;
    width: 10px;
    height: 10px;
    background:  rgb(184, 73, 65);
}


.completeBox{
 display: inline-block;
    width: 10px;
    height: 10px;
    background:#41B883;
}


</style>
