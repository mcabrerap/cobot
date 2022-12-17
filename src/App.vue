<template>
  <div>
    <header class="container">
      <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <h1 class="navbar-item">Cobot</h1>
        </div>
        <div class="navbar-menu">
          <div class="navbar-end">
            <a class="navbar-item" href="#">Inicio</a>
            <a class="navbar-item" href="#">Documentacion</a>
          </div>
        </div>
      </nav>
    </header>
    <section class="container">
      <form action="" class="cobot-form">

        <div class="field">
          <label class="label">Service</label>
          <div class="control is-expanded">
            <div class="select is-fullwidth">
              <select name="services">
                <option value=""></option>
                <option value="Argentina">Argentina</option>
                <option value="Bolivia">Bolivia</option>
                <option value="Brazil">Brazil</option>
                <option value="Chile">Chile</option>
                <option value="Colombia">Colombia</option>
                <option value="Ecuador">Ecuador</option>
                <option value="Guyana">Guyana</option>
                <option value="Paraguay">Paraguay</option>
                <option value="Peru">Peru</option>
                <option value="Suriname">Suriname</option>
                <option value="Uruguay">Uruguay</option>
                <option value="Venezuela">Venezuela</option>
              </select>
            </div>
          </div>
        </div>
        <div class="field">
          <label class="label">Tag</label>
          <div class="control">
            <input class="input" type="text" placeholder="Tag">
          </div>
        </div>
        <div class="field">
          <hr>
        </div>
        <div class="field">
          <label class="label">Environment</label>
          <div class="control">
            <label class="radio">
              <input type="radio" name="environment">
              Development
            </label>
            <label class="radio">
              <input type="radio" name="environment">
              Production
            </label>
          </div>
        </div>
        <div class="field">
          <hr>
        </div>
        <div class="field">
          <label class="label">Has worker</label>
          <div class="control">
            <label class="radio">
              <input type="radio" name="worker">
              True
            </label>
            <label class="radio">
              <input type="radio" name="worker">
              False
            </label>
          </div>
        </div>
        <div class="field">
          <hr>
        </div>
        <div class="field">
          <label class="checkbox">
            <input type="checkbox">
            Show additional options
          </label>
        </div>
        <div v-if="true">
          <div class="field">
            <hr>
          </div>
          <div class="field">
            <label class="label">Skip quality errors</label>
            <div class="control">
              <label class="radio">
                <input type="radio" name="quality">
                True
              </label>
              <label class="radio">
                <input type="radio" name="quality">
                False
              </label>
            </div>
          </div>
          <div class="field">
            <hr>
          </div>
          <div class="field">
            <label class="label">Debug</label>
            <div class="control">
              <label class="radio">
                <input type="radio" name="debug">
                True
              </label>
              <label class="radio">
                <input type="radio" name="debug">
                False
              </label>
            </div>
          </div>
          <div class="field">
            <hr>
          </div>
          <div class="field">
            <label class="label">Non Cache</label>
            <div class="control">
              <label class="radio">
                <input type="radio" name="cache">
                True
              </label>
              <label class="radio">
                <input type="radio" name="cache">
                False
              </label>
            </div>
          </div>
        </div>
      </form>
    </section>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>
</style>
