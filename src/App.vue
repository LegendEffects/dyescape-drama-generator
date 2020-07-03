<template>
  <div class="app-container">
    <h1>Dyescape Drama Generator</h1>

    <div id="app">
      <h2 v-html="currentText" />
      <button @click="generateDrama" style="margin-top: 2rem;">Do it again!</button>
    </div>

    <div style="margin-top: auto;">
      <div><b>This website is not to be taken seriously.</b></div>
      <div>Find it on <a href="https://github.com/legendeffects/dyescape-drama-generator">GitHub</a></div><br>
      <div>Inspired by (and heavily borrows from) <a href="https://github.com/md678685/spigot-drama-generator">md678685's Spigot Drama Generator</a> which is inspired by (and heavily borrows from) <a href="https://github.com/asiekierka/MinecraftDramaGenerator/">asiekierka's Minecraft Drama Generator.</a></div>

    </div>
  </div>
</template>

<script>
import DataPack from './assets/data'

export default {
  name: 'App',
  data() {return {
    currentText: null
  }},
  methods: {
    generateDrama() {
      let usedDrama = {};
      let sentenceTemplate = DataPack.sentences[Math.floor(Math.random() * DataPack.sentences.length)];
      const placeholderMatches = sentenceTemplate.match(/{([^}]*)}/g);

      for(const matchOrig of placeholderMatches) {
        let choice;
        let match = matchOrig.substr(1, matchOrig.length - 2);

        if(!usedDrama[match]) {
          usedDrama[match] = [];
        }

        do {
          console.log(match);
          choice = Math.floor(Math.random() * DataPack[match].length);
        } while(usedDrama[match].includes(choice));

        usedDrama[match].push(choice);
        
        sentenceTemplate = sentenceTemplate.replace('{' + match + '}', '<span class="highlight">'+DataPack[match][choice]+'</span>');
      }

      this.currentText = sentenceTemplate;
    }
  },

  created() {
    this.generateDrama();
  }
}
</script>

<style>
:root {
  --bg-color: #323437;
  --bg-color2: #212224;
  --text-color: #fff;
  --accent-color: #e2b714;
}

body {
  display: flex;
  min-height: 100vh;
  min-width: 100vw;

  margin: 0;

  background-color: var(--bg-color);
  color: var(--text-color);

   font-family: 'Roboto Mono', monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  text-align: center;
}
.highlight, a {
  color: var(--accent-color);
}

button {
  background: var(--bg-color2);
  transition: color .2s ease;
  padding: .5rem 1rem;
  border-radius: .5rem;
  cursor: pointer;
  color: var(--text-color);
  border: none;
}
button:hover {
  color: var(--accent-color);
}

.app-container {
  display: flex;
  flex-direction: column;
  margin: 4rem;

  width: 100%;
  min-height: 100%;
}

#app {
  margin: auto;
}
</style>
