const btn = document.getElementById('btn-ingresar');

const login = (e) =>{
    e.preventDefault();

    const usuario = document.getElementById("usuario").value;
    const password = document.getElementById("password").value;
    const mensaje = document.getElementById("mensaje")

    if (usuario === "Liliana" && password === "1234"){
        localStorage.setItem("usuario_logueado", "true");
        mensaje.innerHTML = 
        '<div class="alert alert-success">✅ ¡Acceso permitido! Redirigiendo...</div>';
        setTimeout(() => {
            window.location.href = "menu.html";
        }, 1000)
    }else{
        mensaje.innerHTML =
        '<div class="alert alert-danger">❌ ¡Credenciales inválidas! Intente nuevamente</div>'
    }
}

btn.addEventListener('click', login)
