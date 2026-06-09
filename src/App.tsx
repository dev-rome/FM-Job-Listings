import { useState } from "react";
import MobileHeader from "/images/bg-header-mobile.svg";
import DesktopHeader from "/images/bg-header-desktop.svg";
import { jobs } from "./data/data";
import getJobTags from "./utils/getJobTags";
import JobCard from "./components/jobcard/JobCard";
import FilterBar from "./components/filterbar/FilterBar";

export default function App() {
  const [activeFilters, setActiveFilters] = useState<Set<string>>(new Set());

  const visibleJobs = jobs.filter((job) => {
    const tags = getJobTags(job);
    return [...activeFilters].every((filter) => tags.includes(filter));
  });

  const handleFilterClick = (tag: string) => {
    setActiveFilters((prev) => {
      const next = new Set(prev);
      next.add(tag);
      return next;
    });
  };

  const handleRemoveFilter = (tag: string) => {
    setActiveFilters((prev) => {
      const filterCopy = new Set(prev);
      filterCopy.delete(tag);
      return filterCopy;
    });
  };

  const handleClearFilters = () => {
    setActiveFilters(new Set());
  };

  return (
    <main>
      <div className="h-39 w-full bg-green-400">
        <picture>
          <source srcSet={DesktopHeader} media="(min-width: 768px)" />
          <img
            src={MobileHeader}
            alt=""
            aria-hidden="true"
            className="h-full w-full object-cover"
          />
        </picture>
      </div>
      {activeFilters.size > 0 && (
        <div className="relative z-10 container mx-auto -mt-10 px-6 md:px-10">
          <FilterBar
            activeFilters={activeFilters}
            onFilterRemove={handleRemoveFilter}
            onFilterClear={handleClearFilters}
          />
        </div>
      )}

      <section className="py-12 md:pb-20 lg:pt-20 lg:pb-28 xl:pt-14">
        <div className="container mx-auto px-6 md:px-10">
          <h1 className="sr-only">Job listings</h1>

          <p className="sr-only" role="status" aria-live="polite">
            {visibleJobs.length === 0
              ? "No jobs match the selected filters."
              : `${visibleJobs.length} jobs found.`}
          </p>

          {visibleJobs.length > 0 ? (
            <div className="grid gap-x-4 gap-y-10 md:grid-cols-2 lg:gap-y-16 xl:grid-cols-1 xl:gap-y-6">
              {visibleJobs.map((job) => (
                <JobCard
                  key={job.id}
                  job={job}
                  onFilterClick={handleFilterClick}
                />
              ))}
            </div>
          ) : (
            <p
              aria-hidden="true"
              className="rounded-md bg-white px-6 py-12 text-center text-lg font-bold text-green-900 shadow-[0_4px_4px_hsla(180,29%,50%,0.25)]"
            >
              No jobs match the selected filters.
            </p>
          )}
        </div>
      </section>
    </main>
  );
}
