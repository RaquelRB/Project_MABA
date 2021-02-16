import axios from "axios";

class EmailService {
    constructor(){
        let service = axios.create({
            baseURL: "https://project-maba.herokuapp.com/",
            withCredentials: true
        });

        this.service = service;
    }

    errorHandler = (err) => {
        throw err;
      };

    sendEmail = (email, name, subject, text) => {
        return this.service.post("/sendtome", {email, name, subject, text})
        .then(res => res.data.status)
        .catch(this.errorHandler)
    }
}

export default EmailService;