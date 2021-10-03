Vue.use(Vuetify);

const app = new Vue({
    el: '#app',
    vuetify: new Vuetify({
        theme: {
            themes: {
                // modify themes (light or dark) on the fly
                light: {
                    primary: '#6f1483'
                }
            }
        }
    }),
    data: {
        state: {
            name: '',
            date: '',
            description: '',
            wasEnjoyable: false,
        },

        stateList: [
            {name: 'Wisconsin', date: ''+ new Date().toDateString() +'', description: 'Very cold but has a lot of cheese.', wasEnjoyable: false},
        ],
    },
    methods: {

        addState(){
            this.stateList.push(this.state)

            this.state = {
                name: '',
                date: '',
                description: '',
                wasEnjoyable: false,
            }

        },

        removeState(state){
            this.stateList.splice(this.stateList.indexOf(state), 1);
        },

    },

    computed: {
        userStateList(){
            return this.stateList;
        },

    },


});