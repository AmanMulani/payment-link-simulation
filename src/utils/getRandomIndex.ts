export const getRandomIndex = (max: number = 10) => {
    max = Math.floor(max);// The maximum is exclusive
    return Math.floor(Math.random() * max); 
}