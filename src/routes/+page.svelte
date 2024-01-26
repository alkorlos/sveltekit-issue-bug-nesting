<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<div class="test"></div>

<div class="test-nesting"></div>

<style>
    .test {
      position: relative;
      width: 25px;
      height: 25px;
      &::before, &::after {
        position: absolute;
        content: "";
  
        width: 10px;
        height: 10px;
      }
      &::before {
        left: 0;
        background: red;
      }
      &::after {
        right: 0;
        background: green;
      }
    }
  
    .test-nesting {
      position: relative;
      width: 25px;
      height: 25px;
    }
  
    .test-nesting::before,
    .test-nesting::after {
      position: absolute;
      content: "";
  
      width: 10px;
      height: 10px;
    }
  
    .test-nesting::before {
      left: 0;
      background: red;
    }
  
    .test-nesting::after {
      right: 0;
      background: green;
    }
  </style>