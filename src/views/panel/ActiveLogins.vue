<template>
  <div>
    <v-container>
      <v-row justify="center">
        <v-col cols="12">
          <v-card>
            <v-data-table
              v-if="activeLogins"
              :headers="headers"
              :items="activeLogins.activeLogins"
              class="elevation-1"
            >
              <template v-slot:item="{ item }">
                <tr>
                  <td class="text-xs-right">{{ item.appName }}</td>
                  <td class="text-xs-right">
                    {{ dateConvert(item.loginDate) }}
                  </td>
                  <td class="text-xs-right">
                    <a :href="item.url" target="_blank">{{ item.url }}</a>
                  </td>
                  <td class="text-xs-right">
                    <router-link to=""
                      ><v-icon color="red darken-2">
                        mdi-logout
                      </v-icon></router-link
                    >
                  </td>
                </tr>
              </template>
            </v-data-table>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "ActiveLogins",
  data: () => ({
    breadcrumbs: [
      {
        text: "خانه",
        disabled: false,
        to: { name: "Home" },
        exact: true,
      },
      {
        text: "ورودی های فعال   ",
        disabled: true,
        exact: true,
      },
    ],

    headers: [
      { text: "نام اپلیکیشن", value: "appName" },
      { text: "تاریخ ورود", value: "loginDate" },
      { text: "لینک", value: "url" },
      { text: "خروج", value: "" },
    ],
  }),
  components: {},

  mounted() {
    this.$store.dispatch("activeLogins/fetchActiveLogins");
    this.$store.dispatch("app/setBreadCrumbs", this.breadcrumbs);
  },
  computed: {
    activeLogins() {
      return this.$store.state.activeLogins.activeLogins;
    },
  },
  methods: {
    dateConvert(newdate) {
      let rowDate = new Date(newdate * 1000);
      let year = rowDate.getFullYear();
      let month = rowDate.getMonth() + 1;
      let day = rowDate.getDate();
      let dateFormatted = year + "-" + month + "-" + day;
      return moment(dateFormatted, "YYYY-M-D")
        .endOf("jMonth")
        .format("jYYYY/jMM/jDD");
    },
  },
};
</script>

<style>
</style>