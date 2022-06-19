<template>
  <div class="full">
    <div class="left">
      <section class="about-section">
        <h2>Hours</h2>
        <ul>
          <li><strong>MONDAY: </strong>9:00AM - 7:00pm</li>
          <li><strong>TUESDAY: </strong>9:00AM - 7:00pm</li>
          <li><strong>WEDNESDAY: </strong>9:00AM - 7:00pm</li>
          <li><strong>THURSDAY: </strong>9:00AM - 7:00pm</li>
          <li><strong>FRIDAY: </strong>9:00AM - 7:00pm</li>
          <li><strong>SATURDAY: </strong>9:00AM - 7:00pm</li>
          <li><strong>SUNDAY: </strong>9:00AM - 7:00pm</li>
        </ul>
      </section>

      <section class="about-section">
        <h2>Location</h2>
        <p>1234 Fifth Street<br />Long Beach, CA<br />90802</p>
      </section>

      <section class="about-section">
        <h2>Contact</h2>
        <p><strong>Phone:</strong> (562)-555-1234</p>
        <p><strong>Email:</strong> director@email.com</p>
      </section>
    </div>
    <div class="right"></div>
  </div>
</template>

<style scoped>
.full {
  display: flex;
}
.left {
  width: 60%;
  background-color: var(--grey-light);
}
.right {
  width: 40%;
  background-image: url("https://cdna.artstation.com/p/assets/images/images/017/202/156/large/isaac-zuren-library-07.jpg?1555018297");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
}
.left,
.right {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 90vh;
  max-height: 100vh;
}

.about-section {
  border: 3px solid var(--pink-primary);
  width: 40%;
  margin: 2rem auto;
  padding: 1rem;
  background-color: #fff;
}
</style>
