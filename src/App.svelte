<script>
	let name = 'MAX';
	let age = 30
	function incrementage(){
		age += 1;
	}
</script>

<style>
	h1 {
		color: tomato;
	}
</style>

<h1>Hello {name}, my age is {age}</h1>
<button on:click={incrementage}>Change age</button>