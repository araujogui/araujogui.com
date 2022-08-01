import { ListItem } from "@chakra-ui/react";

const SkillsItem = ({ children }) => {
  return (
    <ListItem
      _before={{
        content: '"\\2022"',
        marginRight: 2,
        color: "#6B84BC",
      }}
    >
      {children}
    </ListItem>
  );
};

export default SkillsItem;
