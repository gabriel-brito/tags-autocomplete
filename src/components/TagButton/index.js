import * as S from "./styles";

export default function TagButton({ tag, action, children }) {
  return (
    <S.TagButton onClick={() => action(tag)} aria-label={`${tag} buttonn tag`}>
      {children} <S.Icon>X</S.Icon>
    </S.TagButton>
  );
}
