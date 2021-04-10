<template>
  <div>
    <v-container>
      <v-row justify="center"  v-if="user">
        <v-col cols="12">
          <v-card ref="form">
            <v-row   align="center" class="spacer px-4 ">
              <v-col cols="12" xs="12" sm="12" md="1"  class="d-flex justify-center justify-md-start">
                <v-avatar size="80px" v-if="true" class="grey lighten-2">
                  <v-hover v-slot="{ hover }">
                    <v-img
                      @click="dialog = !dialog"
                      src="@/assets/images/avatar_default.png"
                    >
                      <v-expand-transition>
                        <div
                          v-if="hover"
                          class="d-flex transition-fast-in-fast-out"
                        >
                          <v-icon
                            align="center"
                            justify="center"
                            color="white centered"
                            >mdi-account-edit</v-icon
                          >
                        </div>
                      </v-expand-transition>
                    </v-img>
                  </v-hover>
                </v-avatar>
                <v-avatar size="80px" v-else class="red">
                  <span class="white--text headline">EM</span>
                </v-avatar>
              </v-col>
              <v-col cols="12" xs="12" sm="12" md="11" class="pr-lg-7 d-flex justify-center justify-md-start"  >
                <p class="iranSansLight">برای ویرایش بر روی عکس کلیک نمائید</p>
              </v-col>
            </v-row>

            <v-divider></v-divider>
            <v-form
             
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
                    label="کد ملی"
                    disabled
                    required
                  ></v-text-field>
                  <!--  :rules="nationalCodeRule()" -->
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
                    disabled
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
      <v-row>
        <v-dialog v-model="dialog" width="500">
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="red lighten-2 d-none" dark v-bind="attrs" v-on="on">
              Click Me
            </v-btn>
          </template>

          <v-card>
            <v-card-title class="iranSansBold grey lighten-2">
              آپلود تصویر
            </v-card-title>
            <v-form
              
              class="col-12"
              ref="imageForm"
              v-model="imageBtnValid"
              lazy-validation
            >
              <v-card-text>
                <v-file-input
                  :rules="imageRule()"
                  accept="image/png, image/jpeg, image/bmp"
                  placeholder="یک تصویر انتخاب نمائید"
                  prepend-icon="mdi-camera"
                  label="تصویر پروفایل"
                  @change="selectFile"
                ></v-file-input>
                <div v-if="imagePreview" block class="d-flex justify-center">
                  <v-avatar size="80px">
                    <v-img :src="imagePreview"> </v-img>
                  </v-avatar>
                </div>
              </v-card-text>
              <v-progress-linear
                v-if="progressValue"
                color="teal"
                buffer-value="0"
                :value="progressValue"
                stream
              ></v-progress-linear>
              <v-divider></v-divider>

              <v-card-actions>
                <v-spacer></v-spacer>

                <v-btn
                  :disabled="!imageBtnValid"
                  color="success"
                  class="iranSansBold"
                  @click="uploadImage"
                >
                  آپلود
                </v-btn>

                <!-- :disabled="!imageBtnValid" -->
                <v-btn color="error iranSansBold" @click="dialog = false">
                  بستن
                </v-btn>
              </v-card-actions>
            </v-form>
          </v-card>
        </v-dialog>
        <input type="file" style="display: none" ref="fileInput" />
      </v-row>
    </v-container>
  </div>
</template>
<style scoped>
.v-avatar {
  cursor: pointer;
}
</style>
<script>
import VuePersianDatetimePicker from "vue-persian-datetime-picker";
import { requiredRule } from "../../rules/index";
import { nationalCodeRule } from "../../rules/index";
import { imageRule } from "../../rules/index";
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
    imageBtnValid: true,
    selectedImage: null,
    currentFile: null,
    imagePreview: null,
    progressValue:0,
    dialog: false,
    imageRule: imageRule,
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
    selectFile(file) {
      //this.progress = 0;
      this.currentFile = file;
      console.log(file.name, "file uploaed");
      console.log(URL.createObjectURL(file), "file URL");
      this.imagePreview = URL.createObjectURL(file);
    },
    // onSelectedImage(event) {
    //   this.selectedImage = event.target.files[0];
    //   console.log(event.target.files[0], "image");
    // },
    uploadImage() {
      const fd = new FormData();
      fd.append("image", this.currentFile, this.currentFile.name);
      axios
        .post("https://vue-resource-b820e-default-rtdb.firebaseio.com/image.json", fd, {
          onUploadProgress: (uploadEvent) => {
            console.log(
              "upload progress :" +
                Math.round((uploadEvent.loaded / uploadEvent.total) * 100) +
                "%"
            );
            this.progressValue = Math.round((uploadEvent.loaded / uploadEvent.total) * 100);
          },
        })
        .then((res) => {
          console.log("response",res);
        });
    },
  },
};
</script>

<style>
</style>