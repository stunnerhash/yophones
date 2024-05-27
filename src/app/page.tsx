import PhoneCard from "@/components/phone-card";
import sampleData from "@/sample-data.json"

export default function Home() {

  return (
    <main>
      <div className="flex flex-wrap">
      {
          sampleData.map(item=> 
            <PhoneCard key={item.id} className="m-2" data={item}/>)
      }
      </div>
    </main>
  );
}
