import Stream from "../models/Stream";
import { FC } from "react";
import StreamPane from "./StreamPane";

interface IStreamsProps {
  streams: Stream[];
}

const Streams: FC<IStreamsProps> = (props) => {
  return (
    <>
      {props.children}
      {props.streams &&
        props.streams.map((item) => <StreamPane {...item} key={item.id} />)}
    </>
  );
};

export default Streams;
