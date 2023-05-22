import { BsFillEyeFill } from 'react-icons/bs';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';

const MarkAsSeenBtn = ({ handleSeenMovie }) => {
  return (
    <>
      <BsFillEyeFill
        data-tooltip-id="my-tooltip"
        data-tooltip-content="Mark movie as seen"
        data-tooltip-place="bottom"
        onClick={() => handleSeenMovie()}
      />
      <Tooltip id="my-tooltip" />
    </>
  );
};

export default MarkAsSeenBtn;
