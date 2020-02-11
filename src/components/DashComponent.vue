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
      <v-col cols="12">
        <v-divider></v-divider>
      </v-col>
      <v-col cols="12">
        <PieChar
          class="d-inline-block contgraf"
          :data="[883, 310, 764, 429]"
          :title="'TICKETS'"
        />
        <PieChar
          class="d-inline-block contgraf"
          :data="[35, 25, 15, 25]"
          :title="'INCIDENTES'"
        />
        <PieChar
          class="d-inline-block contgraf"
          :data="[15, 15, 15, 55]"
          :title="'PROBLEMAS'"
        />
        <PieChar
          class="d-inline-block contgraf"
          :data="[55, 15, 15, 15]"
          :title="'TAREAS'"
        />
        <PieChar
          class="d-inline-block contgraf"
          :data="[15, 15, 35, 35]"
          :title="'CONSULTAS'"
        />
      </v-col>
      <v-col cols="12">
        <v-divider></v-divider>
      </v-col>
      <v-col cols="6">
        <BarChar />
        <div class="text-center">
          <v-chip class="ma-2" color="#FF6D00" label text-color="white">
            INCIDENTES
          </v-chip>
          <v-chip class="ma-2" color="#BF360C" label text-color="white">
            PROBLEMAS
          </v-chip>
          <v-chip class="ma-2" color="#311B92" label text-color="white">
            TAREAS
          </v-chip>
          <v-chip class="ma-2" color="#00897B" label text-color="white">
            CONSULTAS
          </v-chip>
        </div>
      </v-col>
      <v-col cols="6">
        <LineChar />
        <div class="text-center">
          <v-chip class="ma-2" color="teal darken-1" label text-color="white">
            MES: FEBRERO
          </v-chip>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import WidgetComponent from "./WidgetComponent";
import LineChar from "./LineChar";
import PieChar from "./PieChar";
import BarChar from "./BarChar";
export default {
  components: {
    WidgetComponent,
    LineChar,
    PieChar,
    BarChar
  }
};
</script>

<style lang="scss" scoped>
.contgraf {
  max-width: 250px;
  margin: 0 20px;
}
</style>
