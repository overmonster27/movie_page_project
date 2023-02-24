import Select from 'react-select';

const FilterBar = ({handleChange, selected, options}) => {

    return (
        <div>
            <Select
                defaultValue={selected}
                onChange={handleChange}
                options={options}
            />
        </div>
    );
};

export {FilterBar};