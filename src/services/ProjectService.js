import { AppState } from "../AppState";
import { Project } from "../models/Project";

class ProjectService {

    projects = [
        {
            title: "Keepr", info: {
                iOne: "Keepr was our final project given to our cohort and it required us to utilize a Vue3 front-end with a C# back-end for the project.",
                iTwo: "It required us to put 'Keeps' into 'Vaults' using a VaultKeep similar to Pinterest.",
                iThree: "During this project, I learned how to make complex object relations withing mySQL, and how to manage those relations with a C# based back-end."
            },
            githubUrl: "https://github.com/Levi-T2/Keepr/tree/main",
            liveDemo: true
        },
        {
            title: "BCW Capstone", info: {
                iOne: "As a team of four developers we were given two weeks to construct a UML, Figma Mock, and pitch for our websites features.",
                iTwo: "For our website, we made a social media platform where users could share descriptions and images of their modified cars and favorite other users cars.",
                iThree: "The biggest feature of this website is that users's can add their own pictures of their cars to their posts.",
                iFour: "For the images, we used Supabase, which would turn user's files into urls for us to use so large amounts of pictures could be loaded quickly.",
                iFive: "I worked mostly on the back-end, which utilized Express.js with Mongoose to make calls to our MongoDB database."
            },
            githubUrl: "https://github.com/Levi-T2/Capstone",
            liveDemo: true
        },
        {
            title: "Ionic Dex", info: {
                iOne: "This was a small application I built using the Ionic Framework with Vue, paired with TypeScript.",
                iTwo: "I built this using the PokeAPI, so that users can search through all pokemon and look at information on them.",
                iThree: "I made use of Ionic's built in components, like lists and modals, to present the information to the user in a mobile friendly way.",
                iFour: "With Capacitor which is paired with Ionic, this application can be turned into an APK to be installed to android devices or to be put on the Playstore."
            },
            githubUrl: "https://github.com/Levi-T2/ionicDex",
            liveDemo: false
        },
        {
            title: "Jot", info: {
                iOne: "Jot is a simple note-taking application where users can log in to create cabinets to store notes into.",
                iTwo: "Jot utilizes a Vue with TypeScript front-end, with a C# back-end and a mySQL to manage the users notes",
                iThree: "Users can search for specific notes within their cabinets and search through for their specific cabinet as well",
                iFour: "In the database, the note and cabinet objects are bound by a third object that has both their ID's, which are used to pull data about both of them with API calls."
            },
            githubUrl: "https://github.com/Levi-T2/jot/tree/main",
            liveDemo: false
        }
    ]

    getProjects() {
        AppState.projects = this.projects.map((projects) => new Project(projects));
        console.log(AppState.projects);
    }
    getProjectDetails(projectTitle) {
        const foundProject = this.projects.find(project => project.title == projectTitle);
        AppState.activeProject = new Project(foundProject);
        console.log(AppState.activeProject);
    }
}

export const projectService = new ProjectService()