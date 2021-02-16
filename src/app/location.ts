export class Location {
    constructor(
        public location_id: number,
        public street_address: string,
        public postal_code: string,
        public city: string,
        public state_province: string,
        public country_id: string,
    ) {}
}
