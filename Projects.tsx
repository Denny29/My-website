import Project_Template from './Project_Template'
import Project_Data from './projects.json'

/*
Later on make a JSON file with all of Project's fields to loop through and append
to the page.
*/
export default function Projects(){
    return (
        <div className="projects-div">
            { Project_Data.map(project => <Project_Template {...project} /> ) }
        </div>
    )
}