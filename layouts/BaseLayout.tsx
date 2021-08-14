import Footer from "../components/shared/footer/Footer";
import Navbar from "../components/shared/navbar/Navbar";

// Declaring type of props - see "Typing Component Props" for more examples
type BaseLayoutProps = {
  center?: boolean;
  children: React.ReactNode;
}; /* use `interface` if exporting so that consumers can extend */

const BaseLayoutProps = ({ center = false, children }: BaseLayoutProps) => {
  return (
    <>
      <Navbar />
      <main className="flex flex-col h-screen bg-gray-100">
        <div className="flex flex-col justify-center items-center align-middle h-screen w-screen container mx-auto">
          {children}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default BaseLayoutProps;
