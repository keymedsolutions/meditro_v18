export const SmartQuestionsSection = () => {
  return (
    <section className="tw-bg-accent-50 tw-py-20 md:tw-py-28">
      <div className="tw-container tw-mx-auto tw-max-w-5xl tw-px-4 md:tw-px-8">
        <h2 className="tw-text-3xl md:tw-text-4xl tw-font-semibold tw-text-slate-900 tw-mb-10">
          Smart Questions to Ask Before Choosing Your Recruitment Partner
        </h2>

        <ul className="tw-grid tw-grid-cols-1 sm:tw-grid-cols-2 tw-gap-4">
          {[
            "How do you attract and source candidates?",
            "What technology powers your recruitment process?",
            "Can your services grow as our hiring needs grow?",
            "How will you protect and represent our employer brand?",
            "What results have you achieved for similar companies?",
            "How do you measure recruitment success?",
          ].map((q, i) => (
            <li
              key={i}
              className="tw-bg-white tw-p-5 tw-rounded-xl tw-border tw-border-accent-200"
            >
              {q}
            </li>
          ))}
        </ul>

        <p className="tw-text-slate-700 tw-text-lg tw-leading-relaxed tw-mt-10">
          At Key Medsolutions UK, transparency, data, and open communication sit
          at the core of our service.
        </p>
      </div>
    </section>
  );
};
