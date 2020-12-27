<script> 
  import { Router, Link, Route } from "svelte-routing";
  import Cards from '../components/cards.svelte';  
  import Overhaul from '../components/overhaul.svelte';  
  import Footer from '../components/footer.svelte';  
</script>
<div class="jumbotron bg-transparent">
  <strong class="display-4 d-block mb-2">Kat makes awesome websites for content creators</strong>
  <span class="display-4">personal websites, startups, forums, stores</span>
  <span class="display-4"> and whatever you want.</span>
</div>
<div class="container ml-2 d-flex justify-content-between">
  <span>Featured projects</span>
  <a><Link to="projects">see all
<svg fill="white" width="16" height="16" enable-background="new 0 0 512 512" version="1.1" viewBox="0 0 512 512" xml:space="preserve" xmlns="http://www.w3.org/2000/svg">
		<path d="m501.33 245.32h-490.67c-5.888 0-10.667 4.779-10.667 10.667s4.779 10.667 10.667 10.667h490.67c5.888 0 10.667-4.779 10.667-10.667s-4.78-10.667-10.668-10.667z"/>
		<path d="m508.86 248.46-170.67-170.67c-4.16-4.16-10.923-4.16-15.083 0s-4.16 10.923 0 15.083l170.67 170.67c2.091 2.069 4.821 3.115 7.552 3.115s5.461-1.045 7.531-3.115c4.16-4.161 4.16-10.924 0-15.084z"/>
		<path d="m508.86 248.46c-4.16-4.16-10.923-4.16-15.083 0l-170.67 170.67c-4.16 4.16-4.16 10.923 0 15.083 2.091 2.069 4.821 3.115 7.552 3.115s5.461-1.045 7.531-3.115l170.67-170.67c4.159-4.16 4.159-10.923-1e-3 -15.083z"/>
</svg>
    </Link></a>
</div>
<Cards/>
<Overhaul/>
<Footer/>
