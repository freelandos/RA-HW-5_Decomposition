import NewsItem from './NewsItem';
import NewsNav from './NewsNav';

export interface Item {
  id: number
  name: string
  icon: string
  link: string
}

export interface NewsProps {
  news: Item[]
}

export default function News({ news }: NewsProps) {
  return (
    <div className='news'>
      <NewsNav />
      <ul className="component news__stories">
        {
          news.map(item => <NewsItem key={item.id} name={item.name} icon={item.icon} link={item.link} />)
        }
      </ul>
    </div>
  )
}