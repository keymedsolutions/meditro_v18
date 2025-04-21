import { CardContent ,Card} from "@/ui/card";
import Image from "next/image";
import { useRef, useEffect } from "react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  delay?: number;
  image?: string;
  link?: string;
}

export default function BenefitsCard({
  title,
  description,
  icon,
  color,
  delay = 0,
  image,
  link = "#",
}: ServiceCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          if (cardRef.current) {
            cardRef.current.style.opacity = "1";
            cardRef.current.style.transform = "translateY(0)";
          }
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className="tw-relative tw-group tw-transition-all tw-duration-700 tw-overflow-hidden"
      style={{
        opacity: 0,
        transform: "translateY(20px)",
        transitionDelay: `${delay}ms`,
      }}
    >
      <Card className="tw-h-full tw-overflow-hidden tw-border-none tw-shadow-lg group-hover:tw-shadow-2xl tw-transition-transform tw-duration-500 group-hover:-tw-translate-y-2 tw-rounded-2xl">
        <div
          className="tw-absolute tw-top-0 tw-left-0 tw-w-full tw-h-2 group-hover:tw-h-3 tw-transition-all tw-duration-300"
          style={{ backgroundColor: color }}
        ></div>

        <div
          className="tw-absolute tw-top-0 tw-right-0 tw-w-40 tw-h-40 tw-rounded-full tw-opacity-10 -tw-translate-x-20 -tw-translate-y-20"
          style={{ backgroundColor: color }}
        ></div>

        <CardContent className="tw-p-6 tw-relative tw-z-10 tw-pb-10 tw-mt-2">
          {/* Optional Image */}
          {image && (
            <div className="tw-flex tw-justify-center tw-mb-4">
              <Image
                src={image}
                alt={title}
                height={200}
                width={200}
                loading="lazy"
                className="tw-w-full tw-object-contain tw-rounded-lg"
              />
            </div>
          )}

          <div className="tw-flex tw-items-start tw-gap-4 tw-mb-4 tw-mt-5">
            <div
              className="tw-flex tw-items-center tw-justify-center tw-w-12 tw-h-12 tw-rounded-lg tw-p-4 tw-shadow-lg tw-transition-all tw-duration-300 group-hover:tw-rotate-6 group-hover:tw-scale-110"
              style={{ backgroundColor: color, color: "white" }}
            >
              {icon}
            </div>
            <h3
              className="tw-font-semibold tw-text-xl tw-mt-1 tw-transition-transform tw-duration-300 group-hover:tw-translate-x-1"
              style={{ color }}
            >
              {title}
            </h3>
          </div>

          <p className="tw-text-foreground/70 tw-text-left tw-relative tw-z-10 tw-ml-16">
            {description}
          </p>

          {/* Learn More Link */}
          <a
            href={link}
            className="tw-inline-flex tw-items-center tw-gap-2 tw-mt-6 tw-ml-16 tw-text-sm tw-font-medium tw-text-blue-600 hover:tw-text-blue-800 tw-transition-all group-hover:tw-translate-x-1"
          >
            Learn More
            <span className="tw-transition-transform group-hover:tw-translate-x-1">→</span>
          </a>

          <div
            className="tw-absolute tw-bottom-0 tw-right-0 tw-w-20 tw-h-20 tw-opacity-5 tw-translate-x-5 tw-translate-y-5 tw-rounded-full"
            style={{ backgroundColor: color }}
          ></div>
        </CardContent>
      </Card>
    </div>
  );
}
