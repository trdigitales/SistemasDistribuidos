(function () {
	// Variables
	var lista = document.getElementById("lista"),
		tareaInput = document.getElementById("tareaInput"),
		btnNuevaTarea = document.getElementById("btn-agregar");

	// Funciones
	var agregarTarea = function () {
		var tarea = tareaInput.value,
			nuevaTarea = document.createElement("li"),
			enlace = document.createElement("a"),
			contenido = document.createTextNode(tarea),
			botonEliminar = document.createElement("button");

		if (tarea === "") {
			tareaInput.setAttribute("placeholder", "Agrega una tarea válida");
			tareaInput.className = "error";
			return false;
		}

		// Configurar el enlace de la tarea
		enlace.appendChild(contenido);
		enlace.setAttribute("href", "#");
		enlace.classList.add("tarea-enlace");

		// Configurar el botón de eliminar
		botonEliminar.textContent = "X";
		botonEliminar.classList.add("btn-eliminar");

		// Agregar elementos al li
		nuevaTarea.appendChild(enlace);
		nuevaTarea.appendChild(botonEliminar);

		// Agregar el li a la lista
		lista.appendChild(nuevaTarea);

		tareaInput.value = "";

		// Evento para tachar la tarea
		enlace.addEventListener("click", function (e) {
			e.preventDefault();
			this.parentNode.classList.toggle("tarea-completada");
		});

		// Evento para eliminar la tarea
		botonEliminar.addEventListener("click", function () {
			this.parentNode.remove();
		});
	};

	var comprobarInput = function () {
		tareaInput.className = "";
		tareaInput.setAttribute("placeholder", "Agrega tu tarea");
	};

	// Eventos

	// Agregar Tarea al hacer clic en el botón
	btnNuevaTarea.addEventListener("click", agregarTarea);

	// Agregar Tarea al presionar Enter
	tareaInput.addEventListener("keydown", function (e) {
		if (e.key === "Enter") {
			e.preventDefault(); // Evitar comportamiento por defecto (enviar formulario)
			agregarTarea();
		}
	});

	// Comprobar Input
	tareaInput.addEventListener("click", comprobarInput);
})();

  //estos son nuevos cambios
