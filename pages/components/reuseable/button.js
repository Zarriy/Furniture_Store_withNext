export default function Button(props) {
  console.log(props);
  return <button className={props.class}>{props.title}</button>;
}
