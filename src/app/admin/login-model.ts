export class LoginModel {
    constructor( 
        public username: string,
        public password: string
    ) {

    }
}
export class AuthenticationResponse {
    constructor( 
        public userId: number, 
        public fullName : string, 
        public token: string
    ) {

    }
}