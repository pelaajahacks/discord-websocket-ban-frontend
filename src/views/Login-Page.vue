
<script>
import input_box from '../components/login/input-box.vue'

export default {
  setup() {

  },
  props: {

  },
  components: {
    input_box
  }
}
</script>

<style scoped>
@font-face {
  font-family: 'GG Sans';
  src: url('../assets/fonts/ggsans/ggsans-Semibold.ttf') format('truetype');
}

.main {
  display: flex;
  height: 100vh;
  margin: 0px 3px;
}

.login-form {
  margin: auto auto;
  display: flex;
  flex-direction: column;
  background-color: #282b30;
  padding: 20px;
  border-radius: 10px;

}

.inputs {
  height: 100%;
  /* Set the height of the .inputs element to 100% */
  text-align: center;
  margin: 0 20px;
}

.password {
  margin-top: 15px;
}

.box {
  width: max(100%, min(8vmax, 50px));

}

.inputbox {
  width: 100%;
}


.title-text {
  font-size: max(25px, min(8vmax, 50px));
  color: aliceblue;
  margin-bottom: 4vh;
  text-align: center;
  font-family: GG Sans;
}

.login-text {
  text-align: left;
  color: aliceblue;
  font-family: GG Sans;
  margin-bottom: 3px;
  font-size: 20px;
}

.red {
  color: #e71b2c;
}

.signup {
  margin-top: 7px;
  font-family: GG Sans;
  font-size: 20px;
  color: #3391ff;
  text-decoration: none;
}

.login-button {
  text-align: right;
  flex: 1 0 0;
  margin-left: 15px;
}

#login-btn {
  width: 100%;
  height: 50px;
  border-radius: 4px;
  border: none;
  background-color: #3a01e1;
  color: aliceblue;
  cursor: pointer;
  font-family: GG Sans;
  font-size: 18px;
}

#login-btn:active {
  opacity: 0.6;
}

.login-footer {
  display: flex;
  margin: 10px 20px 0 20px;
}
</style>


<template>
  <main>
    <div class="main">
      <div class="login-form">
        <div class="title-text">
          Hey! You need to login!
        </div>
        <div class="inputs">
          <div class="box">
            <div class="username login-text">Username <span class="red">*</span></div>
            <input_box input_type="text" class="inputbox"></input_box>
          </div>

          <div class="box">
            <div class="password login-text">Password <span class="red">*</span></div>
            <input_box input_type="password" class="inputbox"></input_box>
          </div>

        </div>
        <div class="login-footer">
          <div class="signup">
            <RouterLink to="/signup" class="signup">Dont have an account? Sign up</RouterLink>
          </div>

          <div class="login-button">
              <button id="login-btn">Log in</button>
            </div>
        </div>
        

        

      </div>
    </div>


  </main>
</template>