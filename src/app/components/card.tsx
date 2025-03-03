import React from 'react';

interface CardProps {
    imageSrc: string;
    name: string;
    icons: string[];
}

const Card: React.FC<CardProps> = ({ imageSrc, name, icons }) => {
    const cardStyle: React.CSSProperties = {
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '16px',
        textAlign: 'center',
        maxWidth: '300px',
        margin: '16px auto',
    };

    const imageContainerStyle: React.CSSProperties = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '16px',
    };

    const imageStyle: React.CSSProperties = {
        width: '100px', // Fixed width for the circle
        height: '100px', // Fixed height for the circle
        borderRadius: '50%', // Make the image circular
        objectFit: 'cover', // Ensure the image covers the circle without distortion
    };

    const nameStyle: React.CSSProperties = {
        fontSize: '1.5em',
        margin: '16px 0',
    };

    const iconsContainerStyle: React.CSSProperties = {
        display: 'flex',
        justifyContent: 'center',
        gap: '8px',
    };

    const iconStyle: React.CSSProperties = {
        width: '24px',
        height: '24px',
    };

    return (
        <div style={cardStyle}>
            <div style={imageContainerStyle}>
                <img src={imageSrc} alt={name} style={imageStyle} />
            </div>
            <h2 style={nameStyle}>{name}</h2>
            <div style={iconsContainerStyle}>
                {icons.map((icon, index) => (
                    <img key={index} src={icon} alt={`icon-${index}`} style={iconStyle} />
                ))}
            </div>
        </div>
    );
};

export default Card;