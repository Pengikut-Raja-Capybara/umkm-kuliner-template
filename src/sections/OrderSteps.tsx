import Container from "../components/Container";
import Section from "../components/Section";

type OrderStepsProps = {
  title: string;
  steps: string[];
};

const OrderSteps = ({ title, steps }: OrderStepsProps) => {
  return (
    <Section>
      <Container>
        <div className="mb-10 flex flex-wrap items-center justify-between gap-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--primary)]">
              ✦ Mudah dan cepat
            </p>
            <h2 className="mt-3 pb-1 bg-gradient-to-r from-[var(--text)] to-[var(--primary-dark)] bg-clip-text text-4xl font-serif text-transparent lg:text-5xl">{title}</h2>
          </div>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, index) => (
            <div
              key={step}
              className="group rounded-3xl border border-[var(--stroke)]/30 bg-gradient-to-br from-white to-[var(--bg)] p-8 shadow-[0_16px_40px_rgba(30,41,59,0.08)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(30,41,59,0.15)]"
            >
              <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full border-2 border-[var(--primary)]/30 bg-gradient-to-br from-[var(--primary)]/10 to-[var(--primary)]/5 font-bold text-lg text-[var(--primary)] shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:border-[var(--primary)] group-hover:shadow-lg">
                0{index + 1}
              </span>
              <p className="text-base leading-relaxed text-[var(--text)] font-medium">{step}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default OrderSteps;
