import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  name: string;
  description: string;
  platforms: string[];
  icon?: string;
  href?: string;
  comingSoon?: boolean;
}

export default function ProductCard({
  name,
  description,
  platforms,
  icon,
  href,
  comingSoon = false,
}: ProductCardProps) {
  const content = (
    <>
      {icon && (
        <div className="mb-4">
          <Image
            src={icon}
            alt={name}
            width={48}
            height={48}
            className="rounded-xl"
          />
        </div>
      )}
      <h3 className="font-heading text-2xl font-semibold mb-2">{name}</h3>
      <p className="text-text-secondary leading-relaxed mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {platforms.map((platform) => (
          <span
            key={platform}
            className="text-xs font-medium tracking-[0.04em] px-2 py-1 bg-surface-hover rounded-md text-text-secondary"
          >
            {platform}
          </span>
        ))}
        {comingSoon && (
          <span className="text-xs font-medium tracking-[0.04em] px-2 py-1 bg-accent-muted rounded-md text-accent">
            Coming Soon
          </span>
        )}
      </div>
    </>
  );

  const className =
    "block bg-surface border border-border rounded-2xl p-8 transition-all duration-300 ease hover:border-border-hover hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(0,0,0,0.3)]";

  if (href) {
    return (
      <Link href={href} className={className}>
        {content}
      </Link>
    );
  }

  return <div className={className}>{content}</div>;
}
