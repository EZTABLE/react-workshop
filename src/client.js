import React from "react";
import History from "./component/history";

React.render(
    <History
        restaurantId={619}
        startDate="2015-08-01"
        endDate="2015-08-31"
        />,
    document.getElementById("wrapper")
);
