import { GoogleMap } from "@/components/location/GoogleMap";
import { Button } from "@/components/ui/Button";
import { company, formatAddress } from "@/data/company";
import { facilityMap } from "@/data/location";

export function FacilityLocation() {
  return (
    <div className="grid gap-8 lg:grid-cols-12 lg:items-start lg:gap-x-10 lg:gap-y-0">
      <div className="contents lg:col-span-5 lg:block">
        <div className="order-1">
          <p className="font-sans text-label uppercase text-muted">Our facility</p>
          <h2 className="mt-4 font-display text-section font-medium">Built on the Factory Floor.</h2>
          <p className="mt-5 max-w-md text-muted">
            Located in Nagzhiri Industrial Area on Dewas Road, Ujjain, FIDVI Industries operates from
            a manufacturing-focused industrial environment serving packaging requirements.
          </p>
          <address className="mt-6 text-base not-italic leading-relaxed">
            <span className="block font-display text-2xl">{company.legalName}</span>
            {formatAddress("stacked").map((line) => (
              <span key={line} className="mt-1 block">
                {line}
              </span>
            ))}
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
