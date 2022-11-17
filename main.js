const { createApp } = Vue

createApp({
    data() {
      return {
        emails: [],
        error: false,
      }
    },
      created() {
        for ( let i = 1; i <= 10; i++ ){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((response) => {
                this.emails.push(response.data.response)
            })
            .catch(() => {
               this.error = true
            });
      }
    }
  }).mount('#app')