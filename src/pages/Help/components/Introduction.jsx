import ImagePandaSitting from "../../../assets/sitting.png"


const Introduction = () => {
  return (
    <>
      {/* title */}
      <h1 className="text-4xl font-extrabold text-center md:text-left">Help & Support</h1>

      {/* intro - text and image */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mt-14 md:mt-4">
        <div className="md:col-span-10 order-2 md:order-1 text-center md:text-left flex justify-center items-center">
          <div className="mt-2">
            Welcome to the Help & Support section of Near's website!
            Here, you can find a comprehensive list of all available commands,
            complete with detailed explanations and usage examples.
            Whether you're a new user or an experienced one, this guide will help you
            get the most out of the bot's features. Browse through the sections below
            to learn more about each command and how to use them effectively.
            <br />
            <br />
            Scroll down further to find the FAQ section, where we answer common questions
            and provide additional insights to help you make the most of Near's capabilities.
          </div>
        </div>
        <div className="md:col-span-2 order-1 md:order-2 flex justify-center items-center">
          <img src={ImagePandaSitting} alt="Panda Help" className="w-52 md:w-36" />
        </div>
      </div>
    </>
  );
}

export { Introduction }