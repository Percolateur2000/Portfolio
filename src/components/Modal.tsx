interface ProjectDetail {
    id: string,
    github: string,
    url: string,
    urlaccess: string,
    title: string,
    description: string,
    img: string,
    tags: string[]
}

const Modal = (props:ProjectDetail) => {
    return ( <>
        <a href={`${props.url}`} target="_blank" className="projects">{props.urlaccess}</a>
        <a href={`${props.github}`} target="_blank" className='projects'>{props.description}</a>
        </>
    );
};

export default Modal;