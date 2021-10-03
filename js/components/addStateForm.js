
Vue.component('AddStateForm', {

    props: {
        state: {
            type: Object,
            required: true,
        },
    },


    methods: {

        addUserState() {
            this.$emit('add-state', this.state)
        }

    },

    template:
        `
          <div class="userStateForm">
      <v-form>
      <v-container>
        <v-row>
          <v-col cols="12" sm="6">
            
            <v-text-field
                
                label="State Name"
                v-model="state.name"
                outlined
            ></v-text-field>
          </v-col>

          <v-col cols="12" sm="6">
            <v-text-field

                label="Date Traveled"
                v-model="state.date"
                outlined
            ></v-text-field>
          </v-col>
        </v-row>

        <v-text-field
            label="Summary"
            v-model="state.description"
            outlined
        ></v-text-field>

        <v-radio-group
            v-model="state.wasEnjoyable"
            row
        >
          <v-radio
              label="Fun Destination"
              v-bind:value="true"
          ></v-radio>
          <v-radio
              label="Bad Destination"
              v-bind:value="false"

          ></v-radio>

        </v-radio-group>

        
        <div class="my-2">
          <v-btn type="submit"
                 color="purple"
                 @click.prevent="addUserState"
                 dark large>
            Add State
          </v-btn>
        </div>

      </v-container>
      </v-form>
          </div>
    `
});