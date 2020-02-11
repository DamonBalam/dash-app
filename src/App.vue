<template>
  <v-app>
    <!-- menu lateral -->
    <SideComponent />

    <!-- barra de navegacion -->
    <v-app-bar app color="light-blue darken-4" dense dark clipped-left="true">
      <v-app-bar-nav-icon @click="menu"></v-app-bar-nav-icon>
      <v-toolbar-title>SISCON</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn href="#" target="_blank" text>
        <span class="mr-2">US001</span>
        <v-icon>mdi-account-circle</v-icon>
      </v-btn>
    </v-app-bar>

    <!-- vista -->
    <v-content>
      <DashComponent />
    </v-content>
  </v-app>
</template>

<script>
import DashComponent from "./components/DashComponent";
import SideComponent from "./components/SideComponent";

export default {
  name: "App",
  components: {
    DashComponent,
    SideComponent
  },
  methods: {
    menu() {
      this.$store.commit("SET_DRAWER");
    }
  }
};
</script>
