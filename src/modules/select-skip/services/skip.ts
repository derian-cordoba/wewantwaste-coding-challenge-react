import type { SkipItem } from "@/modules/select-skip/types/SkipItem";
import type { FetchSkipByLocationParams } from "@/modules/select-skip/types/services";
import { httpManager } from "@/shared/services/networking/HttpManager";

export const fetchSkipByLocation = async ({
  postCode = "NR32",
  area = "Lowestoft",
}: FetchSkipByLocationParams) => {
  const data = await httpManager.get<SkipItem[]>({
    url: `/skips/by-location?postcode=${postCode}&area=${area}`,
  });
  return data;
};
