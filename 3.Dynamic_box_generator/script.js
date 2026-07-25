//we have to change the quote so first sccess id
//to change the quote change the inner elemnt

const quotes = [
  "In three words I can sum up everything I've learned about life: it goes on. — Robert Frost",
  "Life is what happens to us while we are making other plans. — Allen Saunders",
  "To live is the rarest thing in the world. Most people exist, that is all. — Oscar Wilde",
  "Do not go where the path may lead, go instead where there is no path and leave a trail. — Ralph Waldo Emerson",
  "Life is really simple, but we insist on making it complicated. — Confucius",
  "The purpose of our lives is to be happy. — Dalai Lama",
  "Life is either a daring adventure or nothing at all. — Helen Keller",
  "The unexamined life is not worth living. — Socrates",
  "You have within you right now, everything you need to deal with whatever the world can throw at you. — Brian Tracy",
  "The biggest adventure you can take is to live the life of your dreams. — Oprah Winfrey",
  "Life isn’t about finding yourself. Life is about creating yourself. — George Bernard Shaw",
  "Everything has beauty, but not everyone sees it. — Confucius",
  "It does not matter how slowly you go as long as you do not stop. — Confucius",
  "Life is a journey that must be traveled no matter how bad the roads and accommodations. — Oliver Goldsmith",
  "The only impossible journey is the one you never begin. — Tony Robbins",
  "Life shrinks or expands in proportion to one’s courage. — Anaïs Nin",
  "The meaning of life is to find your gift. The purpose of life is to give it away. — Pablo Picasso",
  "Happiness is not something ready-made. It comes from your own actions. — Dalai Lama",
  "Life is 10% what happens to us and 90% how we react to it. — Charles R. Swindoll",
  "The best way to predict your future is to create it. — Peter Drucker",
  "Life can only be understood backwards; but it must be lived forwards. — Søren Kierkegaard",
  "Keep your face always toward the sunshine—and shadows will fall behind you. — Walt Whitman",
  "Life is made of ever so many partings welded together. — Charles Dickens",
  "He who has a why to live can bear almost any how. — Friedrich Nietzsche",
  "The privilege of a lifetime is to become who you truly are. — Carl Jung"
];

function generateQuote(){
const text=document.getElementById("quote")
text.textContent=quotes[7]
//store all the quote in array with the help of chatgpt
//to make quote random
const index=Math.floor(Math.random()*quotes.length);
text.textContent=quotes[index]
//Math.random() return random value b/w 0-1

//Math.random()*quotes.length  return value 0-24
//Math.floor(Math.random()*quotes.length);
//return floor value
}
//to call freq we put in a fn
setInterval(generateQuote,3000)

//change the backgroung color randmomly
const lightColors = [
  "#E6E6FA", // Lavender
  "#98FF98", // Mint
  "#FFB6C1", // Light Pink
  "#F0F8FF", // Alice Blue
  "#F0FFF0", // Honeydew
  "#FFF5EE", // Seashell
  "#FFF0F5", // Lavender Blush
  "#FFE4E1", // Misty Rose
  "#E0FFFF", // Light Cyan
  "#FAFAD2", // Light Goldenrod
  "#FFFFE0", // Light Yellow
  "#FFEFD5", // Papaya Whip
  "#FFDAB9", // Peach Puff
  "#FFE4B5", // Moccasin
  "#F5DEB3", // Wheat
  "#FDF5E6", // Old Lace
  "#FAF0E6", // Linen
  "#FFF8DC", // Cornsilk
  "#ADD8E6", // Light Blue
  "#B0E0E6", // Powder Blue
  "#B0C4DE", // Light Steel Blue
  "#AFEEEE", // Pale Turquoise
  "#90EE90", // Light Green
  "#98FB98", // Pale Green
  "#DB7093"  // Pale Violet Red
];

function randomcolor(){
    const color=document.getElementById("first")
    const index=Math.floor(Math.random()*lightColors.length);
    color.style.backgroundColor = lightColors[index];
}
setInterval(randomcolor,3000)