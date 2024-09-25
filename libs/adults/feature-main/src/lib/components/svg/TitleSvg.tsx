import { SVGProps, ComponentProps } from "react";

type TitleSvgProps = ComponentProps<"div"> & {
  kClassName?: string;
  eClassName?: string;
  dClassName?: string;
  o1ClassName?: string;
  o2ClassName?: string;
  svgProps?: SVGProps<SVGSVGElement>;
};

export default function TitleSvg({
  kClassName,
  eClassName,
  dClassName,
  o1ClassName,
  o2ClassName,
  svgProps,
  ...props
}: TitleSvgProps) {
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
      viewBox="0 0 108 21"
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
      <SharedDivTag className={kClassName}>
        <SharedSvgTag>
          <path
            d="M2.89286 0.517822H0V20.7678H2.89286V0.517822Z M18.3214 0.517822H14.4643L4.33929 10.6428L14.4643 20.7678H18.3214L8.19643 10.6428L18.3214 0.517822Z"
            fill="#B99653"
          />
        </SharedSvgTag>
      </SharedDivTag>
      <SharedDivTag className={eClassName}>
        <SharedSvgTag>
          <path
            d="M38.5713 0.517822H21.2142V20.7678H38.5713V17.875H24.107V12.0893H37.1249V9.19639H24.107V3.41068H38.5713V0.517822Z"
            fill="#B99653"
          />
        </SharedSvgTag>
      </SharedDivTag>
      <SharedDivTag className={dClassName}>
        <SharedSvgTag>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M51.5896 20.7678H41.4646V0.517822H51.5896C57.1815 0.517822 61.7146 5.05092 61.7146 10.6428C61.7146 16.2347 57.1815 20.7678 51.5896 20.7678ZM51.1075 3.42651V3.41068H44.3575V17.875H51.1075V17.8591C51.2668 17.8696 51.4276 17.875 51.5896 17.875C55.5838 17.875 58.8217 14.637 58.8217 10.6428C58.8217 6.64861 55.5838 3.41068 51.5896 3.41068C51.4276 3.41068 51.2668 3.41604 51.1075 3.42651Z"
            fill="#B99653"
          />
        </SharedSvgTag>
      </SharedDivTag>
      <SharedDivTag className={o1ClassName}>
        <SharedSvgTag>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M74.7325 20.7678C80.3243 20.7678 84.8574 16.2347 84.8574 10.6428C84.8574 5.05094 80.3243 0.517822 74.7325 0.517822C69.1406 0.517822 64.6075 5.05094 64.6075 10.6428C64.6075 16.2347 69.1406 20.7678 74.7325 20.7678ZM74.7325 17.875C78.7267 17.875 81.9646 14.637 81.9646 10.6428C81.9646 6.64862 78.7267 3.41068 74.7325 3.41068C70.7383 3.41068 67.5003 6.64862 67.5003 10.6428C67.5003 14.637 70.7383 17.875 74.7325 17.875Z"
            fill="#B99653"
          />
        </SharedSvgTag>
      </SharedDivTag>
      <SharedDivTag className={o2ClassName}>
        <SharedSvgTag>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M97.8741 20.7678C103.466 20.7678 107.999 16.2347 107.999 10.6428C107.999 5.05094 103.466 0.517822 97.8741 0.517822C92.2823 0.517822 87.7492 5.05094 87.7492 10.6428C87.7492 16.2347 92.2823 20.7678 97.8741 20.7678ZM97.8741 17.875C101.868 17.875 105.106 14.637 105.106 10.6428C105.106 6.64862 101.868 3.41068 97.8741 3.41068C93.88 3.41068 90.642 6.64862 90.642 10.6428C90.642 14.637 93.88 17.875 97.8741 17.875Z"
            fill="#B99653"
          />
        </SharedSvgTag>
      </SharedDivTag>
    </div>
  );
}
