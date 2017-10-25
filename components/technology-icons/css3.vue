<template>
  <svg viewBox="0 0 128 128">
    <path
      class="path-fill__dark-grey"
      d="M18.814,114.123l-10.054,-112.771l110.48,0l-10.064,112.754l-45.243,12.543l-45.119,-12.526l0,0Z"
    />
    <path
      class="path-fill__grey"
      d="M64.001,117.062l36.559,-10.136l8.601,-96.354l-45.16,0l0,106.49Z"
    />
    <path
      class="path-fill__white"
      d="M64.001,51.429l18.302,0l1.264,-14.163l-19.566,0l0,-13.831l34.682,0l-0.332,3.711l-3.4,38.114l-30.95,0l0,-13.831l0,0Z"
    />
    <path
      class="path-fill__bright-grey"
      d="M64.083,87.349l-0.061,0.018l-15.403,-4.159l-0.985,-11.031l-13.882,0l1.937,21.717l28.331,7.863l0.063,-0.018l0,-14.39l0,0Z"
    />
    <path
      class="path-fill__white"
      d="M81.127,64.675l-1.666,18.522l-15.426,4.164l0,14.39l28.354,-7.858l0.208,-2.337l2.406,-26.881l-13.876,0Z"
    />
    <path
      class="path-fill__bright-grey"
      d="M64.048,23.435l0,13.831l-33.408,0l-0.277,-3.108l-0.63,-7.012l-0.331,-3.711l34.646,0Zm-0.047,27.996l0,13.831l-15.209,0l-0.277,-3.108l-0.631,-7.012l-0.33,-3.711l16.447,0Z"
    />
  </svg>
</template>

<script>
export default {
  name: 'Css3Svg',
};
</script>

<style scoped>
svg {
  max-width: 40px;
  max-height: 40px;
}

.path-fill__dark-grey {
  fill: #6c6c6c;
}

.path-fill__grey {
  fill: #9d9d9d;
}

.path-fill__bright-grey {
  fill: #ebebeb;
}

.path-fill__white {
  fill: #fff;
}
</style>
