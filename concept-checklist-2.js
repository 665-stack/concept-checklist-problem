//1. conversion: function name --- feetToInch
function feetToInch(feets) {
    const inch = feets / 0.0833333;
    return inch;
}
const myFeets = feetToInch(12);
console.log('total inches is :', myFeets);

//2. conversion: function name --- centimeterToMeter
function centimeterToMeter(centimeter) {
    const meter = centimeter / 100;
    return meter;
}
const myMeter = centimeterToMeter(11);
console.log('total meter is :', myMeter);
//3. calculation: function name --- pageRequirement;
// book1 has 100 pages; book2 has 200 pages; book3 has 300 pages; akhon input parameter hishabe 3ta book er shongkha dite hobe. Mane book1 koyta lagebe, book2 koyta lagbe, book3 koyta lagbe etc; And amake return hishebe shobgulo book er kotogulo page holo sheta ber korte hobe;
function pageRequirement(books) {
    if (books <= 1) {
        const totalpages = 100 * books;
        return totalpages;
    }
    else if (books > 1 && books <= 2) {
        const totalpages = 100 + (books - 1) * 200;
        return totalpages;
    }
    else {
        const totalpages = 300 + (books - 2) * 300;
        return totalpages;
    }
}
const pagesForBooks = pageRequirement(12);
console.log('total pages is :', pagesForBooks);
//another way--- 
function pageRequirement2(books2) {
    const pagesForBook1 = 100;
    const pagesForBook2 = 200;
    const pagesForBook3 = 300;

    if (books2 <= 1) {
        const pagesCount = books2 * pagesForBook1;
        return pagesCount;
    }
    else if (books2 <= 2) {
        const firstBook = 1 * pagesForBook1;
        const restBook = books2 - 1;
        const secondBook = restBook * pagesForBook2;
        const totalpages2 = firstBook = secondBook;
        return totalpages2;
    }
    else {
        const firstBook = 1 * pagesForBook1;
        const second10 = 2 * pagesForBook2;
        const restBook = books2 - 2;
        const infiniteBook = restBook * pagesForBook3;
        const totalpages2 = firstBook + secondBook + infiniteBook;
        return totalpages2;
    }
}
const pagesForBooks2 = pageRequirement(12);
console.log('total pages is another way :', pagesForBooks2);
//4. fucntion name --- bestFriend; ekta array er name thakbe 'friends'. ekhone ei friends der moddo theke jar name shobceye boro sheta return korte hobe.
//5. function name --- onlyPsositive; will stop the loop if the array has any negative number and returns all the positive number before the negative number
