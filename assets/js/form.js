(() =>{
    emailjs.init("Ng0e768A5y42oUAH3"); 
  
    document.getElementById('contact-form').addEventListener('submit', function(event) {
      event.preventDefault();
      const formData = {
        name: this.name.value,
        email: this.email.value,
        message: this.message.value
      };

      emailjs.send('service_7i12d5c', 'template_327nj41', formData)
        .then(function(response) {
            
            const btn = document.querySelector('.btnSubmit')
            btn.innerHTML = '<i class="fa fa-spinner fa-spin"></i> Enviando...';

            setTimeout(()=>{
                window.location.href = 'thanks.html'
            },3000)
        }, function(error) {
          alert('Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente mais tarde. '+ error);
        });
    });
  })();
  