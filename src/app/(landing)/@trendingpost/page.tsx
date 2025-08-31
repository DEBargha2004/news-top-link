import { getTrendingNews } from "@/actions/news";
import TrendingNews from "@/components/custom/trending-news";

export const revalidate = 60 * 10;

export default async function Page() {
  const { data } = await getTrendingNews();

  return <TrendingNews data={data} />;
}
