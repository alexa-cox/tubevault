import '../../styles/components/Error.css';
const Error = ({ message, onRetry }) => {
  return (
    <div className='error-container'>
      <p className='error-message'>{message || 'Something went wrong'}</p>
      {onRetry && (
        <button
          className='error-action'
          onClick={onRetry}
        >
          Try Again
        </button>
      )}
    </div>
  );
};

export default Error;
