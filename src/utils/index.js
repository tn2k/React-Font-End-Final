const convertAmenityName = (amenity) => {
    return amenity
        .split(" ")
        .map((word, index) =>
            index === 0
                ? word.charAt(0).toLowerCase() + word.slice(1)
                : word
        )
        .join("")
};


export { convertAmenityName }