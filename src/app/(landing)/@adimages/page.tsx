import { getAdBannerImages } from "@/actions/news";
import AdImages from "@/components/custom/ad-images";

export default async function Page() {
  const { data } = await getAdBannerImages();

  return <AdImages data={data} />;
}
