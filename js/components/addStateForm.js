
Vue.component('AddStateForm', {

    props: {
        state: {
            type: Object,
            required: true,
        },
    },


    methods: {
        createUserItem() {
            this.name = this.state.name;
            this.description = this.state.description;
            this.date = this.state.date;
            this.wasEnjoyable = this.state.wasEnjoyable;

            this.$emit('add-state', this.state)
        },

    },

    template:
        `
      <v-form>
      <v-container>
        <v-row>
          <v-col cols="12" sm="6">
            
            <v-text-field
                
                label="State Name"
                v-model="name"
                outlined
            ></v-text-field>
          </v-col>

          <v-col cols="12" sm="6">
            <v-text-field

                label="Date Traveled"
                v-model="date"
                outlined
            ></v-text-field>
          </v-col>
        </v-row>

        <v-text-field
            label="Summary"
            v-model="description"
            outlined
        ></v-text-field>

        <v-radio-group
            v-model="wasEnjoyable"
            row
        >
          <v-radio
              label="Fun Destination"
              value="true"
          ></v-radio>
          <v-radio
              label="Bad Destination"
              value="false"

          ></v-radio>

        </v-radio-group>

        
        <div class="my-2">
          <v-btn type="submit"
                 color="purple"
                 @click.prevent="createUserItem"
                 dark large>
            Add State
          </v-btn>
        </div>

      </v-container>
      </v-form>
    `
});