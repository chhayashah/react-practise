const UserCard = (props) => {
    return (
      <div>
            <p>Name: {props.name}</p>
            <p>Role: {props.role}</p>
            <p>Experience: {props.experience}</p>
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