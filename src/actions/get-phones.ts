import db from "@/db"
 
interface SearchParams {
  [key: string]: string | string[] | undefined 
};

function convertToFilter(value: string | string[] | undefined): string[] {
  if (!value) {
    return [];
  }
  return Array.isArray(value) ? value: [value];
}

export async function getPhones(searchParams: SearchParams = {}) {
  try{
    const page = typeof searchParams.page === 'string' ? parseInt(searchParams.page, 10) : 1;
    const pageSize = 4;
    const selectedBrands = convertToFilter(searchParams.brand); 
    const searchTerm = typeof searchParams.search === 'string' ? searchParams.search : '';

    const phones = await db.phone.findMany({
      where: {
        brandName: selectedBrands.length > 0 ? { in: selectedBrands } : undefined,
        name: searchTerm ? { contains: searchTerm, mode: 'insensitive' } : undefined,
      },
      take: page*pageSize,
    });

    const totalPhones = await db.phone.count({ 
      where: {
        brandName: selectedBrands.length > 0 ? { in: selectedBrands } : undefined,
        name: searchTerm ? { contains: searchTerm, mode: 'insensitive' } : undefined,
      },
    });
    return {phones, hasMore:totalPhones>page*pageSize};
  }catch(error){
    console.error("Error fetching phones", error);
    return {phones:[], hasMore:false}
  }
};


