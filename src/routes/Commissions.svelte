<script>
  import {Link} from "svelte-routing";
  let infos = [
      {info: "Payments go through Paypal."},
      {info: "The final project is 100% yours with no restrictions."},
      {info: "Loyal customers that order several items will get a custom discount."},
      {info: "Revisions will cost 50% off the initial price unless it was my mistake."},
      {info: "Additional needed sizes for an item are included in the initial price."},
      {info: "No refunds after the final product is delivered."}

    ]
</script>
<div class="jumbotron bg-transparent">
  <strong class="display-4 d-block">All you need to know about commissioning :))</strong>
</div>
<div class="row container my-4">
  
    {#each infos as {info},i}
  <div class="col my-5 col-md-4 text-center">
    <span>{info}</span>
  </div>
    {/each}    

</div>
