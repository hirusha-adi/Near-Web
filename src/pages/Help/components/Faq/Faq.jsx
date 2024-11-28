import { Collapsible } from "./components/Collapsible";

const Faq = () => {
  return (
    <>
      <div className="mt-20">
        <h1 className="text-3xl font-extrabold text-center md:text-left">Frequently Asked Questions</h1>
        <div className="mt-8">
          Here, you'll find answers to common questions about Near.
          Click on any question to expand and see its detailed contents.
        </div>
        <div className="mt-6">
          <Collapsible title={"Does the /passwordchk command store passwords?"}>
            No, the <span className="code">/passwordcheck</span> command does not store any passwords.
            The bot is fully open source, and you can audit the code yourself by {" "}
            <a href="https://github.com/hirusha-adi/Near/blob/main/near/cogs/tools.py" target="_blank" rel="noopener noreferrer" className="underline text-red-700">
              clicking here
            </a>.
            Your security is our top priority.
          </Collapsible>
        </div>

      </div>
    </>
  );
}

export { Faq }