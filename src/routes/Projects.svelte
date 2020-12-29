<script>
  import {Link} from "svelte-routing";
  let projects = [
      {project: "shiDotMoe"},
      {project: "CyberKat"},
      {project: "Travel-log"},
      {project: "Trello-board"},
      {project: "Tasana"},
      {project: "web-scrapper"},
      {project: "Something-chat"},
      {project: "Botes"},
      {project: "More..."}

    ]
</script>
<div class="jumbotron bg-transparent">
  <strong class="display-4 d-block">Those are projects currently working on.. :))</strong>
  <span class="display-4"></span>
</div>
<div class="row container my-4">
  
    {#each projects as {project},i}
  <div class="col-md-4 card border-secondary col-md-4 border text-center">
    <span class="my-5"><Link to="projects">{project}</Link></span>
  </div>
    {/each}    

</div>
