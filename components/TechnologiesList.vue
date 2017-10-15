<template>
  <div>
    <div class="technology-row">
      <vuejs-svg></vuejs-svg>
      <javascript-svg></javascript-svg>
      <webpack-svg></webpack-svg>
      <babel-svg></babel-svg>
      <dotnet-svg></dotnet-svg>
    </div>
    <div class="technology-row">
      <c-sharp-svg></c-sharp-svg>
      <css-3-svg></css-3-svg>
      <sass-svg></sass-svg>
      <yarn-svg></yarn-svg>
      <docker-svg></docker-svg>
    </div>
    <div class="technology-row">
      <postgres-svg></postgres-svg>
      <git-svg></git-svg>
    </div>
  </div>
</template>

<script>
import BabelSvg from './technology-icons/babel';
import CsharpSvg from './technology-icons/csharp';
import Css3Svg from './technology-icons/css3';
import DockerSvg from './technology-icons/docker';
import DotnetSvg from './technology-icons/dotnet';
import GitSvg from './technology-icons/git';
import JavaScriptSvg from './technology-icons/javascript';
import PostgresSvg from './technology-icons/postgres';
import SassSvg from './technology-icons/sass';
import VuejsSvg from './technology-icons/vuejs';
import WebpackSvg from './technology-icons/webpack';
import YarnSvg from './technology-icons/yarn';

export default {
  name: 'TechnologiesList',
  components: {
    'babel-svg': BabelSvg,
    'c-sharp-svg': CsharpSvg,
    'css-3-svg': Css3Svg,
    'docker-svg': DockerSvg,
    'dotnet-svg': DotnetSvg,
    'git-svg': GitSvg,
    'javascript-svg': JavaScriptSvg,
    'postgres-svg': PostgresSvg,
    'sass-svg': SassSvg,
    'vuejs-svg': VuejsSvg,
    'webpack-svg': WebpackSvg,
    'yarn-svg': YarnSvg,
  },
};
</script>

<style lang="scss" scoped>
.technology-row svg {
  max-height: calc(20% - 14px);
  max-width: calc(20% - 14px);
}

.technology-row svg:nth-child(n+2) {
  margin-left: 17.5px;
}

.technology-row:nth-child(n+2) {
  margin-top: 10px;
}

@media (min-width: 450px) {
  .technology-row {
    padding-left: calc(100% - 75vw);
    padding-right: calc(100% - 75vw);
  }
}

@media (min-width: 1000px) {
  .technology-row {
    padding-left: 200px;
    padding-right: 200px;
  }
}
</style>

