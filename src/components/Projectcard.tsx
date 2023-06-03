interface ProjectDetail {
    id: string,
    github: string,
    url: string,
    urlaccess: string,
    title: string,
    description: string,
    img: string,
    tags: string
}


const Projectcard = (props:ProjectDetail) => {
    return <li key={props.id} className='p-2 border-2 rounded-2xl border-indigo-800 flex justify-center items-center flex-col lg:w-3/5 w-full gap-2 mb-8 cardAnimation hover:shadow-2xl'>
    <span className="text-center">{props.title}</span>
        <img className="w-3/5 rounded-xl border-2 border-indigo-800" src={props.img} alt={`${props.title}`}/>
        <div>{(props.tags)}</div>
        </li>
    ;
};

export default Projectcard;