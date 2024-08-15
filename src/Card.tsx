import { forwardRef } from "react";
import { styled } from "goober";

export type CardProps = JSX.IntrinsicElements["div"] & {
  name: string;
  description: string;
};

const STitle = styled("div")`
  grid-area: title;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const SFooter = styled("div")`
  grid-area: action;
  button {
    width: 100%;
  }
`;

const SMessage = styled("div")`
  grid-area: message;

  & > & + & {
    margin-top: 8px;
  }
`;

export const Card = forwardRef<HTMLDivElement, CardProps>(function Card(
  { name, description },
  ref
) {
  return (
    <div ref={ref}>
      <STitle>{name}</STitle>
      <SMessage>{description}</SMessage>
      <SFooter>
        <a href="#">Open a thing</a>
      </SFooter>
    </div>
  );
});
