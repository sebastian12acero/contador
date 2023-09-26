let cuenta = 0;
let botones = document.querySelectorAll(".boton")
botones.forEach(boton => {boton.addEventListener('click', function (e) {
    const  valor = document.querySelector("#numero");
    
    const value = e.currentTarget.classList;

    if (value.contains("resta")) {
      cuenta--;
    }
    else if (value.contains("suma")) {
      cuenta++;
    }
    else {
      cuenta = 0;
    }
    valor.textContent = cuenta;
  })
})