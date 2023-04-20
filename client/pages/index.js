import { Button } from "antd";
import { useRouter } from "next/router";
import React from "react";

const HomePage = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/products");
  };

  return (
    <>
      <h1>Welcom to Home Page</h1>
      <Button type="primary" onClick={handleClick}>
        Go to products page
      </Button>
    </>
  );
};

export default HomePage;
