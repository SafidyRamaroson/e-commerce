
type StarRatingProps = {
    rating: number;
}

function StarRating({ rating }: StarRatingProps) {
    //For save stars
    const stars = [];
    // Number of full colored starts  
    const fullStars = Math.floor(rating);

    // For determinate that we have halfStart
    // Ex:  rating : 4.5 => halfStart = 0.5 >=0.5 => true
    // Ex: rating: 4 => halfStart = 0 < 0.5 => false
    const hasHalfStart = rating % 1 >= 0.5

    // Full stars
    for (let i = 0; i < fullStars; i++) {
        stars.push(<span key={`full-${i}`}>⭐️</span>)
    }

    if (hasHalfStart) {
        stars.push(<span key="half" style={{ color: "#FFD700" }}>☆</span>);
    }

    //And add the rest star
    while (stars.length < 5) {
        stars.push(<span key={`empty-${stars.length}`} style={{ color: "#ccc" }}>☆</span>);
    }

    return (
        <p className="flex flex-row items-center">
            <span className="mr-2">{rating}</span> {stars}
        </p>
    );
}


export { StarRating }