const Video = ({video}) => {

    const {key} = video;

    return (
        <div>
            <iframe width="640" height="360" src={`https://www.youtube.com/embed/${key}`}>
            </iframe>
        </div>
    );
};

export {Video};