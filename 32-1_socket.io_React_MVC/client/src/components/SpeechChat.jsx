export default function SpeechChat({ chat }) {
  // chat:{content, type, name?, isDm?}
  return (
    <>
      <div className={`speech ${chat.type} ${chat.isDm ? "dm" : ""}`}>
        {chat.type == "other" && <span className="nickname">{chat.name}</span>}
        <span className="msg-box">{chat.content}</span>
      </div>
    </>
  );
}
