<template>
  <div class="App" id="app">
    <header class="App-header">
      <img :src="logo" class="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.vue</code> and save to reload. /{{ type }}/{{ ts }}/{{ yy }}/{{ sss }}
      </p>
      <a class="App-link" href="https://vuejs.org" target="_blank" rel="noopener noreferrer">
        {{ message }}
      </a>
    </header>
  </div>
</template>

<script>
  import logo from "./assets/images/logo.svg";

  export default {
    data() {
      return {
        logo,
        message: "Learn Vue",
        type: import.meta.env.NODE_ENV,
        yy: import.meta.env.SNOWPACK_PUBLIC_ENABLE,
        ts: import.meta.env.SNOWPACK_PUBLIC_ENABLE_FEATURE,
        sss: import.meta.env.SNOWPACK_PUBLIC_ENV,
      };
    },
  };
</script>

<style lang="scss" scoped>
  .App {
    text-align: center;

    a.App-link {
      color: red;
    }
  }

  .App-header {
    background-color: #f9f6f6;
    color: #32485f;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
  }

  .App-link {
    color: #00c185;
  }

  .App-logo {
    height: 40vmin;
    pointer-events: none;
    margin-bottom: 1rem;
    animation: App-logo-spin infinite 1.6s ease-in-out alternate;
  }

  @keyframes App-logo-spin {
    from {
      transform: scale(1);
    }
    to {
      transform: scale(1.06);
    }
  }
</style>
