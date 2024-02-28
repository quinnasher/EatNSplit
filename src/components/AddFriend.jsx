import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function AddFriend({ onFriendSave }) {
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("https://i.pravatar.cc/48?u=118836");
  const [isAdd, setIsAdd] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!name || !imageUrl) return;
    setIsAdd(false);
    const id = uuidv4().toString();
    onFriendSave({ name, image: `${imageUrl}?=${id}`, balance: 0, id });

    // clear input
    setName("");
    setImageUrl("https://i.pravatar.cc/48?u=118836");

  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleImgUrlChange = (event) => {
    setImageUrl(event.target.value);
  };
  return (<div className={"mt-8"}>
    <button onClick={() => setIsAdd(true)}
            className={`pBtn ml-auto flex flex-col justify-center ${isAdd ? "hidden" : ""}`}>Add Friend
    </button>
    <form onSubmit={handleSubmit} className={`relative form rounded-lg p-4 gap-4 ${isAdd ? "" : "hidden"}`}>
      <fieldset className={"form-field"}>
        <label>🧑🏿‍🤝‍🧑🏻 Friend name</label>
        <input type="text" onChange={handleNameChange} value={name} className={"form-input w-52"} />
      </fieldset>
      <fieldset className={"form-field"}>
        <label>🖼️ Image URL</label>
        <input value={imageUrl} onChange={handleImgUrlChange} type="text" className={"form-input w-52"} />
      </fieldset>
      <button className={"pBtn form-input w-52 ml-auto"}>Add</button>
      <button onClick={() => setIsAdd(false)} className={"absolute -bottom-14 right-0 pBtn"}>Close</button>
    </form>
  </div>);
}

export default AddFriend;