new Vue({
  el: '#app',
  data: {
    title: 'Becoming a Vue Ninja',
    name: 'Chris',
    url: 'http://youtube.com',
    classes: ['one', 'two'],
    coords: {
      x: 0,
      y: 0
    },
    wage: 1,
  },
  methods: {
    greet(time) {
      return `Hello and good ${time}, ${this.name}`
    },
    logEvent(e) {
      console.log(e)
    },
    logCoords(e) {
      this.coords.x = e.offsetX
      this.coords.y = e.offsetY
    },
    changeWage(amount) {
      this.wage += amount;
    },
    updateName(e) {
      // console.log(e.target.value)
      this.name = e.target.value
    },
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