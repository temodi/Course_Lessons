import { useParams } from "react-router-dom";

const Reference = () => {
    const { reference_id } = useParams();

    const db = [
        {
            id: 'webshop',
            text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            link: 'https://www.emag.hu/'
        },
        {
            id: 'pmachat',
            text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            link: 'https://progmatic.hu/'
        },
        {
            id: 'valami',
            text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            link: 'https://www.placecage.com'
        },
    ];
    const target = db.filter((item) => item.id === reference_id);

    return (
        <div>
        {target[0] && (<>
            <h2>{target[0].id}</h2>
            <p>{target[0].text}</p>
            <a href={target[0].link}>Click here</a>
        </>)}
        </div>
    )
};

export default Reference;