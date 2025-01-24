import { TodoItemInterface } from "../../types/interface";

interface Props {
  todo: TodoItemInterface;
  toggleComplete: (id: number) => void;
}

export default function TodoItem({ todo, toggleComplete }: Props) {
  return (
    <li>
      <input type="checkbox" onChange={() => toggleComplete(todo.id)} />
      <span>{todo.text}</span>
    </li>
  );
}
