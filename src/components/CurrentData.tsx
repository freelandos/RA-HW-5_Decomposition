export interface CurrentDateProps {
  date: string
}

export default function CurrentDate({ date }: CurrentDateProps) {
  return (
    <div className="component current-date">Текущая дата: {date}</div>
  );
}