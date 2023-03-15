import { use, useState } from 'react';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [clientEmail, setclientEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = {
      to: 'jacobclayton@outlook.com',
      from: clientEmail,
      body: message,
    };
    // TODO: Send email
    alert('Email sent successfully!');
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md xl:w-[50%] w-[80%] mx-auto">
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name:</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Your name"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email:</label>
        <input
          id="email"
          type="text"
          value={clientEmail}
          onChange={(event) => setclientEmail(event.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Your email address"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message:</label>
        <textarea
          id="message"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          required
          className="shadow appearance-none border rounded w-full h-[100px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Type your message here..."
        />
      </div>
      <button type="submit" className="bg-blue-700 hover:bg-blue-600 text-off-white duration-500 block mx-auto w-40 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
        Send
      </button>
    </form>
  );
};

export default ContactForm;
