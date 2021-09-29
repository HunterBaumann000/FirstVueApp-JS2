Vue.component('ListItem', {

    props:  {
        state: {
            type: Object,
            required: true,
        },
    },

    methods: {

        deleteItem() {
            this.$emit('remove-item', this.state)
        }

    },

    template:
        `
          <div id="listItemPanel">
            <v-expansion-panels>
              <v-expansion-panel>
                <v-expansion-panel-header>
                  
                  <b> {{state.name}} </b>
                  
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  {{state.description}}
                  <br><br><hr>
                  <v-row>
                    <v-col cols="10">
                    Traveled to {{state.name}} on {{state.date}}
                    </v-col>
                    <v-col cols="2">
                      
                      
                      <v-icon v-if="state.wasEnjoyable" color="purple">mdi-emoticon-happy-outline</v-icon>
                      <v-icon v-else-if="state.wasEnjoyable === false" color="purple">mdi-emoticon-sad-outline</v-icon>
                      
                      
                      | 
                      <v-icon id="removeState" color="red" @click="deleteItem">mdi-close</v-icon>
                    </v-col>
                  </v-row>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </div>`
});