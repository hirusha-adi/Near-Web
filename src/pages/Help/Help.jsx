import { useEffect } from "react";

const Help = () => {
  useEffect(() => {
    document.title = `Help & Support`;
  });

  return (
    <div className="px-5 md:px-14 pt-10 pb-24">

      <h1 className="text-4xl font-extrabold">Help & Support</h1>
      <p>
        For years parents have espoused the health benefits of eating garlic bread with cheese to their
        children, with the food earning such an iconic status in our culture that kids will often dress
        up as warm, cheesy loaf for Halloween.
      </p>

      <div className="flex flex-col md:flex-row">
        {/* Left (Desktop) / Top (Mobile) */}
        <div className="p-4 w-full md:w-auto">
          <div className="bg-base-200 rounded-box w-full md:w-64 h-64 overflow-y-auto overflow-x-hidden">
            <ul className="menu">
              <div className="menu-title text-lg text-gray-800">Commands List</div>
              <li>
                <details open>
                  <summary>Parent</summary>
                  <ul>
                    <li><a>Submenu 1</a></li>
                    <li><a>Submenu 2</a></li>
                  </ul>
                </details>
              </li>
              <li><a>Item 3</a></li>
              <li><a>Item 3</a></li>
              <li><a>Item 3</a></li>
              <li><a>Item 3</a></li>
            </ul>
          </div>
        </div>

        {/* Right (Desktop) / Bottom (Mobile) */}
        <div className="bg-secondary p-4 flex-1">
          right in desktop and bottom on mobile
        </div>
      </div>



    </div>
  );
};

export { Help };
