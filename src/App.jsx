import { useState } from "react";
import Form from "./components/One/Form";
import Students from "./components/One/Student";
import "./index.css";
const App = () => {
  const [students, setStudents] = useState([]);

  let addNewMember = (member) => {
    setStudents([...students, member]);
  };

  let memberSection = <p>No member yet!</p>;

  if (students.length > 0) {
    memberSection = students.map((student, index) => {
      return <Students key={index} name={student.name} live={student.live} />;
    });
  }

  return (
    <section className='app'>
      <ul className='member-list'>{memberSection}</ul>
      <Form addNewMember={addNewMember} />
    </section>
  );
};

export default App;
