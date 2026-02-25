import {
  ArrowLeft,
  FemaleIcon,
  MapPinIcon,
} from "@/components/icons";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

interface ProfilePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProfilePage({ params }: ProfilePageProps) {
  const { slug } = await params;
  const id = slug.split("-")[0];

  return (
    <>
      <div className="space-y-4">
        <Link className="block" href="/">
          <Button variant="outline">
            {" "}
            <ArrowLeft /> Volver
          </Button>
        </Link>

        <div className="relative rounded-xl shadow-lg overflow-hidden aspect-4/5">
          <Image
            className="object-cover object-top"
            src="/profile.png"
            alt="Profile Image"
            fill
          />

          <div className="absolute bottom-0 left-0 flex flex-col justify-end items-center pb-10 w-full h-1/2 bg-linear-to-t from-background/90 to-transparent">
            <p className="text-2xl font-medium">Sophia Williams</p>

            <div className="flex items-center gap-2 mt-3">
              <div className="flex items-center border border-white rounded-full pl-1 pr-3 py-1 bg-white/20">
                <FemaleIcon size={24} /> <span>22</span>
              </div>
              <div className="flex items-center gap-1 border border-white rounded-full px-3 py-1 bg-white/20">
                <MapPinIcon size={18} /> Arica, Chile
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-medium">Sobre Mi</h2>
          <p className="mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            sunt iure quidem atque provident dolor omnis neque corporis
            consectetur. Modi id sit ratione numquam velit suscipit sapiente
            cupiditate odio nihil.
          </p>
        </div>
      </div>
    </>
  );
}
