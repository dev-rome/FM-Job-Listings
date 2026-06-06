import type { Job } from "../../types/job";

type JobCardProps = {
  job: Job;
};

export default function JobCard({ job }: JobCardProps) {
  const jobMeta = [job.postedAt, job.contract, job.location];
  const jobTags = [job.role, job.level, ...job.languages, ...job.tools];
  const badge =
    "leading-none text-white px-2 pt-2 pb-1 rounded-3xl text-sm font-bold lg:pt-3 lg:pb-2";

  return (
    <article
      className={`${job.featured ? "border-l-[5px] border-green-400" : ""} relative rounded-md bg-white px-5 pt-7 pb-3.5 shadow-[0_4px_4px_hsla(180,29%,50%,0.25)] lg:pt-12 lg:pr-10 lg:pb-8 lg:pl-11 xl:pt-8`}
    >
      <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between">
        <div className="xl:flex xl:items-center xl:gap-6">
          <img
            src={job.logo}
            alt={`${job.company} logo`}
            width="88"
            height="88"
            className="absolute -top-5 left-5 h-10 w-10 lg:-top-8 lg:left-5 lg:h-16 lg:w-16 xl:static xl:h-24 xl:w-24"
          />
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-4">
              <p className="text-sm font-bold text-green-400 lg:text-lg">
                {job.company}
              </p>
              <div className="flex gap-2">
                {job.new && (
                  <span className={`${badge} bg-green-400`}>NEW!</span>
                )}
                {job.featured && (
                  <span className={`${badge} bg-green-900`}>FEATURED</span>
                )}
              </div>
            </div>
            <h2 className="text-base font-bold text-green-900 lg:text-[1.375rem]">
              {job.position}
            </h2>
            <ul className="flex">
              {jobMeta.map((meta) => (
                <li
                  key={meta}
                  className="text-base font-medium text-gray-400 not-first:before:mx-2 not-first:before:content-['•'] lg:text-lg lg:not-first:before:mx-4"
                >
                  {meta}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <hr className="my-4 text-gray-300 xl:hidden" />

        <ul className="flex flex-wrap justify-start gap-2 xl:flex-nowrap">
          {jobTags.map((tag) => (
            <li key={tag}>
              <button
                type="button"
                className="rounded-sm bg-green-50 px-4 pt-2 pb-1.5 text-base leading-none font-bold text-green-400"
              >
                {tag}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
