<template>
  <v-container>
    <v-row class="text-center justify-space-around">
      <v-col cols="12" class="text-left">
        <span class="display-1 font-weight-bold ml-8">
          Dashboard
          <small class="grey--text">v1.1</small>
        </span>
      </v-col>
      <v-col cols="2">
        <WidgetComponent :countTotal="2386" :text="'TOTAL'" :porcent="100" />
      </v-col>
      <v-col cols="2">
        <WidgetComponent
          :countTotal="883"
          :text="'INCIDENTES'"
          :porcent="37"
          :isColor="'#FF6D00'"
        />
      </v-col>
      <v-col cols="2">
        <WidgetComponent
          :countTotal="310"
          :text="'PROBLEMAS'"
          :porcent="13"
          :isColor="'#BF360C'"
        />
      </v-col>
      <v-col cols="2">
        <WidgetComponent
          :countTotal="764"
          :text="'TAREAS'"
          :porcent="32"
          :isColor="'#311B92'"
        />
      </v-col>
      <v-col cols="2">
        <WidgetComponent
          :countTotal="429"
          :text="'CONSULTAS'"
          :porcent="18"
          :isColor="'green'"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import WidgetComponent from "./WidgetComponent";
export default {
  components: {
    WidgetComponent
  }
};
</script>
