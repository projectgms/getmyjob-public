import React, { useEffect, useState } from 'react';
import RecruiterProductCard from './RecruiterProductCard';
import axios from 'axios';

// ✅ Import local images manually
import job from '../../../assets/images/job.png';
import job1 from '../../../assets/images/job1.png';

// ✅ Image map for local images
const imageMap = {
    "job.png": job,
    "job1.png": job1
};

const CardGrid = () => {
    const [cards, setCards] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:5000/cards");

                // ✅ Check if the image is a URL or a local file
                const updatedCards = response.data.map((card) => ({
                    ...card,
                    image: card.image.startsWith("http") ? card.image : imageMap[card.image] || job, // Use URL if external
                    hoverImage: card.hoverImage && card.hoverImage.startsWith("http") ? card.hoverImage : imageMap[card.hoverImage] || job1 // Use URL if external
                }));

                setCards(updatedCards);
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return <p className="text-center text-gray-500">Loading cards...</p>;
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-8">
            {cards.map((item) => (
                <div key={item.id} className="h-full">
                    <RecruiterProductCard 
                        title={item.title} 
                        description={item.description} 
                        linkText={item.linkText} 
                        link={item.link} 
                        image={item.image} 
                        hoverImage={item.hoverImage} 
                    />
                </div>
            ))}
        </div>
    );
}

export default CardGrid;
