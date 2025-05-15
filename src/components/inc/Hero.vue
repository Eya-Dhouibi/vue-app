<template>
  <section class="bg-light py-5 text-center text-md-start">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-md-6">
          <h1 class="display-4 fw-bold">Bienvenue sur <span class="text-primary">MonSite</span></h1>
          <p class="lead my-4">
            Découvrez nos services et solutions pour booster votre présence en ligne. Simple, rapide et efficace.
          </p>
          <a href="#contact" class="btn btn-primary btn-lg">Contactez-nous</a>
        </div>
        <div class="col-md-6 text-center mt-4 mt-md-0">
          <img src="../../assets/hero.jpg" alt="Hero Image" class="img-fluid rounded shadow">
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HeroSection',

}
</script>

<style scoped>
section {
  min-height: 80vh;
  display: flex;
  align-items: center;
}
</style>
