import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Donate from "@/components/Donate";

const DonatePage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-20">
        <Donate />
      </div>
      <Footer />
    </div>
  );
};

export default DonatePage;
