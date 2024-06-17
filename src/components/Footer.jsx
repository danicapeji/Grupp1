import FooterIcons from "./FooterIcons";
const Footer = () => {
  return (
    <footer className="w-full bg-slate-500 text-white py-6">
      <div className="container flex flex-col justify-center items-center mx-auto">
        <div className="w-full md:w-1/2 mb-4 md:mb-0 md:pl-16">
          <h2 className="text-xl font-semibold">Contact</h2>
          <p className="font-medium">
            Email:{" "}
            <a
              href="mailto:Info@Hemsida.se"
              className="font-normal text-white"
            >
              Info@Hemsida.se
            </a>
          </p>
          <p className="font-medium">
            Phone:{" "}
            <a
              href="tel:+46322650780"
              className="text-white font-normal"
            >
              +46 322 650 780
            </a>
          </p>
          <div className="flex flex-row">
          <p className="font-medium mr-2">Address:</p>
          <div>
          <p>Mattssons väg 4</p>
          <p>44192 Tokholm</p>
          </div>
          </div>
        </div>
        <div className="flex justify-center md:text-center">
          <div className="flex flex-col items-center">
            <p className="mb-2">
              Follow us on social media and other platforms!
            </p>
            <div className="flex justify-center">
              <span className="[&>svg]:h-5 [&>svg]:w-5 m-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 320 512"
                >
                  <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
                </svg>
              </span>
              <span className="[&>svg]:h-5 [&>svg]:w-5 m-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 448 512"
                >
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                </svg>
              </span>
              <span className="[&>svg]:h-5 [&>svg]:w-5 m-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 512 512"
                >
                  <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                </svg>
              </span>
            </div>
          </div>
        </div>
        <div className="h-full w-full mb-1 md:mb-0 p-1 pl-20"></div>
      </div>

      <div className="container mx-auto text-center mt-2">
        <hr className="w-1/2 h-px bg-gray-200 border-0 dark:bg-gray-700 mx-auto" />
        <p className="mt-1 text-white">&copy; 2024 CSTORE</p>
      </div>
    </footer>
  );
};

export default Footer;
