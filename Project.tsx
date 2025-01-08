type projectProps = {
    title: string,
    link: string,
    description: string,
    image: string
}


//Templaate to add projects
export default function Project({title, link, description, image}: projectProps){
    return (
        <div className="project-div">
            <p>{title}</p>
            <p>{link}</p>
            <p>{description}</p>
            <img className="sample-photo" src={image} />
        </div>
    )
}