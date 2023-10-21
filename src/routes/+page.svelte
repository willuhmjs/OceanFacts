<script>
    import "$lib/style.css";
    import facts from "$lib/facts";

	const randomFact = () => console.log(facts[Math.floor(Math.random() * facts.length)]);
 </script>

<div class="fs-5">
	<div class="container col-9 col-md-6">
		<div class="text-center pt-5 pb-1">
			<h1 class="text-primary display-1 header">Ocean Facts</h1>
		</div>
		<section>
			<div class="mb-3 text-center" />
			<p>
				<span class="fw-bold text-decoration-underline">Ocean Facts</span> is a free database containing
				an interesting list of curated facts related to the field of oceanography.
			</p>
			<p>
				This application provides free access to many facts about the ocean. To see a random fact,
				click the button.
			</p>

			<div>
				<button on:click={randomFact} class="btn btn-outline-primary"
					><i class="fas fa-random" /> Random Fact</button
				>
			</div>
		</section>
		<section class="mt-4">
			<div id="categories" />
			<blockquote class="blockquote border-start border-5 rounded p-5 bg-light" />
		</section>
		<br />
		<br />
	</div>
	
</div>
