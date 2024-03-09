// Equility and Inequility Test
console.log("Equility test with strings:", "Laptop"=="Laptop");

console.log("Inequility test with string:", ("Laptop"as string)!="Mobile");

// Test using the lowercase functions:
console.log('Test with lowercase functions:',"Shoaib Siddiq".toLowerCase() === "shoaib siddiq");

// Equility test with numericals:
console.log('Equility test with numbers:', 403 === 403);

// Inequility test with numericals:
console.log('Inequility test with numericals:' , (403 as number) !== 305)

// Equility test with greater than:
console.log('Equility test with greater than:', 100 > 50);

// Inequility test with less than:
console.log('Inequility test with less than:', 50 < 100);

// Greater than or equal to, and less than or equal to:
console.log('Test with greater than or equal to:', 30 >= 30);

console.log('Test with less than or equal to:', 20 <= 30);

// Test using "and" and "or" operators:
console.log('Test using "and" operators:', 15 === 15 && 3 < 15);

console.log('Test using "or" operators:', 50 > 40 || 40 > 30);

// Test whether an item is in a array:
let Names: string[] = ['Ahmed', 'Shoaib', 'Usman', 'Faheem', 'Kabir'];
console.log('Shoaib name is in the array:', Names.includes('Shoaib'));

// Test whether an item is not in a array:
let currency: string[] = ['Dollor', 'Riyal', 'Euro', 'Pound'];
console.log('Dinar is not in the array:', !currency.includes("Dinar"));

