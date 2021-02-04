let readingStatus = new Object

readingStatus.title = "Catching Fire: The Second Book of The Hunger Games";
readingStatus.author = "Suzanne Collins";
readingStatus.isItRead = true;

readingStatus.isReadingStatus = function() {
if (readingStatus.isItRead === true) {
    console.log(`You already read ${readingStatus.title} by ${readingStatus.author}.`);
  } else if (readingStatus.isItRead === false) {
    console.log(`You still need to read ${readingStatus.title} by ${readingStatus.author}.`);
  } else 
   console.log("Something went wrong. Please try again.");
}


readingStatus.isReadingStatus()