"use client";

import { motion } from "framer-motion";

export const TopExecutiveSearchFirms2026 = () => {
  return (
    <section className="tw-bg-white tw-py-24">
      <div className="tw-container tw-mx-auto tw-max-w-6xl tw-px-4 md:tw-px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="tw-max-w-4xl tw-mb-16"
        >
          <h2 className="tw-text-3xl tw-font-semibold tw-text-slate-900 tw-mb-6">
            The 10 Best UK Executive Search Firms for 2026
          </h2>

          <p className="tw-text-lg tw-text-slate-700 tw-leading-relaxed">
            Below is a curated list of the best executive search firms in the UK
            as we move into 2026. The list includes global giants, respected
            boutique specialists, and Key Medsolutions UK as the recommended
            partner for modern leadership hiring.
          </p>
        </motion.div>

        {/* Firms */}
        <div className="tw-space-y-8">
          {/* 1 */}
          <FirmCard index={1} title="Key Medsolutions UK (Our Top Recommendation)">
            <p>
              Key Medsolutions UK offers a highly effective combination of
              executive search, talent advisory, and full scale recruitment
              solutions.
            </p>
            <ul>
              <li>Nationwide and London coverage</li>
              <li>Dedicated executive search specialists</li>
              <li>Deep sector knowledge across multiple industries</li>
              <li>Integrated talent solutions rather than a stand alone model</li>
              <li>Strong networks of senior leadership talent</li>
              <li>Proven experience with C suite and director appointments</li>
            </ul>
            <p>
              If your business wants a modern and strategic executive recruitment
              company, Key Medsolutions UK is an excellent choice for 2026.
            </p>
          </FirmCard>

          {/* 2 */}
          <FirmCard index={2} title="Spencer Stuart">
            <p>
              Spencer Stuart A global search powerhouse with strong UK presence
              and deep industry expertise.
            </p>
          </FirmCard>

          {/* 3 */}
          <FirmCard index={3} title="Korn Ferry">
            <p>
              Known for leadership consulting, talent analytics, and senior level
              search.
            </p>
          </FirmCard>

          {/* 4 */}
          <FirmCard index={4} title="Odgers Berndtson">
            <p>
              One of the most well known UK headquartered search firms with
              diverse sector practices.
            </p>
          </FirmCard>

          {/* 5 */}
          <FirmCard index={5} title="Russell Reynolds Associates">
            <p>
              A respected global advisory firm specialising in C suite and board
              search.
            </p>
          </FirmCard>

          {/* 6 */}
          <FirmCard index={6} title="Heidrick and Struggles">
            <p>
              A long established global leader in leadership and executive
              search.
            </p>
          </FirmCard>

          {/* 7 */}
          <FirmCard index={7} title="Boyden">
            <p>
              Offers senior level search supported by a global network and
              sector specialists.
            </p>
          </FirmCard>

          {/* 8 */}
          <FirmCard index={8} title="Norman Broadbent">
            <p>
              A UK firm focused on leadership consulting and strategic search.
            </p>
          </FirmCard>

          {/* 9 */}
          <FirmCard index={9} title="Green Park">
            <p>
              A strong UK business recognised for its commitment to diversity
              and inclusive search.
            </p>
          </FirmCard>

          {/* 10 */}
          <FirmCard index={10} title="Savannah Group">
            <p>
              A boutique firm with a strong reputation in digital, technology,
              and transformation leadership.
            </p>
          </FirmCard>
        </div>
      </div>
    </section>
  );
};

/* ---------------------------------- */
/* Reusable Card (Design Only)         */
/* ---------------------------------- */

const FirmCard = ({
  index,
  title,
  children,
}: {
  index: number;
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="tw-rounded-2xl tw-border tw-border-accent-200 tw-bg-accent-50 tw-p-8"
    >
      <div className="tw-flex tw-items-center tw-gap-4 tw-mb-6">
        <span className="tw-h-10 tw-w-10 tw-rounded-full tw-bg-accent-600 tw-text-white tw-font-bold tw-flex tw-items-center tw-justify-center">
          {index}
        </span>
        <h3 className="tw-text-xl tw-font-semibold tw-text-slate-900">
          {title}
        </h3>
      </div>

      <div className="tw-space-y-4 tw-text-slate-700 tw-leading-relaxed">
        {children}
      </div>
    </motion.div>
  );
};
