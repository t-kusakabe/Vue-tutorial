// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import MyComponent from './components/MyComponent'

Vue.config.productionTip = false

/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   template: '<App/>',
//   components: { App }
// })

// test出力
new Vue({
  el: '#app',
  data: {
    message: 'test'
  }
})

// reverse
var vm = new Vue({
  el: '#example',
  data: {
    message: 'Hello'
  },
  computed: {
    reversedMessage: function() {
      return this.message.split('').reverse().join('')
    },
    now: function() {
      return Date.now()
    }
  },
  methods: {
    reversedMessage: function() {
      return this.message.split('').reverse().join('')
    },
    nowMethod: function() {
      return Date.now()
    }
  }
})

// 算出プロパティvs監視プロパティ
//// 監視プロパティ
var demo = new Vue({
  el: '#demo',
  data: {
    firstName: 'Foo',
    lastName : 'Bar',
    fullName : 'Foo Bar'
  },
  watch: {
    firstName: function(val) {
      this.fullName = val + ' ' + this.lastName
    },
    lastName: function(val) {
      this.fullName = this.firstName + '  ' + val
    }
  }
})
// 算出プロパティ
var demo = new Vue({
  el: '#demo',
  data: {
    firstName: 'Foo',
    lastName: 'Bar'
  },
  computed: {
    fullName: {
      // getter関数
      get: function() {
        return this.firstName + ' ' + this.lastName
      },
      // setter関数
      set: function(newValue) {
        var names = newValue.split('  ')
        this.firstName = names[0]
        this.lastName = names[names.length - 1]
      }
    }
  }
})

// ウォッチャ
var watchExampleVM = new Vue({
  el: '#watch-example',
  data: {
    question: '',
    answer: 'I cannot give you an answer until you ask a question!'
  },
  watch: {
    question: function(newQuestion) {
      this.answer = 'Waiting for you to stop typing...'
      this.getAnswer()
    }
  },
  methods: {
    getAnswer: _.debounce(
      function() {
        if(this.question.indexOf('?') == -1) {
          this.answer = 'Questions usually contail a question mark. ;-)'
          return
        }
        this.answer = 'Thinking...'
        var vm = this
        axios.get('https://yesno.wtf/api')
          .than(function(response) {
            vm.asnwer = _.capitalize(responce.data.answer)
          })
          .catch(function(error) {
            vm.answer = 'Error! Could not reach the API.' + error
          })
      },
      500
    )
  }
})

// フォーム入力バインディング
new Vue({
  el: '#form-binding',
  data: {
    input: '',
    textarea: '',
    checked: false,
    checkedNames: [],
    picked: '',
    selected: '',
    multipleSelected: '',
    dynSelected: 'A',
    options: [
      { text: 'One', value: 'A' },
      { text: 'Two', value: 'B' },
      { text: 'Three', value: 'C' }
    ]
  }
})

// component
Vue.component('my-component', {
  template: '<div>A custom component!</div>'
})

var Child = {
  template: '<div>A custom component child!</div>'
}

new Vue({
  el: '#component',
})

var data = { counter: 0 }

Vue.component('simple-counter', {
  template: '<button v-on:click="counter += 1">{{ counter }}</button>',
  data: function() {
    return {
      counter: 0
    }
  }
})

new Vue({
  el: '#component2'
})

Vue.component('child', {
  props: ['myMessage'],
  template: '<span>{{ myMessage }}</span>'
})

new Vue({
  el: '#component4',
  data: {
    parentMsg: ''
  }
})
