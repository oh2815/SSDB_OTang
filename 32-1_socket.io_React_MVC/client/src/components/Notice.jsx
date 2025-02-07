export default function Notice({ chat }) {
  // chat:{type:string;content:string
  return <div className="notice">{chat.content}</div>;
}
