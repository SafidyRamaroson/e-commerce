import { useQuery } from "@tanstack/react-query";
import type { ApiResponse } from "@/types/apiResponse";

type GetOptions<TData> = {
  endpoint: string;
  queryKey: string;
  where?: Record<string, number | string>;
  enabled?: boolean; // Permet d'activer ou désactiver la requête
};

export const fetchResources = async <TData>({ endpoint, where }: GetOptions<TData>): Promise<ApiResponse<TData>> => {
  let url = endpoint;
  if (where) {
    const query = new URLSearchParams(where as Record<string, string>).toString();
    url = `${endpoint}?${query}`;
  }

  const response = await fetch(url, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  return response.json();
};

export const useGet = <TData>(options: GetOptions<TData>) => {
  return useQuery({
    queryKey: [options.queryKey, options.where],
    queryFn: () => fetchResources(options),
    staleTime: 1000 * 60, // 1 min avant de marquer les données comme "obsolètes"
    refetchOnWindowFocus: true,
    retry: 3, // 3 tentatives en cas d'échec
    enabled: options.enabled ?? true, // Permet de désactiver la requête conditionnellement
  });
};
