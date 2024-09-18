import { useState, useRef } from "react";

import TagButton from "components/TagButton";
import SuggestionList from "components/SuggestionList";

import * as S from "./styles";

export default function TagsContainer() {
  const [tags, setTags] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef(null);

  const setFocus = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleDelete = (tag) => {
    const tagValue = tag.toLowerCase();
    const newTags = [...tags].filter(
      (storedTag) => storedTag.toLowerCase() !== tagValue
    );

    setTags(newTags);
  };

  const handleAdd = (value) => {
    if (!value) return;

    const alreadyTagged = tags.some(
      (tag) => tag.toLowerCase() === value.toLowerCase()
    );

    if (alreadyTagged) return;

    const newTags = [...tags];

    newTags.push(value);

    setTags(newTags);
    setInputValue("");

    setFocus();
  };

  const handleUserEvent = (event) => {
    if (!inputValue) return;

    if (event.key === "Enter") {
      handleAdd(inputValue);
    }
  };

  const handleInputValue = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <S.Container>
      <S.Title>Auto Complete Tags</S.Title>

      <S.Wrapper onClick={setFocus}>
        {tags.map((tag) => (
          <TagButton action={handleDelete} key={tag} tag={tag}>
            {tag}
          </TagButton>
        ))}

        <S.TagInput
          aria-label="Tag Input"
          onChange={handleInputValue}
          onKeyDown={handleUserEvent}
          ref={inputRef}
          type="text"
          value={inputValue}
        />
      </S.Wrapper>

      {inputValue && (
        <SuggestionList
          inputValue={inputValue}
          tags={tags}
          handleAdd={handleAdd}
        />
      )}
    </S.Container>
  );
}
