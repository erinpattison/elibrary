<template>
  <main>
    <section class="browse_section left">
    <h2>Browse Our Current Collection</h2>
    <label for="filtermenu">Filter by type:</label>
    <select id="filtermenu" v-model="activeFilter">
      <option v-for="filter in filters" :key="filter">{{ filter }}</option>
    </select>
    <Accordion :media="filterMedia" />
    </section>
    
  </main>
</template>

<script>
import Accordion from "../components/Accordion.vue";
export default {
  data: function () {
    return {
      filters: ["all", "book", "streaming", "dvd"],
      activeFilter: "all",
    };
  },
  props: ["media"],
  components: {
    Accordion: Accordion,
  },
  computed: {
    filterMedia() {
      if (this.activeFilter === "all") {
        return this.media;
      }
      return this.media.filter((item) => {
        console.log(item.type === this.activeFilter);
        if (item.type === this.activeFilter) {
          return true;
        }
        return false;
      });
    },
  },
};
</script>

<style scoped>
main {
  padding: 2rem;
  display: flex;
  justify-content: space-evenly;
}


ul {
  list-style: none;
  width: 60vw;
}
li {
  padding: 1rem;
  cursor: pointer;
  border-radius: 5px;
  width: 60vw;
}
.book {
  border: 2px solid var(--blue-primary);
  color: var(--blue-dark);
  background-color: var(--blue-light);
  transition: 0.2s linear;
}
.book:hover {
  background-color: var(--blue-primary);
}
.streaming {
  border: 2px solid var(--orange-primary);
  color: var(--orange-dark);
  background-color: var(--orange-light);
  transition: 0.15s linear;
}
.streaming:hover {
  background-color: var(--orange-primary);
}
.dvd {
  border: 2px solid var(--violet-primary);
  color: var(--violet-dark);
  background-color: var(--violet-light);
  transition: 0.2s linear;
}
.dvd:hover {
  background-color: var(--violet-primary);
}

.details {
  display: flex;
  padding: 1rem;
  align-items: center;
}
.details img {
  height: 100px;
  margin-right: 2rem;
}
button {
  float: right;
}

.synopsis {
  padding: 1rem;
}
label {
  margin-right: 1rem;
}
</style>
