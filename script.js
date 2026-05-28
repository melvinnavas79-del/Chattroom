const form = document.getElementById('form-contacto');
const successMessage = document.getElementById('mensaje-exito');

form?.addEventListener('submit', (event) => {
  event.preventDefault();
  successMessage?.classList.remove('hidden');
  form.reset();
});
