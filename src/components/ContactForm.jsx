import { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status,setStatus] = useState({ loading: false, error: null });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    setStatus({ loading: true, error: null });

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers:{
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });
      const data = await response.json();

    if (!data.success){
      throw new Error(data.error || 'Error al enviar el mensaje');
    }

    setFormData({ name: '', email: '', message: '' });
    setStatus({ loading: false, error: null });
    alert('!Mensaje enviado con éxito!');
    // // send the form data 
    // console.log('Form submitted:', formData);
    // // reset form after submission
    // setFormData({ name: '', email: '', message: '' });
    }  catch (error) {
      setStatus({ loading: false, error: error.message });
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="mb-8 text-center text-3xl font-bold text-white sm:text-4xl">Contáctame</h2>
        <form onSubmit={handleSubmit} className="mx-auto max-w-lg space-y-6">
          <div>
            <label htmlFor="name" className="mb-2 block text-sm font-medium text-white">
              Nombre
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-white placeholder-white/50 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Tu nombre"
            />
          </div>
          <div>
            <label htmlFor="email" className="mb-2 block text-sm font-medium text-white">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-white placeholder-white/50 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="tu@email.com"
            />
          </div>
          <div>
            <label htmlFor="message" className="mb-2 block text-sm font-medium text-white">
              Mensaje
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message} // Corregir el valor del textarea
              onChange={handleChange}
              required
              rows="4"
              className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-white placeholder-white/50 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Tu mensaje aquí..."
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              disabled={status.loading}
              className="w-full rounded-lg bg-green-500 px-4 py-2 text-white transition-colors hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-black disabled:opacity-50"
            >
              {status.loading ? 'Enviando...' : 'Enviar Mensaje'}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;