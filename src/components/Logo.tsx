export interface LogoProps {
  image: string
}

export default function Logo({ image }: LogoProps) {
  return (
    <div className="component logo">
      <img src={image} alt="" />
    </div>
  );
}