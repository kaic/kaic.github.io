interface IJob {
    company: string;
    role: string;
}

interface IConfig {
    job: IJob
}

export const config:IConfig = {
    job: {
        company: "Nubank",
        role: "Software Engineer"
    }
}