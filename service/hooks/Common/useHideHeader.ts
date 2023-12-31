import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { HideHeader } from "../../store/Common/common.store";

const useHideHeader = () => {
  const setHideHeader = useSetRecoilState(HideHeader);
  useEffect(() => {
    setHideHeader(true);
    return () => setHideHeader(false);
  }, [setHideHeader]);
  return {};
};

export default useHideHeader;
