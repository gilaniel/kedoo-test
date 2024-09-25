import { SVGProps, ComponentProps } from "react";

type LogoSvgProps = ComponentProps<"div"> & {
  topPartClassName?: string;
  midPartClassName?: string;
  botPartClassName?: string;
  svgProps?: SVGProps<SVGSVGElement>;
};

export default function LogoSvg({
  topPartClassName,
  midPartClassName,
  botPartClassName,
  svgProps,
  ...props
}: LogoSvgProps) {
  const SharedDivTag = ({ children, className }: ComponentProps<"div">) => (
    <div
      style={{ position: "absolute", width: "100%", height: "100%" }}
      className={className}
    >
      {children}
    </div>
  );

  const SharedSvgTag = ({ children }: SVGProps<SVGSVGElement>) => (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 672 852"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      overflow="visible"
      {...svgProps}
    >
      {children}
    </svg>
  );

  return (
    <div {...props} style={{ position: "relative", ...props.style }}>
      <SharedDivTag className={topPartClassName}>
        <SharedSvgTag>
          <path
            d="M1.74727e-05 413.099L313.955 199.025L3.39182e-05 0L1.74727e-05 413.099Z"
            fill="#B99653"
          />
        </SharedSvgTag>
      </SharedDivTag>
      <SharedDivTag className={midPartClassName}>
        <SharedSvgTag>
          <path
            d="M391.071 604.089L672 426L390.86 247.777L129.687 425.861L391.071 604.089Z"
            fill="#B99653"
          />
        </SharedSvgTag>
      </SharedDivTag>
      <SharedDivTag className={botPartClassName}>
        <SharedSvgTag>
          <path
            d="M314.166 652.841L1.64566e-05 438.623L0 852L314.166 652.841Z"
            fill="#B99653"
          />
        </SharedSvgTag>
      </SharedDivTag>
    </div>
  );
}
