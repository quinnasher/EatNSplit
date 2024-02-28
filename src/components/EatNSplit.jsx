import { useState } from "react";
import Friend from "./Friend.jsx";
import BillForm from "./BillForm.jsx";
import AddFriend from "./AddFriend.jsx";

function EatNSplit() {
  const [friendList, setFriendList] = useState([]);
  const [selectedFriend, setSelectedFriend] = useState(null);
  const handleAddFriend = (friend) => {
    setFriendList(prevState => [...prevState, friend]);
  };

  const handleFriendSelect = (index) => {
    setSelectedFriend(index);
  };

  const handleSplitBill = (newFriend, id) => {
    setFriendList(prevState => prevState.map(friend => friend.id === id ? newFriend : friend));
  };

  return (<div className={"font-sans flex gap-10 items-start justify-center text-[#383e40] mt-12"}>
    <div className={"flex flex-col"}>{
      friendList.map((friend, index) => < Friend
        onFriendSelect={handleFriendSelect}
        key={friend.id}
        friend={friend}
        index={index}
        currentFriend={selectedFriend} />)
    }
      <AddFriend onFriendSave={handleAddFriend} />
    </div>
    <BillForm onSplitBill={handleSplitBill}
              friendList={friendList}
              friend={friendList[selectedFriend]} />
  </div>);
}

export default EatNSplit;