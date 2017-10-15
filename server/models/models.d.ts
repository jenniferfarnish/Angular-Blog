declare namespace models {
    interface ICategory{ //I is for interface
        id: number;
        name: string;
    }

    interface IPost {
        id: number;
        categoryid: number;
        userid: number;
        content: string;
        createdate: Date;
        title: string;
    }

    interface IUser {   
        id: number;
        email: string;
        firstname: string;
        lastname: string;
        password: string;
    }
}

