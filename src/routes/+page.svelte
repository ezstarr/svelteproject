<script>
    import Counter from '$lib/Counter.svelte';

    const name = "World!"
</script>

<h1>Welcome to SvelteKit</h1>
<p>
    Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
</p>
<h1>Hello {name.toUpperCase()}!</h1>

<Counter />
