import { tddGreetProps } from "./tddGreet.types";

export const TddGreet = (props: tddGreetProps) => {
  return <div>Hello {props.name ? props.name : "Guest"}</div>;
};
