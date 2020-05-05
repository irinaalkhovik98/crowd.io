import axios from "axios";

Vue.prototype.$http = axios
new Vue({
  el: 'root',

  data: {
    allProject: [],
    allParticipants: [],
    authorization: [],
    cardButton: [],
  },

  mounted() {
    this.$http.get('/allProject').then(response => this.allProject = response.data);
    
    this.$http.get('/allParticipants').then(response => this.allParticipants = response.data);

    this.$http.get('/authorization').then(response => this.authorization = response.data);

    this.$http.get('/cardButton').then(response => this.cardButton = response.data)
  }
});