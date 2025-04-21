import { AlertTriangle, CheckCircle, XCircle } from "lucide-react";
import { useState } from "react";

export default function DidYouKnowBox({ setImage }: { setImage: (image: string) => void }) {
  const [selected, setSelected] = useState<"fail" | "success" | null>(null);

  return (
    <div className="tw-bg-gradient-to-r tw-from-white tw-to-cyan/100 tw-border tw-border-orange-100 tw-rounded-xl tw-p-6 tw-mt-4 tw-container tw-relative tw-overflow-hidden">
      <div className="tw-absolute tw-top-0 tw-right-0 tw-w-24 tw-h-24 tw-bg-orange-200/20 tw-rounded-full -tw-translate-y-1/2 tw-translate-x-1/3"></div>

      <h5 className="tw-text-orange-800 tw-mb-3 tw-flex tw-items-center tw-gap-2 tw-relative tw-z-10 tw-text-lg tw-font-semibold">
        <AlertTriangle className="tw-text-red-500 tw-w-5 tw-h-5" />
        Did You Know?
      </h5>

      <div
        className={`feature-container feature-bx1 feature3 tw-mb-3 tw-cursor-pointer tw-transition-all ${
          selected === "fail" ? "tw-border !tw-bg-red-50" : ""
        }`}
        onClick={() => {
            setSelected("fail");
            setImage("/images/gallery/pic3.jpg");
        }}
      >
        <div className="icon-md">
          <span className="icon-cell">
            <XCircle className="tw-text-red-500 tw-w-5 tw-h-5 tw-flex-shrink-0" />
          </span>
        </div>
        <div className="icon-content">
          <h4 className="ttr-title !tw-font-normal">
            The provider credentialing and billing failure rate for traditional agencies is{" "}
            <span className="tw-font-semibold tw-text-orange-800">50%</span>.
          </h4>
        </div>
      </div>

      <div
        className={`feature-container feature-bx1 feature2 tw-cursor-pointer tw-transition-all ${
          selected === "success" ? "!tw-bg-green-50" : ""
        }`}
        onClick={() =>{
            setSelected("success");
            setImage("/images/gallery/pic2.jpg");
        }}
      >
        <div className="icon-md">
          <span className="icon-cell">
            <CheckCircle className="tw-text-green-500 tw-w-5 tw-h-5 tw-flex-shrink-0" />
          </span>
        </div>
        <div className="icon-content">
          <h4 className="ttr-title !tw-font-normal">
            With denial management assistance included, our tried-and-true billing procedure has a{" "}
            <span className="tw-font-semibold tw-text-orange-800">97% first-pass claim success rate!</span>.
          </h4>
        </div>
      </div>
    </div>
  );
}
