import Hamburguer from "/public/icons-svg/bars.svg";
import CartShopping from "/public/icons-svg/cart-shopping-solid.svg";
import Users from "/public/icons-svg/user-solid.svg";

export function Header() {
  return (
    <>
      <header className="bg-white px-4 top-0 left-0 right-0 fixed z-50 sm:relative sm:py-3 sm:px-0">
        <div className="container flex flex-row justify-between items-center py-3 gap-2">
          <span>
            <Hamburguer className="fill-purple-strong cursor-pointer w-7" />
          </span>
          <span className="flex-1 text-center">LOGO</span>
          <span>
            <Users className="fill-purple-strong cursor-pointer w-6" />
          </span>
          <span>
            <CartShopping className="fill-purple-strong cursor-pointer w-8" />
          </span>
        </div>
      </header>
    </>
  );
}
