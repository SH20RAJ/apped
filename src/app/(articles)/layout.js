import Footer from "../(main)/_components/Footer";
import Navbar from "../(main)/_components/NavBar";

export const metadata = {
  title: "Apped - Download, Share, and Manage Your Apps",
  description:
    "Apped is a platform for downloading, sharing, and managing your apps.",
};

export default function AppLayout({ children }) {
  return (
    <>
      <Navbar />
      <main className=" max-w-[800px] p-4 md:mx-20 shadow-2xl article mt-40 bg-white text-gray-900 min-h-60">
        {children}
      </main>
      <Footer />
    </>
  );
}
