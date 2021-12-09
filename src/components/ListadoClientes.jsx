import Cliente from "./Cliente";

const ListadoClientes = ({ clientes, setCliente, eliminarCliente }) => {
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      {clientes && clientes.length ? (
        <>
          <h2 className="font-black text-3xl text-center">
            Listado De Clientes
          </h2>
          <p className="text-xl mt-5 mb-10 font-bold text-center">
            Administrador de {""}
            <span className="text-white font-bold">Clientes y Citas</span>
          </p>

          {clientes.map((cliente) => (
            <Cliente
              key={cliente.id}
              cliente={cliente}
              setCliente={setCliente}
              eliminarCliente={eliminarCliente}
            />
          ))}
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center">
            Listado De Clientes Vacia
          </h2>
          <p className="text-xl mt-5 mb-10 font-bold text-center">
            Añade Clientes para {""}
            <span className="text-white font-bold">
              Administrar tus citas
            </span>
          </p>
        </>
      )}
    </div>
  );
};

export default ListadoClientes;
