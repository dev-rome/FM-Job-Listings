import type { Job } from "../types/job";

export default function getJobTags(job: Job): string[] {
  return [job.role, job.level, ...job.languages, ...job.tools];
}
