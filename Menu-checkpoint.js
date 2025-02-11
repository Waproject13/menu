const menu = {
  desayuno: {
    Entrante: [
      { nombre: "Muesli crujiente", precio: 4 },
      { nombre: "Yogurt con miel", precio: 3 },
      { nombre: "Huevos revueltos", precio: 5 }
    ],
    Principal: [
      { nombre: "Tostada de aguacate y huevo", precio: 8 },
      { nombre: "Sandwich de pastrami y rúcula", precio: 6 },
      { nombre: "Croissant con chocolate", precio: 6 }
    ],
    Bebida: [
      { nombre: "Café", precio: 3 },
      { nombre: "Té", precio: 2 },
      { nombre: "Zumo natural", precio: 4 }
    ]
  },
  comida: {
    Entrante: [
      { nombre: "Crema de calabaza", precio: 10 },
      { nombre: "Verduras asadas", precio: 9 },
      { nombre: "Ensalada verde", precio: 11 }
    ],
    Principal: [
      { nombre: "Lasaña de verduras", precio: 9 },
      { nombre: "Pad Thai", precio: 25 },
      { nombre: "Pollo teriyaki", precio: 14 }
    ],
    Bebida: [
      { nombre: "Cerveza", precio: 5 },
      { nombre: "Kombucha", precio: 4 },
      { nombre: "Vino", precio: 6 }
    ]
  },
  cena: {
    Entrante: [
      { nombre: "Jamón", precio: 18 },
      { nombre: "Gambas", precio: 22 },
      { nombre: "Ensalada verde", precio: 13 }
    ],
    Principal: [
      { nombre: "Hamburguesa vegetariana", precio: 11 },
      { nombre: "Solomillo", precio: 27 },
      { nombre: "Chipirones a la plancha", precio: 16 }
    ],
    Bebida: [
      { nombre: "Cerveza", precio: 6 },
      { nombre: "Kombucha", precio: 5 },
      { nombre: "Vino", precio: 7 }
    ]
  }
};

function seleccionarComidaPorHora() {
  let hora;
  
  while (true) {
    hora = prompt("Bienvenido! Introduzca la hora en la que quiere hacer la reserva (formato 24 horas):");
    
    
    hora = parseInt(hora);
    
    if (!isNaN(hora) && hora >= 0 && hora <= 23) {
      break;
    } else {
      alert("Por favor, introduzca una hora válida entre 0 y 23.");
    }
  }

  if (hora >= 6 && hora <= 11) {
    alert("Elige lo que te apetece desayunar.");
    mostrarMenu('desayuno');
  } else if (hora >= 12 && hora <= 16) {
    alert("Elige lo que te apetece almorzar.");
    mostrarMenu('comida');
  } else if (hora >= 17 && hora <= 23) {
    alert("Elige lo que te apetece cenar.");
    mostrarMenu('cena');
  } else {
    alert("Lo sentimos, no hay servicio a esta hora.");
  }
}

function mostrarMenu(tipoDeComida) {
  const seleccion = menu[tipoDeComida];

  let entranteElegido = seleccionarPlato(seleccion.Entrante, "Entrante");
  
  let principalElegido = seleccionarPlato(seleccion.Principal, "Principal");
  
  let bebidaElegida = seleccionarPlato(seleccion.Bebida, "Bebida");

  mostrarResumen(entranteElegido, principalElegido, bebidaElegida);
}

function seleccionarPlato(opciones, tipoDePlato) {
  let eleccion = "";
  let platoElegido = null;

  while (!platoElegido) {
    eleccion = prompt(`Selecciona un ${tipoDePlato} (puedes escribir parte del nombre):\n${opciones.map(plato => plato.nombre).join("\n")}`);
    
    eleccion = eleccion.trim().toLowerCase();
    
    platoElegido = opciones.find(plato => plato.nombre.toLowerCase().includes(eleccion));
    
    if (!platoElegido) {
      alert("Opción incorrecta, por favor elige algo del menú.");
    }
  }

  return platoElegido;
}

function mostrarResumen(entrante, principal, bebida) {
  let resumen = `Resumen de tu pedido:\n`;
  resumen += `Entrante: ${entrante.nombre} - €${entrante.precio}\n`;
  resumen += `Plato Principal: ${principal.nombre} - €${principal.precio}\n`;
  resumen += `Bebida: ${bebida.nombre} - €${bebida.precio}\n`;

  let total = entrante.precio + principal.precio + bebida.precio;
  resumen += `Total a pagar: €${total}`;

  alert(resumen);
}

seleccionarComidaPorHora();