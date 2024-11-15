import Accordion from "../Components/Home/Accordion";
import Banner from "../Components/Home/Banner";
import FeaturedProducts from "../Components/Home/FeaturedProducts";
import UserReview from "../Components/Home/UserReview";

const Home = () => {
  return (
    <div>
      {/* <h1>this is home.</h1> */}

      <Banner></Banner>
    <div>
  <div>

<div className="container mx-auto">


  <div className="my-24">
        <h1 className="mb-10 font-semibold text-center text-3xl">
          Featured Product
        </h1>
        <FeaturedProducts></FeaturedProducts>
      </div>
      <div className="my-24">
        <h1 className="mb-10 font-semibold text-center text-3xl">
          User Review
        </h1>
       <UserReview/>
      </div>
      <div className="my-24">
        <h1 className="mb-10 font-semibold text-center text-3xl">
       Frequently Asked Question
        </h1>
       <Accordion/>
      </div>
</div>



  </div>
    </div>
    </div>
  );
};

export default Home;
