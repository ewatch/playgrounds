<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import { API, graphqlOperation } from 'aws-amplify'
import { listPlaygrounds } from './graphql/queries'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  setup() {
    console.log('Test2')
    getPlaygrounds()
    async function getPlaygrounds() {
      console.log('Test')
      const playgroundsResponse = await API.graphql(graphqlOperation(listPlaygrounds))
      console.log(playgroundsResponse)
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
