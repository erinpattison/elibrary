<template>
  <Header />
  <RouterView :media="media" />
  <Footer />
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import axios from "axios";
import { RouterView } from "vue-router";
export default {
  data: function () {
    return {
      media: [],
    };
  },
  components: {
    Header: Header,
    RouterView: RouterView,
    Footer: Footer,
  },
  created: function () {
    const appData = this;
    axios.get("public/data.json").then(function (response) {
      appData.media = response.data.media;
    });
  },
};
</script>

<style>
@import "./assets/style.css";
header {
  position: sticky;
  top: 0;
}
.homeview {
  padding: 2rem;
}
</style>
