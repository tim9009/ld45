<template>
  <div class="GameUIHeader">
    <img class="GameUIHeader__logo" src="../assets/logo.png">

    <div class="GameUIHeader__icons">    
      <svg v-bind:class="{ 'connection': true, 'active': blinkConnection }" width="34px" height="25px" viewBox="0 0 34 25" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g id="UI" transform="translate(-1820.000000, -18.000000)" fill="#D7D7D7">
                  <path d="M1836.86721,41 C1837.3969,41 1837.8304,41.411838 1837.86498,41.9327771 L1836.86721,43 L1836.86721,43 L1835.87,41.932 L1835.87393,41.8833789 C1835.9317,41.3860402 1836.35437,41 1836.86721,41 Z M1836.86721,34 C1839.22307,34 1841.3411,35.0183287 1842.80512,36.6388239 L1840.05597,39.5847218 C1839.32553,38.6218593 1838.16899,38 1836.86721,38 C1835.56542,38 1834.40889,38.6218593 1833.67845,39.5847218 L1830.93019,36.6378296 C1832.39418,35.0179122 1834.51182,34 1836.86721,34 Z M1836.86721,26 C1841.33302,26 1845.37152,27.8296079 1848.27399,30.7801394 L1845.5415,33.7080091 C1843.3567,31.423127 1840.27815,30 1836.86721,30 C1833.45676,30 1830.37861,31.422712 1828.19387,33.7070097 L1825.4614,30.779137 C1828.36381,27.8291936 1832.40189,26 1836.86721,26 Z M1836.86721,18 C1843.44302,18 1849.40115,20.644622 1853.73602,24.9282885 L1851.00537,27.8538964 C1847.3864,24.2369402 1842.38803,22 1836.86721,22 C1831.34688,22 1826.34893,24.2365312 1822.73003,27.8529046 L1819.9994,24.9272998 C1824.33418,20.6442151 1830.2919,18 1836.86721,18 Z" id="Combined-Shape"></path>
              </g>
          </g>
      </svg>

      <svg v-bind:class="{ 'alert': true, 'active': blinkAlert }" width="26px" height="26px" viewBox="0 0 26 26" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g id="UI" transform="translate(-1874.000000, -17.000000)" fill="#D7D7D7">
                  <path d="M1887,17 L1900,43 L1874,43 L1887,17 Z M1887,38 C1886.44772,38 1886,38.4477153 1886,39 C1886,39.5522847 1886.44772,40 1887,40 C1887.55228,40 1888,39.5522847 1888,39 C1888,38.4477153 1887.55228,38 1887,38 Z M1887,27 C1886.44772,27 1886,27.4477153 1886,28 L1886,28 L1886,35 C1886,35.5522847 1886.44772,36 1887,36 C1887.55228,36 1888,35.5522847 1888,35 L1888,35 L1888,28 C1888,27.4477153 1887.55228,27 1887,27 Z" id="Combined-Shape"></path>
              </g>
          </g>
      </svg>
    </div>
  </div>
</template>

<script>
  import store from '@/store'

  export default {
    name: 'GameUIHeader',
    computed: {
      blinkConnection() {
        return store.state.gameLost
      },

      blinkAlert() {
        return store.state.resources.oxygen <= 33
      },
    }
  }
</script>

<style lang="scss">
  @import '../styles/components/GameUIHeader';
</style>
