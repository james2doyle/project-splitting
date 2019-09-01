<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to First"/>
    <Alert>
      <p>This is the First alert.</p>
      <blockquote v-text="money"></blockquote>
    </Alert>
  </div>
</template>

<script>
import moneyFormat from 'Functions/money-format';
import Alert from 'Alert.vue';
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    Alert,
  },
  data() {
    return {
      money: moneyFormat('12345678', 'EUR', 'de-DE')
    };
  },
};
</script>

<style>
#app {
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #0f3150;
  margin-top: 60px;
}
</style>
