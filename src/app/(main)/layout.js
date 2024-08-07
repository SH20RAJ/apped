import Footer from "./_components/Footer";
import Navbar from "./_components/NavBar";

export const metadata = {
  title: "Apped - Download, Share, and Manage Your Apps",
  description:
    "Apped is a platform for downloading, sharing, and managing your apps.",
};

export default function AppLayout({ children }) {
  return (
    <>
      <Navbar />

      <main className=" ">{children}</main>
      <Footer />
    </>
  );
}
