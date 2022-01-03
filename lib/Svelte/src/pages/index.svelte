<script>
  let count = 0;

  function handleClick() {
    count++;
  }
</script>

<div class="home">
  <button on:click={handleClick}>
    Clicked { count }
    { count === 1 ? 'time' : 'times' }
  </button>
</div>
