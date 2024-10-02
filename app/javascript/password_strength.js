document.addEventListener('DOMContentLoaded', function() {
const passwordField = document.querySelector('.js-password-strength');
const strengthMeter = document.getElementById('password-strength-meter');
const strengthText = document.getElementById('password-strength-text');

passwordField.addEventListener('input', function() {
    const password = passwordField.value;

    fetch(`/password_strength/check`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ password: password })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error("Error en la respuesta de la API: " + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        const score = data.score;

        // Actualizar el medidor de fuerza de la contraseña
        strengthMeter.value = score;
        strengthMeter.max = 4;

        // Actualizar el texto del medidor
        switch (score) {
            case 0:
                strengthText.textContent = "Muy débil";
                break;
            case 1:
                strengthText.textContent = "Débil";
                break;
            case 2:
                strengthText.textContent = "Aceptable";
                break;
            case 3:
                strengthText.textContent = "Fuerte";
                break;
            case 4:
                strengthText.textContent = "Muy fuerte";
                break;
            default:
                strengthText.textContent = "";
        }
    })
    .catch(error => {
        console.error("Hubo un problema con la solicitud Fetch:", error);
    });
  });
});
