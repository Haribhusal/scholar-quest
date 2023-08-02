import React from "react";
import Header from "../../src/components/Header";
import Footer from "../../src/components/Footer";
import "./../../src/app/globals.css";
import { useRouter } from "next/router";
import { destinations } from "../../src/data/destinations";

const StudyAbroadSinglePage = () => {
  const router = useRouter();
  const slug = router.query.slug;
  console.log(router.query.slug);
  const destinationData = destinations?.find((item) => item.slug === slug);
  console.log(destinationData);
  return (
    <div>
      <Header />
      {}
      <h1>{destinationData?.title}</h1>
      <p>{destinationData?.description}</p>
      <Footer />
    </div>
  );
};

export default StudyAbroadSinglePage;
