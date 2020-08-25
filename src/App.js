import React from "react";
import { Profile } from "./Profile/Profile";
import { Statistics } from "./Statistics/Statistics";

import user from "./mocks/user.json";
import statisticalData from "./mocks/іtatistics.json";

function App() {
  return (
    <div>
      <Profile {...user} />
      <Statistics title="Upload stats" stats={statisticalData} />
    </div>
  );
}

export default App;
