export const HiringFlexibilitySection = () => {
  return (
    <section className="tw-bg-accent-50 tw-py-20 md:tw-py-28">
      <div className="tw-container tw-mx-auto tw-max-w-6xl tw-px-4 md:tw-px-8">
        <h2 className="tw-text-3xl md:tw-text-4xl tw-font-semibold tw-text-slate-900 tw-mb-10">
          Flexibility Is Key:{" "}
          <span className="tw-text-accent-600">
            One Hiring Model Does Not Fit Everyone
          </span>
        </h2>

        <p className="tw-text-slate-700 tw-text-lg tw-leading-relaxed tw-mb-8">
          Hiring needs can change quickly. Growth, market shifts, industry
          demands, and seasonal projects all affect recruitment activity.
        </p>

        <ul className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 tw-gap-5">
          {[
            "Full-cycle Recruitment Process Outsourcing",
            "Project-based RPO for temporary or urgent hiring",
            "Modular RPO to support specific hiring challenges",
            "Talent pipelining for future workforce needs",
            "Recruitment audits and process optimisation",
            "Employer branding support",
          ].map((item, i) => (
            <li
              key={i}
              className="tw-flex tw-gap-3 tw-items-start tw-bg-white tw-p-5 tw-rounded-xl tw-border tw-border-slate-200"
            >
              <span className="tw-h-2 tw-w-2 tw-rounded-full tw-bg-accent-500 tw-mt-2" />
              <span className="tw-text-slate-800">{item}</span>
            </li>
          ))}
        </ul>

        <p className="tw-text-slate-700 tw-text-lg tw-leading-relaxed tw-mt-10">
          Our approach is always tailored, never preset, so companies receive
          exactly what they need, when they need it.
        </p>
      </div>
    </section>
  );
};
