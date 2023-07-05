<script>
import { mapActions, mapState } from 'pinia'
import { RouterLink } from 'vue-router'
import BackToDashboardLink from '../../components/BackToDashboardLink.vue'
import SosialSign from '../../components/SosialSign.vue'
import { setPageTitle } from '../../helpers/setPageTitle'
import { useUserStore } from '../../stores/userStore'

export default {
  name: 'LoginPage',
  data() {
    return {
      username: '',
      password: '',
      showPassword: false
    }
  },
  components: { SosialSign, RouterLink, BackToDashboardLink },
  computed: {
    ...mapState(useUserStore, ['user'])
  },
  methods: {
    ...mapActions(useUserStore, ['handleLogin']),
    showHidePassword() {
      if (this.showPassword) {
        this.showPassword = false
      } else {
        this.showPassword = true
      }
    },
    doLogin() {
      this.handleLogin(this.username, this.password)
    }
  },
  mounted() {
    setPageTitle('Login')
  }
}
</script>

<template>
  <BackToDashboardLink />
  <div class="row justify-content-center">
    <div class="col-12 d-flex align-items-center justify-content-center">
      <div class="bg-white shadow border-0 rounded border-light p-4 p-lg-5 w-100 fmxw-500">
        <div class="text-center text-md-center mb-4 mt-md-0">
          <h1 class="mb-0 h3">Sign in to our platform</h1>
        </div>
        <form @submit.prevent="doLogin" action="#" class="mt-4">
          <!-- Form -->
          <div class="form-group mb-4">
            <label for="email">Your Email / Username</label>
            <div class="input-group">
              <span class="input-group-text" id="basic-addon1">
                <i class="bi bi-person-fill text-dark fw-bold"></i>
              </span>
              <input
                type="text"
                v-model="username"
                class="form-control"
                placeholder="Email or username"
                id="email"
                autofocus
                required
              />
            </div>
          </div>
          <!-- End of Form -->
          <div class="form-group">
            <!-- Form -->
            <div class="form-group mb-4">
              <label for="password">Your Password</label>
              <div class="input-group">
                <a @click.prevent="showHidePassword" class="input-group-text" id="basic-addon2">
                  <i class="bi bi-lock-fill"></i>
                </a>
                <input
                  :type="showPassword ? 'text' : 'password'"
                  placeholder="Password"
                  v-model="password"
                  class="form-control"
                  id="password"
                  required
                />
              </div>
            </div>
            <!-- End of Form -->
            <div class="d-flex justify-content-between align-items-top mb-4">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="remember" />
                <label class="form-check-label mb-0" for="remember"> Remember me </label>
              </div>
              <div>
                <RouterLink to="/auth/forgot-password" class="small text-right"
                  >Lost password?</RouterLink
                >
              </div>
            </div>
          </div>
          <div class="d-grid">
            <button type="submit" class="btn btn-gray-800">Sign in</button>
          </div>
        </form>
        <div class="mt-3 mb-4 text-center">
          <span class="fw-normal">or login with</span>
        </div>
        <SosialSign />
        <div class="d-flex justify-content-center align-items-center mt-4">
          <span class="fw-normal">
            Not registered?
            <RouterLink to="/auth/register" class="fw-bold">Create account</RouterLink>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
