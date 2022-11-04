import React, { useEffect, useState } from "react";

function Owghat() {
  const [owghat, setowghat] = useState({});
  let today = new Date();
  console.log(today.getUTCDate());

  //   useEffect(() => {
  //     const response = async () => {
  //       const initData = await fetch(
  //         "https://api.keybit.ir/owghat/?city=تهران&month=12&day=12"
  //       );
  //       if (!initData.ok) {
  //         throw new Error("something went wrong");
  //       }
  //       const data = await initData.json();
  //       setowghat(data.result);
  //     };
  //     response().catch((err) => console.log(err.message));
  //   }, []);

  return <div>Owghat</div>;
}

export default Owghat;
