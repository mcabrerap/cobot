<template>
  <section class="container">
    <form @submit.prevent="createCommand" class="cobot-form">
      <div class="field">
        <label class="label">Service</label>
        <div class="control is-expanded">
          <div class="select is-fullwidth">
            <select name="services" v-model="service">
              <option value="default"></option>
              <option value="cns-order">cns-order</option>
              <option value="cns-stores-ms">cns-stores-ms</option>
            </select>
          </div>
        </div>
      </div>
      <div class="field">
        <label class="label">Tag</label>
        <div class="control">
          <input class="input" type="text" placeholder="Tag" v-model="tag">
        </div>
      </div>
      <div class="field">
        <hr>
      </div>
      <div class="field">
        <label class="label">Environment</label>
        <div class="control">
          <label class="radio">
            <input type="radio" name="environment" value="development" v-model="environment">
            Development
          </label>
          <label class="radio">
            <input type="radio" name="environment" value="production" v-model="environment">
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
            <input type="radio" name="worker" value="true" v-model="worker">
            True
          </label>
          <label class="radio">
            <input type="radio" name="worker" value="false" v-model="worker">
            False
          </label>
        </div>
      </div>
      <div class="field">
        <hr>
      </div>
      <div class="field">
        <label class="checkbox">
          <input type="checkbox" v-model="showAdditionalOptions">
          Show additional options
        </label>
      </div>
      <div v-if="showAdditionalOptions">
        <div class="field">
          <hr>
        </div>
        <div class="field">
          <label class="label">Skip quality errors</label>
          <div class="control">
            <label class="radio">
              <input type="radio" name="quality" value="true" v-model="skipQualityErrors">
              True
            </label>
            <label class="radio">
              <input type="radio" name="quality" value="false" v-model="skipQualityErrors">
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
              <input type="radio" name="debug" value="true" v-model="debug">
              True
            </label>
            <label class="radio">
              <input type="radio" name="debug" value="false" v-model="debug">
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
              <input type="radio" name="cache" value="true" v-model="nonCache">
              True
            </label>
            <label class="radio">
              <input type="radio" name="cache" value="false" v-model="nonCache">
              False
            </label>
          </div>
        </div>
      </div>
      <div class="field">
        <hr>
      </div>
      <div class="control">
        <button class="button is-fullwidth is-primary">Create Command</button>
      </div>
    </form>
    <the-command-grid></the-command-grid>
    {{commands}}
  </section>

</template>

<script>
import TheCommandGrid from './TheCommandGrid.vue'

export default {
  name: 'TheDeployForm',
  components: {
    TheCommandGrid
  },
  data() {
    return {
      service: 'default',
      tag: '',
      environment: '',
      worker: '',
      showAdditionalOptions: false,
      skipQualityErrors: '',
      debug: '',
      nonCache: '',
      commands: []
    }
  },
  methods: {
    createCommand() {
      let baseCommand = `/cobot deployment create --service ${this.service} --tag ${this.tag} --type api/worker`
      if (this.showAdditionalOptions) {
        if (this.skipQualityErrors) {
          baseCommand += ` --skip_quality_errors ${this.skipQualityErrors}`
        }
        if (this.debug) {
          baseCommand += ` --debug si`
        } else {
          baseCommand += ` --debug no`
        }
        if (this.nonCache) {
          baseCommand += ` --nocache si`
        } else {
          baseCommand += ` --nocache no`
        }
      }
      if (this.environment === 'development') {
        baseCommand += ' --country dev'
        this.commands.push(baseCommand)
      } else if (this.environment === 'production') {
        this.commands.push(baseCommand + ' --country co ar mx')
        this.commands.push(baseCommand + ' --country br')
        this.commands.push(baseCommand + ' --country pe cr uy')
        this.commands.push(baseCommand + ' --country cl ec')
      }
    }
  }
}
</script>
