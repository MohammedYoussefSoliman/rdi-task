import React from "react";
import CSS from "csstype";
import Wrapper from "./styles";

interface PropsType extends React.AllHTMLAttributes<any> {
  children: React.ReactNode;
  width?: CSS.Property.Width;
  fullWidth?: boolean;
  height?: CSS.Property.Height;
  direction?: CSS.Property.FlexDirection;
  justify?: CSS.Property.JustifyContent;
  align?: CSS.Property.AlignItems;
  gap?: CSS.Property.Gap;
  flex?: CSS.Property.Flex;
  className?: string;
}

const Flex = React.forwardRef(
  (
    {
      children,
      width,
      fullWidth,
      height,
      direction,
      justify,
      align,
      gap,
      flex,
      className,
    }: PropsType,
    ref: React.ForwardedRef<HTMLDivElement>,
  ) => {
    return (
      <Wrapper
        ref={ref}
        width={width}
        fullWidth={fullWidth}
        height={height}
        direction={direction}
        justify={justify}
        align={align}
        gap={gap}
        flex={flex}
        className={className}
      >
        {children}
      </Wrapper>
    );
  },
);

Flex.defaultProps = {
  width: "fit-content",
  direction: "row",
};

export default Flex;
