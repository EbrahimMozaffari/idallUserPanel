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
                    <!-- <router-link to="item.url" >{{ item.url }}</router-link> -->
                    </td>
                  <td class="text-xs-right">
                    <router-link to="" ><v-icon color="red darken-2">
                        mdi-logout
                      </v-icon></router-link>
                  </td>
                </tr>
                <!-- {{ dateConvert(item.loginDate) }} -->
              </template>
              <!-- <template v-slot:items="{props}">
               
                <td class="text-xs-right">{{ props.item.appName }}</td>
                <td class="text-xs-right">{{ dateConvert(props.item.loginDate) }}--</td>
                <td class="text-xs-right">{{ props.item.url }}</td>

              </template> -->

              <!-- <template>
               
                    <td>111</td>
                    <td>111</td>
                    <td>111</td>
                
                <tr v-for="activeLogin in activeLogins.activeLogins" :key="activeLogin.appName">
                    <td>{{activeLogin.appName}}</td>
                    <td>{{activeLogin.loginDate}}</td>
                    <td>{{activeLogin.url}}</td>
                </tr>
            </template> -->
              <!-- <template v-slot:items="props">
                <td>{{ props.item.name }}</td>
                <td class="text-xs-right">{{ props.item.calories }}</td>
                <td class="text-xs-right">{{ props.item.fat }}</td>
                <td class="text-xs-right">{{ props.item.carbs }}</td>
                <td class="text-xs-right">{{ props.item.protein }}</td>
                <td class="text-xs-right">{{ props.item.iron }}</td>
              </template> -->
            </v-data-table>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
// import { requiredRule } from "../../rules/index";
// import { nationalCodeRule } from "../../rules/index";
export default {
  name: "ActiveLogins",
  data: () => ({
    breadcrumbs: [
      {
        text: "داشبورد",
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
    // nationalCodeRule,
    // requiredRule,
    // valid: true,
    // snackbar: false,
    // text: "کد ملی با موفقیت تائید شد",
    // timeout: 3000,
    // alert:false,
    headers: [
      //   {
      //     text: 'نام اپلیکیشن',
      //     align: 'right',
      //     sortable: false,
      //     value: 'name'
      //   },
      { text: "نام اپلیکیشن", value: "appName" },
      { text: "تاریخ ورود", value: "loginDate" },
      { text: "لینک", value: "url" },
      { text: "خروج", value: "" },
      //   { text: 'Carbs (g)', value: 'carbs' },
      //   { text: 'Protein (g)', value: 'protein' },
      //   { text: 'Iron (%)', value: 'iron' }
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
    // dateConvert(newdate) {
    //   let rowDate = new Date(newdate * 1000);
    //   let year = rowDate.getFullYear();
    //   let month = rowDate.getMonth() + 1;
    //   let day = rowDate.getDate();
    //   let dateFormatted = year + "-" + month + "-" + day;
    //   let finalDate = moment(dateFormatted, "YYYY-M-D")
    //     .endOf("jMonth")
    //     .format("jYYYY/jM/jD");
    //   console.log("finalDate", finalDate);
    //   return finalDate;
    // },
    
  },
};
</script>

<style>
</style>