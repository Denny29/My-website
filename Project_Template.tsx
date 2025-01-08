type projectProps = {
    title: string,
    link: string,
    description: string,
    image: string
}


//Templaate to add projects
export default function Project_Template({title, link, description, image}: projectProps){
    return (
        <div className="project-div">
            <p>{title}</p>
            <p><a className="links" href={link}>Link to repo.</a></p>
            <p>{description}</p>
            <img className="sample-photo" src={image} />
        </div>
    )
}