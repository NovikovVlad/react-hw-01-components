import React from "react";
import { Profile } from "./components/Profile/Profile";
import { Statistics } from "./components/Statistics/Statistics";
import { FriendList } from "./components/FriendList/FriendList";
import { TransactionHistory } from "./components/TransactionHistory/TransactionHistory";

import user from "./mocks/user.json";
import statisticalData from "./mocks/іtatistics.json";
import friends from "./mocks/friends.json";
import transactions from "./mocks/transactions.json";

function App() {
  return (
    <div>
      <Profile {...user} />
      <Statistics title="Upload stats" stats={statisticalData} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
}

export default App;
