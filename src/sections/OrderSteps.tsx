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
        <div className="mb-8 flex flex-wrap items-center justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.14em] text-[var(--primary-dark)]">
              Mudah dan cepat
            </p>
            <h2 className="mt-2 text-3xl font-serif">{title}</h2>
          </div>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, index) => (
            <div
              key={step}
              className="rounded-2xl border border-[var(--stroke)] bg-white p-6 shadow-[0_16px_40px_rgba(30,41,59,0.08)]"
            >
              <span className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-full border border-[var(--stroke)] bg-[var(--bg)] font-semibold text-[var(--primary-dark)]">
                0{index + 1}
              </span>
              <p className="text-[var(--text)]">{step}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default OrderSteps;
