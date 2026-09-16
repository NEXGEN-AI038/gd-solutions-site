// Server-only helper — fetches live rating + reviews from Google's Place
// Details API. Requires GOOGLE_PLACES_API_KEY and GOOGLE_PLACE_ID env vars
// (set in Vercel → Settings → Environment Variables). See README.md →
// "Connecting live Google Reviews" for the full setup walkthrough.
//
// Google's Place Details API returns at most 5 reviews — this is a hard
// limit of the API itself, not something this code can change.

export type GoogleReview = {
  author_name: string;
  author_url?: string;
  profile_photo_url?: string;
  rating: number;
  relative_time_description: string;
  text: string;
  time: number;
};

export type GoogleReviewsResult = {
  rating: number;
  userRatingsTotal: number;
  reviews: GoogleReview[];
  mapsUrl: string;
};

export async function getGoogleReviews(): Promise<GoogleReviewsResult | null> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  if (!apiKey || !placeId) return null;

  try {
    const url = new URL("https://maps.googleapis.com/maps/api/place/details/json");
    url.searchParams.set("place_id", placeId);
    url.searchParams.set("fields", "rating,user_ratings_total,reviews,url");
    url.searchParams.set("reviews_sort", "newest");
    url.searchParams.set("key", apiKey);

    // Revalidate every 6 hours — keeps reviews fresh without re-fetching
    // on every single page load (Google's terms also expect caching, not
    // live-fetching per visitor).
    const res = await fetch(url.toString(), { next: { revalidate: 21600 } });
    if (!res.ok) return null;

    const data = await res.json();
    if (data.status !== "OK" || !data.result) return null;

    return {
      rating: data.result.rating ?? 0,
      userRatingsTotal: data.result.user_ratings_total ?? 0,
      reviews: (data.result.reviews ?? []) as GoogleReview[],
      mapsUrl: data.result.url ?? "",
    };
  } catch {
    return null;
  }
}
