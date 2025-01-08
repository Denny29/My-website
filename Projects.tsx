import Project from './Project'

/*
Later on make a JSON file with all of Project's fields to loop through and append
to the page.
*/
export default function Projects(){
    return (
        <div className="projects-div">
            <Project 
            title={'Sample Project'} 
            link={'Fakelink.com'} 
            description={'lorem ipsum dolor sit amet'} 
            image={'https://i.natgeofe.com/n/4f5aaece-3300-41a4-b2a8-ed2708a0a27c/domestic-dog_thumb_square.jpg'} 
            />
        </div>
    )
}