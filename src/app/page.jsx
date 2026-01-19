import Image from "next/image";
import Hero from "./Component/Hero";
import BestSelling from "./Component/BestSelling";
import CustomerReview from "./Component/CustomerReview";
import StoreLocation from "./Component/StoreLocation";
import ProblemSolution from "./Component/ProblemSolution";
import Features from "./Component/Features";
import FAQ from "./Component/FAQ";


export default function Home() {
  return (
    <div className="">
      <Hero />
      <BestSelling />
      <Features />
      <CustomerReview />
      <ProblemSolution />
      <FAQ/>
      <StoreLocation />
    </div>
  );
}
