interface IComponentProps {
  prop: string;
}

export const ComponentTemplate = ({ prop }: IComponentProps) => {
  return <div>{prop}</div>;
};
