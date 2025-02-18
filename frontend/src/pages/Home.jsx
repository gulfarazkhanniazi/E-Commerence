import Card from "../components/Card";
import Carousal from "../components/Carousal";
import FAQs from "../components/FAQs";
import ExclusiveFeatures from "../components/FeaturesAndReviews";

export default function Home() {
  return (
    <div className="bg-gray-800 min-h-screen">
      <Carousal />
      <div className="container mx-auto p-4">
        <div className="flex flex-wrap justify-center gap-8">
          {[0, 1, 2, 3, 4, 5].map((e) => (
            <Card key={e} />
          ))}
        </div>
      </div>
      
      <ExclusiveFeatures />
      <FAQs />
    </div>
  );
}
