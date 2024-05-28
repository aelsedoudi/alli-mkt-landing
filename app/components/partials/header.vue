<template>
  <header class="intro-header flex flex-col items-center py-2 md:py-16 mb-16">
 
    <section class="primary-header p-8">
      <img
        alt="Headliner Photo"
        class="product-logo mx-auto flex flex xl:flex my-16"
        src="/images/uploads/ALL-MarketingLogo_HorizontalWhite.png"
      />
        <h2 class="header-title text-center mt-8">Build Your Custom Brand Trip Itinerary</h2>

        <span class="text-center mb-0 md:mb-16 block">Alliance Marketing is a full-service shopper marketing agency, elevating your brand in retail by mapping out your unique data-driven route. You pick the destination, we'll drive results.</span>
    </section>

  </header>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import settings from '@/content/settings/general.json';

@Component
export default class Header extends Vue {
  get pages(): Page[] {
    return this.$store.state.pages;
  }

  logo = settings.logo;
}
</script>

<style lang="scss">
.nav {
  ul li > a {
    &.nuxt-link-active {
      color: $bluise;
      @apply font-bold;
    }
  }
}
</style>
