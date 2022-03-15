<template>
  <div>
    <header class="header">
      <div class="header__container">
        <div class="header__wrapper">
          <nav class="header__navigation">
            <h1>l'estate</h1>
            <div class="header__links">
              <router-link to="/">Home</router-link>
              <router-link to="/about">About</router-link>
              <router-link to="/houses">Houses</router-link>
            </div>
          </nav>
        </div>
      </div>
    </header>
    <router-view />
  </div>
</template>

<script>
import "../assets/scss/modules/header.scss";

export default {
  name: "HeaderPrimary",
};
</script>
