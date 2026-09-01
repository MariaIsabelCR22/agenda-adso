export default function ContactoCard({
  nombre,
  telefono,
  correo,
  etiqueta,
  onEditar,
  onEliminar
}) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
      <div className="flex justify-between items-start gap-4">
        <div>
          <h3 className="text-xl font-bold text-gray-800">
            {nombre}
          </h3>

          <span className="inline-block bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm mt-2">
            {etiqueta || "Sin etiqueta"}
          </span>
        </div>

        <div className="flex gap-2">
          <button
            type="button"
            onClick={onEditar}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-xl"
          >
            Editar
          </button>

          <button
            type="button"
            onClick={onEliminar}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-xl"
          >
            Eliminar
          </button>
        </div>
      </div>

      <div className="mt-4 space-y-2">
        <p className="text-gray-600">
          <strong>Teléfono:</strong> {telefono}
        </p>

        <p className="text-gray-600">
          <strong>Correo:</strong> {correo}
        </p>
      </div>
    </div>
  );
}
