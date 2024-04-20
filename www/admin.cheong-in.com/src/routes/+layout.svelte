<script>
	import "../app.css";
	import "./scss/common.scss";
	import Alert2 from '../components/Alert2.svelte'
	import Loding from "../components/Loding.svelte";
</script>

<div class="app">
	
	<main>
		<slot />
	</main>

</div>

<Alert2/>
<Loding/>

<style lang="scss">
	.app{
		padding-bottom: 30px;
	}
</style>