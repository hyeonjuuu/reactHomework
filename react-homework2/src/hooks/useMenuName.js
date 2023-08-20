import { useEffect } from "react";

export default function useMenuName(title) {
  return useEffect(() => {
    document.title = title;
  }, [title]);
}
