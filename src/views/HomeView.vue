<template>
  <div class="hero">
    <h2>Welcome to Libre Electrium</h2>
  </div>

  <section class="home-section">
    <h2>Coming Soon in Mystery</h2>
    <div class="featured f_left">
      <div>
        <img
          src="https://static.wixstatic.com/media/12e156_2a81f0819667484386b029615ce9764c~mv2.png/v1/fill/w_526,h_653,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/HOUSE%20ACROSS%20THE%20LAKE%20flatlay2.png"
        />
      </div>
      <div>
        <h3>The House Across the Lake</h3>
        <h3>Available June 21, 2022</h3>
        <p>
          Casey Fletcher, a recently widowed actress trying to escape a streak
          of bad press, has retreated to the peace and quiet of her family’s
          lake house in Vermont. Armed with a pair of binoculars and several
          bottles of bourbon, she passes the time watching Tom and Katherine
          Royce, the glamorous couple living in the house across the lake. They
          make for good viewing—a tech innovator, Tom is rich, and a former
          model, Katherine is gorgeous.
        </p>
        <p>
          One day on the lake, Casey saves Katherine from drowning, and the two
          strike up a budding friendship. But the more they get to know each
          other—and the longer Casey watches—it becomes clear that Katherine and
          Tom’s marriage isn’t as perfect and placid as it appears. When
          Katherine suddenly vanishes, Casey becomes consumed with finding out
          what happened to her. In the process, she uncovers eerie, darker
          truths that turn a tale of voyeurism and suspicion into a story of
          guilt, obsession and how looks can be very deceiving.
        </p>
        <p>
          With his trademark blend of sharp characters, psychological suspense
          and gasp-worthy twists, Riley Sager’s The House Across the Lake will
          shock readers until the very last page.
        </p>
      </div>
    </div>
  </section>

  <section class="home-section">
    <h2>Available for Checkout on DVD</h2>
    <div class="featured f_right">
      <div>
        <h3>Gladiator (2000)</h3>
        <p>
          Gladiator is a 2000 epic historical drama film directed by Ridley
          Scott and written by David Franzoni, John Logan, and William
          Nicholson. The film was co-produced and released by DreamWorks
          Pictures and Universal Pictures. DreamWorks Pictures distributed the
          film in North America while Universal Pictures released it
          internationally through United International Pictures. It stars
          Russell Crowe, Joaquin Phoenix, Connie Nielsen, Ralf Möller, Oliver
          Reed (in his final role), Djimon Hounsou, Derek Jacobi, John Shrapnel,
          Richard Harris, and Tommy Flanagan. Crowe portrays Roman general
          Maximus Decimus Meridius, who is betrayed when Commodus, the ambitious
          son of Emperor Marcus Aurelius, murders his father and seizes the
          throne. Reduced to slavery, Maximus becomes a gladiator and rises
          through the ranks of the arena to avenge the murders of his family and
          his emperor.
        </p>
      </div>
      <div>
        <img
          id="gladiator"
          src="https://chrisconwayart.files.wordpress.com/2015/07/gladiator-dvd-cover-art.jpg"
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["media"],
  components: {},
};
</script>

<style>
.hero {
  height: 60vh;
  width: 100vw;
  background-image: url("https://assets.codepen.io/5737230/admont-library-austria-shutterstock_1053363362.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 3px solid var(--grey-primary);
}

.hero h2 {
  font-size: 6vw;
  color: var(--grey-light);
  text-shadow: 2px 2px 3px var(--grey-dark), -2px -2px 3px var(--grey-dark);
}

.home-section {
  padding: 2rem;
}
.home-section h2 {
  text-align: center;
}
.featured {
  display: flex;
  align-items: center;
  width: 75vw;
  margin: 2rem auto;
  background-color: var(--grey-light);
  padding: 2rem;
  border-radius: 20px;
}

.featured img {
  height: 40vh;
}
#gladiator {
  margin: 0 2rem;
}
</style>
