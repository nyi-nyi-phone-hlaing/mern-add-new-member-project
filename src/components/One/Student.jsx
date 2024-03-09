import "./student.css";
const Student = (props) => {
  let { name, live } = props;
  let showOption = () => {
    console.log(name);
  };
  return (
    <li onClick={showOption}>
      <p>Name : {name}</p>
      <p>Live : {live}</p>
    </li>
  );
};

export default Student;
