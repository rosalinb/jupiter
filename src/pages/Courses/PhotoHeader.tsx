import React from "react";

export default function PhotoHeader(props) {
  //   function Add(a, b) {
  //     return a + b;
  //   }
  //   console.log(Add(6, 7));

  //   const countMatches = function (items, ruleKey, ruleValue) {
  //     let index = -1;

  //     switch (ruleKey) {
  //       case "type":
  //         index = 0;
  //         break;
  //       case "color":
  //         index = 1;
  //         break;
  //       case "name":
  //         index = 2;
  //         break;
  //       default:
  //         break;
  //     }

  //     const results = items.filter((item) => {
  //       return item[index] === ruleValue;
  //     });

  //     return results.length;
  //   };
  //   countMatches(
  //     [
  //       ["phone", "blue", "pixel"],
  //       ["computer", "silver", "lenovo"],
  //       ["phone", "gold", "iphone"],
  //     ],
  //     "color",
  //     "silver"
  //   );
  //   function division() {
  //     const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
  //     for (let i = 0; i <= numbers.length - 1; i++) {
  //       let rem = numbers[i] % 3;
  //       let rem1 = numbers[i] % 5;

  //       if (rem === 0) {
  //         console.log("fizz");
  //       }
  //       if (rem1 === 0) {
  //         console.log("don't frizz");
  //       }
  //       if (rem === 0 && rem1 === 0) {
  //         console.log("fizz and don't frizz");
  //       }
  //     }
  //   }
  //   division();

  //   console.log("-------------------");

  //   function square() {
  //     const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  //     for (let i = 0; i <= number.length - 1; i++) {
  //       console.log(number[i] * number[i]);
  //     }
  //   }
  //   square();

  function staircaseTraversal(height, maxSteps) {
    // Write your code here.
    const arr = new Array(height + 1);
    let numOfWays = 0;

    arr[0] = 1;
    arr[1] = 1;

    for (let i = 2; i < arr.length; i++) {
      arr[i] = arr[i - 1] + arr[i - 2];
    }

    console.log(arr);
    return arr[height];
  }

  staircaseTraversal(4, 2);

  return (
    <div>
      <h3>name:{props.name}</h3>
      <h4>position: {props.location}</h4>
    </div>
  );
}
