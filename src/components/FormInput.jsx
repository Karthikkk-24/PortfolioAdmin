import PropTypes from 'prop-types';

export default function FormInput({
    title = '',
    type = 'text',
    value = '',
    onChange = () => {},
}) {

    const handleChange = (event) => {
        onChange(event.target.value);
    };
    
    return (
        <div className="flex flex-col w-full gap-2">
            <label htmlFor="" className="font-semibold text-sm">
                {title}
            </label>
            <input
                type={type}
                value={value}
                onChange={handleChange}
                placeholder={`Enter your ${title}`}
                className="p-2 border bg-background text-slate-50 border-gray-300 rounded"
            />
        </div>
    );
}

FormInput.propTypes = {
    title: PropTypes.string,
    type: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
};
