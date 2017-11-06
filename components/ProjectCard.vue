<template>
  <div class="pure-u-lg-1-3 pure-u-md-1-2 pure-u-1-1">
    <div class="project__summary" @click="summaryClick">
      <img :src="background" class="project__background" />
      <img :src="logo" :class="projectLogoClass" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectCard',
  props: {
    background: Object,
    logo: Object,
    center: Boolean,
  },
  computed: {
    projectLogoClass() {
      const base = 'project__logo';
      return this.center ? `${base}--center` : base;
    },
  },
  methods: {
    summaryClick() {
      this.$emit('summaryClick')
    },
  },
};
</script>

<style scoped lang="scss">
.project__summary:hover .project__logo {
  position: absolute;
  width: 30%;
  left: calc((100% - 30%) / 2);
  top: 30%;
}

.project__summary:hover .project__logo--center {
  position: absolute;
  width: 30%;
  left: calc((100% - 30%) / 2);
  top: 20%;
}

@media (min-width: 768px) {
  .project__summary:hover {
    transform: scale(1.08, 1.05);
  }

  .project__logo--center {
    transform: scale(1.08, 1.05);
  }
}


.project__logo {
  position: absolute;
  width: 20%;
  left: calc((100% - 20%) / 2);
  top: 40%;
  transition: all 0.3s ease;
}

.project__logo--center {
  position: absolute;
  width: 20%;
  left: calc((100% - 20%) / 2);
  top: 30%;
  transition: all 0.3s ease;
}

.project__summary {
  color: #706f6f;
  transition: all 0.3s ease;
  position: relative;
  cursor: pointer;
}

.project__summary img {
  margin-top: 16px;
}

.project__summary ul {
  padding: 0;
  padding-left: 8px;
  list-style-type: none;
}

.project__summary {
  margin-top: 16px;
  padding-left: 24px;
  padding-right: 24px;
}
</style>
