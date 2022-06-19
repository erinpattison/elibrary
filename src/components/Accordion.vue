<template>
  <ul v-for="(item, i) in media" :key="item.title">
    <li :class="item.type" @click="toggle(i)">
      <strong>{{ item.title }} </strong>&nbsp;
      <em>{{ item.firstName }} {{ item.lastName }}</em>
    </li>
    <div v-if="item.expand == true">
      <span class="details">
        <div>
          <img :src="item.image" />
        </div>
        <div>
          <p>
            <strong>{{ item.title }}</strong>
          </p>
          <p>{{ item.firstName }} {{ item.lastName }}</p>
          <p v-if="item.available === true"><strong>AVAILABLE</strong></p>
        </div>
      </span>
      <div class="synopsis">
        <p>{{ item.synopsis }}</p>
      </div>
    </div>
  </ul>
</template>

<script>
export default {
  props: ["media"],
  methods: {
    toggle(i) {
      this.media[i].expand = !this.media[i].expand;
    },
  },
};
</script>

<style scoped>
main {
  padding: 2rem;
}
ul {
  list-style: none;
  width: 50vw;
}
li {
  padding: 1rem;
  cursor: pointer;
  border-radius: 5px;
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
