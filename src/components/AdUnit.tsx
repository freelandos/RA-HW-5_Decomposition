export interface AdUnitProps {
  adUnit: {
    image: string
    link: string
    title: string
    text: string
  }
}

export default function AdUnit({ adUnit }: AdUnitProps) {
  const { image, link, text, title } = adUnit;

  return (
    <div className="component ad-unit">
      <img className="ad-unit__img" src={image} alt="Картинка" />
      <a className="ad-unit__link" href={link}>{title}</a>
      <p className="ad-unit__text">{text}</p>
    </div>
  )
}
