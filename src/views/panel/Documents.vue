<template>
  <div>
    <div>
      <!-- <h3 v-for="(value, name, index) in sortByCategory" :key="index">
        {{ name }}
      </h3> -->
    </div>
    <v-tabs v-if="sortByCategory" v-model="tab" align-with-title>
      <v-tabs-slider color="yellow"></v-tabs-slider>

      <v-tab v-for="(value, name, index) in sortByCategory" :key="index">
        {{ name }}
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item v-for="(value, name, index) in sortByCategory" :key="index">
        <v-card flat>
          <v-data-table :headers="headers" :items="value" class="elevation-1">
            <template v-slot:item="{ item }">
              <tr>
                <td class="text-xs-right">{{ item.title }}</td>
                <td class="text-xs-right">
                  <v-img
                    max-height="150"
                    max-width="250"
                    :src="`https://picsum.photos/500/300?image=2`"
                    :lazy-src="`@/src/assets/images/default.jpg`"
                    aspect-ratio="1"
                  ></v-img>
                  {{ item.doc }}
                </td>
              </tr>
            </template>
          </v-data-table>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>
// import { requiredRule } from "../../rules/index";
// import { nationalCodeRule } from "../../rules/index";
export default {
  name: "Documents",
  data: () => ({
    items: ["web", "shopping", "videos", "images", "news"],
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",

    breadcrumbs: [
      {
        text: "خانه",
        disabled: false,
        to: { name: "Home" },
        exact: true,
      },
      {
        text: "مخزن مدارک  ",
        disabled: true,
        exact: true,
      },
    ],
    headers: [
      { text: "عنوان ", value: "title" },
      { text: "عکس", value: "doc" },
    ],
    tab: null,
    text1:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  }),

  components: {},

  mounted() {
    this.$store.dispatch("documents/fetchDocuments");
    this.$store.dispatch("app/setBreadCrumbs", this.breadcrumbs);
  },
  computed: {
    sortByCategory() {
      //const groupByBrand = groupBy('brand');
      return this.$store.state.documents.sortByCategory;
    },
  },
  methods: {
    // category() {
    //   let redCars = cars.filter((car) => car.color === "red");
    //   console.log(redCars);
    // },
    //   groupBy = key => array =>
    // array.reduce(
    //   (objectsByKeyValue, obj) => ({
    //     ...objectsByKeyValue,
    //     [obj[key]]: (objectsByKeyValue[obj[key]] || []).concat(obj)
    //   }),
    //   {}
    // ),
  },
};
</script>

<style>
</style>