<template>
  <footer class="footer -mx-4 md:mx-0">
    <section class="footer-internal mx-auto">
      <div class="w-full py-4 flex flex-wrap flex-col md:flex-row justify-around items-center">
        <div class="w-full md:w-2/12 md:p-6 p-8">
          <img
              alt="Alliance Logo Small"
              class="flex w-full"
              src="/images/uploads/ALL-MarketingLogo_HorizontalWhiteSmall.png"
            />
        </div>
        <div class="w-full md:w-8/12 text-center">
          <h5 style="font-weight:600;letter-spacing:1.5px;">MARKETINGTEAM@ALLIANCESALESINC.COM</h5>
        </div>
        <div class="flex flex-row w-full md:w-2/12 p-6 justify-around">
            <a href="https://www.facebook.com/AllianceSalesInc" target="_blank">
              <img
                alt="Alliance Logo Small"
                class="flex w-full p-2"
                src="/images/uploads/Facebook.png"
              />
            </a>
            <a href="https://www.instagram.com/alliancesalesus/" target="_blank">
              <img
                alt="Alliance Logo Small"
                class="flex w-full p-2"
                src="/images/uploads/Instagram.png"
              />
            </a>
            <a href="https://www.linkedin.com/company/alliance-sales-&-marketing/" target="_blank">
              <img
                alt="Alliance Logo Small"
                class="flex w-full p-2"
                src="/images/uploads/LinkedIn_Icon.png"
              />
            </a>
        </div>
      </div>
    </section>
  </footer>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

@Component
export default class Footer extends Vue {}
</script>

<style lang="scss">
.footer {
  background-color: $bluise;
}
</style>
