export interface SearchExampleProps {
  randomSearchQuery: string
}

export default function SearchExample({ randomSearchQuery }: SearchExampleProps ) {
  return (
    <div className="component search-example">Пример поискового запроса {randomSearchQuery}</div>
  );
}
