import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import Footer from "@/components/footer";

const page = ({}) => {
  return (
    <>
    <div
      className="w-full h-screen  flex justify-center items-center text-foreground"
      style={{ maxHeight: "95vh" }}
    >
      <div className="w-11/12 h-full p-4" style={{ maxHeight: "90%" }}>
        <div className="flex justify-between m-2 p-2">
          <div className="flex m-2 p-2">
            <div m-2 p-2>
              <img src="https://img.uswitch.com/qhi9fkhtpbo3/10Hn8ycopZ1kdXxTDEUZcE/b1e39800882b7a1794f0d81b59ccf37c/iphone15-front-black.png?w=135&h=272&fit=bounds&auto=webp&quality=55,45" />{" "}
            </div>
            <div className="m-2 p-2">
              <div className="m-2 p-2">
                <p>Apple</p>
                <h1>
                  <b>Iphone 15 plus 128gb</b>
                </h1>
              </div>
              <div className="m-2 p-2">
                <h1 >£69.00 upfront</h1>
                <h1>500GB 5G data</h1>
                <h1>£29.99 per month</h1>
                <h1>£788.76 total cost</h1>
              </div>
            </div>
          </div>
          <div className="m-2 p-2">
            <img src="https://img.uswitch.com/qhi9fkhtpbo3/3EUyDd1Ztjo30hNN3PxxpA/60e6d35353bcbd2b57ba58041ae5e631/ID-Mobile-logo.png?w=100&h=50&fit=bounds&auto=webp&quality=55,45" />
          </div>
        </div>

        <div className="m-2 p-2">
          <h1>
            <b>Annual price rise</b>
          </h1>
          <p>
            Monthly cost shown will rise every April by Consumer Price Index
            (CPI) plus 3.9%.
          </p>
          <Badge variant="outline">
            <p className="text-foreground">
              Claim 3 months free Apple Music and Arcade
            </p>
          </Badge>
          <Badge variant="outline">
            Free roaming up to 30GB
          </Badge>
          <Badge variant="outline">
            <p className="text-foreground">
              Uswitch Award Winner - Best Network for Data
            </p>
          </Badge>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>
                <b>Plan Details</b>
              </AccordionTrigger>
              <AccordionContent>
                <div className="flex justify-between">
                  <p>Upfront cost</p>
                  <p>
                    <b>£69.00</b>
                  </p>
                </div>
                <Separator/>
                <div className="flex justify-between">
                  <p>Upfront cost</p>
                  <p>
                    <b>£69.00</b>
                  </p>
                </div>
                <Separator/>

                <div className="flex justify-between">
                  <p>Upfront cost</p>
                  <p>
                    <b>£69.00</b>
                  </p>
                </div>
                <Separator/>

                <div className="flex justify-between">
                  <p>Upfront cost</p>
                  <p>
                    <b>£69.00</b>
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <Button>
            Choose this deal
          </Button>
        </div>
      </div>
    </div>
      <Footer/>
      </>
  );
};

export default page;
