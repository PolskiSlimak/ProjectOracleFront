export class Employees {
    constructor(
        public employee_id: number,
        public first_name: string,
        public last_name: string,
        public email: string,
        public phone_number: string,
        public hire_date: Date,
        public job_id: string,
        public salary: number,
        public commission_pct: number,
        public manager_id: number,
        public department_id: number
    ) {}
}
