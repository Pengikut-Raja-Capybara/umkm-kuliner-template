type RatingStarsProps = {
  rating: number;
};

const Star = ({ filled }: { filled: boolean }) => {
  return (
    <svg
      className={`h-4 w-4 ${
        filled
          ? "fill-[var(--primary)] stroke-[var(--primary)]"
          : "fill-transparent stroke-[var(--primary-dark)]"
      }`.trim()}
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M12 2.5l2.97 6.02 6.65.97-4.81 4.68 1.13 6.6L12 17.77 6.06 20.77l1.13-6.6-4.81-4.68 6.65-.97L12 2.5z" />
    </svg>
  );
};

const RatingStars = ({ rating }: RatingStarsProps) => {
  const stars = Array.from({ length: 5 }, (_, index) => index < Math.round(rating));

  return (
    <div className="flex gap-1" aria-label={`Rating ${rating} dari 5`}>
      {stars.map((filled, index) => (
        <Star key={index} filled={filled} />
      ))}
    </div>
  );
};

export default RatingStars;
