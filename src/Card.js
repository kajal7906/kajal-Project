import React from 'react';
import './Card.css'; // Ensure you have a CSS file for styles

const jackets1 = [
    {
        image: 'https://miro.medium.com/v2/resize:fit:828/format:webp/1*j9cmOIWyKl2K32BbqiZbRQ.jpeg',
        price: '₹4999',
        desc: 'Warm Winter Coat - Perfect for the cold Himalayan winters.',
        title: 'Winter Coat',
    },
    {
        image: 'https://miro.medium.com/v2/resize:fit:750/format:webp/1*3CVB2o01y8MgVadkj5UewA.jpeg',
        price: '₹3799',
        desc: 'Lightweight Rain Jacket - Ideal for monsoons.',
        title: 'Rain Jacket',
    },
    {
        image: 'https://miro.medium.com/v2/resize:fit:828/format:webp/1*MCRjcFzG6LC_id4NDp6g3g.jpeg',
        price: '₹4500',
        desc: 'Vintage Leather Jacket - Stylish for Indian winters.',
        title: 'Leather Jacket',
    },
    {
        image: 'https://miro.medium.com/v2/resize:fit:828/format:webp/1*-W0zBeVCBZSrG_jsD2CdTQ.jpeg',
        price: '₹3200',
        desc: 'Casual Bomber Jacket - Great for daily use.',
        title: 'Bomber Jacket',
    },
];

const jackets2 = [
    {
        image: 'https://miro.medium.com/v2/resize:fit:828/format:webp/1*j9cmOIWyKl2K32BbqiZbRQ.jpeg',
        price: '₹4999',
        desc: 'Warm Winter Coat - Perfect for the cold Himalayan winters.',
        title: 'Winter Coat',
    },
    {
        image: 'https://miro.medium.com/v2/resize:fit:750/format:webp/1*3CVB2o01y8MgVadkj5UewA.jpeg',
        price: '₹3799',
        desc: 'Lightweight Rain Jacket - Ideal for monsoons.',
        title: 'Rain Jacket',
    },
    {
        image: 'https://miro.medium.com/v2/resize:fit:828/format:webp/1*MCRjcFzG6LC_id4NDp6g3g.jpeg',
        price: '₹4500',
        desc: 'Vintage Leather Jacket - Stylish for Indian winters.',
        title: 'Leather Jacket',
    },
    {
        image: 'https://miro.medium.com/v2/resize:fit:828/format:webp/1*-W0zBeVCBZSrG_jsD2CdTQ.jpeg',
        price: '₹3200',
        desc: 'Casual Bomber Jacket - Great for daily use.',
        title: 'Bomber Jacket',
    },
];

const jackets3 = [
    {
        image: 'https://miro.medium.com/v2/resize:fit:828/format:webp/1*j9cmOIWyKl2K32BbqiZbRQ.jpeg',
        price: '₹4999',
        desc: 'Warm Winter Coat - Perfect for the cold Himalayan winters.',
        title: 'Winter Coat',
    },
    {
        image: 'https://miro.medium.com/v2/resize:fit:750/format:webp/1*3CVB2o01y8MgVadkj5UewA.jpeg',
        price: '₹3799',
        desc: 'Lightweight Rain Jacket - Ideal for monsoons.',
        title: 'Rain Jacket',
    },
    {
        image: 'https://miro.medium.com/v2/resize:fit:828/format:webp/1*MCRjcFzG6LC_id4NDp6g3g.jpeg',
        price: '₹4500',
        desc: 'Vintage Leather Jacket - Stylish for Indian winters.',
        title: 'Leather Jacket',
    },
    {
        image: 'https://miro.medium.com/v2/resize:fit:828/format:webp/1*-W0zBeVCBZSrG_jsD2CdTQ.jpeg',
        price: '₹3200',
        desc: 'Casual Bomber Jacket - Great for daily use.',
        title: 'Bomber Jacket',
    },
];

const Card = ({ image, price, desc, title }) => {
    return (
        <div className="card">
            <img src={image} alt={title} className="card-image" />
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className="card-description">{desc}</p>
                <p className="card-price">{price}</p>
            </div>
        </div>
    );
};

const JacketGallery = ({ title, which }) => {
    const renderCards = () => {
        if (which === 1) {
            return jackets1.map((jacket, index) => (
                <Card
                    key={index}
                    image={jacket.image}
                    price={jacket.price}
                    desc={jacket.desc}
                    title={jacket.title}
                />
            ));
        } else if (which === 2) {
            return jackets2.map((jacket, index) => (
                <Card
                    key={index}
                    image={jacket.image}
                    price={jacket.price}
                    desc={jacket.desc}
                    title={jacket.title}
                />
            ));
        } else if (which === 3) {
            return jackets3.map((jacket, index) => (
                <Card
                    key={index}
                    image={jacket.image}
                    price={jacket.price}
                    desc={jacket.desc}
                    title={jacket.title}
                />
            ));
        } else {
            return <p>No jackets found.</p>;
        }
    };

    return (
        <div className="gallery">
            <h1 className="title">{title}</h1>
            <div className="card-container">
                {renderCards()}
            </div>
        </div>
    );
};

export default JacketGallery;
