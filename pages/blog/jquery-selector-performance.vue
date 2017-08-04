<template>
  <div class="blog-container">
    <div v-html="hello"></div>
  </div>
</template>

<script>
import hello from './markdown/jquery-selector-performance.md'

export default {
  head: {
    title: '',
    meta: [
      { name: 'description', content: '' },
      { name: 'subject', content: '' },
      { name: 'abstract', content: '' },
      { name: 'url', content: '' },

      { name: 'og:url', content: '' },
      { name: 'og:type', content: '' },
      { name: 'og:title', content: '' },
      { name: 'og:image', content: '' },
      { name: 'og:description', content: '' },
      { name: 'og:locale', content: '' },

      { name: 'article:author', content: '' },
      { name: 'twitter:card', content: '' },
      { name: 'twitter:site', content: '' },
      { name: 'twitter:creator', content: '' },
      { name: 'twitter:url', content: '' },
      { name: 'twitter:title', content: '' },
      { name: 'twitter:description', content: '' },
      { name: 'twitter:image', content: '' },
      { name: 'twitter:image:alt', content: '' }
    ]
  },
  computed: {
    hello() {
      return hello;
    },
  },
}
</script>

<style scoped>
.blog-container {
  max-width: 710px;
  margin:auto;
  padding-bottom: 75px;
}
</style>

<style>
.blog-container {
  color: rgba(0,0,0,.8);
  padding-right: 20px;
  padding-left: 20px;
}

@media (max-width: 768px) {
  .blog-container {
    padding-top: 13px;
  }
}

.blog-container a:link {
  color: #4096c4;
  text-decoration: none;
  border-bottom: 1px solid #4096c4;
}

/* visited link */
.blog-container a:visited {
  color: #4096c4;
}

/* mouse over link */
.blog-container a:hover {
  color: #4096c4;
}

/* selected link */
.blog-container a:active {
  color: #4096c4;
}

.blog-container h1 {
  --x-height-multiplier: 0.363;
  --baseline-multiplier: 0.157;
  letter-spacing: -.02em;
  font-weight: 700;
  font-style: normal;
  font-size: 40px;
  margin-left: -2.5px;
  line-height: 1.04;
  letter-spacing: -.028em;
  margin: 0;
}

@media (max-width: 768px) {
  .blog-container h1 {
    font-size: 33px;
  }
}

.blog-container h2 {
  --x-height-multiplier: 0.363;
  --baseline-multiplier: 0.157;
  letter-spacing: -.02em;
  font-weight: 700;
  font-style: normal;
  font-size: 24px;
  margin-left: -1.5px;
  line-height: 1.22;
  letter-spacing: -.018em;
  margin-bottom: 12px;
  margin-top: 12px;
}

@media (max-width: 768px) {
  .blog-container h2 {
    font-size: 21px;
  }
}

.blog-container p {
  --x-height-multiplier: 0.35;
  --baseline-multiplier: 0.179;
  letter-spacing: .01rem;
  font-weight: 400;
  font-style: normal;
  font-size: 21px;
  line-height: 1.58;
  letter-spacing: -.003em;
}

@media (max-width: 768px) {
  .blog-container p {
    font-size: 18px;
  }
}

.blog-container pre {
  margin-top: 18px;
  margin-bottom: 18px;
  padding: 6px;
  border: 1px solid #c2e9fb;
  border-radius: 4px;
}

.blog-container img {
  margin-top: 24px;
  width: 100%;
}

.blog-container ul {
  margin-top: 29px;
  margin-bottom: 29px;
}

.blog-container li {
  --x-height-multiplier:0.35;
  --baseline-multiplier:0.179;
  margin-left: 30px;
  margin-bottom: 14px;
  letter-spacing: .01rem;
  font-weight: 400;
  font-style: normal;
  font-size: 21px;
  line-height: 1.58;
  letter-spacing: -.003em
}

@media (max-width: 768px) {
  .blog-container li {
    font-size: 18px;
    margin-left: 18px;
  }
}

.blog-container li:last-child {
  margin-bottom: 0
}

.blog-container h3 {
  --x-height-multiplier: 0.363;
  --baseline-multiplier: 0.157;
  letter-spacing: -.02em;
  font-size: 18px;
  margin-left: -1.5px;
  line-height: 1.22;
  letter-spacing: -.018em;
  margin-bottom: 12px;
  margin-top: 12px;
}


.blog-container table,th,td {
  border: none
}

.blog-container table {
  width: 100%;
  display: table
}

.blog-container table.bordered>thead>tr,table.bordered>tbody>tr {
  border-bottom: 1px solid #d0d0d0
}

.blog-container table.striped>tbody>tr:nth-child(odd) {
  background-color: #f2f2f2
}

.blog-container table.striped>tbody>tr>td {
  border-radius: 0
}

.blog-container table.highlight>tbody>tr {
  transition: background-color .25s ease
}

.blog-container table.highlight>tbody>tr:hover {
  background-color: #f2f2f2
}

.blog-container table.centered thead tr th,table.centered tbody tr td {
  text-align: center
}

.blog-container thead {
  border-bottom: 1px solid #d0d0d0
}

.blog-container td,th {
  padding: 15px 5px;
  display: table-cell;
  text-align: left;
  vertical-align: middle;
  border-radius: 2px
}

@media only screen and (max-width: 992px) {
  .blog-container table.responsive-table {
    width:100%;
    border-collapse: collapse;
    border-spacing: 0;
    display: block;
    position: relative
  }

  .blog-container table.responsive-table td:empty:before {
    content: '\00a0'
  }

  .blog-container table.responsive-table th,table.responsive-table td {
    margin: 0;
    vertical-align: top
  }

  .blog-container table.responsive-table th {
    text-align: left
  }

  .blog-container table.responsive-table thead {
    display: block;
    float: left
  }

  .blog-container table.responsive-table thead tr {
    display: block;
    padding: 0 10px 0 0
  }

  .blog-container table.responsive-table thead tr th::before {
    content: "\00a0"
  }

  .blog-container table.responsive-table tbody {
    display: block;
    width: auto;
    position: relative;
    overflow-x: auto;
    white-space: nowrap
  }

  .blog-container table.responsive-table tbody tr {
    display: inline-block;
    vertical-align: top
  }

  .blog-container table.responsive-table th {
    display: block;
    text-align: right
  }

  .blog-container table.responsive-table td {
    display: block;
    min-height: 1.25em;
    text-align: left
  }

  .blog-container table.responsive-table tr {
    padding: 0 10px
  }

  .blog-container table.responsive-table thead {
    border: 0;
    border-right: 1px solid #d0d0d0
  }

  .blog-container table.responsive-table.bordered th {
    border-bottom: 0;
    border-left: 0
  }

  .blog-container table.responsive-table.bordered td {
    border-left: 0;
    border-right: 0;
    border-bottom: 0
  }

  .blog-container table.responsive-table.bordered tr {
    border: 0
  }

  .blog-container table.responsive-table.bordered tbody tr {
    border-right: 1px solid #d0d0d0
  }
}

</style>


