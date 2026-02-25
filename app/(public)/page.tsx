import { FemaleIcon, FilterIcon, MapPinIcon } from "@/components/icons";
import { SelectorDrawer } from "@/components/search/selector-drawer";
import Image from "next/image";
import Link from "next/link";
import countries from "@/constants/countries.json";

const countryOptions = countries.map((country) => ({
  id: country.id,
  label: country.name,
}));

export default function HomePage() {
  return (
    <>
      <h3>Filtrar por:</h3>
      <div className="flex items-center gap-3 mt-2">
        <div className="flex-1">
          <SelectorDrawer
            title="Selecciona un país"
            description="Elige un país para ver perfiles disponibles en esa región."
            triggerLabel="País"
            options={countryOptions}
          />
        </div>

        <div className="flex-1">
          <SelectorDrawer
            title="Selecciona una ciudad"
            description="Selecciona la ciudad donde deseas explorar perfiles disponibles."
            triggerLabel="Ciudad"
            options={countryOptions}
          />
        </div>

        <FilterIcon className="text-icon" />
      </div>
      <div className="grid grid-cols-2 gap-4 mt-4">
        {Array.from({ length: 10 }).map((_, index) => (
          <div key={index}>
            <Link
              className="relative rounded-xl shadow-lg overflow-hidden aspect-4/5 block"
              href="/p/fjaijfa-aksdja-sophia-williams"
            >
              <Image
                className="object-cover"
                src="/profile.png"
                alt="Profile Image"
                fill
              />

              <div className="absolute bottom-2 right-2 flex items-center bg-primary rounded-xl pl-1 pr-2 py-1">
                <FemaleIcon size={20} /> <span className="text-sm">22</span>
              </div>
            </Link>

            <div className="mt-1 space-y-1">
              <p className="text-center text-sm">Sophia Williams</p>
              <p className="text-xs flex items-center justify-center gap-1">
                <MapPinIcon size={14} /> Arica, Chile
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
