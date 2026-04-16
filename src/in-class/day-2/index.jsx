import React from "react";
import Badge from "./components/Badge";
import Button from "./components/Button";
import ProfileCard from "./components/ProfileCard";
import ProductCard from "./components/ProductCard";
import UserProfileCard from "./components/UserProfileCard";

const Day2 = () => {
  return (
    <div className="max-w-7xl mx-auto ">
      <h1 className="font-bold text-3xl ">Props and Component reuseability </h1>

      <UserProfileCard />

      {/* Badge  */}

      <div className="flex gap-2 flex-wrap my-6">
        <Badge status={"success"} showBadge={true} />
        <Badge status={"warning"} showBadge={true} />
        <Badge status={"error"} showBadge={true} />
        <Badge status={"info"} showBadge={true} />
        <Badge status={"wow"} showBadge={false} />
      </div>
      {/* Button */}

      <div className="flex gap-2 flex-wrap my-6">
        <Button size="sm" varient="primary">
          Click here
        </Button>
      </div>

      <div>
        <Button size="lg" varient="danger">
          Delete
        </Button>
      </div>

      <div>
        <Button varient="warning" disabled={true}>
          Delete
        </Button>
      </div>

      {/* card */}

      <ProfileCard
        name="Umsan"
        course="Javascript + React"
        joinDate="12-12-2024"
        isOnline={true}
      />

      <ProfileCard
        name="Ali"
        course="NodeJs + React"
        joinDate="12-12-2024"
        isOnline={false}
      />

      {/* Product cards */}

      <ProductCard
        name={"Apple Watch"}
        description="simple description for now and nothing"
        quantity={0}
      />

      <ProductCard
        name={"Apple Watch"}
        description="simple description for now and nothing"
        quantity={20}
      />
      <ProductCard
        name={"Apple Watch"}
        description="simple description for now and nothing"
        quantity={2}
      />
      <ProductCard
        name={"Apple Watch"}
        description="simple description for now and nothing"
        quantity={0}
      />
      <ProductCard
        name={"Apple Watch"}
        description="simple description for now and nothing"
        quantity={9}
      />
    </div>
  );
};

export default Day2;
