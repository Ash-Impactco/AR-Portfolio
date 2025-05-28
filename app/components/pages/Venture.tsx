import { profileQuery } from "@/lib/sanity.query";
import type { ProfileType } from "@/types";
import { Slide } from "../../animation/Slide";
import { sanityFetch } from "@/lib/sanity.client";
import EmptyState from "../shared/EmptyState";
import { RiStore2Fill } from "react-icons/ri";

export default async function Venture() {
  const profile: ProfileType = await sanityFetch({
    query: profileQuery,
    tags: ["profile"],
  });

  return (
    <section className="mt-32">
      <Slide delay={0.16}>
        <div className="mb-16">
          <h2 className="font-incognito text-4xl mb-4 font-bold tracking-tight">
            Ventures
          </h2>
        </div>
      </Slide>

      {profile?.ventures && profile.ventures.length > 0 ? (
        <Slide delay={0.18}>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-8 gap-y-10">
            {profile.ventures.map((venture, index) => (
              <div key={index} className="group">
                <div className="relative aspect-square">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-bg to-secondary-bg opacity-70 group-hover:opacity-90 transition-opacity duration-300" />
                </div>
                <div className="absolute inset-0 p-6 flex flex-col justify-center items-center">
                  <h3 className="text-xl font-semibold text-white mb-2">{venture.name}</h3>
                  <p className="text-sm text-white/80 max-w-[200px] text-center">
                    {venture.description}
                  </p>
                  <p className="text-sm text-white/60 mt-4">
                    {venture.startDate ? new Date(venture.startDate).toLocaleDateString() : 'Ongoing'}
                  </p>
                  {venture.website && (
                    <a
                      href={venture.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:underline mt-2"
                    >
                      Visit Website
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </Slide>
      ) : (
        <EmptyState
          icon={<RiStore2Fill />}
          title="Ventures Not Provided"
          message="We could not find any ventures at the moment. To add one, visit the Sanity studio to start editing the content."
        />
      )}
    </section>
  );
}
