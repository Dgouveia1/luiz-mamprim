import { Star } from "lucide-react";
import { reviews, type Review } from "../data/reviews";

function ReviewCard({ review }: { review: Review }) {
  return (
    <article className="shrink-0 bg-[var(--bg-elev)] border border-[var(--border-soft)] rounded-[var(--radius-md)] p-5 sm:p-6">
      <div className="flex gap-1 mb-3" aria-label={`${review.rating} de 5 estrelas`}>
        {Array.from({ length: review.rating }).map((_, i) => (
          <Star
            key={i}
            className="w-3.5 h-3.5 fill-[var(--accent)] text-[var(--accent)]"
            aria-hidden="true"
          />
        ))}
      </div>
      <p className="text-[var(--text)] text-[14.5px] leading-[1.6] italic mb-5">
        “{review.comment}”
      </p>
      <div className="flex items-center gap-3 pt-4 border-t border-[var(--border-soft)]">
        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[var(--accent-deep)] to-[var(--accent)] flex items-center justify-center text-[#1a1408] font-medium text-sm shrink-0">
          {review.author.charAt(0)}
        </div>
        <div className="min-w-0">
          <div className="text-[var(--text)] font-medium text-[13px] truncate">
            {review.author}
          </div>
          <div className="text-[var(--text-muted)] text-[11px] font-[var(--font-mono)] tracking-[0.05em]">
            {review.date}
          </div>
        </div>
      </div>
    </article>
  );
}

export default function ReviewsVerticalScroll() {
  const doubled = [...reviews, ...reviews];

  return (
    <div className="reviews-scroll-wrapper h-[440px] sm:h-[520px] lg:h-[600px]">
      <div className="reviews-scroll-track">
        {doubled.map((r, i) => (
          <ReviewCard key={`${r.author}-${i}`} review={r} />
        ))}
      </div>
    </div>
  );
}
