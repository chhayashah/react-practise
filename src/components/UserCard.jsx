import React,{useState} from "react"

const UserCard = (props) => {
    const [count, setCount] = useState(0);
    const[namee, setNamee] = useState("");

    return (
      <div>
            <p>Name: {props.name}</p>
            <p>Role: {props.role}</p>
            <p>Experience: {props.experience}</p>

            <p>count:{count}</p>
            {/* <button onClick={() => setCount(count+1)}>Increment</button> */}
            <button onClick={() => setCount(prev => prev + 1)}>Increment</button>
            <input type="text" value={namee} onChange={(e) => setNamee(e.target.value)}
                placeholder="enter name"
            />
            <p>{namee}</p>
      </div>
    );
}
export default UserCard;




// destructuring
// const UserCard = ({ name, role, experience }) => {
//   return (
//     <div>
//       <p>Name: {name}</p>
//       <p>Role: {role}</p>
//       <p>Experience: {experience}</p>
//     </div>
//   );
// };

// export default UserCard;