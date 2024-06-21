import { useSearchParams, useRouter } from "next/navigation";

export function useURL(){
  const router = useRouter();
  const searchParams = useSearchParams();

  function updateMultiValue({ name, checked, value }:{ name:string, checked: boolean | "indeterminate", value: string }) {
    const params = new URLSearchParams(searchParams);
    if (checked) {
      params.append(name, value);
    } else {
      const currentValues = params.getAll(name);
      params.delete(name);
      currentValues
        .filter((currentValue) => currentValue!== value)
        .forEach((item) => params.append(name, item));
    }
    router.push(`?${params.toString()}`, {scroll:false});
  }

  function updateSingleValue({ name, value }:{ name:string, value: string, }){
    const params = new URLSearchParams(searchParams);
    params.set(name, value.toString());
    router.push(`?${params.toString()}`, {scroll:false});
  }

  return { updateMultiValue, updateSingleValue };
}
