import { GoogleMap } from "@/components/location/GoogleMap";
import { Button } from "@/components/ui/Button";
import { IconMark } from "@/components/ui/IconMark";
import { company, formatAddress } from "@/data/company";
import { facilityMap } from "@/data/location";
import { MapPin } from "lucide-react";

type FacilityLocationProps = {
  eyebrow?: string;
  heading?: string;
};

export function FacilityLocation({
  eyebrow = "Our facility",
  heading = "Find Us in Ujjain.",
}: FacilityLocationProps) {
  return (
    <div className="grid gap-8 lg:grid-cols-12 lg:items-start lg:gap-x-10 lg:gap-y-0">
      <div className="contents lg:col-span-5 lg:block">
        <div className="order-1">
          <p className="font-sans text-label uppercase text-muted">{eyebrow}</p>
          <h2 className="mt-4 font-display text-section font-medium">{heading}</h2>
          <p className="mt-5 max-w-md text-muted">
            Located in Nagzhiri Industrial Area on Dewas Road, Ujjain, FIDVI Industries operates from
            a manufacturing-focused industrial environment serving packaging requirements.
          </p>
          <address className="mt-6 flex gap-3 text-base not-italic leading-relaxed">
            <IconMark icon={MapPin} className="mt-1" />
            <span>
              <span className="block font-display text-2xl">{company.legalName}</span>
              {formatAddress("stacked").map((line) => (
                <span key={line} className="mt-1 block">
                  {line}
                </span>
              ))}
            </span>
          </address>
        </div>
        <div className="order-3 mt-8 lg:mt-10">
          <Button href={facilityMap.directionsHref} arrow>
            Get Directions
          </Button>
        </div>
      </div>
      <div className="order-2 lg:col-span-7">
        <GoogleMap />
      </div>
    </div>
  );
}
