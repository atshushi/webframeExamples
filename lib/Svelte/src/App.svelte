<script>
  import { Router, Route } from 'svelte-routing';

  import Home from './pages/index.svelte';
</script>

<main class="app">
  <Router>
    <Route path="/" component={Home} />
  </Router>
</main>
