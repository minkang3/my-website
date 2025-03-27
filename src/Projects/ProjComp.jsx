import { useState } from 'react';

function ProjComp(props) {
  const [descVisible, setDescVisible] = useState(false);

  function Preview() {
    //return descVisible && (
    return (
        <div
          className={descVisible ? `
            absolute
            z-1000
            top-0
            left-0
            w-130
            text-left
            flex
            items-start
            transition-opacity
            duration-200
            visible
            opacity-100
            ` : `
            absolute
            z-1000
            top-0
            left-0
            w-140
            text-left
            flex
            items-start
            transition-opacity
            duration-200
            invisible
            opacity-0`
          }
        >
          <img 
            src={props.img}
            className={`
              h-40 mr-3 w-60 rounded-xl object-cover
              `} />
          <p className="desc leading-[1.3]"><div className="font-normal">{ props.projectName }</div>{ props.desc }</p>
        </div>
    );
  }

  return (
    <div className="relative"
    >
      <Preview />
      <p className="text-right"> 
        <span
          onMouseEnter={() => setDescVisible(true)}
          onMouseLeave={() => setDescVisible(false)}
          className="cursor-pointer text-white-700 hover:text-gray-500"
        >
          { props.projectName }
        </span>
      </p>
    </div>
  );
}

export default ProjComp;
