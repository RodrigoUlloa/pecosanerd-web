const API_URL = import.meta.env.VITE_API_URL;

export const sendEmail = async (formData) => {
  try {
    const response = await fetch(`${API_URL}/api/send-email`,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    });

    const data = await response.json();

    if (!data.success) {
      throw new Error(data.error || 'Error al enviar el mensaje');
    }
    return data;
  } catch(error) {
    throw new Error(error.meessage);
  }
};