import usePlatforms from "./usePlatforms";

const usePlatform = (id?: number) => {
  const { data } = usePlatforms();
  return data.results.find((x) => x.id == id);
};

export default usePlatform;
