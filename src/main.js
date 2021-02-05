import Vue from "vue";
import App from "./App.vue";
import Vuelidate from "vuelidate";
import router from "./router";
import dateFilter from "@/filters/date.filter.js";
import store from "./store";
import messagePlugin from "@/utils/message.plugin.js";
import Loader from "@/components/app/Loader.vue";
import currencyFilter from "@/filters/currency.filter.js";
import "./registerServiceWorker";
import "materialize-css/dist/js/materialize.min";

import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

Vue.config.productionTip = false;

firebase.initializeApp({
  apiKey: "AIzaSyDdWbtwUuLryouk3ClblI53iuFAMp0IxKI",
  authDomain: "personal-manager-crm.firebaseapp.com",
  projectId: "personal-manager-crm",
  storageBucket: "personal-manager-crm.appspot.com",
  messagingSenderId: "115471473771",
  appId: "1:115471473771:web:e53a9b9a845cf86d8e652e",
  measurementId: "G-DBSDEWRC69"
});

Vue.use(Vuelidate);
Vue.use(messagePlugin);
Vue.component("Loader", Loader);

Vue.filter("date", dateFilter);
Vue.filter("currency", currencyFilter);

let app;

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount("#app");
  }
});
