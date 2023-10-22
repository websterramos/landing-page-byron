import { Header } from "@/app/components/Header";
import { Home } from "@/app/components/Home";

const page = () => {
  return (
    <main className="bg-gray-100 font-montserrat">
      <Header />
      <Home />
    </main>
  );
};

export default page;
