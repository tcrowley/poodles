import { useLocation } from "react-router-dom";

function NotFound() {
  const params = new URLSearchParams(useLocation().search);

  const getMessage = () => {
    let message: string;

    switch (params.get('code')) {
      case '500':
        message = 'Something unexpected happened.';
        break;
    
      default:
        message = 'Not found.';
        break;
    }

    return message;
  }

  return (
    <>
      { getMessage() }
    </>
  );
}

export default NotFound;