function bottleSong(num) {
  let song = ""
for (let i = num; i > 0; i--) {
  i > 1 ? song +=  `${i} bottles of beer on the wall, ${i} bottles of beer. \n Take one down and pass it around, ${i-1} bottles of beer on the wall. \n `
  : song +=  `${i} bottle of beer on the wall, ${i} bottle of beer. \n Take one down and pass it around, \n No more bottles of beer on the wall, no more bottles of beer. \n Go to the store and buy some more, 99 bottles of beer on the wall. `
} return song
};

console.log(bottleSong(10))


// 99 bottles of beer on the wall, 99 bottles of beer.
// Take one down and pass it around, 98 bottles of beer on the wall.