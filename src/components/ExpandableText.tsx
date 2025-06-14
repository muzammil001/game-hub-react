import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";
interface Props {
  children: string;
}
const ExpandableText = ({ children }: Props) => {
  const [expanded, setExpanded] = useState(false);
  const limit = 1500;
  if (!children) return null;
  if (children.length <= limit) return <Text>{children}</Text>;
  const summary = expanded ? children : children.substring(0, limit) + "...";
  return (
    <Text>
      {summary}
      <Button
        fontWeight={"bold"}
        colorScheme="yellow"
        size={"xs"}
        marginLeft={2}
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? "Show Less" : "Read More"}
      </Button>
    </Text>
  );
};

export default ExpandableText;
