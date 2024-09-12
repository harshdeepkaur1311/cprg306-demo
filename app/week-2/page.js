import Head from "next/head";
import Heading from "./heading.js";

export default function page(){
    let a = 5;
    let b = 10;
    let c = a + b;
    return(
      <main>
        <Heading/>
        <p>The sum  is {c}. </p>

      </main>
    )
  }