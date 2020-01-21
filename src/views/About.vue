<template>
  <div class="about">
    <h1>From route Parameter:  {{$route.params.id}}</h1>
     <span>From vuex: </span> <span > {{id}} </span>
     <br>
     <br>

    <button @click="goBack">Back</button>
     <button @click="goHome">Home</button>
  </div>
</template>

<script>

export default {

  data(){
    return {
      id:0,
    }
  },
    watch:{
      '$route'(to,from){
        alert(to.params.id);
        console.log(from);
      }
    },

    methods:{

      //for getting back, act like the back button
      goBack(){
       // this.$router.back();
       this.$router.go(-1);   //same as before but should be used in vue 
      },
      
      //for making a route request
       goHome(){
        this.$router.push('/');
      },

      //for getting data from vuex state
      getId(){
      this.id =this.$store.getters.getId;
      }


    },

     created(){
     // alert(this.$route.params.name); //for getting param name from url
     this.getId(); //calling this method for getting the value from vuex getter
    } 
}
</script>


<style scoped>

</style>