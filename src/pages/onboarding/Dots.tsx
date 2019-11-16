import React from 'react';

const dotStyles = {
  root: {
    cursor: 'pointer',
    border: 0,
    background: 'none',
    padding: 0,
    outline: 'none'
  },
  dot: {
    backgroundColor: '#FFFFFF',
    height: 14,
    width: 14,
    borderRadius: '50%',
    margin: 3,
    border: '1px solid #C4C4C4',
    marginLeft: 22
  },
  active: {
    backgroundColor: '#C4C4C4'
  }
};

const Dot = ({
  active,
  index,
  onClick
}: {
  active: boolean;
  index: number;
  onClick: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    index: number
  ) => void;
}) => {
  return (
    <button
      type="button"
      style={dotStyles.root}
      onClick={event => onClick(event, index)}
    >
      <div
        style={
          active ? { ...dotStyles.dot, ...dotStyles.active } : dotStyles.dot
        }
      />
    </button>
  );
};

const Dots = ({
  length,
  active,
  onChangeIndex
}: {
  length: number;
  active: number;
  onChangeIndex: (index: number) => void;
}) => {
  return (
    <div
      style={{
        position: 'absolute',
        bottom: 50,
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
      }}
    >
      {new Array(length).fill(0).map((v, i) => (
        <Dot
          key={i}
          index={i}
          active={i === active}
          onClick={(event, index) => onChangeIndex(index)}
        />
      ))}
    </div>
  );
};

export default Dots;
