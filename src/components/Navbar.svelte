<script>
  import {Link} from "svelte-routing";
  let isOpen = false;  
</script>
<nav class="container border-bottom border-secondary d-sm-flex justify-content-between align-items-center">
    <div class="d-flex justify-content-between align-items-center py-4">  
      <div class="">
        <a class="d-block"><Link to="/" class="d-block">CYBERKAT</Link></a>
      </div>     
      <div>
        <button class="d-md-none btn btn-outline-secondary border-0 rounded-pill" on:click="{() => isOpen = !isOpen}">
            {#if !isOpen}
<svg height="24" width="24" fill="white" enable-background="new 0 0 512 512" version="1.1" viewBox="0 0 512 512" xml:space="preserve" xmlns="http://www.w3.org/2000/svg">
		<path d="M501.333,96H10.667C4.779,96,0,100.779,0,106.667s4.779,10.667,10.667,10.667h490.667c5.888,0,10.667-4.779,10.667-10.667    S507.221,96,501.333,96z"/>
		<path d="m501.33 245.33h-490.67c-5.888 0-10.667 4.779-10.667 10.667s4.779 10.667 10.667 10.667h490.67c5.888 0 10.667-4.779 10.667-10.667s-4.78-10.667-10.668-10.667z"/>
		<path d="m501.33 394.67h-490.67c-5.888 0-10.667 4.778-10.667 10.666s4.779 10.667 10.667 10.667h490.67c5.888 0 10.667-4.779 10.667-10.667-1e-3 -5.888-4.78-10.666-10.668-10.666z"/>
</svg>
            {/if}
  {#if isOpen}
<svg height="24" width="24" fill="white" enable-background="new 0 0 383.989 383.989" version="1.1" viewBox="0 0 383.99 383.99" xml:space="preserve" xmlns="http://www.w3.org/2000/svg">
		<path d="m380.87 365.79-362.67-362.67c-4.16-4.16-10.923-4.16-15.083 0s-4.16 10.923 0 15.083l362.67 362.67c2.091 2.069 4.821 3.115 7.552 3.115s5.461-1.045 7.531-3.115c4.159-4.161 4.159-10.924-1e-3 -15.084z"/>
		<path d="m380.87 3.123c-4.16-4.16-10.923-4.16-15.083 0l-362.67 362.67c-4.16 4.16-4.16 10.923 0 15.083 2.091 2.069 4.821 3.115 7.552 3.115s5.461-1.045 7.531-3.115l362.67-362.67c4.16-4.16 4.16-10.922 0-15.082z"/>
</svg>
  {/if}
      </div>      
    </div>
    <div class="{isOpen === true ? 'd-block' : 'd-none'} d-sm-flex">
      <a class="ml-5 d-block nav-link"><Link to="/" class="d-block">Home</Link></a>
      <a class="ml-5 d-block nav-link"><Link to="about" class="d-block">About</Link></a>
      <a class="ml-5 d-block nav-link" ><Link to="projects" class="d-block">Projects</Link></a>
    </div>  
  </nav> 
<style>
  .btn:focus, .btn:active  { outline: none; box-shadow: none; }
  @media only screen and (max-width: 768px) {
    nav {}
  }
</style> 
