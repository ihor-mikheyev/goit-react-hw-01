import Profile from '../Profile/Profile'
import FriendList from '../FriendList/FriendList'
import TransactionHistory from '../TransactionHistory/TransactionHistory'

import userData from "../../userData.json"
import friends from "../../friends.json"
import transactions from "../../transactions.json"

import  "../TransactionHistory/TransactionHistory.module.css"
import './App.css'

function App() {
  return (
    <>
      < Profile user={userData} />
      <FriendList list={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
}

export default App
