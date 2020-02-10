<template>
  <v-app>
    <!-- menu lateral -->
    <SideComponent />

    <!-- barra de navegacion -->
    <v-app-bar app color="light-blue darken-4" dark clipped-left="true">
      <div class="d-flex align-center">
        <h1>Sistema de Control</h1>
      </div>

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

  data: () => ({
    //
  })
};
</script>
