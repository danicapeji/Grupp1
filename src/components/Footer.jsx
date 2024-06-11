import FooterIcons from "./FooterIcons";
const Footer = () => {
  return (
    <footer className="w-full bg-slate-500 text-white py-3">
      <div className="flex flex-col md:flex-row items-center">
        <div className="h-full w-full mb-1 md:mb-0 p-1 pl-20">
          <h2 className="text-xl font-semibold">Contact</h2>
          <p>
            Email:{" "}
            <a
              href="mailto:Info@Hemsida.se"
              className="underline bg-slate-500 text-white"
            >
              Info@Hemsida.se
            </a>
          </p>
          <p>
            Phone:{" "}
            <a
              href="tel:+46322650780"
              className="underline bg-slate-500 text-white"
            >
              +46 322 650 780
            </a>
          </p>
          <p>Address: Mattssons väg 4</p>
          <p>44192 Tokholm</p>
        </div>
        <div className="container flex mx-auto mx:justify-center md:text-center mt-4">
          <FooterIcons />
        </div>
        <div className="h-full w-full mb-1 md:mb-0 p-1 pl-20"></div>
      </div>

      <div className="container mx-auto text-center mt-4">
        <hr className="w-1/2 h-px bg-gray-200 border-0 dark:bg-gray-700 mx-auto" />
        <p className="text-white">&copy; 2021 All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
