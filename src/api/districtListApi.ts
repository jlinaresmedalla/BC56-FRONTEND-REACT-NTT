import { District } from "@/interfaces";

export const getDistrictList = async (): Promise<District[]> => {
  try {
    const file = await import("@/utils/locations.json");
    return file.districts.map((d) => ({ value: d.name, label: d.name }));
  } catch {
    throw Error("Hubo un error al cargar los distritos del archivo json");
  }
};
