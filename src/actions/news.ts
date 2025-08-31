"use server";

import {
  ApiResponseAdImageWithPagination,
  ApiResponseAdVideoWithPagination,
  ApiResponseWithoutPagination,
  ApiResponseWithPagination,
} from "@/types/response";

export async function getTopNews() {
  const res = await fetch(
    "https://master-news-service.onrender.com/api/index_delivery?intent=latest",
    {
      headers: {
        "Host-Id": "7a0e2ceb7b344f58a3245325440db44d",
      },
      next: {
        revalidate: 60 * 10,
      },
    }
  );

  return (await res.json()) as ApiResponseWithoutPagination;
}

export async function getLatestNews() {
  const res = await fetch(
    "https://master-news-service.onrender.com/api/index_delivery?intent=recent",
    {
      headers: {
        "Host-Id": "7a0e2ceb7b344f58a3245325440db44d",
      },
      next: { revalidate: 60 * 10 },
    }
  );
  return (await res.json()) as ApiResponseWithPagination;
}

export async function getTrendingNews() {
  const res = await fetch(
    "https://master-news-service.onrender.com/api/index_delivery?intent=most_read",
    {
      headers: {
        "Host-Id": "7a0e2ceb7b344f58a3245325440db44d",
      },
      next: { revalidate: 60 * 10 },
    }
  );
  return (await res.json()) as ApiResponseWithPagination;
}

export async function getVideoNews() {
  const res = await fetch(
    "https://master-news-service.onrender.com/api/index_delivery?intent=recent_articles_with_videos",
    {
      headers: {
        "Host-Id": "7a0e2ceb7b344f58a3245325440db44d",
      },
      next: { revalidate: 60 * 10 },
    }
  );
  return (await res.json()) as ApiResponseWithPagination;
}

export async function getAdVideos() {
  const res = await fetch(
    "https://master-news-service.onrender.com/api/index_delivery?intent=ad_videos",
    {
      headers: {
        "Host-Id": "7a0e2ceb7b344f58a3245325440db44d",
      },
      next: { revalidate: 60 * 10 },
    }
  );
  return (await res.json()) as ApiResponseAdVideoWithPagination;
}

export async function getAdBannerImages() {
  const res = await fetch(
    "https://master-news-service.onrender.com/api/index_delivery?intent=wide_ad_images",
    {
      headers: {
        "Host-Id": "7a0e2ceb7b344f58a3245325440db44d",
      },
      next: { revalidate: 60 * 10 },
    }
  );
  return (await res.json()) as ApiResponseAdImageWithPagination;
}
