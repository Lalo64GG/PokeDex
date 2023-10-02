import Links from "../Atoms/Links";
import Text from "../Atoms/Text";

const Nav = () => {
  const linkObject = [
    {
      children: "Home",
    },

    {
      children: "Contact",
    },

    {
      children: "About us",
    },
  ];

  return (
    <nav className="fixed top-0 z-10 w-full py-4 lg:px-40 bg-sky-200 sm:px-4 ">
      <div className="flex justify-between mx-auto">
        <Text children={"Pokedex"} clase={"px-4"} />

        <Links
          linkObject={linkObject}
          clase={" m-2 w-full h-full hover:bg-indigo-400 transition-colors p-4 "}
        />
      </div>
    </nav>
  );
};

export default Nav;
