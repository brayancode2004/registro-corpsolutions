document.getElementById("form-visita").addEventListener("submit", function(e) {
    e.preventDefault();
    const cedula = document.getElementById("cedula");
    const nombres = document.getElementById("nombres");
    const apellidos = document.getElementById("apellidos");
    const departamento = document.getElementById("departamento");
    const motivo = document.getElementById("motivo");
  
    let valid = true;
  
    // Limpiar errores anteriores
    [cedula, nombres, apellidos, departamento, motivo].forEach(input => {
      input.classList.remove("error");
    });
  
    // Validar campos
    if (!/^\d{3}-\d{6}-\d{4}[A-Z]$/.test(cedula.value)) {
      cedula.classList.add("error");
      alert("La cédula debe tener el formato: 999-999999-9999X (16 caracteres incluyendo guiones y letra al final).");
      valid = false;
    }
  
    [nombres, apellidos, motivo].forEach(input => {
      if (!input.value.trim()) {
        input.classList.add("error");
        valid = false;
      }
    });
  
    if (!departamento.value) {
      departamento.classList.add("error");
      valid = false;
    }
  
    if (!valid) return;
  
    // Agregar a la tabla
    const tabla = document.querySelector("#tabla-visitas tbody");
    const fila = document.createElement("tr");
    fila.innerHTML = `
      <td>${cedula.value}</td>
      <td>${nombres.value} ${apellidos.value}</td>
      <td>${departamento.value}</td>
      <td>${motivo.value}</td>
    `;
    tabla.appendChild(fila);
  
    // Limpiar formulario
    this.reset();
  });