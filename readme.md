# Part of update to portfolio

## this is the skills section

### To do
- format text content on hover
- make responsive
- think about how to refactor as svelte component


App Architecture:
- app.svelte (<container>, <tabs> and <main>)
- the main element will look like this

<main>
  <Home />
  <Bio />
  <Skills />
  <Recent />
  <Library />
  <Contact />
</main>

- by default, <Home /> will be displayed and other components not displayed
- on the cube, and then on the tabs, the visibility is toggled to display the proper component
