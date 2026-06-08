import type { Job } from "../types/job";

function getJobTags(job: Job): string[] {
  return [job.role, job.level, ...job.languages, ...job.tools];
}

export default getJobTags;