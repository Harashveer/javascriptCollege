const output = document.querySelector('body p:nth-of-type(2)');

/* STEP 1: Creating an array
When declaring and initializing an array, you can include strings, numbers, booleans, and even other arrays */

let myArray=["string",true,100,[5,"hello",false]];

/* STEP 2: Reading and changing array elements
You can refer to a particular element in an array with it's index number */
// output.textContent=`the first element in myArray is ${myArray[2]}.`;
// You can also change a particular element
myArray[1]=false;
// output.textContent = `the first element in myArray is ${myArray[1]}.`;


// An array within an array is called a multidimensional array - it can be accessed by specifying the index of the first array, then the item within it
// output.textContent = `the second element in fourth element in myArray is ${myArray[3][1]}.`;

/* STEP 3: Determining array length
Being able to figure out how many elements are contained in an array is a critical feature of JavaScript programming */
// output.textContent = `there are ${myArray[3].length} items in myArray.`;

// In particular, looping through arrays

for(let i=0; i<myArray.length;i++)
{
    // check if array element is an array
    if (typeof(myArray[i])==="object")
    {
        //we have an array! so lets build a loop
        for(let j=0;j<myArray[i].length;j++)
        {
            output.textContent +=`${myArray[i][j]}, `;
        }
    }
    else 
    {
        output.textContent+=`${myArray[i]}, `;
}   }

/* STEP 4: Convert a string to an array
If there is a common character that can act as a delimiter in a string, we can use this character to create an array */
let orig6=`toronto Maple leafs, chicago black hawks, Detroit red wings , boston bruins, MOntreal canadian, new york rangers `;
let orig6Array=orig6.split(", ");
// Output one of the array items
output.textContent=orig6Array[2];
// Output the last element of the array
output.textContent=orig6Array[orig6Array.length-1]; 
/* STEP 5: Convert an array back to a string
Use join() and toString() - note that join() allows you to choose and insert a delimiter, while toString() does not */
// let orig6string=orig6Array.toString();
let orig6string = orig6Array.join(" | ");

output.textContent=orig6string;
/* STEP 6: Adding and removing items from an array
Without the ability to edit the contents of an array, this type of variable would have limited use - but adding and removing array items is pretty straightforward */

// Adding one or more items to an array with push()

// orig6Array.push("Buffalo sabres");


// If you would like to capture how many elements are in the array after you have edited it, then…
let orig6Length=orig6Array.push("Buffalo sabres" , "philadelphia flyers");
// Removing an item from an array with pop()
let removeItem =orig6Array.pop();
// pop() returns the item that was removed, rather than the length of the updated array, so…

// To do the same thing, that is, to add and remove an item from the beginning of the array, use shift() and unshift()
orig6Array.unshift("winnipeg jets");
// We can also modify the array contents by deleting or substituting elements, or inserting one or more elements at a certain place with splice()
orig6Array.splice(2, 0 ,"edmonton oilers ");
/* That's it for the basics of working with arrays! With these tools at your disposal, a whole new world of possibilities with JavaScript are at your command */