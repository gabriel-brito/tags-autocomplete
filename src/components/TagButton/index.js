import * as S from "./styles";

export default function TagButton({
  action = () => {},
  children,
  className,
  showCloseIcon = true,
  tag,
}) {
  return (
    <S.TagButton
      aria-label={`${tag} buttonn tag`}
      className={className} // Obligatory in order to reuse with Styled-Components
      onClick={() => action(tag)}
    >
      {children} {showCloseIcon && <S.Icon>X</S.Icon>}
    </S.TagButton>
  );
}
