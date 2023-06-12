import { nanoid } from "nanoid";
import Image from "next/image";

export default function SkillsIcon(props) {
  return (
    <div className="group flex flex-col w-fit mx-4 my-1">
      <img
        className="bg-main rounded-2xl p-2 hover:shadow-lg hover:bg-opacity-100 hover:bg-mainHighlight duration-1000"
        width={64}
        height={64}
        alt={`${props.name}-logo`}
        src={`/icons/skills/${props.name}.png`}
      />

      <span className="group-hover:opacity-100 opacity-0 duration-1000 text-sm capitalize text-center">
        {props.name}
      </span>
    </div>
  );
}
