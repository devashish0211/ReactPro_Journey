type GreetProps = {
  name?: string;
};

export const TddGreet = (props: GreetProps) => {
  return <div>Hello {props.name}</div>;
};
