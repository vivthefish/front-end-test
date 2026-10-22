<template>
  <div id="app">
    <header class="navbar">
      <h1>My Vue App</h1>

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/card-row">CardRow</RouterLink>
        <RouterLink to="/counter-button">CounterButton</RouterLink>
      </nav>
    </header>

    <main>
      <RouterView />
    </main>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
    
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
