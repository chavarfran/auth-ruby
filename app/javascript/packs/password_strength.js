document.addEventListener('DOMContentLoaded', () => {
  const passwordField = document.getElementById('password_field');
  const meter = document.getElementById('password-strength-meter');
  const strengthText = document.getElementById('password-strength-text');

  if (passwordField) {
    passwordField.addEventListener('input', () => {
      const password = passwordField.value;

      fetch('/password_strength/check', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRF-Token': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
        },
        body: JSON.stringify({ password: password })
      })
      .then(response => response.json())
      .then(data => {
        meter.value = data.score;

        const strengthLevels = ['Muy débil', 'Débil', 'Aceptable', 'Fuerte', 'Muy fuerte'];
        strengthText.innerHTML = `Fortaleza: ${strengthLevels[data.score]}`;

        if (data.feedback.suggestions.length > 0) {
          strengthText.innerHTML += `<br>Sugerencias: ${data.feedback.suggestions.join(', ')}`;
        }
      });
    });
  }
});
