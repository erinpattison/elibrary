<template>
  <header>
    <h1>Libre Electrium</h1>
    <ul>
      <li><RouterLink to="/">Homepage</RouterLink></li>
      <li><RouterLink to="/browse">Browse</RouterLink></li>
      <li><RouterLink to="/hours">Hours</RouterLink></li>
      <li><RouterLink to="/about">About</RouterLink></li>
    </ul>
  </header>
</template>

<script>
import { RouterLink } from "vue-router";

export default {
  components: {
    RouterLink: RouterLink,
  },
};
</script>

<style scoped>
header {
  display: flex;
  align-items: center;
  padding: 1rem 2rem;
  background-color: var(--grey-primary);
  color: var(--text-color);
}
header ul {
  list-style: none;
  width: 50%;
  display: flex;
  justify-content: space-evenly;
  font-size: 1.8rem;
}
header ul li {
  font-weight: 600;
}
header a {
  color: var(--text-color);
  transition: 0.1s;
}
header a:hover {
  font-weight: 700;
}
</style>
