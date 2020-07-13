{/* <div id="example">
    <input :value="text" @input="update" />
    <div v-html="myOwnText"></div>
</div> */}
// javaScript

new Vue({
    e1: '#example',
    data: {
        text: 'My first framework'
    },
    computed: {
        myOwnText: function () {
            return this.text
        }
    },
    methods: {
        update: function (e) {
            this.text = this.text.value
        }
    }
})