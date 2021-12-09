import { useState, useEffect } from "react";
import Error from "./Error";

const Formulario = ({ clientes, setClientes, cliente, setCliente }) => {
  const [nombre, setNombre] = useState("");
  const [tatuaje, setTatuaje] = useState("");
  const [email, setEmail] = useState("");
  const [celular, setCelular] = useState("");
  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState("");
  const [anotaciones, setAnotaciones] = useState("");

  const [error, setError] = useState(false);

  useEffect(() => {
    if (Object.keys(cliente).length > 0) {
      setNombre(cliente.nombre);
      setTatuaje(cliente.tatuaje);
      setEmail(cliente.email);
      setCelular(cliente.celular);
      setFecha(cliente.fecha);
      setHora(cliente.hora);
      setAnotaciones(cliente.anotaciones);
    }
  }, [cliente]);

  const generarId = () => {
    const random = Math.random().toString(36).substr(2);
    const random2 = Date.now().toString(36);

    return random + random2;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //Validacion de fomularios
    if (
      [nombre, tatuaje, email, celular, fecha, hora, anotaciones].includes("")
    ) {
      console.log("Hay al menos un campo vacio");

      setError(true);
      return;
    }
    setError(false);

    //objeto de clientes

    const objetoCliente = {
      nombre,
      tatuaje,
      email,
      celular,
      fecha,
      hora,
      anotaciones,
    };

    if (cliente.id) {
      //editando registro
      objetoCliente.id = cliente.id;

      const clientesActualizados = clientes.map((clienteState) =>
        clienteState.id === cliente.id ? objetoCliente : clienteState
      );

      setClientes(clientesActualizados);
      setCliente({});
    } else {
      //nuevo registro
      objetoCliente.id = generarId();
      setClientes([...clientes, objetoCliente]);
    }

    //reinicar el formulario
    setNombre("");
    setTatuaje("");
    setEmail("");
    setCelular("");
    setFecha("");
    setHora("");
    setAnotaciones("");
  };

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl text-center">Registro De Clientes</h2>
      <p className="text-xl mt-5 text-center mb-10 font-bold">
        Añadir cliente y {""}
        <span className="text-white font-bold ">Administrarlos</span>{" "}
      </p>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
      >
        {error && (
          <Error>
            {" "}
            <p>Todos los campos son obligatorios</p>{" "}
          </Error>
        )}
        <div className="mb-5">
          <label
            htmlFor="nombreCliente"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre Y Apellido
          </label>
          <input
            id="nombreCliente"
            type="text"
            placeholder="Nombre Y Apellido Del Cliente"
            className="border-2 w-full p-2 mt-2 placeholder-gray-600 rounded-md"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="nombreTatuaje"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre Del Tatuaje
          </label>
          <input
            id="nombreTatuaje"
            type="text"
            placeholder="Nombre Del Tatuaje"
            className="border-2 w-full p-2 mt-2 placeholder-gray-600 rounded-md"
            value={tatuaje}
            onChange={(e) => setTatuaje(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block text-gray-700 uppercase font-bold"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Email Del Cliente"
            className="border-2 w-full p-2 mt-2 placeholder-gray-600 rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="celular"
            className="block text-gray-700 uppercase font-bold"
          >
            Celular
          </label>
          <input
            id="celular"
            type="number"
            placeholder="Celular Del Cliente"
            className="border-2 w-full p-2 mt-2 placeholder-gray-600 rounded-md"
            value={celular}
            onChange={(e) => setCelular(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="fecha"
            className="block text-gray-700 uppercase font-bold"
          >
            Fecha
          </label>
          <input
            id="fecha"
            type="date"
            className="border-2 w-full p-2 mt-2 placeholder-gray-600 rounded-md"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="hora"
            className="block text-gray-700 uppercase font-bold"
          >
            Hora
          </label>
          <input
            id="hora"
            type="time"
            className="border-2 w-full p-2 mt-2 placeholder-gray-600 rounded-md"
            value={hora}
            onChange={(e) => setHora(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="anotaciones"
            className="block text-gray-700 uppercase font-bold"
          >
            Anotaciones
          </label>
          <textarea
            className="border-2 w-full mt-2 palceholder-gray-400 rounded-md"
            placeholder="Anotaciones respecto al tatauaje"
            id="anotaciones"
            value={anotaciones}
            onChange={(e) => setAnotaciones(e.target.value)}
          ></textarea>
        </div>
        <input
          type="submit"
          className="bg-green-600 w-full p-3 text-white font-bold uppercase hover:bg-green-700 cursor-pointer transition-all rounded-lg"
          value={cliente.id ? "Editar Cliente" : "Agregar Cliente"}
        />
      </form>
    </div>
  );
};

export default Formulario;
