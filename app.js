new Vue({
  el: '#app',
  data: {
    title: 'Becoming a Vue Ninja',
    wage: 1,
  },
  methods: {
    changeWage(amount) {
      this.wage += amount;
    }
  }
})


// var app = new Vue({
//   el: '#app',
//   data: {
//     title: 'Becoming a Vue Ninja',
//     name: 'Chris',
//     url: 'http://youtube.com',
//     classes: ['one', 'two'],
//   },
//   methods: {
//     greet(time) {
//       return `Hello and good ${time}, ${this.name}`
//     }
//   }
// })