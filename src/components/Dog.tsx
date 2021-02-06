import React from 'react';
import { useParams } from 'react-router-dom';
import { Adult } from '../models/adult.model';
import adultsService from '../services/adults.service';
import BackSubNav from './BackSubNav';

function Dog() {
  const { id } = useParams<{ id: string; }>();
  const [dog, setDog] = React.useState< Adult | null >(null);

  const formatDate = (date) => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return date ? Intl.DateTimeFormat('en-us', options).format(new Date(date)) : '';
  }

  React.useEffect(() => {
    document.title = 'Pampered Poodles 4 U - Adult';
  });

  React.useEffect(() => {
    adultsService.getAdult(id).then(res => setDog(res));
  }, [id]);

  return (
      <>
        <BackSubNav />

        <h1 className="app-h1">{ dog?.fullName } ({ dog?.nickName })</h1>
        <p className="app-lead-paragraph">
          Our <span className="lowercase">{ dog?.color }</span> { dog?.sex === 'F' ? 'girl' : 'boy' } born { formatDate(dog?.dateOfBirth) }.
        </p>
      </>
  );
}

export default Dog;
