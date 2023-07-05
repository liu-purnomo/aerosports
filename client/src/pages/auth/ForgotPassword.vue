<script>
import BackToLoginLink from '../../components/BackToLoginLink.vue'
import { setPageTitle } from '../../helpers/setPageTitle'

export default {
  name: 'ForgotPassword',
  components: { BackToLoginLink },
  mounted() {
    setPageTitle('Forgot Password')
  }
}
</script>

<template>
  <BackToLoginLink />
  <div class="col-12 d-flex align-items-center justify-content-center">
    <div
      class="signin-inner my-3 my-lg-0 bg-white shadow border-0 rounded p-4 p-lg-5 w-100 fmxw-500"
    >
      <h1 class="h3">Forgot your password?</h1>
      <p class="mb-4">
        Don't fret! Just type in your email and we will send you a code to reset your password!
      </p>
      <form action="#">
        <!-- Form -->
        <div class="mb-4">
          <label for="email">Your Email</label>
          <div class="input-group">
            <input
              type="email"
              class="form-control"
              id="email"
              placeholder="john@company.com"
              required
              autofocus
            />
          </div>
        </div>
        <!-- End of Form -->
        <div class="d-grid">
          <button type="submit" class="btn btn-gray-800">Recover password</button>
        </div>
      </form>
    </div>
  </div>
</template>
