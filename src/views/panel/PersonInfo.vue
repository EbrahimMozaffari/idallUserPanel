<template>
  <div>
    <v-container>
      <v-row justify="center">
        <v-col cols="12">
          <v-card ref="form">
            <v-form
              v-if="user"
              class="col-12"
              ref="form"
              v-model="valid"
              lazy-validation
            >
              <v-row>
                <v-col cols="12" sm="4">
                  <v-text-field
                    persistent-hint
                    outlined
                    v-model="user.basicInfo.firstName"
                    :rules="[requiredRule('نام الزامی است')]"
                    label="نام"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="4">
                  <v-text-field
                    persistent-hint
                    outlined
                    v-model="user.basicInfo.lastName"
                    :rules="[requiredRule('نام خانوادگی الزامی است')]"
                    label="نام خانوادگی"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="4">
                  <v-text-field
                    persistent-hint
                    outlined
                    v-model="user.basicInfo.nationalCode"
                    :rules="nationalCodeRule()"
                    label="کد ملی"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" sm="4">
                  <v-text-field
                    persistent-hint
                    outlined
                    v-model="user.basicInfo.fatherName"
                    label="نام پدر"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="4">
                  <v-text-field
                    id="my-custom-input"
                    persistent-hint
                    readonly
                    outlined
                    v-model="birthconvert"
                    label="تاریخ تولد "
                    required
                  ></v-text-field>
                  <v-date-picker
                    auto-submit
                    v-model="birthconvert"
                    format="jYYYY/jMM/jDD"
                    element="my-custom-input"
                  >
                  </v-date-picker>
                </v-col>
                <v-col cols="12" sm="4">
                  <v-text-field
                    persistent-hint
                    outlined
                    v-model="user.mobileNumber"
                    :rules="[requiredRule('شماره موبایل الزامی است')]"
                    label="شماره موبایل"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" sm="4">
                  <v-text-field
                    persistent-hint
                    outlined
                    v-model="user.basicInfo.alteMobileNumber"
                    label="شماره تلفن پشتیبان"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" md="1" sm="12">
                  <v-btn
                    block
                    :disabled="!valid"
                    color="success"
                    @click="validate"
                  >
                    ویرایش
                  </v-btn>
                </v-col>
                </v-row>
            </v-form>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import VuePersianDatetimePicker from "vue-persian-datetime-picker";
import { requiredRule } from "../../rules/index";
import { nationalCodeRule } from "../../rules/index";
export default {
  name: "PersonalInfo",
  data: () => ({
    breadcrumbs: [
      {
        text: "خانه",
        disabled: false,
        to: { name: "Home" },
        exact: true,
      },
      {
        text: "مشخصات فردی  ",
        disabled: true,
        exact: true,
      },
    ],
    birth: "",
    requiredRule,
    nationalCodeRule,
    valid: true,
  }),
  components: {
    vDatePicker: VuePersianDatetimePicker,
  },

  mounted() {
    this.$store.dispatch("user/fetchUser");
    this.$store.dispatch("app/setBreadCrumbs", this.breadcrumbs);
  },
  computed: {
    user() {
      return this.$store.state.user.userInfo;
    },
    birthconvert() {
      let rowDate = new Date(
        this.$store.state.user.userInfo.basicInfo.birthdate * 1000
      );
      let year = rowDate.getFullYear();
      let month = rowDate.getMonth() + 1;
      let day = rowDate.getDate();
      let dateFormatted = year + "-" + month + "-" + day;
      let finalDate = moment(dateFormatted, "YYYY-M-D")
        .endOf("jMonth")
        .format("jYYYY/jM/jD");

      return finalDate;
    },
  },
  methods: {
    validate() {
      //this.$refs.form.validate();
      //console.log('heloo')
    },
  },
};
</script>

<style>
</style>