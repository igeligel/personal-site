<template>
  <div>
    <div class="technology__row">
      <VuejsSvg />
      <JavaScriptSvg />
      <WebpackSvg />
      <BabelSvg />
      <DotnetSvg />
    </div>
    <div class="technology__row">
      <CsharpSvg />
      <Css3Svg />
      <SassSvg />
      <YarnSvg />
      <DockerSvg />
    </div>
    <div class="technology__row">
      <PostgresSvg />
      <GitSvg />
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
    BabelSvg,
    CsharpSvg,
    Css3Svg,
    DockerSvg,
    DotnetSvg,
    GitSvg,
    JavaScriptSvg,
    PostgresSvg,
    SassSvg,
    VuejsSvg,
    WebpackSvg,
    YarnSvg,
  },
};
</script>

<style lang="scss" scoped>
.technology__row {
  svg {
    max-height: calc(20% - 0.875em);
    max-width: calc(20% - 0.875em);
  }

  svg:nth-child(n + 2) {
    margin-left: 1.09375em;
  }

  &:nth-child(n + 2) {
    margin-top: 0.625em;
  }

  @media (min-width: 450px) {
    padding-left: calc(100% - 75vw);
    padding-right: calc(100% - 75vw);
  }

  @media (min-width: 1000px) {
    padding-left: 12.5em;
    padding-right: 12.5em;
  }
}
</style>
