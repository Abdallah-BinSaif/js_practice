/**
 * P1 ---->
 */
const colors = {
    red: "#ff0000",
    green: "#00ff00",
    blue: "#0000ff",
    "golden rod": "#daa520"
};
/**
 * //   Dot Notation
 * console.log(colors['red'])
 *
 * //      Bracket Notation 
 * */
// console.log(colors['golden rod'])

/**
 * //   Using for loop
 for (const key in colors) {
     console.log(`${key} | ${colors[key]}`)
 }
 */
const values = Object.entries(colors)
console.log(values)


/**
 * P2 ---->
 */


