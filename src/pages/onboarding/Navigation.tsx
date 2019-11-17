import React from 'react';

const buttonStyles = {
  root: {
    position: 'absolute' as 'absolute',
    bottom: '7vh',
    color: '#5181b8'
  },
  inactive: {
    display: 'none'
  }
};

const Button : React.FC<{
    inactive: boolean;
    text: string;
    index: number;
    onClick: (
        event: React.MouseEvent<HTMLDivElement, MouseEvent>,
        index: number
    ) => void;
    style: React.CSSProperties;
  }> = ({
    inactive,
    text,
    index,
    onClick,
    style
}) => {
  return (
    <div
        style={
          inactive ? buttonStyles.inactive : {...buttonStyles.root, ...style}
        }
        onClick={event => onClick(event, index)}
    >
        {text}
    </div>
  );
};

const Navigation = ({
  length,
  active,
  onChangeIndex
}: {
  length: number;
  active: number;
  onChangeIndex: (index: number) => void;
}) => {
  return (
    <div>
        <Button
            style={{'left': '3vh'}}
            inactive={active === 0}
            text={'Back'}
            index={active-1}
            onClick={(event, index) => onChangeIndex(index)} >
        </Button>
        <Button
            style={{'right': '3vh'}}
            inactive={active === length-1}
            text={'Next'}
            index={active+1}
            onClick={(event, index) => onChangeIndex(index)} />
    </div>
  );
};

export default Navigation;
