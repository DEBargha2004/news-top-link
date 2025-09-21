import {
  getLandscapeAdBannerImages,
  getPortraitAdBannerImages,
} from "@/actions/news";
import AdImages from "@/components/custom/ad-images";

export default async function Page() {
  const { data } = await getLandscapeAdBannerImages();
  const { data: longAdData } = await getPortraitAdBannerImages();

  return <AdImages wideData={data} tallData={longAdData} />;
}
