import ProductCard from "../ProductCard";

const FeaturedProducts = () => {
    return (
        <div className="lg:flex gap-5 justify-between items-center">
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
        </div>
    );
};

export default FeaturedProducts;