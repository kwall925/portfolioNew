# Part of update to portfolio

## this is the skills section

### Process:
- finish page as plain html/js
- create skeleton for full app in svelte (library is blank / that will take extra thought/planning)
- code <Home /> with working logic
- refactor this page as Svelte component (make sure you are following documentation carefully)

### To do
- make responsive

### App Architecture:
- app.svelte (<container>, <tabs> and <main>)
- the main element will look like this

`<main>
  <Home />
  <Bio />
  <Skills />
  <Recent />
  <Library />
  <Contact />
</main>
`
- by default, <Home /> will be displayed and other components not displayed
- on the cube, and then on the tabs, the visibility is toggled to display the proper component
