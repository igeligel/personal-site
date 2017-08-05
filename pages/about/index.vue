<template>
  <div class="container">
    <div class="pure-g">
      <div class="pure-u-1-2" style="">
        <img src="~assets/img/profile-border-radius.png" alt="image of kevin peters" style="width: 117px;  float: right;">
      </div>
      <div class="pure-u-1-2">
        <div style="width: 100%">
          <a :href="socialMedia.twitter" target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style="width: 25px; height: 25px; margin-top: 16px; margin-left: 16px; margin-bottom: 16px; ">
              <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" fill="none" stroke="#b0b5b3" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
            </svg>
          </a>
          <a :href="socialMedia.email" target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#b0b5b3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="max-height: 25px; max-width: 25px; margin: 16px;">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
          </a>
        </div>
        <div style="width: 100%">
          <a :href="socialMedia.linkedin" target="_blank" rel="noopener noreferrer">
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="612px" height="612px" viewBox="0 0 612 612" style="max-height: 25px; max-width: 25px; margin-left: 16px;" xml:space="preserve">
              <g>
                <path fill="#b0b5b3" d="M133.572,172.485H17.639c-7.929,0-14.364,6.435-14.364,14.364v405.271c0,7.928,6.435,14.363,14.364,14.363h115.948
                    c7.929,0,14.364-6.436,14.364-14.363V186.85C147.937,178.906,141.516,172.485,133.572,172.485z M119.208,577.756H31.989V201.214
                    h87.219V577.756z M456.824,167.559c-56.294,0-93.123,24.29-114.512,45.419l-2.643-27.507
                    c-0.719-7.383-6.924-12.985-14.293-12.985h-0.287l-105.691,2.025c-3.878,0.072-7.556,1.709-10.199,4.539
                    c-2.657,2.83-4.051,6.607-3.878,10.472c1.322,29.59,1.279,64.179,1.221,104.226l-0.015,300.413
                    c0,7.93,6.436,14.363,14.364,14.363H336.84c7.929,0,14.364-6.434,14.364-14.363V359.881c0-11.965,1.034-20.613,3.088-25.77
                    c7.226-18.4,31.07-37.419,58.448-37.419c35.465,0,56.623,26.976,56.623,72.181V594.16c0,7.93,6.436,14.363,14.364,14.363h113.908
                    c7.929,0,14.364-6.434,14.364-14.363V354.164C612,237.311,553.983,167.559,456.824,167.559z M583.271,579.797h-85.18V368.873
                    c0-61.307-33.512-100.909-85.352-100.909c-41.139,0-74.593,28.671-85.15,55.575c-3.491,8.719-5.114,20.283-5.114,36.342v219.916
                    h-87.219l0.015-286.006c0.043-34.015,0.086-64.122-0.704-90.839l77.782-1.494l4.468,46.325
                    c0.718,7.369,6.909,12.985,14.307,12.985h2.441c4.956,0,9.553-2.542,12.182-6.751c8.475-13.545,41.526-57.729,111.092-57.729
                    c80.368,0,126.448,57.542,126.448,157.877v225.633H583.271z M80.468,3.477C33.842,3.477,0,35.609,0,79.894
                    c0,44.256,33.167,76.374,78.859,76.374c47.1,0,81.287-32.118,81.287-76.719C159.098,34.762,126.333,3.477,80.468,3.477z
                    M78.859,127.54c-29.519,0-50.131-19.593-50.131-47.646c0-28.527,20.799-47.689,51.74-47.689
                    c30.265,0,50.274,18.846,50.95,47.689C131.418,108.393,110.288,127.54,78.859,127.54z" />
              </g>
            </svg>
          </a>
          <a :href="socialMedia.xing" target="_blank" rel="noopener noreferrer">
            <svg height="1792" viewBox="0 0 1792 1792" width="1792" xmlns="http://www.w3.org/2000/svg" style="max-height: 25px; max-width: 25px; margin-left: 16px;">
              <path fill="#b0b5b3" d="M789 667q-10 18-257 456-27 46-65 46h-239q-21 0-31-17t0-36l253-448q1 0 0-1l-161-279q-12-22-1-37 9-15 32-15h239q40 0 66 45zm806-642q11 16 0 37l-528 934v1l336 615q11 20 1 37-10 15-32 15h-239q-42 0-66-45l-339-622q18-32 531-942 25-45 64-45h241q22 0 31 15z" />
            </svg>
          </a>
        </div>
        <div style="width: 100%;">
          <a :href="socialMedia.medium" target="_blank" rel="noopener noreferrer">
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1000 1000" enable-background="new 0 0 1000 1000" xml:space="preserve" style="max-height: 25px; max-width: 25px; margin-top: 16px; margin-left: 16px;">
              <g>
                <path fill="#b0b5b3" d="M336.5,240.2v641.5c0,9.1-2.3,16.9-6.8,23.2s-11.2,9.6-20,9.6c-6.2,0-12.2-1.5-18-4.4L37.3,782.7c-7.7-3.6-14.1-9.8-19.4-18.3S10,747.4,10,739V115.5c0-7.3,1.8-13.5,5.5-18.6c3.6-5.1,8.9-7.7,15.9-7.7c5.1,0,13.1,2.7,24.1,8.2l279.5,140C335.9,238.6,336.5,239.5,336.5,240.2L336.5,240.2z M371.5,295.5l292,473.6l-292-145.5V295.5z M990,305.3v576.4c0,9.1-2.6,16.5-7.7,22.1c-5.1,5.7-12,8.5-20.8,8.5s-17.3-2.4-25.7-7.1L694.7,784.9L990,305.3z M988.4,239.7c0,1.1-46.8,77.6-140.3,229.4C754.6,621,699.8,709.8,683.8,735.7L470.5,389l177.2-288.2c6.2-10.2,15.7-15.3,28.4-15.3c5.1,0,9.8,1.1,14.2,3.3l295.9,147.7C987.6,237.1,988.4,238.2,988.4,239.7L988.4,239.7z" />
              </g>
            </svg>
          </a>
        </div>
      </div>
    </div>
    <div class="content">
      <h1>About me</h1>
      <p>Hey there, I’m Kevin! I am web developer living in Berlin. I love crafting stuff in the web and am really deep into <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	      viewBox="0 0 300 300" style="enable-background:new 0 0 16 16; height: 16px; transform:translate(0%, 2px);" xml:space="preserve">
        <style type="text/css">
          .st0{fill:#a4a4a4;}
          .st1{fill:#474747;}
        </style>
        <g>
          <polygon class="st0" points="182.9,26.5 150,83.6 117.1,26.5 7.4,26.5 150,273.5 292.6,26.5 	"/>
          <polygon class="st1" points="182.9,26.5 150,83.6 117.1,26.5 64.5,26.5 150,174.7 235.5,26.5 	"/>
        </g>
      </svg> and .NET</p>
      <a class="content__link" href="https://www.google.com" target="_blank">Résumé<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-up-right" style="transform:translate(4px, 6px);"><line x1="6" y1="18" x2="18" y2="6"></line><polyline points="9 6 18 6 18 15"></polyline></svg></a>
      <h2 class="content__second-heading">Technologies i use</h2>
      <div class="technology-row">
        <vuejs-svg></vuejs-svg>
        <javascript-svg style="margin-left: 17.5px;"></javascript-svg>
        <webpack-svg style="margin-left: 17.5px;"></webpack-svg>
        <babel-svg style="margin-left: 17.5px;"></babel-svg>
        <dotnet-svg style="margin-left: 17.5px;"></dotnet-svg>
      </div>
      <div style="margin-top: 10px;" class="technology-row">
        <c-sharp-svg></c-sharp-svg>
        <css-3-svg style="margin-left: 17.5px;"></css-3-svg>
        <sass-svg style="margin-left: 17.5px;"></sass-svg>
        <yarn-svg style="margin-left: 17.5px;"></yarn-svg>
        <docker-svg style="margin-left: 17.5px;"></docker-svg>
      </div>
      <div style="margin-top: 10px;" class="technology-row">
        <postgres-svg></postgres-svg>
        <git-svg style="margin-left: 17.5px;"></git-svg>
      </div>
    </div>
  </div>
</template>

<script>
import BabelSvg from '../../components/technology-icons/babel';
import CsharpSvg from '../../components/technology-icons/csharp';
import Css3Svg from '../../components/technology-icons/css3';
import DockerSvg from '../../components/technology-icons/docker';
import DotnetSvg from '../../components/technology-icons/dotnet';
import GitSvg from '../../components/technology-icons/git';
import JavaScriptSvg from '../../components/technology-icons/javascript';
import PostgresSvg from '../../components/technology-icons/postgres';
import SassSvg from '../../components/technology-icons/sass';
import VuejsSvg from '../../components/technology-icons/vuejs';
import WebpackSvg from '../../components/technology-icons/webpack';
import YarnSvg from '../../components/technology-icons/yarn';

export default {
  head: {
    title: 'About | Web Dev Stories by Kevin Peters',
    meta: [
      { name: 'description', content: 'About page of Kevin Peters. Here are several personal information about the programmer and web developer Kevin Peters.' },
      { name: 'subject', content: 'Information about Kevin Peters' },
      { name: 'abstract', content: 'Information about Kevin Peters' },
      { name: 'url', content: 'https://kevinpeters.net/about/' },
      { name: 'article:author', content: 'Kevin Peters' },

      { name: 'og:url', content: 'https://kevinpeters.net/about/' },
      { name: 'og:type', content: 'website' },
      { name: 'og:title', content: 'About | Web Dev Stories by Kevin Peters' },
      { name: 'og:image', content: '' },
      { name: 'og:description', content: 'About page of Kevin Peters. Here are several personal information about the programmer and web developer Kevin Peters.' },
      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:site', content: '@kevinpeters_' },
      { name: 'twitter:creator', content: '@kevinpeters_' },
      { name: 'twitter:url', content: 'https://kevinpeters.net/about/' },
      { name: 'twitter:title', content: 'About | Web Dev Stories by Kevin Peters' },
      { name: 'twitter:description', content: 'About page of Kevin Peters. Here are several personal information about the programmer and web developer Kevin Peters.' },
      { name: 'twitter:image', content: '' },
      { name: 'twitter:image:alt', content: '' }
    ]
  },
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
  data () {
    return {
      online: true,
      socialMedia: {
        twitter: 'https://twitter.com/kevinpeters_',
        email: 'mailto:kevinpeterscareer@gmail.com',
        linkedin: 'https://www.linkedin.com/in/kevinpetersde',
        xing: 'https://www.xing.com/profile/Kevin_Peters32',
        medium: 'https://medium.com/@kevin_peters',
      },
    }
  },
  mounted () {
    if (!window.navigator) {
      this.online = false
      return
    }
    this.online = Boolean(window.navigator.onLine)
    window.addEventListener('offline', this._toggleNetworkStatus)
    window.addEventListener('online', this._toggleNetworkStatus)
  },
  methods: {
    _toggleNetworkStatus ({ type }) {
      this.online = type === 'online'
    }
  },
  destroyed () {
    window.removeEventListener('offline', this._toggleNetworkStatus)
    window.removeEventListener('online', this._toggleNetworkStatus)
  }
};
</script>

<style scoped>
.technology-row svg {
  max-height: calc(20% - 14px);
  max-width: calc(20% - 14px);
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

.container {
  padding-bottom: 65px;
  max-width: 1000px;
  margin: auto;
}

.content__second-heading {
  font-weight: 300;
  font-size: 16px;
  line-height: 25px;
  margin-bottom: 8px;
}

.content__link {
  line-height: 42px;
  font-size: 18px;
  color: #4096c4;
  padding-left: 5px;
}

.content__link:link {
  text-decoration: none;
}

.content__link:visited {
  text-decoration: none;
}

.content__link:hover {
  text-decoration: none;
}

.content__link:active {
  text-decoration: none;
}

.content {
  padding-left: 25px;
  padding-right: 25px;
}

h1 {
  font-size: 25px;
  font-weight: 300;
  margin-top: 19px;
  margin-bottom: 19px;
  color: #706f6f;
}

p {
  font-size: 16px;
  color: #706f6f;
  font-weight: 300;
  line-height: 25px;
}

* {
  font-family: 'Lato', sans-serif;
}
</style>
