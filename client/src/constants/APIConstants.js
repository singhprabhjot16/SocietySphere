class APIConstants {

    static BASE_URL = "http://localhost";

    static FRONTEND_PORT = "5173";

    static BACKEND_PORT = "6001";

    static UPDATE_SOCIETY_URL = this.BASE_URL + ":" + this.BACKEND_PORT + "/" + "society";
    
    static GET_SOCIETY_URL = this.BASE_URL + ":" + this.BACKEND_PORT + "/" + "search?";

    static LOGIN_URL = this.BASE_URL + ":" + this.BACKEND_PORT + "/" + "societyHead/Login";

}

export default APIConstants;
