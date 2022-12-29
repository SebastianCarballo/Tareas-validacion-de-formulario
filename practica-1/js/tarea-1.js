function calcularSalarioMensual(salarioAnual) {
  const mesesEnElAnio = 12;
  return salarioAnual / mesesEnElAnio;
}

function validarInputSalarioAnualUsuario(salarioAnual) {
  if (salarioAnual.length === 0) {
    return "EL campo Salario Anual no puede estar vacio";
  }
  if (!/^[0-9]+$/.test(salarioAnual)) {
    return "El campo Salario Anual solo acepta numeros";
  }
  return "";
}

let $formulario = document.querySelector(
  "#formulario-calculadora-salario-mensual"
);

$formulario.addEventListener("submit", function (event) {
  event.preventDefault();

  const $calcularSalarioMensualUsuario = document.querySelector(
    "#calcular-salario-mensual-usuario"
  );

  $calcularSalarioMensualUsuario.onclick = function () {
    const salarioAnualUsuario = document.querySelector(
      "#salario-anual-usuario"
    ).value;
    const salarioMensualUsuario = calcularSalarioMensual(salarioAnualUsuario);
    document.querySelector("#salario-mensual-usuario").value =
      salarioMensualUsuario;
    let errores = [];
    if (salarioAnualUsuario.length === 0) {
      errores.push("El campo salario anual no puede estar vació");
    }
    if (errores.length > 0) {
      event.preventDefault();

      let ulErrores = document.querySelector(".errores ul");
      errores.forEach(error => {
        ulErrores.innerHTML += `<li>${error}</li>`;
      });
    }
  };
});
