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
    showName: false,
    showAge: true,
    items: ['Mushroom', 'Green Shells', 'Red Shells', 'Banana', 'Star'],
    ninjas: [
      { name: 'Chris', age: 23, belt: 'Black', },
      { name: 'Carol', age: 24, belt: 'Purple', },
      { name: 'Elisa', age: 22, belt: 'White' }
    ],
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
    //   // updateName(e) {
    //   //   // console.log(e.target.value)
    //   //   this.name = e.target.value
    // },
    logMessage() {
      console.log('Hello World')
    },
    toggleName() {
      this.showName = !this.showName
    },
    toggleAge() {
      this.showAge = !this.showAge
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