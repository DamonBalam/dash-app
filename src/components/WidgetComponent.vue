<template>
  <v-card
    class="mx-auto my-2 "
    max-width="300"
    max-height="180"
    outlined
    shaped
    :style="`border-color:${isColor}`"
  >
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="title mb-1"
          >{{ countTotal }}
          <v-icon small :color="isColor"> {{ icon }}</v-icon>
        </v-list-item-title>
        <v-list-item-subtitle>{{ text }} </v-list-item-subtitle>
        <v-list-item-subtitle>DE TICKETS</v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-avatar tile size="80">
        <v-progress-circular
          :rotate="-90"
          :size="80"
          :width="3"
          :value="porcent"
          :color="isColor"
        >
          {{ porcent }}%
        </v-progress-circular>
      </v-list-item-avatar>
    </v-list-item>
  </v-card>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    countTotal: {
      type: Number,
      default: 0
    },
    text: {
      type: String,
      default: "TOTAL"
    },
    porcent: {
      type: Number,
      default: 100
    },
    isColor: {
      type: String,
      default: "#1976D2"
    },
    icon: {
      type: String,
      default: "mdi-cards"
    }
  }
};
</script>

<style lang="scss" scoped></style>
