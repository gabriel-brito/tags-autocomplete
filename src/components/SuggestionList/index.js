import data from "../../mocks/suggestions";

export default function SuggestionList({ inputValue = "" }) {
  if (!inputValue) return;

  return (
    <ul>
      {data.map((suggestion) => (
        <li key={suggestion}>{suggestion}</li>
      ))}
    </ul>
  );
}
