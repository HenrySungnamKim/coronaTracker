import React from "react";
import * as dateFns from "date-fns";
const index = () => {
  return <div>{dateFns.format(new Date(), "yyyy-MM-dd")}</div>;
};

export default index;
