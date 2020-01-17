import { generateMedia } from "styled-media-query";

export const media = generateMedia({
  huge: "1440px",
  large: "1170px",
  medium: "768px",
  small: "450px",
  smallest: "250px"
});

/**
* 
example 
${media.lessThan("large")`
text-align: center;
`}
*/

//* The media has 3 main methods to generate media queries:*/
//? lessThan(breakpoint | size)
//? greaterThan(breakpoint | size)
//? between(firstBreakpoint | firstSize, lastBreakpoint | lastSize)
