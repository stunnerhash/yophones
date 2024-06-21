
// "use client"
// import { useSearchParams, useRouter } from "next/navigation";
// import { useState } from "react";

// export default function RadioLink(){
//   const searchParams = useSearchParams();
//   const router = useRouter()
//   const selectedStorage = searchParams.get('storageSize')

//   function handleChange(e:React.ChangeEvent<HTMLInputElement>){
//     const {name,value} = e.target;
//     const params = new URLSearchParams(searchParams);
//     params.set(name, value);
//     router.push(`?${params.toString()}`, {scroll:false});
//     setSelectedStorage(value)
//   }

//   if(!storageSize) return null;
//   return(
//     <span key={storage}>
//       <input type="radio" id={storage} 
//         name="storageSize" 
//         value={storage} 
//         checked={selectedStorage===storage} 
//         className="peer sr-only"  
//         onChange={handleChange}
//       />
//       <label 
//         htmlFor={storage}
//         className={`text-nowrap p-2 bg-muted cursor-pointer rounded-sm font-semibold border-primary ring-offset-1 ring-primary peer-checked:ring`}
//       > {storage}
//       </label>
//     </span>
//   )
// }
