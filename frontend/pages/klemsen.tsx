import * as React from "react";
import { useState } from "react";
import { prisma } from "../prisma";

/* 
export const getServerSideProps = async () => {
	const users = await prisma.user.findMany()
	return {
		props: {
			data
		}
	}
}
*/

function Cornelius() {
  const [klemens, setklemens] = useState("klemens");

  return (
    <>
      <div>
        <p>Klemsen er en bøsset sølvfisk</p>
        <button onClick={() => setklemens(klemens + "s")}>Click me!</button>
        {useState("klemens")[0]}
        {klemens}
      </div>
    </>
  );
}

export default Cornelius;
