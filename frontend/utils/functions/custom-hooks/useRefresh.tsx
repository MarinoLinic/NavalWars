import { useRouter } from "next/router";

export default function useRefresh(hardRefresh: boolean) {
  const router = useRouter();
  return <>{hardRefresh ? router.reload() : router.replace(router.asPath)}</>;
}
