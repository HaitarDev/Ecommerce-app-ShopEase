import NavBarLink from "./NavBarLink";

function Navigation() {
  return (
    <ul className=" flex justify-between gap-4 py-2 px-1 md:px-20 bg-indigo-800 text-stone-100 ">
      <li>
        <NavBarLink to={"/category/1"}>Clothes</NavBarLink>
      </li>
      <li>
        <NavBarLink to={"/category/2"}>Electronics</NavBarLink>
      </li>
      <li>
        <NavBarLink to={"/category/3"}>Furniture</NavBarLink>
      </li>
      <li>
        <NavBarLink to={"/category/4"}>Shoes</NavBarLink>
      </li>
      <li>
        <NavBarLink to={"/category/5"}>Others</NavBarLink>
      </li>
    </ul>
  );
}

export default Navigation;
