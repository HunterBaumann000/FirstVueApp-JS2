
Vue.component('NavigationBar', {
    props: {
        title: {
            type: String,
            default: 'Header - Main Title',
        },
        subHeader: {
            type: String,
            default: 'Sub-Title',
        },
        link: {

        },
    },

    methods: {
        showMenuDrawer(){
            //future menu option
        }
    },

    template: `
      <v-toolbar
          color="purple"
          dark
      >
      <v-toolbar-title>{{ title }}</v-toolbar-title>

      <v-divider
          class="mx-4"
          vertical
      ></v-divider>

      <span class="subheading">{{ subHeader }}</span>

      <v-spacer></v-spacer>

      <v-toolbar-items class="hidden-sm-and-down">

        <v-divider vertical></v-divider>
      </v-toolbar-items>

      <v-app-bar-nav-icon
          @click="showMenuDrawer">
        
      </v-app-bar-nav-icon>
      </v-toolbar>
    `

});