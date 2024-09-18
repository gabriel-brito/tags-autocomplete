import { useMemo } from "react";

import data from "mocks/suggestions";

import * as S from "./styles";

export default function SuggestionList({
  handleAdd,
  inputValue = "",
  tags = [],
}) {
  const filteredData = useMemo(() => {
    return data.filter((suggestion) => {
      const isAlreadyDeclared = tags.some(
        (tag) => tag.toLowerCase() === suggestion.toLowerCase()
      );

      const matchedValue = inputValue
        ? suggestion.toLowerCase().includes(inputValue.toLowerCase())
        : true;

      return matchedValue && !isAlreadyDeclared;
    });
  }, [inputValue, tags]);

  const hasFilteredData = filteredData.length > 0;

  return (
    <S.List>
      {hasFilteredData ? (
        filteredData.map((suggestion) => (
          <S.ListItem key={suggestion}>
            <S.ListAction
              action={handleAdd}
              showCloseIcon={false}
              tag={suggestion}
            >
              {suggestion}
            </S.ListAction>
          </S.ListItem>
        ))
      ) : (
        <S.ListItem>No data found.</S.ListItem>
      )}
    </S.List>
  );
}
