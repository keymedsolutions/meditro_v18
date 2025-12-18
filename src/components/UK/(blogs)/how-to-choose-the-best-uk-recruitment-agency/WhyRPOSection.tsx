export const WhyRPOSection = () => {
  return (
    <section className="tw-bg-white tw-py-20 md:tw-py-28">
      <div className="tw-container tw-mx-auto tw-max-w-5xl tw-px-4 md:tw-px-8">
        <h2 className="tw-text-3xl md:tw-text-4xl tw-font-semibold tw-text-slate-900 tw-mb-6">
          Why More Companies Are Choosing{" "}
          <span className="tw-text-accent-600">RPO</span> Over Traditional Agencies
        </h2>

        <p className="tw-text-slate-700 tw-text-lg tw-leading-relaxed tw-mb-8">
          The recruitment process outsourcing industry has grown significantly,
          largely because organisations want more than transactional hiring.
        </p>

        <ul className="tw-space-y-3">
          {[
            "Lower cost per hire",
            "Faster time-to-fill",
            "Better candidate quality",
            "Stronger employer brand consistency",
            "A long-term, trusted partnership",
            "Greater transparency and accountability",
            "Data and analytics that guide smarter hiring decisions",
          ].map((item, i) => (
            <li key={i} className="tw-flex tw-gap-3">
              <span className="tw-text-accent-500">●</span>
              <span className="tw-text-slate-800">{item}</span>
            </li>
          ))}
        </ul>

        <p className="tw-text-slate-700 tw-text-lg tw-leading-relaxed tw-mt-8">
          Traditional agencies are often short-term focused. RPO is about
          long-term hiring success, stability, and strategy.
        </p>
      </div>
    </section>
  );
};
