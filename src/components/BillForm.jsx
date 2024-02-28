import { useState } from "react";

function BillForm({ friend, onSplitBill }) {
  const [totalBill, setTotalBill] = useState("");
  const [billPayer, setBillPayer] = useState(0);
  const [myBill, setMyBill] = useState("");
  const [friendBill, setFriendBill] = useState("");

  if (friend === null || friend === undefined) return (<div className={"w-[500px] h-[432px]"}>

  </div>);


  let newFriend;
  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (!totalBill || !friendBill || !myBill) return;

    if (Number(myBill) + Number(friendBill) !== Number(totalBill)) {
      alert("Shared bill is not equal to Total bill");
      return;
    }
    if (Number(billPayer) === 0) {
      newFriend = { ...friend, balance: friend.balance - Number(friendBill) };
    } else {
      newFriend = { ...friend, balance: friend.balance + Number(myBill) };
    }


    onSplitBill(newFriend, friend.id);

    setTotalBill("");
    setBillPayer(0);
    setMyBill("");
    setFriendBill("");
  };

  const handleTotalBillChange = (event) => {
    setTotalBill((event.target.value));
  };

  const handleMyBillChange = (event) => {
    setMyBill((event.target.value));
  };

  const handleFriendBillChange = (event) => {
    setFriendBill((event.target.value));
  };

  const handleBillPayerChange = (event) => {
    setBillPayer((event.target.value));
  };

  return (<div className={"bg-bgColor py-8 px-16 rounded-lg"}>
    <h2 className={"text-4xl  uppercase font-bold mb-8"}>Split a bill with {friend.name}</h2>
    <form className={"form"} onSubmit={handleFormSubmit}>
      <fieldset className={"flex justify-between items-center"}>
        <label>💰 Bill Value</label>
        <input type="text" value={totalBill} onChange={handleTotalBillChange} className={"form-input"} />
      </fieldset>
      <fieldset className={"form-field"}>
        <label htmlFor="">🙍Your expense</label>
        <input type="text" value={myBill} onChange={handleMyBillChange} className={"form-input"} />
      </fieldset>
      <fieldset className={"form-field"}>
        <label htmlFor="">🧑🏿‍🤝‍🧑🏻 {friend.name} Expense</label>
        <input type="text" value={friendBill} onChange={handleFriendBillChange} className={"form-input bg-[#f6f1e2]"} />
      </fieldset>
      <fieldset className={"form-field"}>
        <label>Who is paying the bill?</label>
        <select value={billPayer} onChange={handleBillPayerChange} className={"form-input bg-white"} name="" id="">
          <option value="0">You</option>
          <option value="1">{friend.name}</option>
        </select>
      </fieldset>
      <button className={"pBtn  ml-auto"}>spit Bill</button>
    </form>
  </div>);
}

export default BillForm;