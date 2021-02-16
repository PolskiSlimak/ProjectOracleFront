import { JobHistoryId } from "./job-history-id";

export class JobHistory {
    constructor(
        public jobHistoryId: JobHistoryId,
        public end_date: Date,
        public job_id: String,
        public department_id: number,
    ) {}
}
