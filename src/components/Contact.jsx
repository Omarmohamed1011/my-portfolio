

const Contact = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-4">Contact Me</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
        <p className="text-lg">
          Feel free to reach out to me using the following contact details:
        </p>
        <ul className="list-disc pl-6">
          <li>Email: <span className="font-semibold">respecteamo@gmail.com</span></li>
          <li>Phone: <span className="font-semibold">+254748956644</span></li>
          
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Send me a Message</h2>
        <form className="max-w-md">
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-semibold text-gray-600">Omar Khalif</label>
            <input type="text" id="name" name="name" className="w-full border rounded-md py-2 px-3" placeholder="John Doe" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-semibold text-gray-600">Your Email</label>
            <input type="email" id="email" name="email" className="w-full border rounded-md py-2 px-3" placeholder="john.doe@example.com" />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-semibold text-gray-600">Your Message</label>
            <textarea id="message" name="message" rows="4" className="w-full border rounded-md py-2 px-3" placeholder="Write your message here"></textarea>
          </div>
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md">Send Message</button>
        </form>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Visit Me</h2>
        <p className="text-lg">
          You can find me at the following location:
        </p>
        <div className="mt-4">
          <iframe
            title="Zetec university"
            width="100%"
            height="400"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10002.968628631258!2d37.2689837!3d-0.4974893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNzcuMjY4OTMzLDM3LjI2ODk4MzcgMDVs!5e0!3m2!1sen!2sus!4v1635323540054!5m2!1sen!2sus"
          />
        </div>
      </section>
    </div>
  );
}

export default Contact