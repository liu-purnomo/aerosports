<script>
import { RouterLink } from 'vue-router'
import SosialSign from '../../components/SosialSign.vue'
import IconKey from '../../assets/images/svg/IconKey.vue'
import IconEmail from '../../assets/images/svg/IconEmail.vue'
import { setPageTitle } from '../../helpers/setPageTitle'
import BackToDashboardLink from '../../components/BackToDashboardLink.vue'

export default {
  name: 'Register',
  components: { SosialSign, RouterLink, IconKey, IconEmail, BackToDashboardLink },
  mounted() {
    setPageTitle('Register')
  }
}
</script>

<template>
  <BackToDashboardLink />
  <div class="row justify-content-center">
    <div class="col-12 d-flex align-items-center justify-content-center">
      <div class="bg-white shadow border-0 rounded border-light p-4 p-lg-5 w-100 fmxw-500">
        <div class="text-center text-md-center mb-4 mt-md-0">
          <h1 class="mb-0 h3">Create Account</h1>
        </div>
        <form action="#" class="mt-4">
          <!-- Form -->
          <div class="form-group mb-4">
            <label for="fullName">Full Name</label>
            <div class="input-group">
              <span class="input-group-text" id="basic-addon1">
                <i class="bi bi-person-fill fs-6"></i>
              </span>
              <input
                type="text"
                class="form-control"
                id="fullName"
                name="fullName"
                value="Mark"
                required
              />
            </div>
          </div>
          <!-- End of Form -->
          <div class="mb-4">
            <label for="usernameValidate">Username</label>
            <div class="input-group">
              <span class="input-group-text" id="basic-addon1">
                <i class="bi bi-person-fill fs-6"></i>
              </span>
              <input
                type="text"
                class="form-control is-valid"
                id="usernameValidate"
                name="username"
                required
              />
              <!-- <div class="invalid-feedback">Please choose a username.</div> -->
              <div class="valid-feedback">Looks good!</div>
            </div>
          </div>
          <!-- Form -->
          <div class="form-group mb-4">
            <label for="email">Your Email</label>
            <div class="input-group">
              <span class="input-group-text" id="basic-addon1">
                <i class="bi bi-envelope-fill"></i>
              </span>
              <input
                type="email"
                class="form-control"
                placeholder="example@company.com"
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
                <span class="input-group-text" id="basic-addon2">
                  <i class="bi bi-lock-fill"></i>
                </span>
                <input
                  type="password"
                  placeholder="Password"
                  class="form-control is-invalid"
                  id="password"
                  required
                />
                <span class="invalid-feedback">Error</span>
              </div>
            </div>
            <!-- End of Form -->
            <!-- Form -->
            <div class="form-group mb-4">
              <label for="confirm_password">Confirm Password</label>
              <div class="input-group">
                <span class="input-group-text" id="basic-addon2">
                  <i class="bi bi-lock-fill"></i>
                </span>
                <input
                  type="password"
                  placeholder="Confirm Password"
                  class="form-control"
                  id="confirm_password"
                  required
                />
              </div>
            </div>
            <!-- End of Form -->
            <div class="mb-4">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="remember" />
                <label class="form-check-label fw-normal mb-0" for="remember">
                  I agree to the
                  <RouterLink to="/term-and-coditions" class="fw-bold">
                    terms and conditions
                  </RouterLink>
                </label>
              </div>
            </div>
          </div>
          <div class="d-grid">
            <button type="submit" class="btn btn-gray-800">Sign up</button>
          </div>
        </form>
        <div class="mt-3 mb-4 text-center">
          <span class="fw-normal">or sign up with</span>
        </div>

        <SosialSign />

        <div class="d-flex justify-content-center align-items-center mt-4">
          <span class="fw-normal">
            Already have an account?
            <RouterLink to="/auth/login" class="fw-bold">Login here</RouterLink>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
