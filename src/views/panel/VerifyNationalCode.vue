<template>
  <div>
    <v-snackbar v-model="snackbar" :timeout="timeout" color="success" fixed>
      {{ text }}

      <template v-slot:action="{ attrs }">
        <v-btn color="red" text v-bind="attrs"  @click="snackbar = false">
          بستن
        </v-btn>
      </template>
    </v-snackbar>
    <v-container>

      <v-alert
      transition="scale-transition"
      icon="mdi-home"
      :value="alert"
      
       dense text type="success"
      >
        I'm a dense alert with the <strong>text</strong> prop and a
        <strong>type</strong> of success
      </v-alert>

      <v-row justify="center">
        <v-col cols="12">
          <v-card ref="form">
            <v-form
              v-if="national"
              class="col-12"
              ref="form"
              v-model="valid"
              lazy-validation
            >
              <v-row>
                <v-col cols="12" md="4" sm="12" class="pb-0">
                  <v-text-field
                    class="m-0 p-0"
                    persistent-hint
                    outlined
                    v-model="national.basicInfo.nationalCode"
                    :rules="nationalCodeRule()"
                    label="کد ملی"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="1" sm="12">
                  <v-btn
                    :disabled="!valid"
                    block
                    color="success"
                    class="mt-md-3"
                    @click="submit"
                  >
                    تائید کد ملی
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
import { requiredRule } from "../../rules/index";
import { nationalCodeRule } from "../../rules/index";
export default {
  name: "VerifyNationalCode",
  data: () => ({
    breadcrumbs: [
      {
        text: "داشبورد",
        disabled: false,
        to: { name: "Home" },
        exact: true,
      },
      {
        text: "تائید کد ملی  ",
        disabled: true,
        exact: true,
      },
    ],
    nationalCodeRule,
    requiredRule,
    valid: false,
    snackbar: false,
    text: "کد ملی با موفقیت تائید شد",
    timeout: 3000,
    alert:false,
  }),
  components: {},

  mounted() {
    this.$store.dispatch("nationalCode/fetchNationalCode");
    this.$store.dispatch("app/setBreadCrumbs", this.breadcrumbs);
  },
  computed: {
    national() {
      return this.$store.state.nationalCode.nationalCode;
    },
  },
  methods: {
      submit(){
          //let val =  this.validate();
         //console.log(val);
         this.snackbar = true;
            // this.alert = true;
            // setTimeout(() => {
            //     this.alert = false;
            // }, this.timeout);
            console.log(
            this.checkCodeMeli(this.national.basicInfo.nationalCode),
            "check melicode"
            );
      },
    validate() {
        
      this.$refs.form.validate();
      
      //console.log(this.valid,"validate");
    },
    checkCodeMeli(code) {
      var L = code.length;

      if (L < 8 || parseInt(code, 10) == 0) return false;
      code = ("0000" + code).substr(L + 4 - 10);
      if (parseInt(code.substr(3, 6), 10) == 0) return false;
      var c = parseInt(code.substr(9, 1), 10);
      var s = 0;
      for (var i = 0; i < 9; i++)
        s += parseInt(code.substr(i, 1), 10) * (10 - i);
      s = s % 11;
      return (s < 2 && c == s) || (s >= 2 && c == 11 - s);
      return true;
    },
  },
};
</script>

<style>
</style>