const Video = ({video}) => {

    const {key} = video;

    return (
        <div>
            {/* eslint-disable-next-line jsx-a11y/iframe-has-title */}
            <iframe width="640" height="360" src={`https://www.youtube.com/embed/${key}`}
                    frameBorder="0">
            </iframe>
        </div>
    );
};

export {Video};