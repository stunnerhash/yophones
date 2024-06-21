import db from "@/db";
import { Prisma } from "@prisma/client";

interface SearchParams {
  [key: string]: string | string[] | undefined 
};

function convertToFilter(value: string | string[] | undefined): string[] {
  if (!value) return [];
  return Array.isArray(value) ? value: [value];
}

function convertStringToFloat(value: string | undefined):number | null{
  if (!value) return null;
  const parsedValue = parseFloat(value);
  return isNaN(parsedValue) ? null : parsedValue;
}

export async function getDeals(phoneId: number, searchParams: SearchParams){
  try{
    const page = typeof searchParams.page === 'string' ? parseInt(searchParams.page, 10) : 1;
    const network = convertToFilter(searchParams.network);
    const term = convertToFilter(searchParams.term);
    const incData = searchParams.incData as string;
    const upfrontCost = convertStringToFloat (searchParams.upfrontCost as string) ;
    const minMonthlyCost = convertStringToFloat(searchParams.minMonthlyCost as string);
    const maxMonthlyCost = convertStringToFloat(searchParams.maxMonthlyCost as string);

    const storageSize = searchParams.storageSize as string;
    const searchTerm = searchParams.search as string; 
    const colour = typeof searchParams.colour === 'string' ? searchParams.colour : '';

    const pageSize = 10;
    const phone = await db.phone.findUnique({
      where:{
        id: phoneId
      }
    })
    const phoneName = phone?.name || '';
    
    const select = {
      id:true,
      name: true,
      imageUrl:true,
      brandName:true,
      colour: true,
      term: true,
      network: true,
      monthlyCost:true, 
      upfrontCost: true,
      incData: true,
      incTexts: true,
      storageSize:true,
      promotionalText:true,
      TelcosNetworkDetailsJson:true
    }

    const where = {
      AND:[
        { name: { contains: phoneName, mode: Prisma.QueryMode.insensitive}},
        { name: { contains: searchTerm, mode: Prisma.QueryMode.insensitive}}
      ],
      term: term.length > 0 ? { in: term } : undefined,
      network: network.length > 0 ? { in: network } : undefined,
      incData: incData ? { gte: incData } : undefined,
      monthlyCost: (maxMonthlyCost !== null && minMonthlyCost !== null) ? { lte: maxMonthlyCost, gte: minMonthlyCost } : undefined,
      upfrontCost: upfrontCost !== null ? { lte: upfrontCost } : undefined,
      colour: colour !== null ? { contains: colour, mode: Prisma.QueryMode.insensitive } : undefined,
      storageSize: storageSize !== null ? { contains: storageSize, mode: Prisma.QueryMode.insensitive } : undefined,
    }

    const deals = await db.deal.findMany({
      select:select,    
      where:where,
      take: page*pageSize,
    })
    const totalDeals = await db.deal.count({
      where:where    
    })

    return {deals, hasMore: totalDeals>page*pageSize}; 
  }
  catch(error){
    console.error("Error fetching deals", error);
    return {deals:[], hasMore:false};
  }
}

