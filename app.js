const App = {
    data(){
        return{
            placeholder: 'enter todo title',
            title: 'Todo list',
            inputValue: '',
            notes: ['test1','test2','test3']
        }
    },
    methods: {
        // inputChangeHandler(e){
        //     this.inputValue = e.target.value
        // },
        addTodo(e){
            if (this.inputValue.trim() !== ''){
                this.notes = [...this.notes, this.inputValue ];
                this.inputValue = '';
            }
        },
        deleteTodo(i){
             this.notes.splice(i, 1)
        },
        toUpperCase(item) {
            return item.toUpperCase()
        }
    },
    computed: {
        getDouble(){
            return this.notes.length *2;
        }
    },
    watch: {
        inputValue(value){
            console.log('>>>', value)
        }
    }
}

Vue.createApp(App).mount('#app');