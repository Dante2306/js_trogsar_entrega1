const comprarProductos = () => {
  let producto = '';
  let cantidad = 0;
  let precio = 0;
  let seguirComprando = false;
  let totalDeLaCompra = 0;

  do {
      producto = prompt ("Seleccione su producto: vino - cerveza - ambos ", "ingrese opcion deseada");
      cantidad = parseInt(prompt ("¿Cuántas unidades desea comprar?"));

      let cantidadValidada = validarCantidad(cantidad);

  switch (producto) {
      case "vino":
        precio = 1500;
        break;
      case "cerveza":
            precio = 250;
          break;
      case "ambos":
          precio = 1750;
        break;
      default:
          alert("Algo salio mal! Por favor revsisar los datos ingresados");
          precio= 0;
          cantidad= 0;
  }

  totalDeLaCompra += precio * cantidadValidada;

  seguirComprando = confirm("¿Querés agregar otro producto?");

  } while (seguirComprando)

  const totalConDescuento = aplicarDescuento(totalDeLaCompra);
  const totalConEnvio = calcularEnvio(totalConDescuento);

  return totalConEnvio;
}

const validarCantidad = (cantidad) => {
  while (Number.isNaN(cantidad) || cantidad === 0) {
      if (cantidad !== 0) {
          alert('Favor de ingresar un numero')
      } else {
          alert('Ingrese una cantidad valida.')
      }
      cantidad = parseInt(prompt("¿Cuanto desea comprar"))
  }

  return cantidad;
};


const aplicarDescuento = (totalDelaCompra) => {
  let totalConDescuento = 0;

  if (totalDeLaCompra >= 5000) {
      totalConDescuento = totalDeLaCompra * 0.80;
      return totalConDescuento;
  } else {
      return totalDeLaCompra;
  }
}


const calcularEnvio = (totalDeLaCompra) => {
  let tieneEnvioADomicilio = false;

  tieneEnvioADomicilio = confirm("¿Desea agregar envio?");

  if (tieneEnvioADomicilio && totalDeLaCompra >= 2000) {
    alert("Tenés envio gratis. El total de tu compra es $" + totalDeLaCompra);
  } else if (tieneEnvioADomicilio && totalDeLaCompra < 2000 && totalDeLaCompra !== 0) {
    totalDeLaCompra += 700;
    alert("El envío cuesta $700. El total de tu compra es $" + totalDeLaCompra);
  } else {
    alert("El total de tu compra es $" + totalDeLaCompra);
  }

  return totalDeLaCompra;
};

const calcularCantidadDeCuotas = () => {
  let cuotas = 0;
  let tieneCuotas = false;

  tieneCuotas = confirm('¿Queres pagar en cuotas?');

  if (tieneCuotas) {
      cuotas = parseInt(prompt('¿En cuantas cuotas queres pagar?'));
      if (cuotas === 0) {
          cuotas = 1;
      } else if (Number.isNaN(cuotas)) {
          calcularCantidadDeCuotas();
      }
  } else {
      cuotas = 1
  }

  return cuotas;
};

const calcularIntereses = (cuotas) => {
  let tasa = 12.3;
  let sinIntereses = 0;
  let tasaTotal = 0;
  let interesesTotales = 0;

  if (cuotas === 1) {
      return sinIntereses;
  } else {
      tasaTotal = tasa + cuotas * 0.2;
      interesesTotales = tasaTotal * cuotas;
      return interesesTotales;
  }
};

const calcularTotalAPagar = (totalDeLaCompra, cuotas, intereses) => {
  totalDeLaCompra = (totalDeLaCompra + intereses);
  let valorCuota = totalDeLaCompra / cuotas;
  alert('El total a pagar es $'+totalDeLaCompra+' en '+cuotas+' cuotas de $'+valorCuota.toFixed(2))
};

const totalDeLaCompra = comprarProductos();
const cuotas = calcularCantidadDeCuotas();
const intereses = calcularIntereses(cuotas);

calcularTotalAPagar(totalDeLaCompra, cuotas, intereses);
