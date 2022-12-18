export default function Button(props) {
  return (
    <button className={props.class} onClick={props.clickHandler}>
      {props.title}
    </button>
  );
}
