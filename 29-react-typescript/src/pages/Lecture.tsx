import Container from "../components/lecture/Container";
import EventObj from "../components/lecture/EventObj";
import {
  PropsType1,
  PropsType2,
  PropsType3,
} from "../components/lecture/PropsType";
import SetText from "../components/lecture/SetText";
import TodoList from "../components/lecture/TodoList";

export default function Lecture() {
  return (
    <main>
      <PropsType1 name="taewon" />
      <PropsType2 width="100px" color="red" height="100px" />
      <PropsType3 width="100px" height="50px" text="hi" />
      <PropsType3 width="100px" color="red" height="50px" text="hi" />

      <Container>ddd</Container>
      <SetText />
      <EventObj />
      <TodoList />
    </main>
  );
}
