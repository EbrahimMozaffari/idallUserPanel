<template>
  <div>
    <v-container>
      <v-row align="center" class="spacer">
        <v-col cols="12" xs="12" sm="12" md="1"  class="d-flex justify-center justify-md-start">
          <v-avatar size="70px" v-if="true">
            <img
              alt="Avatar"
              src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
            />
          </v-avatar>
          <v-avatar size="70px" v-else class="red">
            <span class="white--text headline">EM</span>
          </v-avatar>
        </v-col>
        <v-col cols="12" xs="12" sm="12" md="11" class="pr-lg-7 pr-md-7 ">
          <p class="iranSansBold">سلام علی جان</p>
          <p class="iranSansLight">
            از این قسمت میتونی اطلاعات فردی، امنیت و گزارش های سرویس هایی که از
            اکانت آیدالت استفاده می کنندرا چک کنی
          </p>
        </v-col>
      </v-row>

      <v-row d-flex="centered">
        <v-col cols="12" sm="12" md="5" >
          <v-card class="mx-auto rounded-lg" outlined elevation="2">
            <v-list-item three-line>
              <v-list-item-content>
                <div class="mb-4">
                  <p class="iranSansBold">
                    مشخصات فردی
                   <router-link to="/PersonInfo" style=" text-decoration: none;"><v-icon> mdi-chevron-left </v-icon></router-link> 
                  </p>
                  <p class="iranSansLight">و اطلاعات تماس</p>
                </div>
                <!-- <v-list-item-title class="headline mb-1 iranSansBold">
                  Headline 5
                </v-list-item-title> -->
                <v-list-item-subtitle class="iranSansLight"
                  >لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                  با استفاده از طراحان گرافیک است، چاپگرها</v-list-item-subtitle
                >
              </v-list-item-content>

              <v-list-item-avatar
                tile
                size="80"
                color="grey"
              ></v-list-item-avatar>
            </v-list-item>
            <hr class="mx-4" />
            <v-card-actions>
              <p class="blue--text iranSansLight pr-4">
                مدیریت اطلاعات فردی و شخصی سازی اطلاعات
              </p>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col cols="12" sm="12" md="5">
          <v-card class="mx-auto rounded-lg" outlined elevation="2">
            <v-list-item three-line>
              <v-list-item-content>
                <div class="mb-4">
                  <p class="iranSansBold">
                   حریم خصوصی 
                    <v-icon> mdi-chevron-left </v-icon>
                  </p>
                  <p class="iranSansLight">و امنیت اطلاعات </p>
                </div>
                <!-- <v-list-item-title class="headline mb-1 iranSansBold">
                  Headline 5
                </v-list-item-title> -->
                <v-list-item-subtitle class="iranSansLight"
                  >لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                  با استفاده از طراحان گرافیک است، چاپگرها</v-list-item-subtitle
                >
              </v-list-item-content>

              <v-list-item-avatar
                tile
                size="80"
                color="grey"
              ></v-list-item-avatar>
            </v-list-item>
            <hr class="mx-4" />
            <v-card-actions>
              <p class="blue--text iranSansLight pr-4">
               محافطت از حساب کاربری
              </p>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col cols="12" sm="12" md="5">
          <v-card class="mx-auto rounded-lg" outlined elevation="2">
            <v-list-item three-line>
              <v-list-item-content>
                <div class="mb-4">
                  <p class="iranSansBold">
                  تنظیمات اشتراک
                    <v-icon> mdi-chevron-left </v-icon>
                  </p>
                  <p class="iranSansLight">برای مشاهده و ورود بهتر </p>
                </div>
                <!-- <v-list-item-title class="headline mb-1 iranSansBold">
                  Headline 5
                </v-list-item-title> -->
                <v-list-item-subtitle class="iranSansLight"
                  >لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                  با استفاده از طراحان گرافیک است، چاپگرها</v-list-item-subtitle
                >
              </v-list-item-content>

              <v-list-item-avatar
                tile
                size="80"
                color="grey"
              ></v-list-item-avatar>
            </v-list-item>
            <hr class="mx-4" />
            <v-card-actions>
              <p class="blue--text iranSansLight pr-4">
               تغییر شیوه های ورود به آیدال
              </p>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col cols="12" sm="12" md="5">
          <v-card class="mx-auto rounded-lg" outlined elevation="2">
            <v-list-item three-line>
              <v-list-item-content>
                <div class="mb-4">
                  <p class="iranSansBold">
                 سرویس های من
                    <v-icon> mdi-chevron-left </v-icon>
                  </p>
                  <p class="iranSansLight">سطح دسترسی و گزارش ها </p>
                </div>
                <!-- <v-list-item-title class="headline mb-1 iranSansBold">
                  Headline 5
                </v-list-item-title> -->
                <v-list-item-subtitle class="iranSansLight"
                  >لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                  با استفاده از طراحان گرافیک است، چاپگرها</v-list-item-subtitle
                >
              </v-list-item-content>

              <v-list-item-avatar
                tile
                size="80"
                color="grey"
              ></v-list-item-avatar>
            </v-list-item>
            <hr class="mx-4" />
            <v-card-actions>
              <p class="blue--text iranSansLight pr-4">
               گزارش های آماری و تغییر سطح دسترسی به سرویس ها
              </p>
            </v-card-actions>
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
  name: "Home",
  data: () => ({
    breadcrumbs: [
      {
        text: "خانه",
        disabled: true,
        to: { name: "Home" },
        exact: true,
      },
    ],

    messages: [
      {
        avatar: "https://avatars0.githubusercontent.com/u/9064066?v=4&s=460",
        name: "John Leider",
        title: "Welcome to Vuetify!",
        excerpt: "Thank you for joining our community...",
      },
      {
        color: "red",
        icon: "mdi-account-multiple",
        name: "Social",
        new: 1,
        total: 3,
        title: "Twitter",
      },
      {
        color: "teal",
        icon: "mdi-tag",
        name: "Promos",
        new: 2,
        total: 4,
        title: "Shop your way",
        exceprt: "New deals available, Join Today",
      },
    ],
    lorem:
      "Lorem ipsum dolor sit amet, at aliquam vivendum vel, everti delicatissimi cu eos. Dico iuvaret debitis mel an, et cum zril menandri. Eum in consul legimus accusam. Ea dico abhorreant duo, quo illum minimum incorrupte no, nostro voluptaria sea eu. Suas eligendi ius at, at nemore equidem est. Sed in error hendrerit, in consul constituam cum.",
  }),

  components: {},

  mounted() {
    this.$store.dispatch("app/setBreadCrumbs", this.breadcrumbs);
  },
  computed: {},
  methods: {},
};
</script>

<style>
</style>