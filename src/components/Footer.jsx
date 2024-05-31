const Footer = () => {
  return (
    <footer className="fixed w-full bg-blue-500 text-white py-8">
      <div className="container flex flex-col md:flex-row justify-between items-center">
        <div className="h-full w-full mb-4 md:mb-0 p-5">
          <h2 className="text-xl font-semibold">Kontakt</h2>
          <p>
            Email:{" "}
            <a
              href="mailto:Info@Hemsida.se"
              className="underline bg-blue-500 text-white"
            >
              Info@Hemsida.se
            </a>
          </p>
          <p>
            Phone:{" "}
            <a
              href="tel:+46322650780"
              className="underline bg-blue-500 text-white"
            >
              +46 322 650 780
            </a>
          </p>
          <p>Address: Mattssons väg 4</p>
          <p>44192 Tokholm</p>
        </div>
        <div className="container mx-auto text-center mt-4">
          <div className="flex flex-col md:flex-row items-center">
            <p className="mb-4 md:mb-0 md:mr-6">
              Follow us on social media and other platforms!
            </p>
          </div>
          <button className="bg-white text-blue-500 p-3 m-2 rounded-full"></button>
          <button className="bg-white text-blue-500 p-3 m-2 rounded-full"></button>
          <button className="bg-white text-blue-500 p-3 m-2 rounded-full"></button>
          <button className="bg-white text-blue-500 p-3 m-2 rounded-full"></button>
        </div>
      </div>

      <div className="container mx-auto text-center mt-4">
        <p className="text-white">&copy; 2021 All Rights Reserved</p>
      </div>
      <div className="container mx-auto text-center mt-4">
        <button className="bg-white text-blue-500 p-2 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 15l7-7 7 7"
            />
          </svg>
        </button>
      </div>
    </footer>
  );
};

export default Footer;
