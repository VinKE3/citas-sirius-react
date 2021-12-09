const Cliente = ({ cliente, setCliente, eliminarCliente }) => {
  const {
    nombre,
    tatuaje,
    email,
    celular,
    fecha,
    hora,
    anotaciones,
    id,
  } = cliente;

  const handleEliminar = () => {
    const respuesta = confirm("Esta a punto de eliminar un cliente, seguro?");

    if (respuesta) {
      eliminarCliente(id);
    }
  };

  return (
    <div className="mx-5 my-10 bg-white shadow-md px-5  py-10 rounded-xl ">
      <p className="font-bold mb-3 text-gray-900">
        Nombre Y Apellido:{" "}
        <span className="font-semibold text-gray-600 normal-case ">
          {nombre}
        </span>
      </p>
      <p className="font-bold mb-3 text-gray-700">
        Nombre Del Tatuaje:{" "}
        <span className="font-semibold text-gray-600 normal-case">
          {tatuaje}
        </span>
      </p>
      <p className="font-bold mb-3 text-gray-700">
        Email:{" "}
        <span className="font-semibold text-gray-600 normal-case">{email}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700">
        Celular:{" "}
        <span className="font-semibold text-gray-600 normal-case">
          {celular}
        </span>
      </p>
      <p className="font-bold mb-3 text-gray-700">
        Fecha:{" "}
        <span className="font-semibold text-gray-600 normal-case">{fecha}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700">
        Hora:{" "}
        <span className="font-semibold text-gray-600 normal-case">{hora}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700">
        Anotaciones:{" "}
        <span className="font-semibold text-gray-600 normal-case">
          {anotaciones}
        </span>
      </p>
      <div className="flex justify-between mt-5">
        <button
          type="button"
          className="py-2 px-10 bg-blue-600 hover:bg-blue-700 text-white font-bold uppercase rounded-lg"
          onClick={() => setCliente(cliente)}
        >
          Editar
        </button>
        <button
          type="button"
          className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
          onClick={handleEliminar}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default Cliente;
