import PropTypes from 'prop-types';

export default function FormInput({
    title = '',
    type = 'text',
    value = '',
    onChange = () => {},
}) {
    return (
        <div className="flex flex-col w-full gap-2">
            <label htmlFor="" className="font-semibold text-sm">
                {title}
            </label>
            <input
                type={type}
                value={value}
                onChange={onChange}
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
