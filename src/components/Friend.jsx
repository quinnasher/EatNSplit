function Friend({ friend, onFriendSelect, index, currentFriend }) {
  const isActive = currentFriend === index;
  const handleClick = () => {
    onFriendSelect(isActive ? null : index);
  };


  return (
    <section className={`flex items-center gap-5 py-4 px-4  rounded-lg ${isActive ? "bg-bgColor" : ""}`}>
      <img className={"rounded-full"} src={friend.image} alt="" />
      <div className={" flex flex-col items-stretch"}>
        <h2 className={" text-2xl font-bold"}>{friend.name}</h2>
        {friend.balance < 0 && <p className={"text-pGreen"}>{friend.name} owes you ${Math.abs(friend.balance)}</p>}
        {friend.balance > 0 && <p className={"text-pRed"}>You owe {friend.name} ${friend.balance}</p>}
        {friend.balance === 0 && <p className={""}>You and {friend.name} are even</p>}
      </div>
      <button onClick={handleClick} className={"pBtn ml-auto"}>{isActive ? "Close" : "Select"}</button>
    </section>);
}

export default Friend;