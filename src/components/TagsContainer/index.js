import { useState, useRef } from "react";

import TagButton from "../TagButton";
import SuggestionList from "../SuggestionList";

import { deepClone } from "../../utils/arrays";

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
    const newTags = deepClone(tags).filter(
      (storedTag) => storedTag.toLowerCase() !== tagValue
    );

    setTags(newTags);
  };

  const handleUserEvent = (event) => {
    if (!inputValue) return;

    if (event.key === "Enter") {
      const alreadyTagged = tags.some(
        (tag) => tag.toLowerCase() === inputValue.toLowerCase()
      );

      if (alreadyTagged) return;

      const newTags = deepClone(tags);

      newTags.push(inputValue);

      setTags(newTags);
      setInputValue("");

      setFocus();
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

      <SuggestionList inputValue={inputValue} />
    </S.Container>
  );
}
