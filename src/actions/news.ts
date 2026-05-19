"use server";

import { catchError, createEmptyDataInstance, retry } from "@/lib/utils";
import {
  ApiResponseAdImageWithPagination,
  ApiResponseAdVideoWithPagination,
  ApiResponseCategoryWiseNewsWithPagination,
  ApiResponseWithoutPagination,
  ApiResponseWithPagination,
  ApiResponseQuotation,
  Data,
  AdVideoData,
  AdBannerImageData,
  ArticleFull,
  AdImage,
  AdVideo,
  ArticleCategoryBrief,
  ApiEnvelope,
  ApiEnvelopeWithPagination,
} from "@/types/response";
import { headers as nextHeaders } from "next/headers";

const origin = process.env.API_BASE_URL || "https://api.patrakar.app";
const apiToken = process.env.API_BEARER_TOKEN;

async function getFetchOptions(
  options: RequestInit & { token?: string } = {},
): Promise<RequestInit> {
  const { token, ...rest } = options;
  let host = "7a0e2ceb7b344f58a3245325440db44d";
  let incomingAuth = "";
  try {
    const reqHeaders = await nextHeaders();
    const h = reqHeaders.get("host");
    if (h) host = h;
    const auth = reqHeaders.get("authorization");
    if (auth) incomingAuth = auth;
  } catch (e) {
    // Silent catch if called during static generation build
  }

  const headers = new Headers(rest.headers);
  headers.set("Host", host);
  headers.set("Host-Id", host);

  if (apiToken) {
    headers.set("Authorization", `Bearer ${apiToken}`);
  } else if (token) {
    headers.set("Authorization", `Bearer ${token}`);
  } else if (incomingAuth) {
    headers.set("Authorization", incomingAuth);
  }

  return { ...rest, headers };
}

function mapArticleFullToData(art: ArticleFull): Data {
  const categoryMapped = art.category
    ? {
        id: art.category.id,
        name: art.category.name,
        parent: art.category.parent,
        sequence: art.category.sequence,
        sub_category: art.category.sub_category || [],
      }
    : {
        id: 0,
        name: "General",
        parent: true,
        sequence: 0,
        sub_category: [],
      };

  return {
    id: art.id,
    user_id: art.user_id || 0,
    user_full_name: art.user_full_name || "",
    title: art.title,
    body: art.body,
    published_on: art.published_on || art.created_on,
    comments: [],
    last_drafted: art.last_drafted,
    created_on: art.created_on,
    total_views: art.total_views,
    category: categoryMapped,
    published: art.published,
    images: art.images || [],
    thumbnail: art.thumbnail || "",
    videos: art.videos || [],
  };
}

export async function getTopNews(page: number = 1) {
  const fetchOpts = await getFetchOptions({
    next: { revalidate: 60 * 10 },
  });
  const [err, res] = await catchError<ApiEnvelopeWithPagination<ArticleFull>>(
    retry(() =>
      fetch(
        `${origin}/admin/article?published=true&page=${page}`,
        fetchOpts,
      ).then((res) => res.json()),
    ),
  );
  if (err || !res || !res.data) return createEmptyDataInstance<Data[]>([]);

  const data = res.data.map(mapArticleFullToData);

  return {
    status: true,
    code: 200,
    message: "Success",
    data,
  };
}

export async function getLatestNews(page: number = 1) {
  const fetchOpts = await getFetchOptions({
    next: { revalidate: 60 * 10 },
  });
  const [err, res] = await catchError<ApiEnvelopeWithPagination<ArticleFull>>(
    retry(() =>
      fetch(
        `${origin}/admin/article?published=true&page=${page}`,
        fetchOpts,
      ).then((res) => res.json()),
    ),
  );
  if (err || !res || !res.data) return createEmptyDataInstance<Data[]>([]);

  const data = res.data.map(mapArticleFullToData);

  return {
    status: true,
    code: 200,
    message: "Success",
    pagination_info: res.pagination_info,
    data,
  };
}

export async function getTrendingNews(page: number = 1) {
  const fetchOpts = await getFetchOptions({
    next: { revalidate: 60 * 10 },
  });
  const [err, res] = await catchError<ApiEnvelopeWithPagination<ArticleFull>>(
    retry(() =>
      fetch(
        `${origin}/admin/article?published=true&page=${page}`,
        fetchOpts,
      ).then((res) => res.json()),
    ),
  );
  if (err || !res || !res.data) return createEmptyDataInstance<Data[]>([]);

  const data = res.data.map(mapArticleFullToData);

  return {
    status: true,
    code: 200,
    message: "Success",
    pagination_info: res.pagination_info,
    data,
  };
}

export async function getVideoNews(page: number = 1) {
  const fetchOpts = await getFetchOptions({
    next: { revalidate: 60 * 10 },
  });
  const [err, res] = await catchError<ApiEnvelopeWithPagination<ArticleFull>>(
    retry(() =>
      fetch(
        `${origin}/admin/article?published=true&page=${page}`,
        fetchOpts,
      ).then((res) => res.json()),
    ),
  );
  if (err || !res || !res.data) return createEmptyDataInstance<Data[]>([]);

  const data = res.data.map(mapArticleFullToData);

  return {
    status: true,
    code: 200,
    message: "Success",
    pagination_info: res.pagination_info,
    data,
  };
}

export async function getAdVideos() {
  const fetchOpts = await getFetchOptions({
    next: { revalidate: 60 * 10 },
  });
  const [err, res] = await catchError<ApiEnvelope<AdVideo[]>>(
    retry(() =>
      fetch(`${origin}/admin/ad-videos`, fetchOpts).then((res) => res.json()),
    ),
  );
  if (err || !res || !res.data)
    return createEmptyDataInstance<AdVideoData[]>([]);

  return {
    status: true,
    code: 200,
    message: "Success",
    pagination_info: {
      starting_index: 1,
      ending_index: res.data.length,
      current_page: 1,
      previous_page: null,
      next_page: null,
      total_pages: 1,
      has_previous_page: false,
      has_next_page: false,
      items_per_page: res.data.length,
    },
    data: res.data.map((video) => ({
      id: video.id,
      link: video.link,
      published_on: video.published_on,
    })),
  };
}

export async function getLandscapeAdBannerImages() {
  const fetchOpts = await getFetchOptions({
    next: { revalidate: 60 * 10 },
  });
  const [err, res] = await catchError<ApiEnvelope<AdImage[]>>(
    retry(() =>
      fetch(`${origin}/admin/ad-images`, fetchOpts).then((res) => res.json()),
    ),
  );
  if (err || !res || !res.data)
    return createEmptyDataInstance<AdBannerImageData[]>([]);

  return {
    status: true,
    code: 200,
    message: "Success",
    pagination_info: {
      starting_index: 1,
      ending_index: res.data.length,
      current_page: 1,
      previous_page: null,
      next_page: null,
      total_pages: 1,
      has_previous_page: false,
      has_next_page: false,
      items_per_page: res.data.length,
    },
    data: res.data
      .filter((img) => img.wide_image_secure_url)
      .map((img) => ({
        id: img.id,
        last_updated: img.last_updated,
        image_url: img.wide_image_secure_url,
        image_id: img.wide_image_id,
      })),
  };
}

export async function getPortraitAdBannerImages() {
  const fetchOpts = await getFetchOptions({
    next: { revalidate: 60 * 10 },
  });
  const [err, res] = await catchError<ApiEnvelope<AdImage[]>>(
    retry(() =>
      fetch(`${origin}/admin/ad-images`, fetchOpts).then((res) => res.json()),
    ),
  );
  if (err || !res || !res.data)
    return createEmptyDataInstance<AdBannerImageData[]>([]);

  return {
    status: true,
    code: 200,
    message: "Success",
    pagination_info: {
      starting_index: 1,
      ending_index: res.data.length,
      current_page: 1,
      previous_page: null,
      next_page: null,
      total_pages: 1,
      has_previous_page: false,
      has_next_page: false,
      items_per_page: res.data.length,
    },
    data: res.data
      .filter((img) => img.tall_image_secure_url)
      .map((img) => ({
        id: img.id,
        last_updated: img.last_updated,
        image_url: img.tall_image_secure_url,
        image_id: img.tall_image_id,
      })),
  };
}

export async function getNewsInfo(id: string) {
  const fetchOpts = await getFetchOptions({
    next: { revalidate: 60 * 10 },
  });
  const [err, res] = await catchError<ApiEnvelope<ArticleFull[]>>(
    retry(
      () =>
        fetch(`${origin}/admin/article/${id}`, fetchOpts).then((res) =>
          res.json(),
        ),
      { helperText: `news ${id}`, retriesCount: 3 },
    ),
  );

  if (err || !res || !res.data || !res.data[0]) return null;

  return res.data[0] as ArticleFull;
}

export async function getCategoryWiseNews() {
  const fetchOpts = await getFetchOptions({
    next: { revalidate: 60 * 10 },
  });

  const [errCats, categoriesEnvelope] = await catchError<
    ApiEnvelope<ArticleCategoryBrief[]>
  >(
    retry(() =>
      fetch(`${origin}/admin/articleCategory`, fetchOpts).then((res) =>
        res.json(),
      ),
    ),
  );

  if (errCats || !categoriesEnvelope || !categoriesEnvelope.data) {
    return createEmptyDataInstance<
      {
        id: number;
        name: string;
        articles: Data[];
      }[]
    >([]);
  }
  const categories = categoriesEnvelope.data;

  let categoryWiseData = await Promise.all(
    categories.map(async (cat) => {
      const [errArticles, articlesRes] = await catchError<
        ApiEnvelopeWithPagination<ArticleFull>
      >(
        retry(() =>
          fetch(
            `${origin}/admin/article?published=true&categoryId=${cat.id}`,
            fetchOpts,
          ).then((res) => res.json()),
        ),
      );

      const fullArticles = articlesRes?.data || [];
      const articles = fullArticles.map(mapArticleFullToData);

      const mappedArticles = articles.map((art) => ({
        ...art,
        category: {
          id: cat.id,
          name: cat.name,
          parent: cat.parent,
          sequence: cat.sequence,
          sub_category: cat.sub_category || [],
        },
      }));

      return {
        id: cat.id,
        name: cat.name,
        articles: mappedArticles,
      };
    }),
  );

  categoryWiseData = categoryWiseData.filter((cat) => cat.articles.length > 0);

  return {
    status: true,
    code: 200,
    message: "Success",
    pagination_info: {
      starting_index: 1,
      ending_index: categoryWiseData.length,
      current_page: 1,
      previous_page: null,
      next_page: null,
      total_pages: 1,
      has_previous_page: false,
      has_next_page: false,
      items_per_page: categoryWiseData.length,
    },
    data: categoryWiseData,
  };
}

export async function getQuotation() {
  return {
    status: true,
    data: {
      q: "The only limit to our realization of tomorrow will be our doubts of today.",
      a: "Franklin D. Roosevelt",
      h: "",
    },
  };
}

export async function getCategoryNewsInfo(id: string, page: number = 1) {
  const fetchOpts = await getFetchOptions({
    next: { revalidate: 60 * 10 },
  });
  const [err, res] = await catchError<ApiEnvelopeWithPagination<ArticleFull>>(
    retry(
      () =>
        fetch(
          `${origin}/admin/article?published=true&categoryId=${id}&page=${page}`,
          fetchOpts,
        ).then((res) => res.json()),
      { helperText: `category ${id}`, retriesCount: 3 },
    ),
  );
  if (err || !res || !res.data) return createEmptyDataInstance<Data[]>([]);

  const articles = res.data.map(mapArticleFullToData);
  const data = articles.map((art) => ({
    ...art,
    category:
      art.category.id === 0
        ? {
            id: parseInt(id),
            name: "",
            parent: true,
            sequence: 0,
            sub_category: [],
          }
        : art.category,
  }));

  return {
    status: true,
    code: 200,
    message: "Success",
    pagination_info: res.pagination_info,
    data,
  };
}
