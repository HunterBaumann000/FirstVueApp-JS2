
Vue.component('ItemList', {

    props: {
        name: {
            type: String,
            default: "Travel List"
        },
        states: {
            type: Array,
            required: true,
        },

    },

    methods: {
        toggleGoodList(){
            this.$emit('toggle-good-states', this.states)
        },
        toggleBadList(){
            this.$emit('toggle-bad-states', this.states)
        },
    },

    template: `
            <div class="travel-list">
                <h3>{{name}}</h3>
                <list-item v-for="(state, i) in states"
                           :state="state"
                           :key="state.name"
                           @remove-item="$emit('remove-item', state)">
                          
                </list-item>
                <p>
                  <br>
                    <small>Total States Visited: {{states.length}}</small>
                </p>
            </div>
    `
});


