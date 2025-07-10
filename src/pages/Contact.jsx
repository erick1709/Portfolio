const Contact = () => {
  return (
    <section className="p-8 max-w-xl mx-auto">
      <h2 className="text-3xl font-bold mb-4">Contáctame</h2>
      <form className="flex flex-col gap-4">
        <input type="text" placeholder="Tu nombre" className="border p-2 rounded" />
        <input type="email" placeholder="Tu correo" className="border p-2 rounded" />
        <textarea placeholder="Tu mensaje" className="border p-2 rounded" rows="4"></textarea>
        <button type="submit" className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
          Enviar
        </button>
      </form>
    </section>
  );
};

export default Contact;
