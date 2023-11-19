import { LastProduct } from "./lastProduct";
import { LastUser } from "./lastUser";

export const LastComponent = () => {
  return (
    <>
      <section className="grid grid-cols-1 md:grid-cols-2 mt-10 gap-8">
        <LastUser />
        <LastProduct />
      </section>
    </>
  );
};
