Vue.component('CustomFooter', {
    props: {
        footerText: {
            type: String,
            default: 'Vuetify',
        },
        footerDate: {
            type: String,
            default: new Date().getFullYear(),
        }
    },

    methods: {

    },

    template: `
      <v-footer class="pa-3"  color="purple">
      <v-col
          class="text-center"
          cols="12"
          
      >
        {{ footerDate }} — <strong> {{ footerText }} </strong>
      </v-col>
      </v-footer>
      
    `
});