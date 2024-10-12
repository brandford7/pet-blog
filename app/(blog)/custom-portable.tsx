import Image from "next/image";
import {
  PortableText,
  type PortableTextComponents,
  type PortableTextBlock,
} from "next-sanity";

export default function CustomPortableText({
  className,
  value,
}: {
  className?: string;
  value: PortableTextBlock[];
}) {
  const components: PortableTextComponents = {
    block: {
      h5: ({ children }) => (
        <h5 className="mb-2 text-sm font-semibold">{children}</h5>
      ),
      h6: ({ children }) => (
        <h6 className="mb-1 text-xs font-semibold">{children}</h6>
      ),
    },
    marks: {
      link: ({ children, value }) => {
        return (
          <a
            href={value?.href}
            className="text-primary hover:underline"
            rel="noreferrer noopener"
          >
            {children}
          </a>
        );
      },
    },
    types: {
      image: ({ value }) => {
        if (!value?.asset?._ref) {
          return null;
        }
        return (
          <div className="relative my-6 h-64 w-full overflow-hidden rounded-lg">
            <Image
              className="object-cover"
              src={value.asset._ref}
              alt={value.alt || " "}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        );
      },
    },
  };

  return (
    <div
      className={["prose dark:prose-invert", className]
        .filter(Boolean)
        .join(" ")}
    >
      <PortableText components={components} value={value} />
    </div>
  );
}
