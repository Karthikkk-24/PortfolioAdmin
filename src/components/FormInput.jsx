import PropTypes from 'prop-types';

export default function FormInput({
    title = '',
    type = 'text',
    value = '',
    onChange = () => {},
}) {
    const handleChange = (event) => {
        if (!event || !event.target) {
            console.error('Invalid event object');
            return;
        }

        if (type === 'file') {
            if (event.target.files && event.target.files.length > 0) {
                onChange(event.target.files[0]);
            }
        } else {
            onChange(event.target.value);
        }
    };

    return (
        <div className="flex flex-col w-full gap-2">
            <label htmlFor={title} className="font-semibold text-sm">
                {title}
            </label>
            <input
                id={title}
                type={type}
                onChange={handleChange}
                placeholder={
                    type === 'file' ? undefined : `Enter your ${title}`
                }
                className="p-2 border bg-background text-slate-50 border-gray-300 rounded"
                {...(type !== 'file' ? { value } : {})}
            />
        </div>
    );
}

FormInput.propTypes = {
    title: PropTypes.string,
    type: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    onChange: PropTypes.func,
};
