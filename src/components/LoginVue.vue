<template>
    <div class="d-flex justify-center">
        <v-card width="600px" class="mt-12 pa-10">
            <v-card-title>
                Войдите в аккаунт
            </v-card-title>

            <v-text-field
                label="Введите логин"
                v-model="login"
                outlined
            ></v-text-field>

            <v-text-field
                label="Введите пароль"
                v-model="password"
                outlined
            ></v-text-field>

            <v-btn @click="authenticate">
                Войти
            </v-btn>
        </v-card>
    </div>
</template>

<script>
export default {
  name: 'LoginVue',
  data:()=>{
    return{
        login:"",
        password:""
    }
  },
  methods:{
    authenticate(){
        this.axios.get("https://65b614ceda3a3c16ab002d5a.mockapi.io/api/prom/UserLogin")
        .then((response) => {

        let users = response.data;

        let found = false;

        for (let index in users) {

            if (this.login == users[index].login && this.password == users[index].password) {
                this.$router.push('/my_page/' + users[index].id);
                found = true;
                break;

            }
        }
        if (!found) {
                window.alert("Incorrect")
        }
    })
    }
  }
  
}
</script>