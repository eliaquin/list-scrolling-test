import React from 'react';
import data from './data.json';

const App = () => {
  const refs = data.reduce((acc, value) => {
    acc[value.id] = React.createRef();
    return acc;
  }, {});

  const renderData = () => {
    return data.map(el => <tr key={el.id} ref={refs[el.id]}>
      <td>{el.id}</td>
      <td>{el.first_name}</td>
      <td>{el.last_name}</td>
      <td>{el.email}</td>
      <td>{el.gender}</td>
    </tr>)
  }

  const handleClick = id =>
    refs[id].current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });

  return (
    <div>
      <ul style={styles.buttonContainer}>
        {data.map(item => (
          <span key={item.id} style={styles.idSpan}>
            <span
              type="button"
              onClick={() => handleClick(item.id)}
            >
              {item.id}
            </span>
          </span>
        ))}
      </ul>
      <div style={styles.scrollableContainer}>
        <table>
          <tbody>
            {renderData()}
          </tbody>
        </table>
      </div>
    </div>

  );
}

const styles = {
  scrollableContainer: {
    height: 500,
    width: 600,
    border: '1px solid gray',
    marginTop: 20,
    overflowX: 'hidden',
    overflowY: 'auto',
  },
  idSpan: {
    marginLeft: 6,
  },
  buttonContainer: {
    width: 500,
    display: 'flex',
    flexWrap: 'wrap',
    cursor: 'pointer',
  }
}

export default App;