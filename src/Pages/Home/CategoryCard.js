import React from 'react';
import { Link } from 'react-router-dom';

const CategoryCard = ({ bikesCategory }) => {
    // console.log(bikesCategory)
    const { categoryName, category, img, category_id } = bikesCategory
    return (
        <div>
            <Link to={`/bikes/${category}`}>
                <div className="hero h-56" style={{ backgroundImage: `url(${img})` }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold">{categoryName}</h1>
                            <h1 className="mb-5 text-xl opacity-75 bg-red-700 text-white w-36 mx-auto btn-sm font-bold">See More</h1>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default CategoryCard;